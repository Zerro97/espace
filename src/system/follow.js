import System from "./system";

export default class Follow extends System {
  constructor() {
    super(["follow"]);
    this.player = null;
  }

  setup() {
    this.player = entities.find((entity) => {
      return entity.name === "player";
    });
  }

  update() {
    this.filterEntities();

    this.filteredEntities.forEach((entity) => {
      let vector = this.getUnitVector(entity.position.x, entity.position.y, this.player.position.x, this.player.position.y);
      entity.velocity.x = vector.xunit;
      entity.velocity.y = vector.yunit;

      entity.position.x += entity.velocity.x;
      entity.position.y += entity.velocity.y;
    })
  }

  getUnitVector(x1, y1, x2, y2) {
    let xvector = x2 - x1;
    let yvector = y2 - y1;
    let magnitude = Math.sqrt(Math.pow(xvector, 2) + Math.pow(yvector, 2));

    return { xunit: xvector / magnitude, yunit: yvector / magnitude };
  }
}