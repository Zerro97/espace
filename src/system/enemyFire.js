import System from "./system";
import { getDistance, getUnitVector, isOutOfMap } from "../util/helperFunc"

export default class Follow extends System {
    constructor() {
        super(["follow"]);
        this.mapData = null;
        this.player = null;
    }

    setup() {
        entities.forEach((entity) => {
            if (entity.name === "player") {
                this.player = entity;
            }
            if (entity.name === "mapData") {
                this.mapData = entity;
            }
        });
    }

    update() {
        entities.forEach((entity) => {
            if (entity.enemyFire && entity.position && entity.timer) {
                if (entity.enemyFire.type === "simple") {
                    this.fireSimple(entity);
                }
            }
        })
    }

    fireSimple(entity) {
        entity.enemyPhase.phase.firing = false;
        entity.timer.cur += 1;

        if (entity.timer.cur === entity.timer.max1) {
            // Fire Bullet!
            entity.enemyPhase.phase.firing = true;
            entity.timer.cur = 0;
        }
    }
}