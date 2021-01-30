import Component from "./component"
/**
 * Defines current velocity of entity
 */
export default class Timer extends Component {
    constructor(max) {
        // Name used to identify this component
        super("timer");

        this.cur = 0;
        this.max = max || 100;
    }
}