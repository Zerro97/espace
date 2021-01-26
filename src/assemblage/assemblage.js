import Entity from "../entity/entity";
import Position from "../component/position";
import Shape from "../component/shape";

export default class Assemblage {
    createPlayer() {
        let playerShape = new Shape("RECTANGLE", "white");
        playerShape.width = 20;
        playerShape.height = 20;

        let player = new Entity("player");
        player.addComponent(new Position(0, 0));
        player.addComponent(playerShape);

        return player;
    }
}