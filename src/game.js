import Movement from "./system/movement";
import Render from "./system/render";
import Spawn from "./system/spawn";

export default class Game {
  constructor() {
    // List of entities used across different systems
    this.entities = [];

    // Order of systems are critical
    this.systems = [
      new Spawn(this.entities),
      new Movement(this.entities),
      new Render(this.entities)
    ];
  }

  update() {
    this.systems.forEach((system) => {
      system.update();
    })
  }
}