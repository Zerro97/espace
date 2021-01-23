import { v4 as uuidv4 } from 'uuid';

class Entity {
    constructor() {
        this.id = uuidv4();
        this.components = {};
    }

    /**
     * @param {string} component - component that is being added to list
     * @return {Entity} - Entity object used for checking
     */
    addComponent(component) {
        this.components[component.name] = component;
        return this;
    }

    /**
     * @param {string} componentName - name of deleting component
     * @return {Entity} - Entity object used for checking
     */
    removeComponent(componentName) {
        delete this.components[componentName];
        return this;
    }
}