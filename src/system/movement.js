import System from "./system";

export default class Movement extends System {
  constructor() {
    super(["keyInput", "position", "velocity", "slide"]);
    this.player = null;
  }

  setup() {
    this.player = entities.find((entity) => {
      return entity.name === "player";
    });
  }

  update() {
    // Update Velocity
    // Horizontal Movement
    if (this.player.slide.moveStatus.hor === 2) {
      this.player.velocity.x = 0;
    } else if (this.player.slide.moveStatus.hor === 1) {
      this.player.velocity.x -= this.player.acceleration.max;
      if (this.player.velocity.x <= -this.player.speed.max) {
        this.player.slide.moveStatus.hor = 0;
      } else if (this.player.velocity.x <= 0.05 && this.player.velocity.x >= -0.05) {
        this.player.slide.moveStatus.hor = 2;
      }
    } else if (this.player.slide.moveStatus.hor === 0) {
      this.player.velocity.x = -this.player.speed.max;
    } else if (this.player.slide.moveStatus.hor === 3) {
      this.player.velocity.x += this.player.acceleration.max;
      if (this.player.velocity.x >= this.player.speed.max) {
        this.player.slide.moveStatus.hor = 4;
      } else if (this.player.velocity.x <= 0.05 && this.player.velocity.x >= -0.05) {
        this.player.slide.moveStatus.hor = 2;
      }
    } else if (this.player.slide.moveStatus.hor === 4) {
      this.player.velocity.x = this.player.speed.max;
    }

    // Vertical Movement
    if (this.player.slide.moveStatus.ver === 2) {
      this.player.velocity.y = 0;
    } else if (this.player.slide.moveStatus.ver === 1) {
      this.player.velocity.y -= this.player.acceleration.max;
      if (this.player.velocity.y <= -this.player.speed.max) {
        this.player.slide.moveStatus.ver = 0;
      } else if (this.player.velocity.y <= 0.05 && this.player.velocity.y >= -0.05) {
        this.player.slide.moveStatus.ver = 2;
      }
    } else if (this.player.slide.moveStatus.ver === 0) {
      this.player.velocity.y = -this.player.speed.max;
    } else if (this.player.slide.moveStatus.ver === 3) {
      this.player.velocity.y += this.player.acceleration.max;
      if (this.player.velocity.y >= this.player.speed.max) {
        this.player.slide.moveStatus.ver = 4;
      } else if (this.player.velocity.y <= 0.05 && this.player.velocity.y >= -0.05) {
        this.player.slide.moveStatus.ver = 2;
      }
    } else if (this.player.slide.moveStatus.ver === 4) {
      this.player.velocity.y = this.player.speed.max;
    }

    // Update Position
    this.player.position.x += this.player.velocity.x;
    this.player.position.y += this.player.velocity.y;
  }
}