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
        this.filterEntities();

        this.filteredEntities.forEach((entity) => {

            let vector = getUnitVector(entity.position.x, entity.position.y, this.player.position.x, this.player.position.y);
            entity.velocity.x = vector.xunit;
            entity.velocity.y = vector.yunit;

            entity.position.x += entity.velocity.x;
            entity.position.y += entity.velocity.y;
        })
    }
}