class Zombie2 extends MovableObject{
    height = 80;
    width = 70;
    lifePoints = 1;
    dead = false;
    index;
    dyingCounter=0;
    world;

    IMAGES_WALK = [
        './img/enemy2/Walk/Zombie02_Walk_001.png',
        './img/enemy2/Walk/Zombie02_Walk_002.png',
        './img/enemy2/Walk/Zombie02_Walk_003.png',
        './img/enemy2/Walk/Zombie02_Walk_004.png',
        './img/enemy2/Walk/Zombie02_Walk_005.png',
        './img/enemy2/Walk/Zombie02_Walk_006.png',
        './img/enemy2/Walk/Zombie02_Walk_007.png',
        './img/enemy2/Walk/Zombie02_Walk_008.png',
        './img/enemy2/Walk/Zombie02_Walk_009.png',
        './img/enemy2/Walk/Zombie02_Walk_010.png',
        './img/enemy2/Walk/Zombie02_Walk_011.png',
        './img/enemy2/Walk/Zombie02_Walk_012.png',
        './img/enemy2/Walk/Zombie02_Walk_013.png',
        './img/enemy2/Walk/Zombie02_Walk_014.png',
        './img/enemy2/Walk/Zombie02_Walk_015.png'

    ];

    IMAGES_DYING = [
        './img/enemy2/Death/Zombie02_Death_011.png',
        './img/enemy2/Death/Zombie02_Death_012.png',
        './img/enemy2/Death/Zombie02_Death_013.png',
        './img/enemy2/Death/Zombie02_Death_014.png',
        './img/enemy2/Death/Zombie02_Death_015.png',
        './img/enemy2/Death/Zombie02_Death_016.png',
        './img/enemy2/Death/Zombie02_Death_017.png',
        './img/enemy2/Death/Zombie02_Death_018.png',
        './img/enemy2/Death/Zombie02_Death_019.png'
    ];

    dyingSound = new Audio('./audio/zombie-normal.mp3');


    constructor() {
        super().loadImage('./img/enemy2/Death/Zombie02_Death_019.png');
        this.x = 250 + Math.random() * 1400;
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_DYING);
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }


    animate() {

        setInterval(() => { 
            if (!this.dead) 
                this.moveLeft(); 
        }, 1000 / 10)

        setInterval(() => { 
            this.setVolume(); 
            if (this.isDead() && this.dyingCounter != 9  ) {
                this.playAnimation(this.IMAGES_DYING); 
                this.height = 80;
                this.width  = 120;
                this.dyingSound.play();
                this.dyingCounter++
                if (this.dyingCounter == 8)   
                    this.world.level.enemies.splice(this.index, 1);
            }else if(this.dead != true){
                this.playAnimation(this.IMAGES_WALK); 
            }
        }, 1000 / 11)
    }

    setVolume(){
        this.dyingSound.volume = world.volume;
    }
}