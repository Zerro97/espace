import Movement from "./system/movement";
import Render from "./system/render";
import Spawn from "./system/spawn";
import Input from "./system/input"

export default class Game {
  constructor() {
    // List of entities used across different systems
    this.entities = {};

    // Sytems to update entities
    this.spawn = new Spawn(this.entities);
    this.movement = new Movement(this.entities);
    this.render = new Render(this.entities);

    // Order of systems are critical
    this.systems = [
      this.spawn,
      this.movement,
      this.render
    ];
  }

  // GAME LOOP
  update() {
    this.systems.forEach((system) => {
      system.update();
    })
  }

  // INITIAL SET UP
  setup() {
    Input.setup();
    this.spawn.setup();
    this.render.setup();
  }
}