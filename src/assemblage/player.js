import Entity from "../entity/entity";
import Shape from "../component/shape";
import Speed from "../component/movement/speed";
import Position from "../component/position";
import KeyInput from "../component/keyInput";
import Rotation from "../component/movement/rotation";
import Velocity from "../component/movement/velocity";
import MouseInput from "../component/mouseInput";
import Slide from "../component/movement/slide";
import Acceleration from "../component/movement/acceleration";
import Health from "../component/health";
import Knockback from "../component/movement/knockback";
import PlayerType from "../component/type/playerType";
import Invisibility from "../component/invisibility";

export default function Player() {
    let playerShape = new Shape("RECTANGLE", "white");
    playerShape.width = 20;
    playerShape.height = 20;

    let player = new Entity("player");
    player.addComponent(new PlayerType());
    player.addComponent(new Invisibility());
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
    player.addComponent(new Knockback());
    player.addComponent(playerShape);

    return player;
}