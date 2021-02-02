import Component from "./component"

/**
 * Stores list of currently pressed keys
 */
export default class Fire extends Component {
    constructor(duration) {
        // Name used to identify this component
        super("fire");

        this.fired = false;
        this.canFire = true;
        this.duration = duration || 10;
    }
}