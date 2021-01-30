import Component from "./component"
import { Shape } from "../util/types"

export default class Collision extends Component {
    constructor() {
        // Name used to identify this component
        super("collision");

        this.type;
    }
}