import './index.scss';

const canvas = document.getElementById("menu__canvas");
const ctx = canvas.getContext('2d');

canvas.width = document.body.clientWidth; //document.width is obsolete
canvas.height = document.body.clientHeight; //document.height is obsolete

window.addEventListener("resize", (e) => {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
});

// Particles
let particles = [];
for(let i=0; i<400; i++) {
	particles.push({x: Math.random()*canvas.width, y: Math.random()*canvas.height, velx: Math.random()*2-1, vely: Math.random()*2-1});
}

function start() {
	ctx.fillStyle = "#0e172e";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	particles.forEach((particle) => {
		particle.x += particle.velx;
		particle.y += particle.vely;
		
		if(outOfCanvas(particle)) {
			particle.x = Math.random()*canvas.width;
			particle.y = Math.random()*canvas.height;
			particle.velx = Math.random()*2-1;
			particle.vely = Math.random()*2-1;
		}
		
		ctx.fillStyle = "#888";
		ctx.fillRect(particle.x, particle.y, 2, 2)
	})
	
	window.requestAnimationFrame(start);
}

window.requestAnimationFrame(start);

function outOfCanvas(particle) {
	if(particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
		return true;
	}
	return false;
}