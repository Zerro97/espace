import System from "./system";

/**
 * Keep track of removing entities
 */
export default class Knockback extends System {
    constructor() {
        super();
    }

    update() {
        entities.forEach((entity) => {
            if (entity.knockback && entity.knockback.timerCur < entity.knockback.timerMax) {
                console.log("KNOCK BACK")
                entity.velocity.x = entity.knockback.x * entity.knockback.amount;
                entity.velocity.y = entity.knockback.y * entity.knockback.amount;
                entity.knockback.timerCur++;
                if (entity.knockback.timerCur === entity.knockback.timerMax) {
                    entity.velocity.x = 0;
                    entity.velocity.y = 0;
                }
            }
        })
    }
}