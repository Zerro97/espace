export default class Input {
    constructor() {
        this.filteredEntity;
    }

    // TODO: Update filtered entities list whenever global entity list changes
    updateFilteredEntity() {

    }

    setup() {
        var filteredEntities = entities.filter((entity) => {
            return entity.keyInput || entity.mouseInput
        });

        document.body.addEventListener("keypress", (e) => {
            filteredEntities.forEach((entity) => {
                if (entity.keyInput !== undefined && !entity.keyInput.keys.includes(e.key)) {
                    entity.keyInput.keys.push(e.key);
                }
            })
        });

        document.body.addEventListener("keyup", (e) => {
            filteredEntities.forEach((entity) => {
                if (entity.keyInput !== undefined) {
                    entity.keyInput.keys = entity.keyInput.keys.filter((key) => {
                        return key !== e.key;
                    });
                }
            })
        });

        document.body.addEventListener("mousemove", (e) => {
            filteredEntities.forEach((entity) => {
                if (entity.mouseInput !== undefined) {
                    entity.mouseInput.x = e.x;
                    entity.mouseInput.y = e.y;
                }
            })
        });

        document.body.addEventListener("mousedown", (e) => {
            filteredEntities.forEach((entity) => {
                if (entity.mouseInput !== undefined) {

                }
            })
        });
    }
}