class Character extends MovableObject {
    y = 345;
    IMAGES_WALK = [
        '../img/Wraith_03/Walking/Wraith_03_Moving Forward_000.png',
        '../img/Wraith_03/Walking/Wraith_03_Moving Forward_001.png',
        '../img/Wraith_03/Walking/Wraith_03_Moving Forward_002.png',
        '../img/Wraith_03/Walking/Wraith_03_Moving Forward_003.png',
        '../img/Wraith_03/Walking/Wraith_03_Moving Forward_004.png',
        '../img/Wraith_03/Walking/Wraith_03_Moving Forward_005.png',
        '../img/Wraith_03/Walking/Wraith_03_Moving Forward_006.png',
        '../img/Wraith_03/Walking/Wraith_03_Moving Forward_007.png',
        '../img/Wraith_03/Walking/Wraith_03_Moving Forward_008.png',
        '../img/Wraith_03/Walking/Wraith_03_Moving Forward_009.png',
        '../img/Wraith_03/Walking/Wraith_03_Moving Forward_010.png',
        '../img/Wraith_03/Walking/Wraith_03_Moving Forward_011.png'
    ];

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
    ];
    world;
    speed = 5;


    constructor() {
        super().loadImage('../img/Wraith_03/Idle/Wraith_03_Idle_000.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_IDLE);
        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
            }

            if (this.world.keyboard.LEFT && this.x > 100) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x +100;
        }, 1000 / 60)

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                //walk animation
                let i = this.currentImage % this.IMAGES_WALK.length
                let path = this.IMAGES_WALK[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            } else {
                let i = this.currentImage % this.IMAGES_IDLE.length
                let path = this.IMAGES_IDLE[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 1000 / 11)
    }

    jump() {

    }
}