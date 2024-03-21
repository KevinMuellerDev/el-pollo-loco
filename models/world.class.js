class World {

    character = new Character();
    level = level1;
    throwableObjects = [];
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    spellBar = new SpellBar();
    coinBar = new CoinBar();
    enemyHit = false;




    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();
    }


    setWorld() {
        this.character.world = this;
        this.throwableObjects.world = this;
        this.level.enemies.forEach(zombie => {
            zombie.world = this;
        });
    }


    run() {
        setInterval(() => {
            this.checkCollisionsEnemy();
            this.checkHitEnemy();
            this.checkShotEnemy();
            this.checkCollisionsMana();
            this.checkCollisionsCoin();
            this.checkThrowObjects();
        }, 125);

    }



    checkCollisionsEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround() && !enemy.dead) {
                if (!this.character.isHurt()) {
                    this.character.isHit();
                    this.character.isHurt();
                }
                this.character.isDead();
                this.statusBar.setPercentage(this.character.lifePoints);

            };
        });
    }

    checkHitEnemy() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy) && this.character.isHitEnemy(enemy) && this.character.isFalling() && !this.enemyHit) {
                enemy.index = index;
                enemy.lifePoints = 0;
                enemy.dead = true;
                this.enemyHit = true;
                setTimeout(() => {this.enemyHit=false}, 800);
            };
        });
    }

    checkShotEnemy() {
        this.level.enemies.forEach((enemy, index) => {
            this.throwableObjects.forEach((spell, indexSpell) => {
                if (spell.isColliding(enemy) && !this.enemyHit) {
                    enemy.index = index;
                    spell.index = indexSpell;
                    spell.explosion = true;
                    spell.spellExplosion.play();
                    if (!enemy.isHurt())
                        enemy.isHit();
                    if (enemy.isDead())
                        enemy.dead = true;
                    this.enemyHit = true;
                    setTimeout(() => {this.enemyHit=false}, 1000);
                };
            });
        });
    }


    checkCollisionsMana() {
        this.level.mana.forEach((mana, index) => {
            if (this.character.isColliding(mana) && this.character.manaPoints != 100) {
                this.character.manaPoints += this.character.manaCost;
                mana.collectSound.play();
                this.spellBar.setPercentage(this.character.manaPoints)
                this.level.mana.splice(index, 1)
            };
        });
    }

    checkCollisionsCoin() {
        this.level.coin.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.character.coins += 1;
                coin.collectSound.play();
                this.level.coin.splice(index, 1)
            };
        });
    }


    checkThrowObjects() {
        if (this.keyboard.D && !this.character.hasShot()) {
            let spell = new ThrowableObject(this.character.x + 50, this.character.y);
            if (this.character.manaPoints > 0) {
                this.checkBottleDirection(spell);
                this.character.attacking = true;
                spell.spellSound.play();
                this.throwableObjects.push(spell)
                this.character.manaPoints -= this.character.manaCost;
                this.character.isShotTimer();
                this.spellBar.setPercentage(this.character.manaPoints)
            }
        }
    }

    checkBottleDirection(spell) {
        if (this.character.otherDirection) {
            return spell.direction = true
        }
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Kamera wird mit verschoben und hinterher resettet damit sie nicht weiterläuft
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObject);
        this.addObjectsToMap(this.level.bat);
        this.addObjectsToMap(this.level.mana);
        this.addObjectsToMap(this.level.coin);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);

        // ------ space for fixed objects ------
        this.addToMap(this.statusBar);
        this.addToMap(this.spellBar);
        this.addToMap(this.coinBar);
        this.addTextToMap(this.character);


        // Erneuert permanent den Canvas über die Grafikkarte
        requestAnimationFrame(() => this.draw());
    }


    addObjectsToMap(objects) {
        objects.forEach(obj => {
            this.addToMap(obj);
        });
    }


    addToMap(movableObject) {
        if (movableObject.otherDirection)
            this.flipImage(movableObject);

        movableObject.drawFrame(this.ctx);
        movableObject.draw(this.ctx);

        if (movableObject.otherDirection)
            this.reverseFlipImage(movableObject);
    }

    addTextToMap(textObject) {
        textObject.drawText(this.ctx)
    }


    flipImage(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x * -1;
    }


    reverseFlipImage(movableObject) {
        movableObject.x = movableObject.x * -1;
        this.ctx.restore();
    }
}