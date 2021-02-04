import Component from "./component"

export default class Health extends Component {
    constructor(health) {
        // Name used to identify this component
        super("health");

        this.max = health || 5;
        this.cur = health || 5;
    }
}