import Assemblage from "../assemblage/assemblage";
import System from "./system";

/**
 * Keep track of adding entities
 */
export default class Spawn extends System {
    constructor() {
        super();
        this.assemblage = new Assemblage();
    }

    update() {

    }

    setup() {
        // Add player
        entities.push(this.assemblage.createPlayer());

        // Add Enemy
        for(let i=0; i<10; i++) {
          entities.push(this.assemblage.createSimpleEnemy());
        }
        entities.push(this.assemblage.createSimpleEnemy());
        
    }
}