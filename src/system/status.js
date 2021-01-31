import System from "./system";

/**
 * Update status of entity such as invisibility, poison etc.
 */
export default class Status extends System {
    constructor() {
        super();
    }

    update() {
        entities.forEach((entity) => {
            if (entity.invisibility) {
                this.updateInvisible(entity);
            }
        })
    }

    updateInvisible(entity) {
        if (entity.invisibility.cur < entity.invisibility.max) {
            //console.log("in")
            entity.invisibility.cur += 1;
            entity.invisibility.invisible = true;

            if (entity.invisibility.cur >= entity.invisibility.max) {
                entity.invisibility.invisible = false;
            }
        }
    }
}