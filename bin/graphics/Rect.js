class Rect {
    position;
    size;
    screenSize;
    constructor(position, size, screenSize) {
        this.position = position;
        this.size = size;
        this.screenSize = screenSize;
    }
    color = "#000000";
    ClearScreen;
    draw(ctx, ClearScreen = true) {
        ClearScreen = typeof ClearScreen == 'boolean' ? ClearScreen : true;
        ctx.fillStyle = this.color;
        if (ClearScreen)
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
}
export { Rect };