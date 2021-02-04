import Component from "../component"

/**
 * Gets destroyed after collision
 */
export default class EnemyProjectileType extends Component {
    constructor() {
        super("enemyProjectileType");

        // Max number of collision before being destroyed
        this.collideMax = 1;
        this.collideCur = 1;
    }
}