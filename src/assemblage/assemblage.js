import Entity from "../entity/entity";
import Damage from "../component/damage";
import Shape from "../component/shape";
import Speed from "../component/speed";
import Position from "../component/position";
import Knockback from "../component/knockback";
import KeyInput from "../component/keyInput";
import Rotation from "../component/rotation";
import Velocity from "../component/velocity";
import MouseInput from "../component/mouseInput";
import Slide from "../component/slide";
import Acceleration from "../component/acceleration";
import Follow from "../component/follow";
import Health from "../component/health";
import Projectile from "../component/type/projectile";
import Enemy from "../component/type/enemy";
import { getRandomPos } from "../util/helperFunc";

export default class Assemblage {
    createPlayer() {
        let playerShape = new Shape("RECTANGLE", "white");
        playerShape.width = 20;
        playerShape.height = 20;

        let player = new Entity("player");
        player.addComponent(new Health());
        player.addComponent(new Rotation());
        player.addComponent(new Position(0, 0));
        player.addComponent(new KeyInput());
        player.addComponent(new MouseInput());
        player.addComponent(new Slide());
        player.addComponent(new Rotation());
        player.addComponent(new Speed(5));
        player.addComponent(new Velocity());
        player.addComponent(new Acceleration());
        player.addComponent(new Rotation());
        player.addComponent(playerShape);

        return player;
    }

    createSimpleEnemy() {
        let enemyShape = new Shape("RECTANGLE", "red");
        enemyShape.width = 15;
        enemyShape.height = 15;

        let enemy = new Entity("SEnemy");
        let pos = getRandomPos();
        enemy.addComponent(new Position(pos.x, pos.y));
        enemy.addComponent(new Health());
        enemy.addComponent(new Velocity());
        enemy.addComponent(new Speed(1));
        enemy.addComponent(new Knockback());
        enemy.addComponent(new Follow());
        enemy.addComponent(new Damage());
        enemy.addComponent(new Enemy());
        enemy.addComponent(enemyShape);

        return enemy;
    }

    createSimpleProjectile() {
        let projectileShape = new Shape("RECTANGLE", "green");
        projectileShape.width = 3;
        projectileShape.height = 20;

        let projectile = new Entity("SProj");
        projectile.addComponent(new Position());
        projectile.addComponent(new Velocity());
        projectile.addComponent(new Speed(20));
        projectile.addComponent(new Damage(1));
        projectile.addComponent(new Projectile());
        projectile.addComponent(new Rotation());
        projectile.addComponent(projectileShape);

        return projectile;
    }
}