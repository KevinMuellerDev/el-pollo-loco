class ThrowableObject extends MovableObject {
    IMAGES_SPELL = [
        './img/spell/1.png',
        './img/spell/2.png',
        './img/spell/3.png',
        './img/spell/4.png',
    ];

    IMAGES_EXPLOSION = [
        './img/spell/explosion/1.png',
        './img/spell/explosion/2.png',
        './img/spell/explosion/3.png',
        './img/spell/explosion/4.png',
        './img/spell/explosion/5.png',
        './img/spell/explosion/6.png',
        './img/spell/explosion/7.png',
        './img/spell/explosion/8.png',
        './img/spell/explosion/9.png',
    ];

    direction = false;
    index;
    world;
    explosionCounter = 0;
    explosion = false;
    spellSound = new Audio('./audio/spell.mp3');
    spellExplosion = new Audio('./audio/spell-explosion.mp3');




    constructor(x, y) {
        super().loadImage('./img/spell/1.png');;
        this.loadImages(this.IMAGES_SPELL);
        this.loadImages(this.IMAGES_EXPLOSION);
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.throw()
    }

    throw() {
        this.speedY = 25;
        this.applyGravity();
        setInterval(() => {
            if (this.explosion == true && this.explosionCounter < 9) {
                this.speedY = 0;
                this.playAnimation(this.IMAGES_EXPLOSION);
                this.explosionCounter++
                if (this.explosionCounter == 8) {
                    this.explosion == false;
                    world.throwableObjects.splice(this.index, 1)
                }
            } else {
                if (this.direction == false) {
                    this.x += 10;
                } else {
                    this.x -= 10;
                }
                this.playAnimation(this.IMAGES_SPELL)
            }
        }, 25);
    }
}