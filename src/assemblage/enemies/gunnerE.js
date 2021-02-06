import Entity from "../../entity/entity";
import Damage from "../../component/damage";
import Shape from "../../component/shape";
import Speed from "../../component/movement/speed";
import Position from "../../component/position";
import Knockback from "../../component/movement/knockback";
import Velocity from "../../component/movement/velocity";
import Follow from "../../component/movement/follow";
import Health from "../../component/health";
import Timer from "../../component/timer";
import { getRandomPos } from "../../util/helperFunc";
import EnemyType from "../../component/type/enemyType";
import EnemyFire from "../../component/enemyFire";
import EnemyPhase from "../../component/enemyPhase";
import DamageDisplay from "../../component/damageDisplay";

export default function GunnerE() {
    let enemyShape = new Shape("RECTANGLE", "#013552");
    enemyShape.width = 15;
    enemyShape.height = 15;

    let enemy = new Entity("GunnerE");
    let pos = getRandomPos();
    enemy.addComponent(new Position(pos.x, pos.y));
    enemy.addComponent(new Health(5));
    enemy.addComponent(new Timer(100));
    enemy.addComponent(new EnemyPhase({ "firing": true }));
    enemy.addComponent(new Velocity());
    enemy.addComponent(new DamageDisplay());
    enemy.addComponent(new Speed(2));
    enemy.addComponent(new Knockback());
    enemy.addComponent(new Follow("APPROACH"));
    enemy.addComponent(new Damage());
    enemy.addComponent(new EnemyType());
    enemy.addComponent(new EnemyFire(["simple"], { "simple": "simpleEP" }));
    enemy.addComponent(enemyShape);

    return enemy;
}