import MapData from "../assemblage/mapData";
import Player from "../assemblage/player"
import Scene from "../assemblage/scene";
import System from "./system";
import { getUnitVector } from "../util/helperFunc"
import BulletManager from "../entity/bulletManager";

/**
 * Keep track of adding entities
 */
export default class Spawn extends System {
    constructor() {
        super();

        this.bulletManager = null;
        this.mapData = null;
        this.player = null;
    }

    update() {
        // Spawn enemies according to map data
        if (!this.mapData.spawned) {
            this.mapData.spawned = true;

            let act = this.mapData.curAct;
            let stage = this.mapData.curStage;
            let wave = this.mapData.curWave;

            entities = entities.concat(this.mapData[act][stage][wave].enemies)
        }

        // Spawn enemy bullet
        entities.forEach((entity) => {
            if (entity.enemyFire && entity.enemyPhase) {
                if (entity.enemyPhase.phase.firing) {
                    for (let i = 0; i < entity.enemyFire.type.length; i++) {
                        if (entity.enemyFire.type[i] === "simple") {
                            this.fireSimple(entity);
                        }
                        if (entity.enemyFire.type[i] === "eight") {
                            this.fireEight(entity);
                        }
                    }
                }
            }
        })
    }

    setup() {
        this.bulletManager = new BulletManager();
        this.mapData = MapData();
        this.player = Player();

        // Add Scene Data
        entities.push(Scene())

        // Add Map Data
        entities.push(this.mapData);

        // Add player
        entities.push(this.player);
    }

    fireSimple(entity) {
        let unitVector = getUnitVector(entity.position.x, entity.position.y, this.player.position.x, this.player.position.y);
        let bullet = this.bulletManager.makeBullet(entity.enemyFire.bullet.simple); //SimpleEP();
        bullet.position.x = entity.position.x;
        bullet.position.y = entity.position.y;
        bullet.velocity.x = unitVector.xunit * bullet.speed.max;
        bullet.velocity.y = unitVector.yunit * bullet.speed.max;
        bullet.rotation.angle = -Math.atan2(unitVector.xunit, unitVector.yunit);
        entities.push(bullet);
    }

    fireEight(entity) {
        if (entity.enemyPhase.phase.fireSwitch) {
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    if (i !== 0 || j !== 0) {
                        let bullet = this.bulletManager.makeBullet(entity.enemyFire.bullet.eight);
                        bullet.position.x = entity.position.x;
                        bullet.position.y = entity.position.y;
                        bullet.velocity.x = i * bullet.speed.max;
                        bullet.velocity.y = j * bullet.speed.max;
                        bullet.rotation.angle = -Math.atan2(i, j);
                        entities.push(bullet);
                    }
                }
            }
        } else {
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 2; j++) {
                    for (let k = 0; k < 2; k++) {
                        let x = 0.5;
                        let y = 1;
                        let temp = -1;

                        if (i === 1) {
                            x = -x;
                        }

                        if (j === 1) {
                            y = -y;
                        }

                        if (k === 1) {
                            temp = x;
                            x = y;
                            y = temp;
                        }

                        let bullet = this.bulletManager.makeBullet(entity.enemyFire.bullet.eight);
                        bullet.speed.max = 3;
                        bullet.position.x = entity.position.x;
                        bullet.position.y = entity.position.y;
                        bullet.velocity.x = x * bullet.speed.max // * 7 / 8;
                        bullet.velocity.y = y * bullet.speed.max // * 7 / 8;
                        bullet.rotation.angle = -Math.atan2(x, y);
                        entities.push(bullet);
                    }
                }
            }
        }
    }
}