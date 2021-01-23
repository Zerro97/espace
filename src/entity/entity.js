class Entity {
    constructor() {
        this.id = 0;
        this.components = {};
    }

    addComponent(component) {
        this.components[component.name] = component;
        return this;
    }
}