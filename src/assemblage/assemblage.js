import Entity from "../entity/entity";
import Shape from "../component/shape";
import Speed from "../component/speed";
import Position from "../component/position";
import KeyInput from "../component/keyInput";
import Rotation from "../component/rotation";
import Velocity from "../component/velocity";
import MouseInput from "../component/mouseInput";
import Slide from "../component/slide";
import Acceleration from "../component/acceleration";


export default class Assemblage {
    createPlayer() {
        let playerShape = new Shape("RECTANGLE", "white");
        playerShape.width = 20;
        playerShape.height = 20;

        let player = new Entity("player");
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
}