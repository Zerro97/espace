import System from "./system";

/**
 * Keep track of adding entities
 */
export default class Scene extends System {
    constructor() {
        super();

        this.mapData = null;
    }

    update() {

    }

    setup() {
        document.getElementById("menu").addEventListener("click", (e) => {
            
        }
    }
}