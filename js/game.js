let canvas;
let world;
let keyboard = new Keyboard()
let bgSound = new Audio('../audio/halloween-bg.mp3');

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

window.addEventListener('click', (event) => {
    if (event) {
        bgSound.play();
        bgSound.onended = (() => {
            bgSound.play();
        })
    }
})

window.addEventListener('keydown', (event) => {

    if (event.key == 'ArrowLeft') {
        keyboard.LEFT = true;
        console.log(keyboard.LEFT);
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
})

window.addEventListener('keyup', (event) => {

    if (event.key == 'ArrowLeft') {
        keyboard.LEFT = false;
        console.log(keyboard.LEFT);
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
})