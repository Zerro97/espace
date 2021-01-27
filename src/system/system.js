export default class System {
    constructor(componentNames) {
        this.filteredEntities = [];
        // List of components names to filter (ex. ["health", "keyInput", "mouseInput"])
        this.filteringComp = componentNames;
    }

    updateFiltering() {
        this.filteredEntities = entities.filter((entity) => {
            let shouldFilter = false;

            // If the entity contains component we are looking for, shouldn't filter out (meaning should return true)
            this.filteringComp.forEach((component) => {
                if (entity[component]) {
                    shouldFilter = true;
                }
            })

            return shouldFilter;
        })
    }
}