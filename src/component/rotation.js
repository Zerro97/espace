import Component from "./component"

export default class Rotation extends Component {
  constructor() {
    // Name used to identify this component
    super("rotation");

    this.angle = 0;
  }
}