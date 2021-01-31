import Player from "../assemblage/player"
import SimpleE from "../assemblage/simpleE"
import System from "./system";

/**
 * Keep track of adding entities
 */
export default class Spawn extends System {
    constructor() {
        super();
    }

    update() {

    }

    setup() {
        // Add player
        entities.push(Player());

        // Add Enemy
        for (let i = 0; i < 10; i++) {
            entities.push(SimpleE());
        }
    }
}