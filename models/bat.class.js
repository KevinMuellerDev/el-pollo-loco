class Bat extends MovableObject{
    width = 70;
    height = 30;

    constructor(){
        super().loadImage('../img/background/layers/newbat.png');

        this.x =  Math.random() * 500;
        this.y =  Math.random() * 150;
    }
}