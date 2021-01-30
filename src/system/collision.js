import System from "./system";

export default class Collision extends System {
    constructor() {
        super();
    }

    update() {
        entities.forEach((entity) => {
            // Do collision check for projectile
            if (entity.projectile) {
                this.checkProjectile(entity);
            }

            // Do collision check for enemy
            if (entity.enemy) {
              this.checkEnemy(entity);
            }
        })
    }

    checkProjectile(projectile) {
      // Get enemy entities
      // Used some instead of foreach to break out of loop
      entities.some((entity) => {
        if (entity.enemy) {
          if (entity.shape.type === "rectangle") {
            // Return will break out of the loop
            return this.checkRectCollision(projectile, entity);
          }
        }
      })
    }

    checkEnemy(enemy) {
      // Get player entity
      entities.forEach((entity) => {
        if (entity.player) {
          if (entity.shape.type === "rectangle") {
          
          }
        }
      })
    }

    // TODO : currently depends on projectile, change it to allow enemy collision too
    checkRectCollision(entity1, entity2) {
      let dx1 = (entity1.position.x + entity1.shape.width/2) - (entity2.position.x - entity2.shape.width/2);
      let dx2 = (entity2.position.x + entity2.shape.width/2) - (entity1.position.x - entity1.shape.width/2);

      let dy1 = (entity1.position.y + entity1.shape.height/2) - (entity2.position.y - entity2.shape.height/2);
      let dy2 = (entity2.position.y + entity2.shape.height/2) - (entity1.position.y - entity1.shape.height/2);

      // If there is collision between projectile and enemy
      if (dx1 > 0 && dy1 > 0 && dx2 > 0 && dy2 > 0) {
        entity2.health.cur -= entity1.damage.amount;
        entity2.knockback.timerCur = 0;

        entity2.knockback.x = entity1.velocity.x/entity1.speed.max;
        entity2.knockback.y = entity1.velocity.y/entity1.speed.max;
        entity1.projectile.collideCur -= 1;
      }

      if(entity1.projectile.collideCur <= 0) {
        // Break out of loop if it hit one enemy
        return true;
      }
    }
}