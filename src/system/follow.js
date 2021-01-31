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
            if (entity.follow && entity.position && entity.velocity) {
                if (entity.follow.type === "simple") {
                    this.simpleFollow(entity);
                } else if (entity.follow.type === "straight") {
                    this.straightFollow(entity);
                }

            }
        })
    }

    simpleFollow(entity) {
        let vector = getUnitVector(entity.position.x, entity.position.y, this.player.position.x, this.player.position.y);
        entity.velocity.x = vector.xunit * entity.speed.max;
        entity.velocity.y = vector.yunit * entity.speed.max;
    }

    straightFollow(entity) {
        if (!entity.timer) {
            console.log("Need to have timer for straight movement!");
        }

        if (entity.timer.cur1 < entity.timer.max1) {
            entity.timer.cur1 += 1;
            entity.velocity.x = entity.speed.max;

            if (entity.timer.cur1 === entity.timer.max1) {
                entity.timer.cur2 = 0;
            }
        }
    }


}