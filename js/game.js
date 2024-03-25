let canvas;
let world;
let keyboard = new Keyboard();
let bgSound = new Audio('./audio/halloween-bg.mp3');
let startGame = false;

// Listen for resize changes
window.addEventListener("resize", function () {
    let orientationInfo = document.getElementById('landscape');
    if (checkOrientation() ) {
        console.log(window.innerWidth)
        orientationInfo.classList.add('d-none');
    } else if(!checkOrientation() && window.innerWidth < 900){
        orientationInfo.classList.remove('d-none');
    }
}, false);

function checkOrientation(){
    return (window.innerWidth > window.innerHeight);
}

function init() {
    canvas = document.getElementById('canvas');
}

function gameStart() {
    startGame = true;
    document.getElementById('startscreen').style.display = 'none';
    document.getElementById('fullscreen-option').style.display = 'block';
    world = new World(canvas, keyboard);
}

function toggleAudio() {
    if (startGame == false && bgSound.volume == 0) {
        bgSound.volume = 1;
        document.getElementById('sound-option').src = './img/menu/play-sound.png'
        return
    } else if (startGame == false && bgSound.volume == 1) {
        bgSound.volume = 0;
        document.getElementById('sound-option').src = './img/menu/mute-sound.png'
        return
    }
    if (world.volume == 0) {
        world.volume = 1;
        document.getElementById('sound-option').src = './img/menu/play-sound.png'
    } else {
        world.volume = 0;
        document.getElementById('sound-option').src = './img/menu/mute-sound.png'
    }
}

function toggleFullscreen() {
    if (canvas.webkitRequestFullScreen) {
        canvas.webkitRequestFullScreen();
    }
    else {
        canvas.mozRequestFullScreen();
    }
}


window.addEventListener('click', (event) => {
    if (event) {
        if (startGame == true)
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
    }
})