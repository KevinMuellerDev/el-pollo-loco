class Mana extends MovableObject{
    height = 50;
    width = 50;
    collectSound = new Audio('./audio/collect-mana.mp3');

    constructor(){
        super().loadImage('./img/spellpool/mana/mana.png');
        this.x = 250 + Math.random() * 1400;
        this.y = 380;
    }
}