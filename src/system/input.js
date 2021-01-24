import { createTextChangeRange } from "typescript";

export default class Input {
  static setup() {    
    document.body.addEventListener("keypress", (e) => {
      //console.log("KeyP")
    });

    document.body.addEventListener("keyup", (e) => {
      //console.log("KeyU")
    });

    document.body.addEventListener("mousemove", (e) => {
      //console.log("MouseMove")
    });

    document.body.addEventListener("mousedown", (e) => {
      //console.log("MouseDown")
    });
  }
}