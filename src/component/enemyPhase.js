import Component from "./component";

/**
 * Status/phase of enemy, ie. for straight enemy, it's either at resting or moving phase
 */
export default class enemyPhase extends Component {
    constructor(phase) {
        super("enemyPhase");

        this.phase = phase || { "rest": true };
    }
}