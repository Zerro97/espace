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
            if (entity.projectileType && entity.position) {
                if (entity.position.x < -1000 || entity.position.x > 1000 || entity.position.y < -1000 || entity.position.y > 1000) {
                    return false;
                }
            }

            // Check if player bullet has reached maximum collision occurence
            if (entity.projectileType && entity.projectileType.collideCur <= 0) {
                return false;
            }

            // Check if enemy bullet has reached maximum collision occurence
            if (entity.enemyProjectileType && entity.enemyProjectileType.collideCur <= 0) {
                return false;
            }

            return true;
        })
    }
}