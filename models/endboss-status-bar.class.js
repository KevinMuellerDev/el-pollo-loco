class EndbossStatusBar extends DrawableObject {
    IMAGES = [
        './img/boss/lifepool/1.png',
        './img/boss/lifepool/2.png',
        './img/boss/lifepool/3.png',
        './img/boss/lifepool/4.png',
        './img/boss/lifepool/5.png',
        './img/boss/lifepool/6.png',
        './img/boss/lifepool/7.png',
        './img/boss/lifepool/8.png',
        './img/boss/lifepool/9.png',
    ];
    
    height = 25;
    width = 180;
    percentage = 40;

    constructor() {
        super().loadImages(this.IMAGES);
        this.x = 530;
        this.y = 50;
        this.setPercentage(40);
    }
    

    /**
     * sets percentage of given stat and resolves image Index
     * @param {number} percentage - number to set percentage
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    /**
     * resolves the image Index
     * @returns index of picture to be shown
     */
    resolveImageIndex() {
        if (this.percentage > 35) {
            return 8;
        } else if (this.percentage > 30) {
            return 7;
        } else if (this.percentage > 25) {
            return 6;
        } else if (this.percentage > 20) {
            return 5;
        } else if (this.percentage > 15) {
            return 4;
        } else if (this.percentage > 10) {
            return 3;
        } else if (this.percentage > 5) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else if (this.percentage == 0) {
            return 0;
        }
    }
}