import System from "./system";

export default class Render extends System {
    constructor() {
        super("position", "shape");
        this.player;
    }

    setup() {
        this.player = entities.find((entity) => {
            return entity.name === "player";
        });
    }

    update() {
        this.clearCanvas();

        // Put player at the center of canvas
        ctx.save();
        ctx.translate(canvas.width / 2 - this.player.position.x, canvas.height / 2 - this.player.position.y);

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
        ctx.fillRect(-1000, -1000, 2000, 2000);

        for (let i = 0; i < 20; i++) {
            ctx.fillStyle = "#333";
            ctx.fillRect(-1000 + 2000 * i / 20 - 2, -1000, 4, 2000);
        }

        for (let i = 0; i < 20; i++) {
            ctx.fillStyle = "#333 ";
            ctx.fillRect(-1000, -1000 + 2000 * i / 20 - 2, 2000, 4);
        }
    }

    drawEntities() {
        entities.forEach((entity) => {
            // Draw if the entity has shape and position component
            if (entity.shape && entity.position) {
                ctx.save();

                // Rotate entity to mouse position
                if (entity.rotation) {
                    ctx.translate(entity.position.x, entity.position.y);
                    ctx.rotate(entity.rotation.angle);
                    ctx.translate(-entity.position.x, -entity.position.y);
                }

                // Draw entity according to their shape
                if (entity.shape.type === "rectangle") {
                    ctx.fillStyle = entity.shape.color;
                    ctx.fillRect(entity.position.x - entity.shape.width / 2, entity.position.y - entity.shape.height / 2, entity.shape.width, entity.shape.height)
                } else if (entity.shape.type === "circle") {
                    ctx.fillStyle = entity.shape.color;
                    ctx.beginPath();
                    ctx.ellipse(entity.position.x, entity.position.y, entity.shape.width, entity.shape.height, 0, 2 * Math.PI);
                    ctx.fill();
                } else if (entity.shape.type === "polygon") {

                }

                ctx.restore();
            }
        })
    }
}