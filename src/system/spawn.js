import Assemblage from "../assemblage/assemblage";

/**
 * Keeps track of adding & removing entities
 */
export default class Spawn {
    constructor() {
        this.assemblage = new Assemblage();
    }

    update() {

    }

    setup() {
        // Add player
        entities.push(this.assemblage.createPlayer());
    }
}