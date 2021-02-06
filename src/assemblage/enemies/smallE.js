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

export default function SmallE() {
    let enemyShape = new Shape("RECTANGLE", "pink");
    enemyShape.width = 10;
    enemyShape.height = 10;

    let enemy = new Entity("SmallE");
    let pos = getRandomPos();
    enemy.addComponent(new Position(pos.x, pos.y));
    enemy.addComponent(new Health(3));
    enemy.addComponent(new Velocity());
    enemy.addComponent(new DamageDisplay());
    enemy.addComponent(new Speed(2));
    enemy.addComponent(new Knockback());
    enemy.addComponent(new Follow("SIMPLE"));
    enemy.addComponent(new Damage());
    enemy.addComponent(new EnemyType());
    enemy.addComponent(enemyShape);

    return enemy;
}