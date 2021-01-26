import Assemblage from "../assemblage/assemblage";

/**
 * Keeps track of adding & removing entities
 */
export default class Spawn {
    constructor(entities) {
        this.assemblage = new Assemblage();
        this.entities = entities;
    }

    update() {

    }

    setup() {
        // Add player
        this.entities.push(this.assemblage.createPlayer());
    }
}