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
            if (entity.follow && entity.position && entity.velocity) {
                if (entity.follow.type === "simple") {
                    this.simpleFollow(entity);
                } else if (entity.follow.type === "straight") {
                    this.straightFollow(entity);
                } else if (entity.follow.type === "random") {
                    this.randomFollow(entity);
                } else if (entity.follow.type === "reflect") {
                    this.reflectFollow(entity);
                } else if (entity.follow.type === "approach") {
                    this.approachFollow(entity);
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

        // When enemy is at rest
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
        }
        // When enemy is moving
        else if (entity.enemyPhase.phase.move) {
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

    randomFollow(entity) {
        if (!entity.enemyPhase || !entity.timer) {
            throw "Error at follow system: entity must have timer and enemyPhase component"
        }

        // When enemy is at rest
        if (entity.enemyPhase.phase.rest) {
            if (entity.timer.cur < entity.timer.max1) {
                entity.timer.cur += 1;
                entity.velocity.x = 0;
                entity.velocity.y = 0;

                if (entity.timer.cur === entity.timer.max1) {
                    entity.enemyPhase.phase.rest = false;
                    entity.enemyPhase.phase.move = true;
                    entity.timer.cur = 0;

                    let vector = getUnitVector(0, 0, Math.random() - 0.5, Math.random() - 0.5);
                    entity.velocity.x = vector.xunit * entity.speed.max;
                    entity.velocity.y = vector.yunit * entity.speed.max;
                }
            }
        }

        // When enemy is moving
        else if (entity.enemyPhase.phase.move) {
            if (entity.timer.cur < entity.timer.max2) {
                entity.timer.cur += 1;

                if (entity.position.x < -this.mapData[this.mapData.curAct][this.mapData.curStage].map.size.width / 2 ||
                    entity.position.x > this.mapData[this.mapData.curAct][this.mapData.curStage].map.size.width / 2) {
                    entity.velocity.x = -entity.velocity.x;
                }

                if (entity.position.y < -this.mapData[this.mapData.curAct][this.mapData.curStage].map.size.height / 2 ||
                    entity.position.y > this.mapData[this.mapData.curAct][this.mapData.curStage].map.size.height / 2) {
                    entity.velocity.y = -entity.velocity.y;
                }

                if (entity.timer.cur === entity.timer.max2) {
                    entity.enemyPhase.phase.rest = true;
                    entity.enemyPhase.phase.move = false;
                    entity.timer.cur = 0;
                }
            }
        }
    }

    reflectFollow(entity) {
        if (entity.position.x < -this.mapData[this.mapData.curAct][this.mapData.curStage].map.size.width / 2 ||
            entity.position.x > this.mapData[this.mapData.curAct][this.mapData.curStage].map.size.width / 2) {
            entity.velocity.x = -entity.velocity.x;
        }

        if (entity.position.y < -this.mapData[this.mapData.curAct][this.mapData.curStage].map.size.height / 2 ||
            entity.position.y > this.mapData[this.mapData.curAct][this.mapData.curStage].map.size.height / 2) {
            entity.velocity.y = -entity.velocity.y;
        }
    }

    approachFollow(entity) {
        if (getDistance(entity.position.x, entity.position.y, this.player.position.x, this.player.position.y) < 250) {
            entity.velocity.x = 0;
            entity.velocity.y = 0;
        } else {
            let vector = getUnitVector(entity.position.x, entity.position.y, this.player.position.x, this.player.position.y);
            entity.velocity.x = vector.xunit * entity.speed.max;
            entity.velocity.y = vector.yunit * entity.speed.max;
        }
    }
}