import Assemblage from "../assemblage/assemblage";
import System from "./system";

/**
 * Keeps track of adding & removing entities
 */
export default class Despawn extends System {
    constructor() {
        super();
    }

    update() {
        entities = entities.filter((entity) => {
            if (entity.health) {
                return entity.health.cur > 0;
            }

            if (entity.destroyable) {

            }

            return true;
        })
    }
}