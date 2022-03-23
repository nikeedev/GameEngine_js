/** @type {HTMLCanvasElement} */
import { Size } from "./Size.js";

var xvel = 15; 
var yvel = 15;


class Player {
    constructor(x, y, size, screenWidth, screenHeight) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
    }
    color = "#000000";
    font = "20px Arial";
    draw(ctx) {
        ctx.font = this.font
        ctx.fillStyle = this.color;
        ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
    update(ctx, func, frames) {
        window.addEventListener('keydown', (evt) => {
            switch (evt.keyCode) {
                case 38:
                    this.y += -yvel;
                    break;
                case 40:
                    this.y += yvel;
                    break;
                case 37: 
                    this.x += -xvel;
                    break;
                case 39:  
                    this.x += xvel;
                    break;
            }
        },true);
        setInterval(() => {
            ctx.font = this.font
            ctx.fillStyle = this.color;
            func();
            ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }, frames);    
    }
    
}


export { Player }; 