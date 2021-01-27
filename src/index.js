import './index.scss';
import Game from './game';

// Make a full screen size canvas in html file
let canvas = document.createElement('canvas');
canvas.id = "canvas";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = "absolute";
document.body.appendChild(canvas);

// Create a global variable for access across all files
window.canvas = canvas;
window.ctx = canvas.getContext("2d");
window.entities = [];

// GAME START!
let game = new Game();
game.setup();

function start() {
    game.update();

    requestAnimationFrame(start);
}

requestAnimationFrame(start);