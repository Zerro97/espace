import Entity from "../entity/entity";
import Position from "../component/position";
import KeyInput from "../component/keyInput";
import MouseInput from "../component/mouseInput";
import Shape from "../component/shape";

export default class Assemblage {
    createPlayer() {
        let playerShape = new Shape("RECTANGLE", "white");
        playerShape.width = 20;
        playerShape.height = 20;

        let player = new Entity("player");
        player.addComponent(new Position(0, 0));
        player.addComponent(new KeyInput());
        player.addComponent(new MouseInput());
        player.addComponent(playerShape);

        return player;
    }
}