import Entity from "../../entity/entity";
import Damage from "../../component/damage";
import Shape from "../../component/shape";
import Speed from "../../component/movement/speed";
import Position from "../../component/position";
import Velocity from "../../component/movement/velocity";
import Follow from "../../component/movement/follow";
import Health from "../../component/health";
import Timer from "../../component/timer";
import { getRandomPos } from "../../util/helperFunc";
import EnemyType from "../../component/type/enemyType";
import EnemyFire from "../../component/enemyFire";
import EnemyPhase from "../../component/enemyPhase";
import DamageDisplay from "../../component/damageDisplay";

export default function BigOneB() {
    let enemyShape = new Shape("RECTANGLE", "#873d3d");
    enemyShape.width = 150;
    enemyShape.height = 150;

    let enemy = new Entity("BigOneB");
    let pos = getRandomPos();
    enemy.addComponent(new Position(pos.x, pos.y));
    enemy.addComponent(new Health(30));
    enemy.addComponent(new Timer(50));
    enemy.addComponent(new DamageDisplay());
    enemy.addComponent(new EnemyPhase({ "firing": true, "switchFire": Math.random() < 0.5 }));
    enemy.addComponent(new Velocity());
    enemy.addComponent(new Speed(0.3));
    enemy.addComponent(new Follow("FOLLOW"));
    enemy.addComponent(new Damage());
    enemy.addComponent(new EnemyType());
    enemy.addComponent(new EnemyFire(["simple", "eight"], { "simple": "powerEP", "eight": "simpleEP" }));
    enemy.addComponent(enemyShape);

    return enemy;
}