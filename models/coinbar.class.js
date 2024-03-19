class CoinBar extends DrawableObject{
    IMAGE = './img/objects/coin.png';
    height = 35;
    width = 35;

    constructor(){
        super().loadImage(this.IMAGE);
        this.x = 10;
        this.y = 75;
    }
}