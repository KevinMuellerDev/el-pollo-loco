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



    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {
            this.checkCollisionsEnemy();
            this.checkHitEnemy();
            this.checkShotEnemy();
            this.checkCollisionsMana();
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
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.isHitEnemy(enemy) && this.character.isFalling()) {
                let index = this.level.enemies.indexOf(enemy);
                enemy.lifePoints = 0;
                enemy.dead = true;
                setTimeout(() => {
                    this.level.enemies.splice(index, 1);
                }, 1000);
            };
        });
    }

    checkShotEnemy() {
        this.level.enemies.forEach((enemy) => {
            this.throwableObjects.forEach((spell) => {
                if (spell.isColliding(enemy)) {
                    let index = this.level.enemies.indexOf(enemy)
                    if (!enemy.isHurt()) {
                        enemy.isHit();
                    }
                    if (enemy.lifePoints <= 0) {
                        enemy.dead = true;
                        setTimeout(() => {
                            this.level.enemies.splice(index, 1);
                        }, 1000);
                    }
                };
            });
        });
    }


    checkCollisionsMana() {
        this.level.mana.forEach((mana) => {
            if (this.character.isColliding(mana) && this.character.manaPoints != 100) {
                this.character.manaPoints += this.character.manaCost;
                this.spellBar.setPercentage(this.character.manaPoints)
                let index = this.level.mana.indexOf(mana);
                this.level.mana.splice(index, 1)
            };
        });
    }


    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y);
            if (this.character.manaPoints > 0) {
                this.throwableObjects.push(bottle)
                this.character.manaPoints -= this.character.manaCost;
                this.spellBar.setPercentage(this.character.manaPoints)
            }
        }
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Kamera wird mit verschoben und hinterher resettet damit sie nicht weiterläuft
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObject);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.bat);
        this.addObjectsToMap(this.level.mana);
        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);

        // ------ space for fixed objects ------
        this.addToMap(this.statusBar);
        this.addToMap(this.spellBar);

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

        /* movableObject.drawFrame(this.ctx); */
        movableObject.draw(this.ctx);

        if (movableObject.otherDirection)
            this.reverseFlipImage(movableObject);
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