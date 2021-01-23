import Movement from "./system/movement";
import Render from "./system/render";

export default class Game {
  constructor() {
    this.systems = [
      new Movement(),
      new Render()
    ];
  }

  update() {
    this.systems.forEach((system) => {
      system.update();
    })
  }
}