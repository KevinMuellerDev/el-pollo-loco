class Endboss extends MovableObject {
    height = 270;
    width = 250;
    y = 170;
    offsetX = 10;
    x = 1800;
    lifePoints = 40;
    world;
    dead = false;
    index;
    dyingCounter = 0;
    rageCounter = 0;
    bossHit = new Audio('./audio/zombie-boss.mp3');
    bossRage = new Audio('./audio/boss-rage.mp3');
    startedMoving = false;


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
        './img/boss/Walk/Zombie4_Walk_015.png'
    ];


    IMAGES_DYING = [
        './img/boss/Death/Zombie4_Death_005.png',
        './img/boss/Death/Zombie4_Death_006.png',
        './img/boss/Death/Zombie4_Death_007.png',
        './img/boss/Death/Zombie4_Death_008.png',
        './img/boss/Death/Zombie4_Death_009.png',
        './img/boss/Death/Zombie4_Death_010.png',
        './img/boss/Death/Zombie4_Death_011.png',
        './img/boss/Death/Zombie4_Death_012.png',
        './img/boss/Death/Zombie4_Death_013.png',
        './img/boss/Death/Zombie4_Death_014.png',
        './img/boss/Death/Zombie4_Death_015.png'
    ];


    IMAGES_RAGE = [
        './img/boss/Attack/Zombie4_Attack_000.png',
        './img/boss/Attack/Zombie4_Attack_001.png',
        './img/boss/Attack/Zombie4_Attack_002.png',
        './img/boss/Attack/Zombie4_Attack_003.png',
        './img/boss/Attack/Zombie4_Attack_004.png',
        './img/boss/Attack/Zombie4_Attack_005.png',
        './img/boss/Attack/Zombie4_Attack_006.png',
        './img/boss/Attack/Zombie4_Attack_007.png',
        './img/boss/Attack/Zombie4_Attack_008.png',
        './img/boss/Attack/Zombie4_Attack_009.png',
        './img/boss/Attack/Zombie4_Attack_010.png',
        './img/boss/Attack/Zombie4_Attack_011.png',
        './img/boss/Attack/Zombie4_Attack_012.png',
        './img/boss/Attack/Zombie4_Attack_013.png',
        './img/boss/Attack/Zombie4_Attack_014.png',
        './img/boss/Attack/Zombie4_Attack_015.png'
    ];


    constructor() {
        super().loadImage('./img/boss/Walk/Zombie4_Walk_000.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_RAGE);
        this.speed = 0.5
        setTimeout(() => { this.animate() }, 1000);
    }


    animate() {
        this.intervalMovement();
        this.intervalAnimation();
    }


    intervalMovement(){
        setInterval(() => {
            if (this.startedMoving && this.dead != true) {
                this.moveLeft();
                this.startedMoving = true;
            }
            if (this.checkEndOfMap() && this.dead != true)
                this.world.level.level_end_x = this.x - (this.width / 2);
        }, 1000 / 60)
    }


    intervalAnimation(){
        setInterval(() => {
            this.setVolume();
            if (this.isDead() && this.dyingCounter != 11) {
                this.dyingBoss();
            } else if (this.isEnraged()) {
                this.rageMode();
            } else if (this.dead != true && this.startedMoving) {
                this.playAnimation(this.IMAGES_WALK);
            }
        }, 1000 / 11)
    }


    checkEndOfMap() {
        return this.x < this.world.level.level_end_x;
    }


    checkCharacterPosition() {
        return this.world.character.x >= 1400;
    }


    isEnraged() {
        return this.checkCharacterPosition() && this.rageCounter != 15
    }


    dyingBoss() {
        this.y = 220;
        this.width = 270;
        this.playAnimation(this.IMAGES_DYING);
        this.dyingCounter++
        if (this.dyingCounter == 11)
            this.world.level.enemies.splice(this.index, 1);
    }


    rageMode() {
        this.playAnimation(this.IMAGES_RAGE);
        this.width = 270;
        this.rageCounter++;
        this.bossRage.play();
        if (this.rageCounter == 15) {
            this.startedMoving = true;
            this.width = 250;
        }
    }

    setVolume(){
        this.bossHit.volume = this.world.volume;
        this.bossRage.volume = this.world.volume;
    }

}