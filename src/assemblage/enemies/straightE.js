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
import EnemyPhase from "../../component/enemyPhase";
import Timer from "../../component/timer";
import EnemyType from "../../component/type/enemyType";
import DamageDisplay from "../../component/damageDisplay";

export default function StraightE() {
    let enemyShape = new Shape("RECTANGLE", "blue");
    enemyShape.width = 15;
    enemyShape.height = 15;

    let enemy = new Entity("StraightE");
    let pos = getRandomPos();
    enemy.addComponent(new Position(pos.x, pos.y));
    enemy.addComponent(new Health());
    enemy.addComponent(new Timer(100));
    enemy.addComponent(new Velocity());
    enemy.addComponent(new DamageDisplay());
    enemy.addComponent(new Speed(7));
    enemy.addComponent(new Knockback());
    enemy.addComponent(new Follow("STRAIGHT"));
    enemy.addComponent(new EnemyPhase({ "rest": true, "move": false, "switchDir": Math.random() < 0.5 }));
    enemy.addComponent(new Damage());
    enemy.addComponent(new EnemyType());
    enemy.addComponent(enemyShape);

    return enemy;
}