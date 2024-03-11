class MovableObject {
    x = 120;
    y = 300;
    img;
    height = 120;
    width = 150;

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