export default class Render {
  constructor(entities) {
    this.entities = entities;
    this.player;
  }

  setup() {
    this.player = this.entities["Player"];
  }

  update() {
    console.log("TODO: Use managers for entities array instead using entity. Will be looping through list of managers which in turn loop through entities that it handles. This will fix the forEach error below")
    this.clearCanvas();

    // Put player at the center of canvas
    ctx.save();
    ctx.translate(canvas.width/2 - this.player.position.x, canvas.height/2 - this.player.position.x);

    this.drawMap();
    this.drawEntities();

    ctx.restore();
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
    ctx.fillRect(-2000, -2000, 4000, 4000);
  }

  drawEntities() {
    this.entities.forEach((entity) => {
      // Draw if the entity has shape and position component
      if(entity.shape && entity.position) {
        if(entity.shape.type === "rectangle") {
          ctx.fillStyle = entity.shape.color;
          ctx.fillRect(entity.position.x, entity.position.y, entity.shape.width, entity.shape.height)
        } else if(entity.shape.type === "circle") {
          
        } else if(entity.shape.type === "polygon") {
          
        }
      }
    })
  }
}