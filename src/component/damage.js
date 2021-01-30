import Component from "./component"

export default class Damage extends Component {
    constructor(amount) {
        // Name used to identify this component
        super("damage");

        this.amount = amount || 1;
        this.random = 3;
    }
}