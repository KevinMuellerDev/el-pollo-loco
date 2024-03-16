class World {

    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;



    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollision();
    }

    setWorld() {
        this.character.world = this;
    }

    checkCollision() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.lifePoints -= 5;
                    this.character.isDead();
                    console.log(this.character.lifePoints);
                };
            });
        }, 200);
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Kamera wird mit verschoben und hinterher resettet damit sie nicht weiterläuft
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObject);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.bat);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);

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