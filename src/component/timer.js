import Component from "./component"
/**
 * Defines current velocity of entity
 */
export default class Timer extends Component {
    constructor(max1, max2) {
        // Name used to identify this component
        super("timer");

        this.cur = 0;
        this.max1 = max1 || 100;
        this.max2 = max2 || 100;
    }
}