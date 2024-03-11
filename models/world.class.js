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
        new Bat()
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


        this.enemies.forEach(zombie => {
            this.ctx.drawImage(zombie.img, zombie.x, zombie.y, zombie.width, zombie.height)
        });

        this.bat.forEach(bat => {
            this.ctx.drawImage(bat.img, bat.x, bat.y, bat.width, bat.height)
        });

        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height)

        requestAnimationFrame(() => this.draw());
    }
}