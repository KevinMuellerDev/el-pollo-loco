class Coin extends MovableObject{
    height = 40;
    width = 40;


    constructor(){
        super().loadImage('./img/objects/coin.png');
        this.x = 250 + Math.random() * 1400;
        this.y = 150 ;
    }
}