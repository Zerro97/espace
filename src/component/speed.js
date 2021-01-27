import Component from "./component"
/**
 * Defines current velocity of entity
 */
export default class Speed extends Component {
    constructor() {
        // Name used to identify this component
        super("speed");

        this.max = 5;
    }
}