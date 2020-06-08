import {ErrorMessages} from "../enums/ErrorMessages";
import {Options} from "../interfaces/OptionsInterface";

export class ScrollController {
    private readonly elements: NodeListOf<HTMLElement>;
    private readonly sections?: NodeListOf<HTMLElement> = undefined;
    private readonly mainWrapper: HTMLElement = document.querySelector(".js-flipswitch-main-wrapper") as HTMLElement;
    private readonly elementWrappers: NodeListOf<HTMLElement> = document.querySelectorAll(".js-flipswitch-element-wrapper");
    private readonly elementTopWrappers: NodeListOf<HTMLElement> = document.querySelectorAll(".js-flipswitch-element-top-wrapper");
    private defaultSection: boolean = false;
    private readonly transformOnX: number = 0;
    private readonly defaults: Options;
    private readonly variations: [];

    constructor(defaults: Options, element: string | undefined, sections: NodeListOf<HTMLElement>, variations: []) {
        this.elements = document.querySelectorAll(`.${element}`);
        this.sections = sections;
        this.defaults = defaults;
        this.variations = variations;

        // check if element have transform props
        if (this.mainWrapper == null) {
            throw new Error(ErrorMessages.ONLY_ONE_PARENT_ELEMENT);
        }
        const style: CSSStyleDeclaration = window.getComputedStyle(this.mainWrapper);
        if (style.transform != null) {
            const matrix: DOMMatrix = new WebKitCSSMatrix(style.transform);
            this.transformOnX = matrix.m42;
        }

        this.init();
    }

    private init(): void {
        const fixedPosition = this.mainWrapper.offsetTop;
        const fixedHeight = this.mainWrapper.offsetHeight;
        const fixedFullOffset = fixedPosition + fixedHeight;

        if (this.sections == null || this.sections.length <= 0) {
            throw new Error(ErrorMessages.SECTIONS_MISSING);
        }

        this.checkScrollPosition(fixedPosition, fixedHeight, fixedFullOffset);

        if (this.defaults.useScroll) {
            window.addEventListener("scroll", () => {
                this.checkScrollPosition(fixedPosition, fixedHeight, fixedFullOffset);
            });
        }

    }

    private checkScrollPosition(fixedPosition: number, fixedHeight: number, fixedFullOffset: number) {
        if (this.sections == null || this.sections.length <= 0) {
            throw new Error(ErrorMessages.SECTIONS_MISSING);
        }

        for (let i: number = 0; i < this.sections.length; i++) {
            this.iterateSections(fixedHeight, fixedPosition, i, fixedFullOffset);
        }

        if (!this.defaults.useScroll) {
            if (this.defaults.throttle != null && this.defaults.throttle !== 0) {
                setTimeout(() => {
                    requestAnimationFrame(() => this.checkScrollPosition(fixedPosition, fixedHeight, fixedFullOffset));
                }, this.defaults.throttle);
            } else {
                requestAnimationFrame(() => this.checkScrollPosition(fixedPosition, fixedHeight, fixedFullOffset));
            }
        }
    }

    private iterateSections(fixedHeight: number, fixedPosition: number, i: number, fixedFullOffset: number): void {
        if (this.sections == null || this.sections.length <= 0) {
            throw new Error(ErrorMessages.SECTIONS_MISSING);
        }

        const toCrossPosition = this.sections[i].getBoundingClientRect().top - this.transformOnX;
        const percentage: number = this.getPercentage(this.sections[i].offsetHeight + toCrossPosition -
            fixedPosition, fixedHeight);
        const index = this.findIndex(this.sections[i]);

        if (fixedFullOffset > toCrossPosition && fixedFullOffset < toCrossPosition + fixedHeight) {
            const percentage: number = this.getPercentage(toCrossPosition - fixedPosition, fixedHeight);

            if (index > 0 && !this.defaultSection) {
                if (this.sections[i].offsetTop > this.sections[i - 1].offsetTop + this.sections[i - 1].offsetHeight) {
                    this.positionElement(this.elementTopWrappers[index - 1], this.elementWrappers[index - 1], 100);
                } else {
                    this.positionElement(this.elementTopWrappers[index - 1], this.elementWrappers[index - 1], percentage);
                }
            }

            this.elementTopWrappers[index].style.transform = `translateY(${100 - percentage}%)`;
            this.elementWrappers[index].style.transform = `translateY(-${100 - percentage}%)`;
            this.setInvisibleWrappers(index);
        } else if (
            -(toCrossPosition - fixedPosition) > (this.sections[index].offsetHeight - fixedHeight) &&
            Math.abs(toCrossPosition - fixedPosition) < this.sections[index].offsetHeight) {

            if (index > 0 && !this.defaultSection) {
                this.positionElement(this.elementTopWrappers[index - 1], this.elementWrappers[index - 1], percentage);
            }
            this.positionElement(this.elementTopWrappers[index], this.elementWrappers[index], percentage);
            this.setInvisibleWrappers(index);
        } else if (
            (toCrossPosition - fixedPosition) < 0 &&
            Math.abs(toCrossPosition - fixedPosition) < this.sections[i].offsetHeight - fixedHeight) {

            this.setInvisibleWrappers(index);
            this.elementTopWrappers[index].style.transform = `translateY(0%)`;
            this.elementWrappers[index].style.transform = `translateY(0%)`;
        } else if (
            -(toCrossPosition - fixedPosition) > this.sections[i].offsetHeight &&
            -(toCrossPosition - fixedPosition) < this.sections[i].offsetHeight +
            this.sections[i].offsetHeight - fixedHeight) {

            this.defaultSection = true;

            if (i > 0 && !this.defaultSection) {
                this.positionElement(this.elementTopWrappers[index - 1], this.elementWrappers[index - 1], percentage);
            }

            this.positionElement(this.elementTopWrappers[index], this.elementWrappers[index], percentage);

            for (let j: number = 0; j < this.variations.length; j++) {
                this.elementTopWrappers[j].style.transform = `translateY(-100%)`;
                this.elementWrappers[j].style.transform = `translateY(-100%)`;
            }

            this.setInvisibleWrappers(index);
        }
    }

    private setInvisibleWrappers(i: number) {
        if (i > 0 && this.sections !== undefined) {
            for (let j: number = 0; j < this.variations.length; j++) {
                if (j < i && j < i - 1) {
                    this.elementWrappers[j].style.transform = `translateY(-100%)`;
                    this.elementTopWrappers[j].style.transform = `translateY(100%)`;
                } else if (j > i) {
                    this.elementWrappers[j].style.transform = `translateY(100%)`;
                    this.elementTopWrappers[j].style.transform = `translateY(-100%)`;
                }
            }
        } else if (this.sections !== undefined) {
            for (let j: number = 0; j < this.variations.length; j++) {
                if (j > i) {
                    this.elementWrappers[j].style.transform = `translateY(100%)`;
                    this.elementTopWrappers[j].style.transform = `translateY(-100%)`;
                }
            }
        }
    }

    private findIndex(section: HTMLElement) {
        return this.variations.findIndex((index) => index === section.dataset.flipswitchClass);
    }

    private getPercentage(num: number, totalDuration: number): number {
        return 100 - ((100 / totalDuration) * num);
    }

    private positionElement(elementTopWrapper: HTMLElement, elementWrapper: HTMLElement, offset: number): void {
        if (offset >= 100 && offset <= -100) {
            return;
        }
        elementTopWrapper.style.transform = `translateY(-${offset}%)`;
        elementWrapper.style.transform = `translateY(${offset}%)`;
    }
}
