import Component from "./component"

export default class Position extends Component{
  constructor(x, y) {
    super("position");

    this.x = x || 0;
    this.y = y || 0;
  }
}