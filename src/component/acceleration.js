import Component from "./component"
/**
 * Defines current velocity of entity
 */
export default class Acceleration extends Component {
    constructor() {
        // Name used to identify this component
        super("acceleration");

        this.max = 0.1;
        this.x = 0;
        this.y = 0;
    }
}