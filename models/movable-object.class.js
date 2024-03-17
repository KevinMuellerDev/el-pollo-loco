class MovableObject extends DrawableObject {
    offsetY = 0;
    offsetX = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    lifePoints = 100;
    lastHit = 0;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 30)
    }


    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 340;
        }
    }


    isFalling(){
        return this.speedY < 0
    }

    
    isColliding(obj) {
        return (this.x + this.width - this.offsetX) >= obj.x && this.x <= (obj.x + obj.width - this.offsetX) &&
            (this.y + this.offsetY + this.height) >= obj.y &&
            (this.y + this.offsetY) <= (obj.y + obj.height) /* &&
            obj.onCollisionCourse; */ // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

    } 

    isHitEnemy(obj){
        return (this.y + this.height - this.offsetY) <= obj.y
    }


    isDead() {
        return this.lifePoints == 0
    }


    isHit() {
        this.lifePoints -= 1;
        if (this.lifePoints <= 0) {
            this.lifePoints = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000; // diff in secs
        return timepassed < 1;
    }


    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }


    moveLeft(character) {
        this.x -= this.speed;
        if (character === true)
            this.otherDirection = true;
    }


    jump() {
        this.speedY = 30
    }


    playAnimation(images) {
        let i = this.currentImage % images.length
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


}