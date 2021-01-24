import Entity from "../entity/entity";
import Position from "../component/position";
import Shape from "../component/shape";

export default class Assemblage {
  createPlayer() {
    let player = new Entity("Player");
    player.addComponent(new Position(0,0));
    player.addComponent(new Shape("RECTANGLE", "red"));

    return player;
  }
}