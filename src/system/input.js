import { createTextChangeRange } from "typescript";

export default class Input {
    constructor(entities) {
        this.entities = entities.filter((entity) => {
            // Get entities that depends on keyboard & mouse input
            return entity.keyInput || entity.mouseInput
        });
    }

    setup() {
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