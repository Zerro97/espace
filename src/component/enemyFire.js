import Component from "./component";
import { BulletType } from "../util/types"

/**
 * Status/phase of enemy, ie. for straight enemy, it's either at resting or moving phase
 */
export default class enemyFire extends Component {
    constructor(type) {
        super("enemyFire");

        this.type = BulletType[type] || "simple";
        this.isFiring = false;
    }
}