export default class Collision extends System {
    constructor() {
        super();
    }

    update() {
        entities.forEach((entity1) => {
            if (entity1.projectile) {
                // Get enemy entities
                entities.forEach((entity2) => {
                    if (entity2.enemy) {
                        if (entity2.shape.type === "rectangle") {

                        }
                    }
                })
            }

            if (entity1.enemy) {

            }
        })
    }
}