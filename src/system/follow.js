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
        if (!entity.enemyPhase || !entity.timer) {
            throw "Error at follow system: entity must have timer and enemyPhase component"
        }

        if (entity.enemyPhase.phase.rest) {
            if (entity.timer.cur < entity.timer.max1) {
                entity.timer.cur += 1;
                entity.velocity.x = 0;
                entity.velocity.y = 0;

                if (entity.timer.cur === entity.timer.max1) {
                    entity.enemyPhase.phase.rest = false;
                    entity.enemyPhase.phase.move = true;
                    entity.timer.cur = 0;
                }
            }
        } else if (entity.enemyPhase.phase.move) {
            if (entity.enemyPhase.phase.switchDir) {
                if (this.player.position.y < entity.position.y + entity.speed.max / 2 && this.player.position.y > entity.position.y - entity.speed.max / 2) {
                    entity.enemyPhase.phase.rest = true;
                    entity.enemyPhase.phase.move = false;
                    entity.enemyPhase.phase.switchDir = !entity.enemyPhase.phase.switchDir
                    entity.timer.cur = 0;
                    return;
                }

                if (this.player.position.y < entity.position.y) {
                    entity.velocity.y = -entity.speed.max;
                } else {
                    entity.velocity.y = entity.speed.max;
                }
            } else {
                if (this.player.position.x < entity.position.x + entity.speed.max / 2 && this.player.position.x > entity.position.x - entity.speed.max / 2) {
                    entity.enemyPhase.phase.rest = true;
                    entity.enemyPhase.phase.move = false;
                    entity.enemyPhase.phase.switchDir = !entity.enemyPhase.phase.switchDir
                    entity.timer.cur = 0;
                    return;
                }

                if (this.player.position.x < entity.position.x) {
                    entity.velocity.x = -entity.speed.max;
                } else {
                    entity.velocity.x = entity.speed.max;
                }
            }
        }

    }


}