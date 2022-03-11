const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d"); //our settings

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particleArray = []; //the list of all sprites to be drawn on canvas
const maxSize = 200;

const donutImage = new Image();

class SpinningDonut {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.xMomentum = Math.random() * 15 - 7.5;
        this.yMomentum = Math.random() * 15 - 7.5;
        this.rotation = 0; //rotating around a circle
        this.opacity = 1; //0 completely transparent -> 1 completely visible
        this.size = Math.random() * 3;
        this.image = "./images/donut.png";
    }

    update() {
        this.rotation += 1;
        this.size -= 0.05;
        this.opacity -= 0.01;
        this.x += this.xMomentum;
        this.y += this.yMomentum;
    }

    draw() {
        context.save();
        context.globalAlpha = this.opacity;
        context.translate(this.x, this.y);
        context.rotate(Math.PI / 180 * this.rotation);
        donutImage.src = this.image;
        context.drawImage(donutImage, (-donutImage.width / 4) * this.size, (-donutImage.height / 4) * this.size, (donutImage.width / 2) * this.size, (donutImage.height / 2) * this.size);
        context.restore();
    }

}

function spawnSpinningDonut() {
    if (particleArray.length <= maxSize) {
        particleArray.push(new SpinningDonut());
        // console.log(particleArray);
    }
}

//start of animation
function init() {
    particleArray = [];
}

//what is happening in our animation
function animate() {
    requestAnimationFrame(animate);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particleArray.forEach(function (particle) {
        //update - function that updates the logic
        particle.update();
        //draw - function that draws our information
        particle.draw();
    });
    particleArray = particleArray.filter(function (particle) { //removes all elements for which the function returns false
        return particle.opacity >= 0.08 && particle.size >= .1;
    });



}

init();
animate();