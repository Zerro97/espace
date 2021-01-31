export default class Hud {
    constructor() {
        this.player = null;
        this.updateHeart = false;
        this.updateBullet = false;
        this.updateSkill = false;
        this.updateDamage = false;
        this.gameOver = false;
    }

    setup() {
        this.player = entities.find((entity) => {
            return entity.name === "player";
        });

        this.changeHeart();
        this.loadBullet.call(this);
        this.loadSkill();
    }

    update() {
        this.checkUpdate();

        if (this.updateHeart) {
            this.changeHeart();
        }
        if (this.updateBullet) {
            this.loadBullet.call(this);
        }
        if (this.updateSkill) {
            this.loadSkill();
        }
        if (this.updateDamage) {
            this.displayDamage();
        }
        if (this.gameOver) {

        }
    }

    checkUpdate() {
        // Heart
        // TODO: Use other indicator for updating heart
        if (this.player.invisibility.cur === 0) {
            this.updateHeart = true;
        }

        // Bullet
        if (this.player.fire.fired) {
            this.updateBullet = true;
            this.player.fire.fired = false;
            this.player.fire.canFire = false;
        } else {
            this.updateBullet = false;
        }

        // Skill
        // if (true) {
        //     this.updateSkill = true;
        // } else {
        //     this.updateSkill = false;
        // }

        // Invisibility
        if (this.player.invisibility.invisible) {
            this.updateDamage = true;
        } else {
            this.updateDamage = false;
            document.getElementById("damaged").style.display = "none";
        }
    }

    changeHeart() {
        let heartHTML = "";
        for (let i = 0; i < this.player.health.cur; i++) {
            heartHTML += "<img src=\"/assets/heart.png\" class=\"heart\"></div>"
        }

        let hearts = document.getElementById("hearts");
        hearts.innerHTML = heartHTML;

        // Only update once
        this.updateHeart = false;
    }


    loadBullet() {
        let progress = true;
        if (progress) {
            let elem = document.getElementById("bulletProgress");
            let width = 0;
            let id = setInterval(() => {
                if (width >= 100) {
                    clearInterval(id);
                    progress = false;
                    this.player.fire.canFire = true;
                } else {
                    width++;
                    elem.style.width = width + "%";
                }
            }, this.player.fire.duration);
        }
    }

    loadSkill() {
        let progress = true;
        if (progress) {
            let elem = document.getElementById("skillProgress");
            let width = 0;
            let id = setInterval(frame, 10);

            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    progress = false;
                } else {
                    width++;
                    elem.style.width = width + "%";
                }
            }
        }
    }

    displayDamage() {
        document.getElementById("damaged").style.display = "block";
    }
}