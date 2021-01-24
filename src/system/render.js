export default class Render {
  constructor(entities) {
    this.entities = entities;
  }

  update() {
    this.clearCanvas();
    this.drawMap();
    this.drawEntities();
  }

  clearCanvas() {
    // Store the current transformation matrix
    ctx.save();

    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Restore the transform
    ctx.restore();
  }

  drawMap() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  drawEntities() {
    console.log(this.entities);
    this.entities.forEach((entity) => {
      // Draw if the entity has shape and position component
      if(entity.components.shape && entity.components.position) {
        if(entity.components.shape.type === "rectangle") {
          ctx.fillStyle = entity.components.shape.color;
          ctx.fillRect(entity.components.position.x, entity.components.position.y, entity.components.shape.width, entity.components.shape.height)
        } else if(entity.components.shape.type === "circle") {
          
        } else if(entity.components.shape.type === "polygon") {
          
        }
      }
    })
  }
}