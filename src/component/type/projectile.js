import Component from "../component"

/**
 * Gets destroyed after collision
 */
export default class Projectile extends Component {
    constructor() {
        super("projectile");

        // Max number of collision before being destroyed
        this.collideMax = 1;
        this.collideCur = 1;
    }
}