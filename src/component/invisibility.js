import Component from "./component"

/**
 * Stores list of currently pressed keys
 */
export default class Invisibility extends Component {
    constructor() {
        // Name used to identify this component
        super("invisiblity");

        this.time = 20;
        this.cur = 0;
    }
}