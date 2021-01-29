import Component from "./component"

const Types = {
  SIMPLE: "simple",
  STRAIGHT: "straight",
  OSCILLATE: "oscillate",
  APPROACH: "approach",
  TELEPORT: "teleport"
}

export default class Follow extends Component {
    constructor(type) {
        // Name used to identify this component
        super("follow");

        this.x = 0;
        this.y = 0;
        this.type = Types[type];
    }
}