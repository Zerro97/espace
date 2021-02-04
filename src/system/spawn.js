import MapData from "../assemblage/mapData";
import Player from "../assemblage/player"
import Scene from "../assemblage/scene";
import SimpleEP from "../assemblage/simpleEP"
import System from "./system";
import { getUnitVector } from "../util/helperFunc"

/**
 * Keep track of adding entities
 */
export default class Spawn extends System {
    constructor() {
        super();

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
                    if (entity.enemyFire.type === "simple") {
                        let unitVector = getUnitVector(entity.position.x, entity.position.y, this.player.position.x, this.player.position.y);
                        let bullet = SimpleEP();
                        bullet.position.x = entity.position.x;
                        bullet.position.y = entity.position.y;
                        bullet.velocity.x = unitVector.xunit * bullet.speed.max;
                        bullet.velocity.y = unitVector.yunit * bullet.speed.max;
                        bullet.rotation.angle = -Math.atan2(unitVector.xunit, unitVector.yunit);
                        entities.push(bullet);
                    }
                }
            }
        })
    }

    setup() {
        this.mapData = MapData();
        this.player = Player();

        // Add Scene Data
        entities.push(Scene())

        // Add Map Data
        entities.push(this.mapData);

        // Add player
        entities.push(this.player);
    }
}