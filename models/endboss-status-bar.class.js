class EndbossStatusBar extends DrawableObject {
    IMAGES = [
        './img/spellpool/spell_0.png',
        './img/spellpool/spell_1.png',
        './img/spellpool/spell_2.png',
        './img/spellpool/spell_3.png',
        './img/spellpool/spell_4.png',
        './img/spellpool/spell_5.png',
        './img/spellpool/spell_6.png',
        './img/spellpool/spell_7.png',
        './img/spellpool/spell_8.png'
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
    
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

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