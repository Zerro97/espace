import Component from "./component"

class Position extends Component{
  constructor(params) {
    super("position");

    params = params || {};
    this.x = params.x || 0;
    this.y = params.y || 0;
  }
}