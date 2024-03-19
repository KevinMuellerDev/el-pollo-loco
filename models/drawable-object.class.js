class DrawableObject{
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 360;
    height = 120;
    width = 150;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    drawText(ctx){
        ctx.fillStyle = 'white'
        ctx.font = '40px sans-serif'
        ctx.fillText(this.amount, 100, 107)
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Zombie || this instanceof Endboss || this instanceof ThrowableObject) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.rect(this.x + this.offsetX, this.y, this.width - this.offsetX*2, this.height - this.offsetY);
            ctx.stroke();

        }
    }
}