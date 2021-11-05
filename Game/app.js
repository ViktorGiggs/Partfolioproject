let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d");
let shipImage = new Image()
shipImage.src = 'be.png'

ctx.fillStyle='black';
ctx.fillRect(0,0,canvas.width,canvas.height);

class Sprite {
    constructor(options) {
        this.ctx = options.ctx;

        this.image = options.image;

        this.width = options.width;
        this.height = options.height;
    }
}   

let sprite = new Sprite({
    ctx: canvas.getContext('2d'),
    image: shipImage,
    width: 1000,
    height: 100,
    numberOfFrames: 4,
    ticksPerFrame: 1,
})