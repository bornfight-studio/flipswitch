import "../scss/flipswitch.scss";
import {AddWrappers} from "./components/AddWrappers";
import {ScrollController} from "./components/ScrollController";
import {ErrorMessages} from "./enums/ErrorMessages";
import {Options} from "./interfaces/OptionsInterface";

/*
 * Flipswitch v 2.0.0
 * Repo: https://github.com/bornfight/flipswitch
 * Author: Bornfight
 *
 * Year: 2020
 */

export default class Flipswitch {
    /**
     * @param {string} elementClass (element class)
     * @param {string} sectionsClass (sections class)
     * @param options
     * @param {number} options.throttle (delay between calls - works only if useScroll is false / time unit milliseconds)
     * @param {number} options.offsetY (offset in px)
     * @param {number} options.offsetX (offset in px)
     * @param {boolean} options.useScroll (requestAnimationFrame or scroll event)
     */

    private readonly defaults: Options = {};
    private readonly element?: HTMLElement;
    private readonly sections: NodeListOf<HTMLElement>;
    private readonly variations: [];

    constructor(options: Options = {}) {
        const _defaults = {
            parentClass: "",
            elementClass: "js-flipswitch-element",
            sectionsClass: "js-flipswitch-section",
            useScroll: false,
            offsetX: 0,
            offsetY: 0,
            throttle: 0,
        };

        this.defaults = Object.assign({}, _defaults, options);

        this.element = document.querySelector(`.${this.defaults.elementClass}`) as HTMLElement;

        if (this.element == null) {
            throw new Error(ErrorMessages.ELEMENT_MISSING);
        }

        this.sections = document.querySelectorAll(`.${this.defaults.sectionsClass}`);

        this.variations = [];

        for (let i = 0; i < this.sections.length; i++) {
            const classVal = this.sections[i].dataset.flipswitchClass;
            // @ts-ignore
            if (!this.variations.includes(classVal)) {
                // @ts-ignore
                this.variations.push(classVal);
            }
        }

        if (this.sections == null || this.sections.length <= 0) {
            throw new Error(ErrorMessages.SECTIONS_MISSING);
        }

        new Promise((resolve, reject) => {
            new AddWrappers(this.defaults, this.element, this.sections, this.variations, resolve);
        }).then(() => {
            new ScrollController(this.defaults, this.defaults.elementClass, this.sections, this.variations);
        });

    }

}
