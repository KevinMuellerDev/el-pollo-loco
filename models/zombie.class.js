class Zombie extends MovableObject{
    height = 80;
    width= 80;
    IMAGES_IDLE = [
        '../img/enemy/Attack/Zombie01_Attack_000.png',
        '../img/enemy/Attack/Zombie01_Attack_001.png',
        '../img/enemy/Attack/Zombie01_Attack_002.png',
        '../img/enemy/Attack/Zombie01_Attack_003.png',
        '../img/enemy/Attack/Zombie01_Attack_004.png',
        '../img/enemy/Attack/Zombie01_Attack_005.png',
        '../img/enemy/Attack/Zombie01_Attack_006.png',
        '../img/enemy/Attack/Zombie01_Attack_007.png',
        '../img/enemy/Attack/Zombie01_Attack_008.png',
        '../img/enemy/Attack/Zombie01_Attack_009.png',
        '../img/enemy/Attack/Zombie01_Attack_010.png',
        '../img/enemy/Attack/Zombie01_Attack_011.png',
        '../img/enemy/Attack/Zombie01_Attack_012.png',
        '../img/enemy/Attack/Zombie01_Attack_013.png',
        '../img/enemy/Attack/Zombie01_Attack_014.png',
        '../img/enemy/Attack/Zombie01_Attack_015.png',
        '../img/enemy/Attack/Zombie01_Attack_016.png',
        '../img/enemy/Attack/Zombie01_Attack_017.png',
        '../img/enemy/Attack/Zombie01_Attack_018.png',
        '../img/enemy/Attack/Zombie01_Attack_019.png'
    ]
    currentImage = 0;

    constructor(){
        super().loadImage('../img/enemy/Walk/Zombie01_Walk_000.png');
        this.x = 250 + Math.random() * 400;
        this.loadImages(this.IMAGES_IDLE);
        this.animate();
    }


    animate(){
        setInterval(()=> {
            let i = this.currentImage % this.IMAGES_IDLE.length
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        },1000/13)
    }


}