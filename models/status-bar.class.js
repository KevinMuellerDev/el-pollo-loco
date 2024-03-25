class StatusBar extends DrawableObject {
    IMAGES = [
        './img/lifepool/life_0.png',
        './img/lifepool/life_1.png',
        './img/lifepool/life_2.png',
        './img/lifepool/life_3.png',
        './img/lifepool/life_4.png',
        './img/lifepool/life_5.png',
        './img/lifepool/life_6.png'
    ];
    height = 30;
    width = 180;
    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 10;
        this.y = 10;
        this.setPercentage(100);
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
        if (this.percentage > 83.33) {
            return 6;
        } else if (this.percentage > 66.67) {
            return 5;
        } else if (this.percentage > 50) {
            return 4;
        } else if (this.percentage > 33.33) {
            return 3;
        } else if (this.percentage > 16.67) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else if (this.percentage == 0) {
            return 0;
        }
    }
}