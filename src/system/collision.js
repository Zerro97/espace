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
      entities.forEach((entity) => {
        if (entity.enemy) {
          if (entity.shape.type === "rectangle") {
            let dx1 = (projectile.position.x + projectile.shape.width/2) - (entity.position.x - entity.shape.width/2);
            let dx2 = (entity.position.x + entity.shape.width/2) - (projectile.position.x - projectile.shape.width/2);

            let dy1 = (projectile.position.y + projectile.shape.height/2) - (entity.position.y - entity.shape.height/2);
            let dy2 = (entity.position.y + entity.shape.height/2) - (projectile.position.y - projectile.shape.height/2);

            // If there is collision between projectile and enemy
            if (dx1 > 0 && dy1 > 0 && dx2 > 0 && dy2 > 0) {
              entity.health.cur -= projectile.damage.amount;
              projectile.projectile.collideCur -= 1;
            }
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
}