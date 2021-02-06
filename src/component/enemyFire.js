import Component from "./component";

/**
 * Defines how enemy fires bullets and what kind bullet they fire
 * Type List: simple, eight
 * Bullet List: simpleEP, powerEP
 * 
 */
export default class enemyFire extends Component {
    constructor(type, bullet) {
        super("enemyFire");

        this.type = type || ["simple"];
        this.bullet = bullet || { "simple": "simpleEP" };
    }
}