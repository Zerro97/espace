import Assemblage from "../assemblage/assemblage";
import System from "./system";
import { getUnitVector } from "../util/helperFunc"

export default class Input extends System {
    constructor() {
        super(["keyInput", "mouseInput", "damage"]);
        this.player;
    }

    update() {

    }

    setup() {
        this.player = entities.find((entity) => {
            return entity.name === "player";
        });

        document.body.addEventListener("keypress", (e) => {
            if (e.key === "a") {
                this.player.keyInput.keys.a = true;

                if (this.player.keyInput.keys.d) {
                    this.player.keyInput.keys.d = false;
                }
                if (this.player.slide.moveStatus.hor !== 0) {
                    this.player.slide.moveStatus.hor = 1;
                }
            }
            if (e.key === "s") {
                this.player.keyInput.keys.s = true;

                if (this.player.keyInput.keys.w) {
                    this.player.keyInput.keys.w = false;
                }
                if (this.player.slide.moveStatus.ver !== 4) {
                    this.player.slide.moveStatus.ver = 3;
                }
            }
            if (e.key === "d") {
                this.player.keyInput.keys.d = true;

                if (this.player.keyInput.keys.a) {
                    this.player.keyInput.keys.a = false;
                }
                if (this.player.slide.moveStatus.hor !== 4) {
                    this.player.slide.moveStatus.hor = 3;
                }
            }
            if (e.key === "w") {
                this.player.keyInput.keys.w = true;

                if (this.player.keyInput.keys.s) {
                    this.player.keyInput.keys.s = false;
                }
                if (this.player.slide.moveStatus.ver !== 0) {
                    this.player.slide.moveStatus.ver = 1;
                }
            }

            // this.filteredEntities.forEach((entity) => {
            //       if (entity.keyInput !== undefined && !entity.keyInput.keys.includes(e.key)) {
            //           entity.keyInput.keys.push(e.key);
            //       }
            //   })
        });

        document.body.addEventListener("keyup", (e) => {
            if (e.key === "a") {
                if (this.player.keyInput.keys.a) {
                    this.player.keyInput.keys.a = false;

                    if (this.player.velocity.x < 0) {
                        this.player.slide.moveStatus.hor = 3;
                    } else if (this.player.velocity.x > 0) {
                        this.player.slide.moveStatus.hor = 1;
                    }
                }
            }
            if (e.key === "s") {
                if (this.player.keyInput.keys.s) {
                    this.player.keyInput.keys.s = false;

                    if (this.player.velocity.y > 0) {
                        this.player.slide.moveStatus.ver = 1;
                    } else if (this.player.velocity.y < 0) {
                        this.player.slide.moveStatus.ver = 3;
                    }
                }
            }
            if (e.key === "d") {
                if (this.player.keyInput.keys.d) {
                    this.player.keyInput.keys.d = false;

                    if (this.player.velocity.x > 0) {
                        this.player.slide.moveStatus.hor = 1;
                    } else if (this.player.velocity.x < 0) {
                        this.player.slide.moveStatus.hor = 3;
                    }
                }
            }
            if (e.key === "w") {
                if (this.player.keyInput.keys.w) {
                    this.player.keyInput.keys.w = false;

                    if (this.player.velocity.y < 0) {
                        this.player.slide.moveStatus.ver = 3;
                    } else if (this.player.velocity.y > 0) {
                        this.player.slide.moveStatus.ver = 1;
                    }
                }
            }

            // this.filteredEntities.forEach((entity) => {
            //       if (entity.keyInput !== undefined) {
            //           entity.keyInput.keys = entity.keyInput.keys.filter((key) => {
            //               return key !== e.key;
            //           });
            //       }
            //   })
        });

        document.body.addEventListener("mousemove", (e) => {
            let xvector = canvas.width / 2 - e.x;
            let yvector = canvas.height / 2 - e.y;

            let angle = Math.atan2(xvector, yvector);
            this.player.rotation.angle = -angle;
        });

        document.body.addEventListener("mousedown", (e) => {
            let unitVector = getUnitVector(canvas.width / 2, canvas.height / 2, e.x, e.y);
            let projectile = new Assemblage().createSimpleProjectile();
            projectile.position.x = this.player.position.x;
            projectile.position.y = this.player.position.y;
            projectile.velocity.x = unitVector.xunit * 20;
            projectile.velocity.y = unitVector.yunit * 20;
            projectile.rotation.angle = -Math.atan2(unitVector.xunit, unitVector.yunit);

            entities.push(projectile);
        });

        window.addEventListener("resize", (e) => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        });
    }
}