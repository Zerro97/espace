import Player from "../assemblage/player";

/**
 * Keeps track of adding & removing entities
 */
export default class Spawn {
  constructor(entities) {
    this.entities = entities;
  }

  update() {
    // Add player
    if(this.entities.length === 0) {
      this.addPlayer();
    }
  }

  addPlayer() {
    let playerTwo = new Player();

    this.entities.push(playerTwo);
  }
}