let canvas;
let world;
let keyboard = new Keyboard()
let bgSound = new Audio('./audio/halloween-bg.mp3');

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


function toggleAudio(){
    if (world.volume== 0) {
        world.volume = 1;
        document.getElementById('sound-option').src = './img/menu/18.png'
    }else{
        world.volume = 0;
        document.getElementById('sound-option').src = './img/menu/18_mute.png'
    }
}

function toggleFullscreen(){
    if(canvas.webkitRequestFullScreen) {
        canvas.webkitRequestFullScreen();
    }
   else {
      canvas.mozRequestFullScreen();
   }     
}


window.addEventListener('click', (event) => {
    if (event) {
        bgSound.volume = world.volume;
        bgSound.play();
        bgSound.onended = (() => {
            bgSound.play();
        })
    }
})

window.addEventListener('keydown', (event) => {

    if (event.key == 'ArrowLeft') {
        keyboard.LEFT = true;

    }

    if (event.key == 'ArrowRight') {
        keyboard.RIGHT = true;
    }

    if (event.key == 'ArrowUp') {
        keyboard.UP = true;
    }

    if (event.key == 'ArrowDown') {
        keyboard.DOWN = true;
    }

    if (event.key == ' ') {
        keyboard.SPACE = true;
    }

    if (event.key == 'd') {
        keyboard.D = true;
        console.log(keyboard.D);
    }
})

window.addEventListener('keyup', (event) => {

    if (event.key == 'ArrowLeft') {
        keyboard.LEFT = false;
    }

    if (event.key == 'ArrowRight') {
        keyboard.RIGHT = false;
    }

    if (event.key == 'ArrowUp') {
        keyboard.UP = false;
    }

    if (event.key == 'ArrowDown') {
        keyboard.DOWN = false;
    }

    if (event.key == ' ') {
        keyboard.SPACE = false;
    }

    if (event.key == 'd') {
        keyboard.D = false;
        console.log(keyboard.D);
    }
})