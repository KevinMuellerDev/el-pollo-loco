class MovableObject extends World {
    x = 120;
    y = 400;
    img;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving Right')
    }

    moveLeft() {
        console.log('Moving Left')
    }
}