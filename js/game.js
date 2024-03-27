let canvas;
let world;
let keyboard = new Keyboard();
let bgSound = new Audio('./audio/halloween-bg.mp3');
let startGame = false;



// Listen for resize changes
window.addEventListener("resize", function () {
    let orientationInfo = document.getElementById('landscape');
    if (checkOrientation()) {
        orientationInfo.classList.add('d-none');
    } else if (!checkOrientation() && window.innerWidth < 900) {
        orientationInfo.classList.remove('d-none');
    }
}, false);


function checkOrientation() {
    return (window.innerWidth > window.innerHeight);
}


function init() {
    canvas = document.getElementById('canvas');
    bgSound.volume = 0;
    touchControlLeftHand();
    touchControlRightHand();
}


function gameStart() {
    startGame = true;
    document.getElementById('startscreen').style.display = 'none';
    document.getElementById('fullscreen-option').style.display = 'block';
    document.getElementById('game-won').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    world = new World(canvas, keyboard);
}


function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}


function toggleAudio() {
    bgSound.play();
    if (startGame == false && bgSound.volume == 0) {
        bgSound.volume = 0.6;
        document.getElementById('sound-option').src = './img/menu/play-sound.png'
        return
    } else if (startGame == false && bgSound.volume == 0.6) {
        bgSound.volume = 0;
        document.getElementById('sound-option').src = './img/menu/mute-sound.png'
        return
    }
    if (world.volume == 0) {
        world.volume = 1;
        bgSound.volume = 0.6;
        document.getElementById('sound-option').src = './img/menu/play-sound.png'
    } else {
        world.volume = 0;
        bgSound.volume = 0;
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

function showInfo() {
    document.getElementById('info').style.display = 'flex';
    setTimeout(slideIn, 125);
}

function closeInfo() {
    document.getElementById('info').style.right = 'calc(-50% - 68px)';
    setTimeout(displayNone, 125);
}

function displayNone() {
    document.getElementById('info').style.display = 'none'
}

function slideIn() {
    document.getElementById('info').style.right = 'calc(25% - 34px)';
}


function touchControlLeftHand(){
    document.getElementById('button-left').addEventListener('touchstart', (e)=>{
        e.preventDefault();
        keyboard.LEFT = true;
    });
    document.getElementById('button-left').addEventListener('touchend', (e)=>{
        e.preventDefault();
        keyboard.LEFT = false;
    });
    document.getElementById('button-right').addEventListener('touchstart', (e)=>{
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    document.getElementById('button-right').addEventListener('touchend', (e)=>{
        e.preventDefault();
        keyboard.RIGHT = false;
    });
}


function touchControlRightHand(){
    document.getElementById('button-jump').addEventListener('touchstart', (e)=>{
        e.preventDefault();
        keyboard.SPACE = true;
    });
    document.getElementById('button-jump').addEventListener('touchend', (e)=>{
        e.preventDefault();
        keyboard.SPACE = false;
    });
    document.getElementById('button-attack').addEventListener('touchstart', (e)=>{
        e.preventDefault();
        keyboard.D = true;
    });
    document.getElementById('button-attack').addEventListener('touchend', (e)=>{
        e.preventDefault();
        keyboard.D = false;
    });
}


window.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowLeft') {
        keyboard.LEFT = true;
    }
    if (event.key == 'ArrowRight') {
        keyboard.RIGHT = true;
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
    if (event.key == ' ') {
        keyboard.SPACE = false;
    }
    if (event.key == 'd') {
        keyboard.D = false;
    }
})