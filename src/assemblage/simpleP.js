import Entity from "../entity/entity";
import Damage from "../component/damage";
import Shape from "../component/shape";
import Speed from "../component/movement/speed";
import Position from "../component/position";
import Rotation from "../component/movement/rotation";
import Velocity from "../component/movement/velocity";
import ProjectileType from "../component/type/projectileType";

export default function SimpleP() {
    let projectileShape = new Shape("RECTANGLE", "green");
    projectileShape.width = 3;
    projectileShape.height = 20;

    let projectile = new Entity("simpleP");
    projectile.addComponent(new Position());
    projectile.addComponent(new Velocity());
    projectile.addComponent(new Speed(20));
    projectile.addComponent(new Damage(3));
    projectile.addComponent(new ProjectileType());
    projectile.addComponent(new Rotation());
    projectile.addComponent(projectileShape);

    return projectile;
}