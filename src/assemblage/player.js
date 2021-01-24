import Entity from "../entity/entity";
import Position from "../component/position";
import Shape from "../component/shape";

export default function Player() {
  let player = new Entity();
  player.addComponent(new Position(100,100));
  player.addComponent(new Shape("RECTANGLE", "red"));

  return player;
}