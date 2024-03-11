class Zombie extends MovableObject{

    constructor(){
        super().loadImage('../img/enemy/Walk/Zombie01_Walk_000.png');
        this.x = 250 + Math.random() * 400;
        this.height = 80;
        this.width= 80;
    }
}