import System from "./system";

/**
 * Keep track of adding entities
 */
export default class Spawn extends System {
    constructor() {
        super(["timer"]);
    }

    update() {
      //console.log(entities);
      this.filterEntities();
      //console.log(this.filteredEntities);
    }
}