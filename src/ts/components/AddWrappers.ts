import {Options} from "../interfaces/OptionsInterface";

export class AddWrappers {
    private readonly element?: HTMLElement = undefined;
    private readonly sections?: NodeListOf<HTMLElement> = undefined;
    private readonly defaults: Options;

    constructor(defaults: Options, element: HTMLElement | undefined, sections: NodeListOf<HTMLElement>, resolve: any) {
        this.element = element;
        this.sections = sections;
        this.defaults = defaults;

        this.init(resolve);
    }

    private init(resolve: any): void {
        // adding wrappers around main object
        if (this.element === undefined) {
            return;
        }

        // check if element have transform props
        const style: CSSStyleDeclaration = window.getComputedStyle(this.element as HTMLElement);
        let transformX: number = 0;
        let transformY: number = 0;
        if (style.transform != null) {
            const matrix: DOMMatrix = new WebKitCSSMatrix(style.transform);
            transformX = matrix.m41;
            transformY = matrix.m42;
        }

        const mainWrapper = document.createElement("div");
        mainWrapper.classList.add("js-flipswitch-main-wrapper", "c-flipswitch__main-wrapper");

        // position main wrapper to element position
        mainWrapper.style.position = "fixed";
        if (this.defaults.offsetY != null) {
            mainWrapper.style.top = `${this.element.offsetTop + this.defaults.offsetY}px`;
        } else {
            mainWrapper.style.top = `${this.element.offsetTop}px`;
        }

        if (this.defaults.offsetX != null) {
            mainWrapper.style.left = `${this.element.offsetLeft + this.defaults.offsetX}px`;
        } else {
            mainWrapper.style.left = `${this.element.offsetLeft}px`;
        }
        mainWrapper.style.width = `${this.element.offsetWidth}px`;
        mainWrapper.style.height = `${this.element.offsetHeight}px`;
        mainWrapper.style.transform = `translate(${transformX}px, ${transformY}px)`;

        // position element inside wrappers
        this.element.style.position = "relative";
        this.element.style.top = "0px";
        this.element.style.left = "0px";
        // remove transform if has any
        this.element.style.transform = "none";

        const elementTopWrapper = document.createElement("div");
        elementTopWrapper.classList.add("js-flipswitch-element-top-wrapper", "c-flipswitch__element-top-wrapper");

        const elementWrapper = document.createElement("div");
        elementWrapper.classList.add("js-flipswitch-element-wrapper", "c-flipswitch__element-wrapper");

        const parent: HTMLElement = this.element.parentElement as HTMLElement;

        const iterateItemsData = {
            main_wrapper: mainWrapper,
            element_top_wrapper: elementTopWrapper,
            element_wrapper: elementWrapper,
            resolve_fun: resolve,
        };

        this.iterateItems(iterateItemsData);

        parent.removeChild(this.element);

        if (this.defaults.parentClass === "") {
            parent.appendChild(mainWrapper);
        } else {
            const newParent: HTMLElement = document.querySelector(`.${this.defaults.parentClass}`) as HTMLElement;
            const newParents: NodeList = document.querySelectorAll<HTMLElement>(`.${this.defaults.parentClass}`);

            if (newParents.length > 1) {
                throw new Error("There is multiple elements with parentClass");
                return;
            } else if (newParents.length === 0) {
                throw new Error("There is no element with parentClass");
                return;
            }
            newParent.appendChild(mainWrapper);
        }
    }

    private iterateItems(iterateItemsData: Options): void {
        const mainWrapper = iterateItemsData.main_wrapper;
        const elementTopWrapper = iterateItemsData.element_top_wrapper;
        const elementWrapper = iterateItemsData.element_wrapper;
        const resolve = iterateItemsData.resolve_fun;

        if (this.sections == null ||
            this.element == null ||
            elementTopWrapper == null ||
            elementWrapper == null ||
            mainWrapper == null) {
            return;
        }

        for (let i: number = 0; i < this.sections.length + 1; i++) {
            const clonedTopWrapper = elementTopWrapper.cloneNode(true) as HTMLElement;
            const clonedWrapper = elementWrapper.cloneNode(true);
            const clonedElement: HTMLElement = this.element.cloneNode(true) as HTMLElement;

            if (i === this.sections.length) {
                clonedWrapper.appendChild(clonedElement);
                clonedTopWrapper.appendChild(clonedWrapper);
                clonedTopWrapper.classList.add("c-flipswitch__element-top-wrapper--default");
                mainWrapper.appendChild(clonedTopWrapper);
            } else {
                const elementClass: string | undefined = this.sections[i].dataset.flipswitchClass || "";

                if (elementClass !== "") {
                    clonedElement.classList.add(elementClass);
                }
                clonedWrapper.appendChild(clonedElement);
                clonedTopWrapper.appendChild(clonedWrapper);
                mainWrapper.appendChild(clonedTopWrapper);
            }
        }

        resolve(true);
    }
}
