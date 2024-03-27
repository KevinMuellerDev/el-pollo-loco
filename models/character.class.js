class Character extends MovableObject {
    y = 345;
    offsetY = 35;
    offsetX = 50;
    lifePoints = 100;
    manaPoints = 100;
    manaCost = 12.5;
    idleBlinkCounter = 0;
    coins = 0;
    attacking = false;
    attackAniCounter = 0;
    dyingCounter = 0;
    world;
    speed = 5;
    walking_sound = new Audio('./audio/running.mp3');
    hurtSound = new Audio('./audio/player-hit.mp3');

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

    IMAGES_ATTACK = [
        './img/Wraith_03/Attacking/Wraith_03_Attack_000.png',
        './img/Wraith_03/Attacking/Wraith_03_Attack_001.png',
        './img/Wraith_03/Attacking/Wraith_03_Attack_002.png',
        './img/Wraith_03/Attacking/Wraith_03_Attack_003.png',
        './img/Wraith_03/Attacking/Wraith_03_Attack_004.png',
        './img/Wraith_03/Attacking/Wraith_03_Attack_005.png',
        './img/Wraith_03/Attacking/Wraith_03_Attack_006.png',
        './img/Wraith_03/Attacking/Wraith_03_Attack_007.png',
        './img/Wraith_03/Attacking/Wraith_03_Attack_008.png',
        './img/Wraith_03/Attacking/Wraith_03_Attack_009.png',
        './img/Wraith_03/Attacking/Wraith_03_Attack_010.png',
        './img/Wraith_03/Attacking/Wraith_03_Attack_011.png'
    ];


    constructor() {
        super().loadImage('./img/Wraith_03/Idle/Wraith_03_Idle_000.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_IDLE_BLINK);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.applyGravity();
        this.animate();
    }


    /**
     * animates character in canvas
     */
    animate() {
        this.actionInterval();
        this.animationInterval();
    }


    /**
     * handles action logic for the character
     */
    actionInterval(){
        setInterval(() => {
            this.setVolume();
            this.walking_sound.pause();
            this.characterMovement();
            this.world.camera_x = -this.x + 100;
            if (this.isReadyToJump())
                this.jump();
            if (this.coins === 7){
                this.manaCost = 0;
                this.coins = '∞ SP';
            }
        }, 1000 / 60)
    }


    /**
     * handles the animation logic for the character
     */
    animationInterval(){
        setInterval(() => {
            if (this.isDead() && this.dyingCounter != 10) {
                this.playAnimation(this.IMAGES_DYING)
                this.dyingCounter++
                if (this.dyingCounter == 9) 
                    this.world.gameEnd = true;
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT)
                this.hurtSound.play()
            } else if (this.isAttacking()) {
                this.playAnimation(this.IMAGES_ATTACK);
                this.attackAnimationCounter();
            } else {
                this.idleAnimationLogic();
            }
        }, 1000 / 11)
    }


    /**
     * îdle animation 
     */
    characterIdle() {
        if (this.idleBlinkCounter < 200) {
            this.playAnimation(this.IMAGES_IDLE);
            this.idleBlinkCounter++;
        } else {
            this.playAnimation(this.IMAGES_IDLE_BLINK)
        }
    }


    /**
     * handles the moving of the character
     */
    characterMovement() {
        if (this.isWalkingRight()) {
            this.moveRight();
            if (!this.isAboveGround())
                this.walking_sound.play();
        } else if (this.isWalkingLeft()) {
            this.moveLeft(true);
            if (!this.isAboveGround())
                this.walking_sound.play();
        }
    }


    /**
     * counter to interrupt the animation after 1 cycle
     */
    attackAnimationCounter() {
        this.attackAniCounter++
        if (this.attackAniCounter == 10) {
            this.attacking = false;
            this.attackAniCounter = 0;
        }
    }


    /**
     * handles and resets idle status of the character
     */
    idleAnimationLogic() {
        if (this.isWalkingOnGround()) {
            this.idleBlinkCounter = 0;
            this.playAnimation(this.IMAGES_WALK)

        } else if (this.isAboveGround()) {
            this.idleBlinkCounter = 0;
            this.playAnimation(this.IMAGES_JUMPING);

        } else {
            this.characterIdle();
        }
    }


    /**
     * sets the volume to world.volume
     */
    setVolume() {
        this.walking_sound.volume = this.world.volume;
        this.hurtSound.volume = this.world.volume;
    }


    /**
     * checks if character is moving right
     * @returns true if moving, false if not
     */
    isWalkingRight() {
        return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
    }


    /**
     * checks if character is moving left
     * @returns true if moving, false if not
     */
    isWalkingLeft() {
        return this.world.keyboard.LEFT && this.x > 100;
    }
    

    /**
     * checks if character is walking on ground
     * @returns true if on ground, false if not
     */
    isWalkingOnGround() {
        return this.world.keyboard.RIGHT && !this.isAboveGround() || this.world.keyboard.LEFT && !this.isAboveGround();
    }


    /**
     * checks if character is ready to jump
     * @returns true if yes, false if not
     */
    isReadyToJump() {
        return this.world.keyboard.SPACE && !this.isAboveGround();
    }


    /**
     * checks if character is attacking and the cycle isn't finished
     * @returns true if yes, false if not
     */
    isAttacking() {
        return this.attacking == true && this.attackAniCounter != 11;
    }


}