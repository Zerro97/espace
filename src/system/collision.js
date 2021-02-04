import System from "./system";

export default class Collision extends System {
    constructor() {
        super();
    }

    update() {
        entities.forEach((entity) => {
            // Do collision check for player projectile
            if (entity.projectileType) {
                this.checkProjectile(entity);
            }

            // Do collision check for enemy projectile
            if (entity.enemyProjectileType) {
                this.checkEnemyProjectile(entity);
            }

            // Do collision check for enemy
            if (entity.enemyType) {
                this.checkEnemy(entity);
            }
        })
    }

    checkProjectile(projectile) {
        // Get enemy entities
        // Used some instead of foreach to break out of loop
        entities.some((entity) => {
            if (entity.enemyType) {
                if (entity.shape.type === "rectangle") {
                    // Return will break out of the loop
                    return this.checkRectCollision(projectile, entity);
                }
            }
        })
    }

    checkEnemyProjectile(projectile) {
        // Get enemy entities
        // Used some instead of foreach to break out of loop
        entities.some((entity) => {
            if (entity.playerType) {
                if (entity.shape.type === "rectangle") {
                    // Return will break out of the loop
                    return this.checkRectCollision(projectile, entity);
                }
            }
        })
    }

    checkEnemy(enemy) {
        // Get player entity
        entities.some((entity) => {
            if (entity.playerType) {
                if (entity.shape.type === "rectangle") {
                    // Return will break out of the loop
                    return this.checkRectCollision(enemy, entity);
                }
            }
        })
    }

    // TODO : currently depends on order of parameter
    /**
     * 
     * @param {*} entity1: Entity that hits the other entity
     * @param {*} entity2: Entity that gets knocked back 
     */
    checkRectCollision(entity1, entity2) {
        let dx1 = (entity1.position.x + entity1.shape.width / 2) - (entity2.position.x - entity2.shape.width / 2);
        let dx2 = (entity2.position.x + entity2.shape.width / 2) - (entity1.position.x - entity1.shape.width / 2);

        let dy1 = (entity1.position.y + entity1.shape.height / 2) - (entity2.position.y - entity2.shape.height / 2);
        let dy2 = (entity2.position.y + entity2.shape.height / 2) - (entity1.position.y - entity1.shape.height / 2);

        // If there is collision between two entities
        if (dx1 > 0 && dy1 > 0 && dx2 > 0 && dy2 > 0) {
            // If the entity has invisibility counter
            if (entity2.invisibility && !entity2.invisibility.invisible) {
                // This initiates timer in invisible system
                entity2.invisibility.cur = 0;
                entity2.invisibility.invisible = true;
                entity2.health.cur -= entity1.damage.amount;
            }

            if (!entity2.invisibility) {
                entity2.health.cur -= entity1.damage.amount;
            }


            // If entity has knockback component
            if (entity2.knockback) {
                entity2.knockback.timerCur = 0;

                entity2.knockback.x = entity1.velocity.x / entity1.speed.max;
                entity2.knockback.y = entity1.velocity.y / entity1.speed.max;
            }


            if (entity1.projectileType) {
                entity1.projectileType.collideCur -= 1;
            }

            if (entity1.enemyProjectileType) {
                entity1.enemyProjectileType.collideCur -= 1;
            }

            if (entity1.enemyType) {
                return true;
            }
        }

        if (entity1.projectileType && entity1.projectileType.collideCur <= 0) {
            // Break out of loop if it hit one enemy
            return true;
        }

        if (entity1.enemyProjectileType && entity1.enemyProjectileType.collideCur <= 0) {
            // Break out of loop if it hit one enemy
            return true;
        }
    }
}