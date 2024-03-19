class Zombie extends MovableObject {
    height = 80;
    width = 70;
    lifePoints = 1;
    dead = false;
    index;
    dyingCounter=0;

    IMAGES_WALK = [
        './img/enemy/Walk/Zombie01_Walk_000.png',
        './img/enemy/Walk/Zombie01_Walk_001.png',
        './img/enemy/Walk/Zombie01_Walk_002.png',
        './img/enemy/Walk/Zombie01_Walk_003.png',
        './img/enemy/Walk/Zombie01_Walk_004.png',
        './img/enemy/Walk/Zombie01_Walk_005.png',
        './img/enemy/Walk/Zombie01_Walk_006.png',
        './img/enemy/Walk/Zombie01_Walk_007.png',
        './img/enemy/Walk/Zombie01_Walk_008.png',
        './img/enemy/Walk/Zombie01_Walk_009.png',
        './img/enemy/Walk/Zombie01_Walk_010.png',
        './img/enemy/Walk/Zombie01_Walk_011.png',
        './img/enemy/Walk/Zombie01_Walk_012.png',
        './img/enemy/Walk/Zombie01_Walk_013.png',
        './img/enemy/Walk/Zombie01_Walk_014.png',
        './img/enemy/Walk/Zombie01_Walk_015.png'
    ];

    IMAGES_DYING = [
        './img/enemy/Death/Zombie01_Death_003.png',
        './img/enemy/Death/Zombie01_Death_004.png',
        './img/enemy/Death/Zombie01_Death_005.png',
        './img/enemy/Death/Zombie01_Death_006.png',
        './img/enemy/Death/Zombie01_Death_007.png',
        './img/enemy/Death/Zombie01_Death_008.png',
        './img/enemy/Death/Zombie01_Death_009.png',
        './img/enemy/Death/Zombie01_Death_010.png',
        './img/enemy/Death/Zombie01_Death_011.png',
        './img/enemy/Death/Zombie01_Death_012.png',
        './img/enemy/Death/Zombie01_Death_013.png',
        './img/enemy/Death/Zombie01_Death_014.png',
        './img/enemy/Death/Zombie01_Death_015.png',
        './img/enemy/Death/Zombie01_Death_016.png',
        './img/enemy/Death/Zombie01_Death_017.png',
        './img/enemy/Death/Zombie01_Death_018.png',
        './img/enemy/Death/Zombie01_Death_019.png'
    ];


    constructor() {
        super().loadImage('./img/enemy/Walk/Zombie01_Walk_000.png');
        this.x = 250 + Math.random() * 1400;
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_DYING);
        this.speed = 0.15 + Math.random() * 0.15;
        this.animate();
    }


    animate() {

        //setInterval(() => { this.moveLeft(); }, 1000 / 60)

        setInterval(() => { 
            if (this.isDead() && this.dyingCounter != 11 ) {
                this.playAnimation(this.IMAGES_DYING); 
                this.height = 80;
                this.width  = 120;
                this.dyingCounter++
                if (this.dyingCounter == 11)  
                    this.world.level.enemies.splice(this.index, 1);
            }else if(this.dead != true){
                this.playAnimation(this.IMAGES_WALK); 
            }
        }, 1000 / 11)
    }


}