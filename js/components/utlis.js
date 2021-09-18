import BaseComponent from "./BaseComponent.js";

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * 
 * @param {HTMLElement} element 
 * @param {Array<BaseComponent>} components
 */
export function appendTo($element, ...components) {
    for(let component of components) {
        let child = component.refresh();
        // console.log(child);
        $element.appendChild(child);
    }
}