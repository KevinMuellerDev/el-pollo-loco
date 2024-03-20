class Endboss extends MovableObject {
    height = 250;
    width = 250;
    y = 190;
    offsetX = 10;
    x = 1800;
    lifePoints = 40;
    dead = false;
    index;
    dyingCounter = 0;
    bossHit = new Audio('./audio/zombie-boss.mp3');
    

    IMAGES_WALK = [
        './img/boss/Walk/Zombie4_Walk_000.png',
        './img/boss/Walk/Zombie4_Walk_001.png',
        './img/boss/Walk/Zombie4_Walk_002.png',
        './img/boss/Walk/Zombie4_Walk_003.png',
        './img/boss/Walk/Zombie4_Walk_004.png',
        './img/boss/Walk/Zombie4_Walk_005.png',
        './img/boss/Walk/Zombie4_Walk_006.png',
        './img/boss/Walk/Zombie4_Walk_007.png',
        './img/boss/Walk/Zombie4_Walk_008.png',
        './img/boss/Walk/Zombie4_Walk_009.png',
        './img/boss/Walk/Zombie4_Walk_010.png',
        './img/boss/Walk/Zombie4_Walk_011.png',
        './img/boss/Walk/Zombie4_Walk_012.png',
        './img/boss/Walk/Zombie4_Walk_013.png',
        './img/boss/Walk/Zombie4_Walk_014.png',
        './img/boss/Walk/Zombie4_Walk_015.png'
    ];

    IMAGES_DYING = [
        './img/boss/Death/Zombie4_Death_000.png',
        './img/boss/Death/Zombie4_Death_001.png',
        './img/boss/Death/Zombie4_Death_002.png',
        './img/boss/Death/Zombie4_Death_003.png',
        './img/boss/Death/Zombie4_Death_004.png',
        './img/boss/Death/Zombie4_Death_005.png',
        './img/boss/Death/Zombie4_Death_006.png',
        './img/boss/Death/Zombie4_Death_007.png',
        './img/boss/Death/Zombie4_Death_008.png',
        './img/boss/Death/Zombie4_Death_009.png',
        './img/boss/Death/Zombie4_Death_010.png',
        './img/boss/Death/Zombie4_Death_011.png',
        './img/boss/Death/Zombie4_Death_012.png',
        './img/boss/Death/Zombie4_Death_013.png',
        './img/boss/Death/Zombie4_Death_014.png',
        './img/boss/Death/Zombie4_Death_015.png'
    ];


    constructor() {
        super().loadImage('./img/boss/Death/Zombie4_Death_000.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_DYING);
        this.speed = 0.1 + Math.random() * 0.15;
        this.animate();
    }


    animate() {
        /* setInterval(() => { this.moveLeft(); }, 1000 / 60) */
        setInterval(() => {
            if (this.isDead() && this.dyingCounter != 15) {
                this.y = 220;
                this.playAnimation(this.IMAGES_DYING);
                this.dyingCounter++
                if (this.dyingCounter == 15)
                    this.world.level.enemies.splice(this.index, 1);
            } else if (this.dead != true) {
                this.playAnimation(this.IMAGES_WALK);
            }
        }, 1000 / 11)
    }



}