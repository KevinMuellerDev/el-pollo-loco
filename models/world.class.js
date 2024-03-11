class World {

    character = new Character();
    enemies = [
        new Zombie(),
        new Zombie(),
        new Zombie()
    ];
    bat = [
        new Bat(),
        new Bat(),
        new Bat(),
        new Bat(),
        new Bat(),
        new Bat()
    ];
    backgroundObject = [
        new BackgroundObject('../img/background/layers/1.png'),
        new BackgroundObject('../img/background/layers/2.png'),
        new BackgroundObject('../img/background/layers/3.png'),
        new BackgroundObject('../img/background/layers/4.png'),
        new BackgroundObject('../img/background/layers/5.png'),
        new BackgroundObject('../img/background/layers/6.png'),
        new BackgroundObject('../img/background/layers/7.png'),
        new BackgroundObject('../img/background/layers/8.png'),
        new BackgroundObject('../img/background/layers/9.png'),
    ];
    ctx;
    canvas;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }



    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundObject)
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.bat);
        this.addToMap(this.character);

        requestAnimationFrame(() => this.draw());
    }


    addObjectsToMap(objects){
        objects.forEach(obj => {
            this.addToMap(obj);
        });
    }


    addToMap(movableObject) {
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height)
    }
}