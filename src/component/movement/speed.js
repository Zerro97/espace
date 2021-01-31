import Component from "../component"
/**
 * Defines current velocity of entity
 */
export default class Speed extends Component {
    constructor(max) {
        // Name used to identify this component
        super("speed");

        this.max = max || 5;
    }
}