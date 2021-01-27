/**
 * Each system handles entities with specific components. By extending this class, we specify which entities
 * needs to be filtered by looking at what components we need for the system
 */
export default class System {
    constructor(componentNames) {
        this.filteredEntities = [];
        // List of components names to filter (ex. ["health", "keyInput", "mouseInput"])
        this.filteringComp = componentNames;
    }

    filterEntities() {
        this.filteredEntities = entities.filter((entity) => {
            let shouldFilter = false;

            // If the entity contains component we are looking for, shouldn't filter out that entity (meaning should return true)
            this.filteringComp.forEach((component) => {
                if (entity[component]) {
                    shouldFilter = true;
                }
            })

            return shouldFilter;
        })
    }
}