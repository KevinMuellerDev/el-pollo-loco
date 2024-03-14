class Endboss extends MovableObject{
    height = 250;
    width= 250;
    y = 190;
    
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
        './img/boss/Walk/Zombie4_Walk_015.png',

    ]


    constructor(){
        super().loadImage('./img/boss/Walk/Zombie4_Walk_000.png');
        this.x = 700;
        this.loadImages(this.IMAGES_WALK);
        this.speed = 0.1 + Math.random() * 0.15;
        this.animate();
    }


    animate(){
        this.moveLeft();
        setInterval(()=> {
            this.playAnimation(this.IMAGES_WALK)
        },1000/11)
    }



}