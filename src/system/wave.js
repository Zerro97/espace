import System from "./system";

export default class Wave extends System {
    constructor() {
        super();
        this.mapData = null;
        this.start = true;
        this.last = false;
        this.wave = 0;
        this.stage = 0;
        this.act = 0;
        this.display = true;
        this.displayTime = 100;
        this.timer = 0;
    }

    setup() {
        entities.forEach((entity) => {
            if (entity.name === "mapData") {
                this.mapData = entity;
            }
        })
    }

    update() {
        if (this.start) {
            this.start = false;

            this.wave = this.mapData.curWave;
            this.stage = this.mapData.curStage;
            this.act = this.mapData.curAct;
        }

        if (this.countEnemies() < 3) {
            if (this.timer === 0) {
                this.mapData.spawned = false;
                this.display = true;

                this.mapData.curWave += 1;
                this.wave = this.mapData.curWave;

                if (this.mapData.curWave === this.mapData[this.act][this.stage].last) {
                    this.last = true;
                }
            }
        }

        if (this.display) {
            if (this.timer === 0) {
                if (this.last) {
                    document.getElementById("fsNotify").style.display = "flex";
                    document.getElementById("fsText").innerText = "FINAL";
                } else {
                    document.getElementById("fsNotify").style.display = "flex";
                    document.getElementById("fsText").innerText = "Wave " + (this.wave + 1);
                }
            }

            this.timer++;
            if (this.timer > this.displayTime) {
                document.getElementById("fsNotify").style.display = "none";
                this.display = false;
                this.timer = 0;

                if (this.last) {
                    this.last = false;
                    this.start = true;

                    this.mapData.curWave = 0;
                    this.mapData.curStage += 1;
                }
            }
        }
    }

    countEnemies() {
        let count = 0;

        entities.forEach((entity) => {
            if (entity.enemyType) {
                count++;
            }
        })

        return count;
    }
}