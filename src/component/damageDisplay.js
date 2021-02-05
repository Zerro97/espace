import Component from "./component"

export default class DamageDisplay extends Component {
    constructor() {
        // Name used to identify this component
        super("damageDisplay");

        this.collided = false;
        this.color = "white";
        this.damageAmount = 0;
        this.timerMax = 20;
        this.timerCur = 0;
        this.y = 0;
    }
}