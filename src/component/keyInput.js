import Component from "./component"

/**
 * Stores list of currently pressed keys
 */
export default class keyInput extends Component {
    constructor() {
        // Name used to identify this component
        super("keyInput");

        this.keys = {};
    }
}