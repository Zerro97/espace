import MapData from "../assemblage/mapData";
import Player from "../assemblage/player"
import Scene from "../assemblage/scene";
import SimpleE from "../assemblage/simpleE"
import StraightE from "../assemblage/straightE"
import System from "./system";

/**
 * Keep track of adding entities
 */
export default class Spawn extends System {
    constructor() {
        super();

        this.mapData = null;
    }

    update() {
        if (!this.mapData.spawned) {
            this.mapData.spawned = true;

            let act = this.mapData.curAct;
            let stage = this.mapData.curStage;
            let wave = this.mapData.curWave;

            entities = entities.concat(this.mapData[act][stage][wave].enemies)
        }
    }

    setup() {
        this.mapData = MapData();

        // Add Scene Data
        entities.push(Scene())

        // Add Map Data
        entities.push(this.mapData);

        // Add player
        entities.push(Player());
    }
}