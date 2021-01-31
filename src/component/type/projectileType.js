import Component from "../component"

/**
 * Gets destroyed after collision
 */
export default class ProjectileType extends Component {
    constructor() {
        super("projectileType");

        // Max number of collision before being destroyed
        this.collideMax = 1;
        this.collideCur = 1;
    }
}