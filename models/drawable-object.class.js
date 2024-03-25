class DrawableObject{
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 360;
    height = 120;
    width = 150;


    /**
     * creates a new image object with given path
     * @param {string} path - path of image as a string
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * creates new image objects with given paths as a string and pushes it into it's imageCache
     * @param {Array} arr - array that contains paths of images as a string
     */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    /**
     * function to draw the Object
     * @param {HTMLCanvasElement} ctx - context of the canvas
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }


    /**
     * function to draw text
     * @param {HTMLCanvasElement} ctx - context of the canvas
     */
    drawText(ctx){
        ctx.fillStyle = 'white'
        ctx.font = '38px sans-serif'
        ctx.fillText(this.coins, 100, 107)
    }


    /**
     * draws a box around Object with its given offsets
     * @param {HTMLCanvasElement} ctx - context of the canvas
     */
    drawFrame(ctx) {
        if (this.isInstanceOf()) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.rect(this.x + this.offsetX, this.y, this.width - this.offsetX*2, this.height - this.offsetY);
            ctx.stroke();
        }
    }


    /**
     * checks instance of the object
     * @returns true if instance of listed objects, false if not
     */
    isInstanceOf(){
        return this instanceof Character || this instanceof Zombie || this instanceof Zombie2 || this instanceof Endboss || this instanceof ThrowableObject;
    }
}