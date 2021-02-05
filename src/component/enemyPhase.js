import Component from "./component";

/**
 * Status/phase of enemy, ie. for straight enemy, it's either at resting or moving phase
 * List of phases:
 * 1) rest
 * 2) move
 * 3) switchDir
 * 4) firing
 */
export default class enemyPhase extends Component {
    constructor(phase) {
        super("enemyPhase");

        this.phase = phase || { "rest": true };
    }
}