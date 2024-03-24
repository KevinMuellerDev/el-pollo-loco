class Coin extends MovableObject{
    height = 40;
    width = 40;
    collectSound = new Audio('./audio/collect-coin.mp3')
    world;


    constructor(world){
        super().loadImage('./img/objects/coin.png');
        this.x = 250 + Math.random() * 1400;
        this.y = 150 ;
    }
}