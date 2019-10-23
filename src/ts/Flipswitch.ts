import '../scss/flipswitch.scss';
import {AddWrappers} from './components/AddWrappers';
import {ScrollController} from './components/ScrollController';
import {Options} from "./interfaces/OptionsInterface";

/*
 * Midnight Rewrite v 1.0.0
 * Repo: https://github.com/bornfight/flipswitch
 * Author: Bornfight
 *
 * Year: 2019
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
    private readonly element: HTMLElement | undefined = undefined;
    private readonly sections: NodeListOf<HTMLElement>;

    constructor(options: Options = {}) {
        const _defaults = {
            elementClass: 'js-flipswitch-element',
            sectionsClass: 'js-flipswitch-section',
            useScroll: false,
            offsetX: 0,
            offsetY: 0,
            throttle: 0,
        };

        this.defaults = Object.assign({}, _defaults, options);

        this.element = document.querySelector(`.${this.defaults.elementClass}`) as HTMLElement;

        this.sections = document.querySelectorAll(`.${this.defaults.sectionsClass}`);

        if (this.element !== undefined) {
            this.init();

            new Promise((resolve, reject) => {
                new AddWrappers(this.defaults, this.element, this.sections, resolve);
            }).then(() => {
                new ScrollController(this.defaults, this.defaults.elementClass, this.sections);
            });
        } else {
            throw new Error('Missing element or sections selector (class)!');
        }

    }

    /**
     * Initialization
     */
    private init(): void {
        console.log("Flipswitch initialised!");
    }
}
