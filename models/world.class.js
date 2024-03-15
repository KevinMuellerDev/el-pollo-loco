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
    }

    setWorld() {
        this.character.world = this;
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
        if (movableObject.otherDirection) {
            this.ctx.save();
            this.ctx.translate(movableObject.width, 0);
            this.ctx.scale(-1, 1);
            movableObject.x = movableObject.x * -1;
        }

        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height)

        if (movableObject.otherDirection) {
            movableObject.x = movableObject.x * -1;
            this.ctx.restore();
        }
    }
}