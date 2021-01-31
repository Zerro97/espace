import Component from "./component"

/**
 * Stores list of currently pressed keys
 */
export default class Invisibility extends Component {
    constructor() {
        // Name used to identify this component
        super("invisibility");

        this.invisible = false;
        this.max = 100;
        this.cur = 100;
    }
}