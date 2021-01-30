import Assemblage from "../assemblage/assemblage";
import System from "./system";

/**
 * Keep track of removing entities
 */
export default class Despawn extends System {
    constructor() {
        super();
    }

    update() {
        console.log(entities);

        entities = entities.filter((entity) => {
            if (entity.health) {
                return entity.health.cur > 0;
            }

            // Check if bullet is out of map (must be checked before max collision)
            // TODO: Dynamic map size
            if (entity.projectile && entity.position) {
                return entity.position.x > -1000 && entity.position.x < 1000 && entity.position.y > -1000 && entity.position.y < 1000
            }

            // Check if bullet has reached maximum collision occurence
            if (entity.projectile) {
                return entity.projectile.collideCur > 0;
            }

            return true;
        })
    }
}