class Character extends MovableObject {
    y = 345;

    IMAGES_WALK = [
        './img/Wraith_03/Walking/Wraith_03_Moving Forward_000.png',
        './img/Wraith_03/Walking/Wraith_03_Moving Forward_001.png',
        './img/Wraith_03/Walking/Wraith_03_Moving Forward_002.png',
        './img/Wraith_03/Walking/Wraith_03_Moving Forward_003.png',
        './img/Wraith_03/Walking/Wraith_03_Moving Forward_004.png',
        './img/Wraith_03/Walking/Wraith_03_Moving Forward_005.png',
        './img/Wraith_03/Walking/Wraith_03_Moving Forward_006.png',
        './img/Wraith_03/Walking/Wraith_03_Moving Forward_007.png',
        './img/Wraith_03/Walking/Wraith_03_Moving Forward_008.png',
        './img/Wraith_03/Walking/Wraith_03_Moving Forward_009.png',
        './img/Wraith_03/Walking/Wraith_03_Moving Forward_010.png',
        './img/Wraith_03/Walking/Wraith_03_Moving Forward_011.png'
    ];

    IMAGES_IDLE = [
        './img/Wraith_03/Idle/Wraith_03_Idle_000.png',
        './img/Wraith_03/Idle/Wraith_03_Idle_001.png',
        './img/Wraith_03/Idle/Wraith_03_Idle_002.png',
        './img/Wraith_03/Idle/Wraith_03_Idle_003.png',
        './img/Wraith_03/Idle/Wraith_03_Idle_004.png',
        './img/Wraith_03/Idle/Wraith_03_Idle_005.png',
        './img/Wraith_03/Idle/Wraith_03_Idle_006.png',
        './img/Wraith_03/Idle/Wraith_03_Idle_007.png',
        './img/Wraith_03/Idle/Wraith_03_Idle_008.png',
        './img/Wraith_03/Idle/Wraith_03_Idle_009.png',
        './img/Wraith_03/Idle/Wraith_03_Idle_010.png',
        './img/Wraith_03/Idle/Wraith_03_Idle_011.png'
    ];

    IMAGES_JUMPING = [
        './img/Wraith_03/Taunt/Wraith_03_Taunt_000.png',
        './img/Wraith_03/Taunt/Wraith_03_Taunt_001.png',
        './img/Wraith_03/Taunt/Wraith_03_Taunt_002.png',
        './img/Wraith_03/Taunt/Wraith_03_Taunt_003.png',
        './img/Wraith_03/Taunt/Wraith_03_Taunt_004.png',
        './img/Wraith_03/Taunt/Wraith_03_Taunt_005.png',
        './img/Wraith_03/Taunt/Wraith_03_Taunt_006.png',
        './img/Wraith_03/Taunt/Wraith_03_Taunt_007.png',
        './img/Wraith_03/Taunt/Wraith_03_Taunt_008.png',
        './img/Wraith_03/Taunt/Wraith_03_Taunt_009.png',
        './img/Wraith_03/Taunt/Wraith_03_Taunt_010.png',
        './img/Wraith_03/Taunt/Wraith_03_Taunt_011.png',
        './img/Wraith_03/Taunt/Wraith_03_Taunt_012.png',
        './img/Wraith_03/Taunt/Wraith_03_Taunt_013.png',
        './img/Wraith_03/Taunt/Wraith_03_Taunt_014.png',
        './img/Wraith_03/Taunt/Wraith_03_Taunt_015.png',
        './img/Wraith_03/Taunt/Wraith_03_Taunt_016.png',
        './img/Wraith_03/Taunt/Wraith_03_Taunt_017.png'
    ]

    world;
    speed = 5;
    walking_sound = new Audio('./audio/running.mp3');

    constructor() {
        super().loadImage('./img/Wraith_03/Idle/Wraith_03_Idle_000.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_JUMPING);
        this.applyGravity();
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > 100) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 100;

            if (this.world.keyboard.UP && this.y >= 340) {
                this.speedY = 25
                console.log(this.y);
            }
        }, 1000 / 60)


        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                //walk animation
                this.playAnimation(this.IMAGES_WALK)
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                this.playAnimation(this.IMAGES_IDLE)
            }
        }, 1000 / 11)
    }

    jump() {

    }
}