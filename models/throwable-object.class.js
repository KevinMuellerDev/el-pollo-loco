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



/**
 * @param {number} x - given x coordinate
 * @param {number} y - given y coordinate
 * @param {Object} world - extends World Object
 */
    constructor(x, y, world) {
        super().loadImage('./img/spell/1.png');;
        this.loadImages(this.IMAGES_SPELL);
        this.loadImages(this.IMAGES_EXPLOSION);
        this.world = world;
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.throw()
    }


    /**
     * sets conditions and throws spell
     */
    throw() {
        this.speedY = 25;
        this.applyGravity();
        setInterval(() => {
            this.setVolume();
            if (this.isExploding()) {
                this.explosionAnimation();
            } else {
                this.spellDirection();
                this.playAnimation(this.IMAGES_SPELL)
            }
        }, 25);
    }


    /**
     * checks if spell has hit
     * @returns true if spell hit, false if not
     */
    isExploding() {
        return this.explosion == true && this.explosionCounter < 9;
    }


    /**
     * checks the direction of the spell
     */
    spellDirection() {
        if (this.direction == false) {
            this.x += 10;
        } else {
            this.x -= 10;
        }
    }

    /**
     * handles the animation of the spell
     */
    explosionAnimation() {
        this.speedY = 0;
        this.playAnimation(this.IMAGES_EXPLOSION);
        this.explosionCounter++
        if (this.explosionCounter == 8) {
            this.explosion == false;
            world.throwableObjects.splice(this.index, 1)
        }
    }

    /**
     * sets volume to world.volume
     */
    setVolume() {
        this.spellExplosion.volume = this.world.volume;
        this.spellSound.volume = this.world.volume;
    }
}