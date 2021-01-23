export default class Render {
  update() {
    //this.clearCanvas();
    this.drawMap();
  }

  clearCanvas() {
    // Store the current transformation matrix
    ctx.save();

    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, window.width, window.height);

    // Restore the transform
    ctx.restore();
  }

  drawMap() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, window.width, window.height);
  }
}