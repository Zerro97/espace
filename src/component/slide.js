import Component from "./component"

export default class Slide extends Component {
    constructor() {
        // Name used to identify this component
        super("slide");

        // 0: Left Max Velocity, 1: Left Acceleration, 2: Stop, 3: Right Accleration, 4: Right Max Vel
		    this.moveStatus = {hor: 2, ver: 2};
    }
}