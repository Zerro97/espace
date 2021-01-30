import System from "./system";
import { getUnitVector } from "../util/helperFunc"

export default class Follow extends System {
    constructor() {
        super(["follow"]);
        this.player = null;
    }

    setup() {
        this.player = entities.find((entity) => {
            return entity.name === "player";
        });
    }

    update() {
        //this.filterEntities();

        entities.forEach((entity) => {
          if(entity.follow && entity.position && entity.velocity) {
            let vector = getUnitVector(entity.position.x, entity.position.y, this.player.position.x, this.player.position.y);
            entity.velocity.x = vector.xunit * entity.speed.max;
            entity.velocity.y = vector.yunit * entity.speed.max;
          }
        })
    }
}