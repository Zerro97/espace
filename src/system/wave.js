import System from "./system";

export default class Wave extends System {
    constructor() {
        super();
        this.mapData = null;
        this.last = false;
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
        if (this.mapData[this.mapData.curAct][this.mapData.curStage].last === 0) {
            this.last = true;
        }

        // Increment wave if enemies are less than 3
        if (!this.last && this.countEnemies() < 3) {
            if (this.timer === 0) {
                this.mapData.spawned = false;
                this.display = true;

                this.mapData.curWave += 1;

                if (this.mapData.curWave === this.mapData[this.mapData.curAct][this.mapData.curStage].last) {
                    this.last = true;
                }
            }
        }
        // Increment stage when clearing all enemies at last wave
        else if (this.last && this.countEnemies() === 0) {
            this.last = false;
            this.mapData.spawned = false;
            this.display = true;

            this.mapData.curWave = 0;
            this.mapData.curStage += 1;
        }

        // Display the notification for 100 frame
        if (this.display) {
            if (this.timer === 0) {
                if (this.last) {
                    document.getElementById("fsNotify").style.display = "flex";
                    document.getElementById("fsText").innerText = "FINAL";
                } else {
                    document.getElementById("fsNotify").style.display = "flex";
                    document.getElementById("fsText").innerText = "Wave " + (this.mapData.curWave + 1);
                }
            }

            this.timer++;
            if (this.timer > this.displayTime) {
                document.getElementById("fsNotify").style.display = "none";
                this.display = false;
                this.timer = 0;
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