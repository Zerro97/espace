import Component from "./component"

export default class Health extends Component {
  constructor() {
    // Name used to identify this component
    super("health");

    this.max = 5;
    this.cur = 5;
  }
}