import System from "./system";

export default class Wave extends System {
  constructor() {
      super();
      this.display = true;
      this.displayTime = 100;
      this.timer = 0;
  }

  update() {
      if(this.display) {
        this.timer++;
        if(this.timer > this.displayTime) {
          document.getElementById("fsNotify").style.display = "none";
        }
      }
  }
}