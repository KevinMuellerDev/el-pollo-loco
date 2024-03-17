class ThrowableObject extends MovableObject {
    IMAGES_SPELL = [
        './img/spell/1.png',
        './img/spell/2.png',
        './img/spell/3.png',
        './img/spell/4.png',
    ];




    constructor(x, y) {
        super().loadImage('./img/spell/1.png');;
        this.x = x;
        this.y = y;
        this.height= 50;
        this.width = 50;
        this.throw()
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.D) {
                
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.D) {
                this.throw();
            }
        }, 1000 / 60);
    }

    throw() {
        this.speedY = 15;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
}