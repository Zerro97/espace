import Component from './component';
import { ShapeType } from '../util/types'

/**
 * Defines the shape of entity. Can be rectangle, circle or polygon. Used in render system
 */

export default class Shape extends Component {
    constructor(type, color) {
        // Name used to identify this component
        super("shape");

        // Define if it's rectangle, circle or polygon
        this.type = ShapeType[type];

        // Used in rectangle & circle
        this.width = 5;
        this.height = 5;

        // Used in polygon (ex. ctx.lineTo(this.vertices[0].x, this.vertices[0].y))
        this.vertices = [];

        // Color of shape
        this.color = color;
    }
}