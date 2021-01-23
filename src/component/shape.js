/**
 * Defines the shape of entity. Can be rectangle, circle or polygon. Used in render system
 */

const Types = {
  RECTANGLE: "rectangle",
  CIRCLE: "circle",
  POLYGON: "polygon"
}

class Shape {
  constructor(type, color) {
    // Define if it's rectangle, circle or polygon
    this.type = Types[type];

    // Used in rectangle & circle
    this.width = 0;
    this.height = 0;

    // Used in polygon (ex. ctx.lineTo(this.vertices[0].x, this.vertices[0].y))
    this.vertices = [];

    // Color of shape
    this.color = color;
  }
}