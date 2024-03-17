class Mana extends MovableObject{
    height = 50;
    width = 50;


    constructor(){
        super().loadImage('./img/spellpool/mana/mana.png');
        this.x = 250 + Math.random() * 1400;
    }
}