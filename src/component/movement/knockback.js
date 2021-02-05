import Component from "../component"

export default class knockback extends Component {
    constructor() {
        super("knockback");

        // Velocity at which entity moves away
        this.amount = 5;

        // Direction that entity moves toward
        this.x = 1;
        this.y = 0;

        // Timer for knockback: stops knockback after 10 frame
        this.timerMax = 10;
        this.timerCur = 10;
    }
}