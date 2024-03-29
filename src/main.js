import './main.scss';
import '../assets/heart.png';
import Game from './game';

// Make a full screen size canvas in html file
let canvas = document.getElementById('canvas');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

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