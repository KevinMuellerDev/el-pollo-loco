class ThrowableObject extends MovableObject {
    IMAGES_SPELL = [
        './img/spell/1.png',
        './img/spell/2.png',
        './img/spell/3.png',
        './img/spell/4.png',
    ];

    direction = false;




    constructor(x, y) {
        super().loadImage('./img/spell/1.png');;
        this.loadImages(this.IMAGES_SPELL);
        this.x = x;
        this.y = y;
        this.height= 50;
        this.width = 50;
        this.throw()
    }

    throw() {
        this.speedY = 25;
        this.applyGravity();
        setInterval(() => {
            if (this.direction == false) {
                this.x += 10;
            }else{
                this.x -= 10;
            }

            this.playAnimation(this.IMAGES_SPELL)
        }, 25);
    }
}