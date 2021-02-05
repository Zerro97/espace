import Entity from "../entity/entity";
import Damage from "../component/damage";
import Shape from "../component/shape";
import Speed from "../component/movement/speed";
import Position from "../component/position";
import Rotation from "../component/movement/rotation";
import Velocity from "../component/movement/velocity";
import EnemyProjectileType from "../component/type/enemyProjectileType";

export default function PowerEP() {
    let projectileShape = new Shape("RECTANGLE", "#e08428");
    projectileShape.width = 3;
    projectileShape.height = 20;

    let projectile = new Entity("powerEP");
    projectile.addComponent(new Position());
    projectile.addComponent(new Velocity());
    projectile.addComponent(new Speed(5));
    projectile.addComponent(new Damage(2));
    projectile.addComponent(new EnemyProjectileType());
    projectile.addComponent(new Rotation());
    projectile.addComponent(projectileShape);

    return projectile;
}