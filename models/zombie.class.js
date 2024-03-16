class Zombie extends MovableObject {
    height = 80;
    width = 80;

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
    ]


    constructor() {
        super().loadImage('./img/enemy/Walk/Zombie01_Walk_000.png');
        this.x = 250 + Math.random() * 400;
        this.loadImages(this.IMAGES_WALK);
        this.speed = 0.15 + Math.random() * 0.15;
        this.animate();
    }


    animate() {

        setInterval(() => { this.moveLeft(); }, 1000 / 60)
        setInterval(() => { this.playAnimation(this.IMAGES_WALK); }, 1000 / 11)
    }


}