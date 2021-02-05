import SimpleP from "../assemblage/simpleP";
import SimpleEP from "../assemblage/simpleEP";
import PowerEP from "../assemblage/powerEP";

export default class BulletManager {
    makeBullet(name) {
        switch (name) {
            case "simpleEP":
                return new SimpleEP();
            case "powerEP":
                return new PowerEP();
            case "simpleP":
                return new SimpleP();
            default:
                throw `ERROR! No bullet of type ${name}!`;
        }
    }
}