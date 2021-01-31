import Component from "../component"
/**
 * Defines current velocity of entity
 */
export default class Velocity extends Component {
    constructor() {
        // Name used to identify this component
        super("velocity");

        this.x = 0;
        this.y = 0;
    }
}