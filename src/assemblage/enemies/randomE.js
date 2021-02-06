import Entity from "../../entity/entity";
import Damage from "../../component/damage";
import Shape from "../../component/shape";
import Speed from "../../component/movement/speed";
import Position from "../../component/position";
import Knockback from "../../component/movement/knockback";
import Velocity from "../../component/movement/velocity";
import Follow from "../../component/movement/follow";
import Timer from "../../component/timer";
import EnemyPhase from "../../component/enemyPhase";
import Health from "../../component/health";
import { getRandomPos } from "../../util/helperFunc";
import EnemyType from "../../component/type/enemyType";
import DamageDisplay from "../../component/damageDisplay";

export default function RandomE() {
    let enemyShape = new Shape("RECTANGLE", "brown");
    enemyShape.width = 25;
    enemyShape.height = 25;

    let enemy = new Entity("RandomE");
    let pos = getRandomPos();
    enemy.addComponent(new Position(pos.x, pos.y));
    enemy.addComponent(new Health(5));
    enemy.addComponent(new Timer(50, 200));
    enemy.addComponent(new Velocity());
    enemy.addComponent(new DamageDisplay());
    enemy.addComponent(new Speed(5));
    enemy.addComponent(new Knockback());
    enemy.addComponent(new Follow("RANDOM"));
    enemy.addComponent(new EnemyPhase({ "rest": true, "move": false }));
    enemy.addComponent(new Damage());
    enemy.addComponent(new EnemyType());
    enemy.addComponent(enemyShape);

    return enemy;
}