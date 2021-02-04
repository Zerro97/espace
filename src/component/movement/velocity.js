import Component from "../component"
/**
 * Defines current velocity of entity
 */
export default class Velocity extends Component {
    constructor(x, y) {
        // Name used to identify this component
        super("velocity");

        this.x = x || 0;
        this.y = y || 0;
    }
}