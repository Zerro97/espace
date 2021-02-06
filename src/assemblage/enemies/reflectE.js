import Entity from "../../entity/entity";
import Damage from "../../component/damage";
import Shape from "../../component/shape";
import Speed from "../../component/movement/speed";
import Position from "../../component/position";
import Knockback from "../../component/movement/knockback";
import Velocity from "../../component/movement/velocity";
import Follow from "../../component/movement/follow";
import Health from "../../component/health";
import { getRandomPos } from "../../util/helperFunc";
import EnemyType from "../../component/type/enemyType";
import DamageDisplay from "../../component/damageDisplay";

export default function ReflectE() {
    let enemyShape = new Shape("RECTANGLE", "green");
    enemyShape.width = 20;
    enemyShape.height = 20;

    let enemy = new Entity("ReflectE");
    let pos = getRandomPos();
    enemy.addComponent(new Position(pos.x, pos.y));
    enemy.addComponent(new Health(5));
    enemy.addComponent(new Velocity(5, 5));
    enemy.addComponent(new Speed(5));
    enemy.addComponent(new Knockback());
    enemy.addComponent(new DamageDisplay());
    enemy.addComponent(new Follow("REFLECT"));
    enemy.addComponent(new Damage());
    enemy.addComponent(new EnemyType());
    enemy.addComponent(enemyShape);

    return enemy;
}