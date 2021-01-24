import { v4 as uuidv4 } from 'uuid';

export default class Entity {
    constructor(name) {
        this.id = uuidv4();
        this.name = name;
    }

    /**
     * @param {string} component - component that is being added to list
     * @return {Entity} - Entity object used for checking
     */
    addComponent(component) {
        this[component.name] = component;
        return this;
    }

    /**
     * @param {string} componentName - name of deleting component
     * @return {Entity} - Entity object used for checking
     */
    removeComponent(componentName) {
        delete this[componentName];
        return this;
    }
}