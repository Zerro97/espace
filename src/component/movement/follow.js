import Component from "../component"
import { FollowType } from "../../util/types"

export default class Follow extends Component {
    constructor(type) {
        // Name used to identify this component
        super("follow");

        this.x = 0;
        this.y = 0;
        this.type = FollowType[type] || "simple";
    }
}