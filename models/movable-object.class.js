class MovableObject {
    x = 120;
    y = 360;
    img;
    height = 120;
    width = 150;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 30)
    }


    isAboveGround() {
        return this.y < 340;
    }


    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    moveRight() {
        console.log('Moving Right')
    }


    moveLeft() {
        setInterval(() => { this.x -= this.speed; }, 1000 / 60)
    }


    playAnimation(images) {
        let i = this.currentImage % images.length
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}