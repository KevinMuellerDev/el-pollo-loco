class Character extends MovableObject {
    y = 345;
    IMAGES_IDLE = [
        '../img/Wraith_03/Idle/Wraith_03_Idle_000.png',
        '../img/Wraith_03/Idle/Wraith_03_Idle_001.png',
        '../img/Wraith_03/Idle/Wraith_03_Idle_002.png',
        '../img/Wraith_03/Idle/Wraith_03_Idle_003.png',
        '../img/Wraith_03/Idle/Wraith_03_Idle_004.png',
        '../img/Wraith_03/Idle/Wraith_03_Idle_005.png',
        '../img/Wraith_03/Idle/Wraith_03_Idle_006.png',
        '../img/Wraith_03/Idle/Wraith_03_Idle_007.png',
        '../img/Wraith_03/Idle/Wraith_03_Idle_008.png',
        '../img/Wraith_03/Idle/Wraith_03_Idle_009.png',
        '../img/Wraith_03/Idle/Wraith_03_Idle_010.png',
        '../img/Wraith_03/Idle/Wraith_03_Idle_011.png'
    ]
    currentImage = 0;

    constructor(){
        super().loadImage('../img/Wraith_03/Idle/Wraith_03_Idle_000.png');
        this.loadImages(this.IMAGES_IDLE);
        this.animate();
    }

    animate(){
        setInterval(()=> {
            let i = this.currentImage % this.IMAGES_IDLE.length
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        },1000/8.5)
    }

    jump() {

    }
}