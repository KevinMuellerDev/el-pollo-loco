class MovableObject extends DrawableObject {
    offsetY = 0;
    offsetX = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    lifePoints = 100;
    lastHit = 0;
    shot = 0;
    characterHit = false;


    /**
     * applies gravity to an Object
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 30)
    }


    /**
     * checks if Object is above ground
     * @returns true if condition met, false if not
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 340;
        }
    }


    /**
     * checks if object is falling
     * @returns true if speed y is under 0, false if not
     */
    isFalling() {
        return this.speedY < 0
    }


    /**
     * checks if this. is colliding with given Object
     * @param {Object} obj - given Object
     * @returns true if is colliding, false if not
     */
    isColliding(obj) {
        return (this.x + this.width - this.offsetX) >= obj.x && this.x <= (obj.x + obj.width - this.offsetX) &&
            (this.y + this.offsetY + this.height) >= obj.y &&
            (this.y + this.offsetY) <= (obj.y + obj.height)

    }


    /**
     * checks if lifepoints are 0
     * @returns true if lifepoints equal 0, false if not
     */
    isDead() {
        return this.lifePoints == 0
    }


    /**
     * handles the lifepoints when hit
     * @param {Object} bossStatusBar - Boss Status Bar
     */
    isHit(bossStatusBar) {
        if (this instanceof Endboss) {
            this.bossIsHit(bossStatusBar);
        } else if(this instanceof Zombie || this instanceof Zombie2) {
            this.lifePoints -= 1;
        }else{
            this.lifePoints -= 17;
        }
        if (this.lifePoints <= 0) {
            this.lifePoints = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /**
     * handles the lifepoints when hit
     * @param {Object} bossStatusBar - Boss Status Bar Object
     */
    bossIsHit(bossStatusBar){
        this.lifePoints -= 5;
        bossStatusBar.setPercentage(this.lifePoints);
        this.bossHit.playbackRate = 2;
        this.bossHit.play();
    }


    /**
     * checks is enough time has gone since the last hit
     * @returns true if enough time passed, false if not
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000; // diff in secs
        return timepassed < 1;
    }


    /**
     * checks is enough time has gone since the last spell
     * @returns true if enough time passed, false if not
     */
    hasShot(){
        let timepassed = new Date().getTime() - this.shot;
        timepassed = timepassed / 1000; // diff in secs
        return timepassed < 1;
    }


    /**
     * sets the shot timer
     */
    isShotTimer(){
        this.shot = new Date().getTime();
    }


    /**
     * moves Object to the right
     */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }


    /**
     * moves object to the left
     * @param {Object} character - character object to check direction
     */
    moveLeft(character) {
        this.x -= this.speed;
        if (character === true)
            this.otherDirection = true;
    }


    /**
     * sets speedY to jump
     */
    jump() {
        this.speedY = 30
    }


    /**
     * animates the Object with given images
     * @param {Array} images - ImageCache of the Object
     */
    playAnimation(images) {
        let i = this.currentImage % images.length
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


}