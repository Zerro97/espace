import Entity from "../entity/entity";
import Damage from "../component/damage";
import Shape from "../component/shape";
import Speed from "../component/speed";
import Position from "../component/position";
import KeyInput from "../component/keyInput";
import Rotation from "../component/rotation";
import Velocity from "../component/velocity";
import MouseInput from "../component/mouseInput";
import Slide from "../component/slide";
import Acceleration from "../component/acceleration";
import Follow from "../component/follow";
import Health from "../component/health";


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
    player.addComponent(new Speed());
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
    enemy.addComponent(new Position(-200, -200));
    enemy.addComponent(new Velocity());
    enemy.addComponent(new Follow());
    enemy.addComponent(new Damage());
    enemy.addComponent(enemyShape);

    return enemy;
  }

  createSimpleProjectile() {
    let projectileShape = new Shape("RECTANGLE", "white");
    projectileShape.width = 2;
    projectileShape.height = 2;

    let projectile = new Entity("SProj");
    projectile.addComponent(new Position());
    projectile.addComponent(new Velocity());
    projectile.addComponent(new Damage());
    projectile.addComponent(projectileShape);

    return enemy;
  }
}