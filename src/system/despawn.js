import System from "./system";

/**
 * Keep track of removing entities
 */
export default class Despawn extends System {
    constructor() {
        super();
    }

    update() {
        // True: keep, False: Filter Out
        entities = entities.filter((entity) => {
            // Check if the health is 0 or below 
            if (entity.health && entity.health.cur <= 0) {
                return false;
            }

            // Check if bullet is out of map
            // TODO: Dynamic map size
            if (entity.projectile && entity.position) {
                if (entity.position.x < -1000 || entity.position.x > 1000 || entity.position.y < -1000 || entity.position.y > 1000) {
                    return false;
                }
            }

            // Check if bullet has reached maximum collision occurence
            if (entity.projectile && entity.projectile.collideCur <= 0) {
                return false;
            }

            return true;
        })
    }
}