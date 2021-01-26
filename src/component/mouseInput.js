import Component from "./component"
/**
 * Stores mouse position, x and y
 */
export default class mouseInput extends Component {
    constructor() {
        // Name used to identify this component
        super("shape");

        this.x = 0;
        this.y = 0;

        // THINK ABOUT: Does it need to keep track of mouse clicks?
    }
}