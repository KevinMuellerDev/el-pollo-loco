class World {
    sounds;
    character = new Character();
    level;
    throwableObjects = [];
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    spellBar = new SpellBar();
    coinBar = new CoinBar();
    bossStatusBar = new EndbossStatusBar();
    enemyHit = false;
    endbossStartedMoving = false;
    gameStart = false;
    gameEnd = false;
    gameWon = false;
    gameID = 0;
    GAME_OVER = new Audio('./audio/game-over.mp3');
    GAME_WON = new Audio('./audio/game-cleared.mp3');
    volume = 0;



    /**
     * @param {HTMLCanvasElement} canvas - context of the canvas
     * @param {Object} keyboard - Keyboard Object
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        initLevel(this);
        this.level = level1;
        this.setWorld();
        this.draw();
        this.run();
    }


    /**
     * sets world parameter for character and enemies
     */
    setWorld() {
        this.character.world = this;
        this.level.enemies.forEach(zombie => {
            zombie.world = this;
        });
    }


    /**
     * runs all checks in regard of actions
     */
    run() {
        setInterval(() => {
            this.checkCollisionsEnemy();
            this.checkHitEnemy();
            this.checkShotEnemy();
            this.checkCollisionsMana();
            this.checkCollisionsCoin();
            this.checkThrowObjects();
            this.gameEnded();
        }, 125);
    }


    /**
     * checks if character is colliding with an enemy
     */
    checkCollisionsEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.isHurtFromCollision(enemy)) {
                if (!this.character.isHurt()) {
                    this.character.isHit();
                    this.character.isHurt();
                }
                this.character.isDead();
                this.statusBar.setPercentage(this.character.lifePoints);
            };
        });
    }


    /**
     * check if character has hit enemy from top
     */
    checkHitEnemy() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.isHurtFromXdirection(enemy)) {
                enemy.index = index;
                enemy.lifePoints = 0;
                enemy.dead = true;
                this.enemyHit = true;
                setTimeout(() => { this.enemyHit = false }, 800);
            };
        });
    }


    /**
     * if enemy is hit by a spell and damage calculation
     */
    checkShotEnemy() {
        this.level.enemies.forEach((enemy, index) => {
            this.throwableObjects.forEach((spell, indexSpell) => {
                if (spell.isColliding(enemy) && !this.enemyHit) {
                    this.enemyDamageCalculation(enemy, spell, index, indexSpell);
                    this.enemyHit = true;
                    setTimeout(() => { this.enemyHit = false }, 1000);
                };
            });
        });
    }


    /**
     * if player collides with mana he gains mana back if mana isn't 100 percent
     */
    checkCollisionsMana() {
        this.level.mana.forEach((mana, index) => {
            mana.collectSound.volume = this.volume;
            if (this.character.isColliding(mana) && this.character.manaPoints != 100) {
                this.character.manaPoints += this.character.manaCost;
                mana.collectSound.play();
                this.spellBar.setPercentage(this.character.manaPoints)
                this.level.mana.splice(index, 1)
            };
        });
    }


    /**
     * if player collides with coin he collects it
     */
    checkCollisionsCoin() {
        this.level.coin.forEach((coin, index) => {
            coin.collectSound.volume = this.volume;
            if (this.character.isColliding(coin)) {
                this.character.coins += 1;
                coin.collectSound.play();
                this.level.coin.splice(index, 1)
            };
        });
    }


    /**
     * shoots spell if able to
     */
    checkThrowObjects() {
        if (this.isAbleToShoot()) {
            let spell = new ThrowableObject(this.character.x + 50, this.character.y, this);
            if (this.character.manaPoints > 0) {
                this.shootSpell(spell);
            }
        }
    }


    /**
     * checks the direction in which the bottle should be thrown
     * @param {Object} spell - throwable Object 
     * @returns spell direction as boolean
     */
    checkBottleDirection(spell) {
        if (this.character.otherDirection) {
            return spell.direction = true
        }
    }


    /**
     * draws dynamic and fixed content to canvas and renews camera-x position
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.dynamicObjects();
        this.ctx.translate(-this.camera_x, 0);
        this.fixedObjects();
        this.gameID = requestAnimationFrame(() => this.draw());
    }


    /**
     * dynamically adds objects from an array
     * @param {Array} objects - An array of Objects
     */
    addObjectsToMap(objects) {
        objects.forEach(obj => {
            this.addToMap(obj);
        });
    }


    /**
     * draws given object to the map
     * @param {Object} movableObject - Object that should be drawn
     */
    addToMap(movableObject) {
        if (movableObject.otherDirection)
            this.flipImage(movableObject);
        movableObject.draw(this.ctx);
        if (movableObject.otherDirection)
            this.reverseFlipImage(movableObject);
    }


    /**
     * draws text on the map
     * @param {Object} textObject - text Object
     */
    addTextToMap(textObject) {
        textObject.drawText(this.ctx)
    }


    /**
     * flips Object in canvas vertically
     * @param {Object} movableObject - Object that should be flipped
     */
    flipImage(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x * -1;
    }


    /**
     * flips Object back to original state
     * @param {Object} movableObject - Object that should regain its normal state
     */
    reverseFlipImage(movableObject) {
        movableObject.x = movableObject.x * -1;
        this.ctx.restore();
    }


    /**
     * provides the damage calculation for enemys
     * @param {Object} enemy - Enemy Object
     * @param {Object} spell - Spell Object
     * @param {number} index - Index of the Enemy Object in Level array 
     * @param {number} indexSpell - Index of the Spell Object in throwableObjects array
     */
    enemyDamageCalculation(enemy, spell, index, indexSpell) {
        enemy.index = index;
        spell.index = indexSpell;
        spell.explosion = true;
        spell.spellExplosion.play();
        if (!enemy.isHurt())
            enemy.isHit(this.bossStatusBar);
        if (enemy.isDead())
            enemy.dead = true;
    }


    /**
     * handles the shooting of the spell and the spellbar
     * @param {Object} spell - Spell Object
     */
    shootSpell(spell) {
        this.checkBottleDirection(spell);
        this.character.attacking = true;
        spell.spellSound.play();
        this.throwableObjects.push(spell)
        this.character.manaPoints -= this.character.manaCost;
        this.character.isShotTimer();
        this.spellBar.setPercentage(this.character.manaPoints)
    }


    /**
     * handles drawing of arrays of moving Objects
     */
    dynamicObjects() {
        this.addObjectsToMap(this.level.backgroundObject);
        this.addObjectsToMap(this.level.bat);
        this.addObjectsToMap(this.level.mana);
        this.addObjectsToMap(this.level.coin);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);
    }


    /**
     * handles drawing of static Objects
     */
    fixedObjects() {
        this.addToMap(this.statusBar);
        this.addToMap(this.spellBar);
        this.addToMap(this.coinBar);
        if (this.character.x >= 1400 || this.endbossStartedMoving == true) {
            this.addToMap(this.bossStatusBar);
            this.endbossStartedMoving = true;
        }
        this.addTextToMap(this.character);
    }



    /**
     * handles the logic for end of the game
     */
    gameEnded(){
        if (this.gameEnd === true) {
            clearAllIntervals();
            cancelAnimationFrame(this.gameID);
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            document.getElementById('startscreen').style.display = 'flex';
            document.getElementById('fullscreen-option').style.display = 'none';   
            if (this.gameWon === true) {
                this.gameWonDisplay();
            } else{
                this.gameOverDisplay();
            }
        }
    }


    /**
     * displays the information when game is won
     */
    gameWonDisplay(){
        document.getElementById('game-won').style.display = 'block';  
        this.GAME_WON.volume = this.volume;
        this.GAME_WON.play();
    }


    /**
     * displays information when died
     */
    gameOverDisplay(){
        document.getElementById('game-over').style.display = 'block';  
        this.GAME_OVER.volume = this.volume;
        this.GAME_OVER.play();
    }


    /**
     * checks if character has been hit by an enemy
     * @param {Object} enemy - collided enemy
     * @returns true if hit by enemy, false if not
     */
    isHurtFromCollision(enemy) {
        return this.character.isColliding(enemy) && !this.character.isAboveGround() && !enemy.dead;
    }


    /**
     * checks if character has been hit in x-direction
     * @param {Object} enemy - collided enemy
     * @returns true if character collides in x-direction, false if not
     */
    isHurtFromXdirection(enemy) {
        return this.character.isColliding(enemy) && this.character.isAboveGround() && this.character.isFalling() &&
            !this.enemyHit && !(enemy instanceof Endboss);
    }


    /**
     * checks if character is able to shoot
     * @returns true if character is able to shoot, false if not
     */
    isAbleToShoot() {
        return this.keyboard.D && !this.character.hasShot()
    }

}
