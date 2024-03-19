class Character extends MovableObject {
    y = 345;
    offsetY = 30; 
    offsetX = 50;
    lifePoints = 100;
    manaPoints = 100;
    manaCost = 12.5;
    idleBlinkCounter = 0;
    coins = 0;

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

    IMAGES_IDLE_BLINK = [
        './img/Wraith_03/Idle_Blink/Wraith_03_Idle Blinking_000.png',
        './img/Wraith_03/Idle_Blink/Wraith_03_Idle Blinking_001.png',
        './img/Wraith_03/Idle_Blink/Wraith_03_Idle Blinking_002.png',
        './img/Wraith_03/Idle_Blink/Wraith_03_Idle Blinking_003.png',
        './img/Wraith_03/Idle_Blink/Wraith_03_Idle Blinking_004.png',
        './img/Wraith_03/Idle_Blink/Wraith_03_Idle Blinking_005.png',
        './img/Wraith_03/Idle_Blink/Wraith_03_Idle Blinking_006.png',
        './img/Wraith_03/Idle_Blink/Wraith_03_Idle Blinking_007.png',
        './img/Wraith_03/Idle_Blink/Wraith_03_Idle Blinking_008.png',
        './img/Wraith_03/Idle_Blink/Wraith_03_Idle Blinking_009.png',
        './img/Wraith_03/Idle_Blink/Wraith_03_Idle Blinking_010.png',
        './img/Wraith_03/Idle_Blink/Wraith_03_Idle Blinking_011.png'
    ]

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
    ];

    IMAGES_DYING = [
        './img/Wraith_03/Dying/Wraith_03_Dying_000.png',
        './img/Wraith_03/Dying/Wraith_03_Dying_001.png',
        './img/Wraith_03/Dying/Wraith_03_Dying_002.png',
        './img/Wraith_03/Dying/Wraith_03_Dying_003.png',
        './img/Wraith_03/Dying/Wraith_03_Dying_004.png',
        './img/Wraith_03/Dying/Wraith_03_Dying_005.png',
        './img/Wraith_03/Dying/Wraith_03_Dying_006.png',
        './img/Wraith_03/Dying/Wraith_03_Dying_007.png',
        './img/Wraith_03/Dying/Wraith_03_Dying_008.png',
        './img/Wraith_03/Dying/Wraith_03_Dying_009.png',
        './img/Wraith_03/Dying/Wraith_03_Dying_010.png',
        './img/Wraith_03/Dying/Wraith_03_Dying_011.png',
        './img/Wraith_03/Dying/Wraith_03_Dying_012.png',
        './img/Wraith_03/Dying/Wraith_03_Dying_013.png',
        './img/Wraith_03/Dying/Wraith_03_Dying_014.png'
    ];

    IMAGES_HURT = [
        './img/Wraith_03/Hurt/Wraith_03_Hurt_000.png',
        './img/Wraith_03/Hurt/Wraith_03_Hurt_001.png',
        './img/Wraith_03/Hurt/Wraith_03_Hurt_002.png',
        './img/Wraith_03/Hurt/Wraith_03_Hurt_003.png',
        './img/Wraith_03/Hurt/Wraith_03_Hurt_004.png',
        './img/Wraith_03/Hurt/Wraith_03_Hurt_005.png',
        './img/Wraith_03/Hurt/Wraith_03_Hurt_006.png',
        './img/Wraith_03/Hurt/Wraith_03_Hurt_007.png',
        './img/Wraith_03/Hurt/Wraith_03_Hurt_008.png',
        './img/Wraith_03/Hurt/Wraith_03_Hurt_009.png',
        './img/Wraith_03/Hurt/Wraith_03_Hurt_010.png',
        './img/Wraith_03/Hurt/Wraith_03_Hurt_011.png',
    ];

    world;
    speed = 5;
    walking_sound = new Audio('./audio/running.mp3');

    constructor() {
        super().loadImage('./img/Wraith_03/Idle/Wraith_03_Idle_000.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_IDLE_BLINK);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.walking_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > 100) {
                this.moveLeft(true);
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 100;

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }
        }, 1000 / 60)


        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DYING)

            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT)

            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.idleBlinkCounter = 0;
                    this.playAnimation(this.IMAGES_WALK)

                } else if (this.isAboveGround()) {
                    this.idleBlinkCounter = 0;
                    this.playAnimation(this.IMAGES_JUMPING);

                } else {
                    this.characterIdle();
                }
            }
        }, 1000 / 11)
    }

    characterIdle(){
        if (this.idleBlinkCounter <200) {
            this.playAnimation(this.IMAGES_IDLE);
            this.idleBlinkCounter++;
        } else{
            this.playAnimation(this.IMAGES_IDLE_BLINK)
        }
    }



}