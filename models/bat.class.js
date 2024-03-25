class Bat extends MovableObject {
    width = 70;
    height = 30;

    constructor() {
        super().loadImage('./img/background/layers/newbat.png');
        this.x = Math.random() * 1400;
        this.y = Math.random() * 150;
        this.animate();
    }

    /**
     * function to animate bats in canvas
     */
    animate() {
        setInterval(() => { this.moveLeft(); }, 1000 / 60)
    }

}