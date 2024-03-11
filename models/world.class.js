class World {

    character = new Character();
    enemies = [
        new Zombie(),
        new Zombie(),
        new Zombie()
    ];
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }



    draw() {
        let offset = 0;
        this.enemies.forEach(zombie => {
            this.ctx.drawImage(zombie.img, zombie.x + offset, zombie.y, zombie.width, zombie.height)
            offset = offset + 50;
        });
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height)
    }
}