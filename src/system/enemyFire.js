import System from "./system";
import { getDistance, getUnitVector, isOutOfMap } from "../util/helperFunc"

export default class EnemyFire extends System {
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
                for (let i = 0; i < entity.enemyFire.type.length; i++) {
                    if (entity.enemyFire.type[i] === "simple") {
                        this.fireSimple(entity);
                    }

                    if (entity.enemyFire.type[i] === "eight") {
                        this.fireSwitch(entity);
                    }
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

    fireSwitch(entity) {
        entity.enemyPhase.phase.firing = false;
        entity.timer.cur += 1;

        if (entity.timer.cur === entity.timer.max1) {
            // Fire Bullet!
            entity.enemyPhase.phase.firing = true;
            entity.timer.cur = 0;
            entity.enemyPhase.phase.fireSwitch = !entity.enemyPhase.phase.fireSwitch;
        }
    }
}