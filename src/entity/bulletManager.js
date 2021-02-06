import SimpleP from "../assemblage/bullets/simpleP";
import SimpleEP from "../assemblage/bullets/simpleEP";
import PowerEP from "../assemblage/bullets/powerEP";

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