class BackgroundObject extends MovableObject{
    x = 0;
    y = 0;
    height = 480;
    width = 720;
    
    /**
     * @param {string} imagePath - imagePath as a string
     * @param {number} x - x-coordinate as a string 
     */
    constructor(imagePath,x){
        super().loadImage(imagePath);
        this.x = x;
    }
}