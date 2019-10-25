export interface Options {
    parentClass?: string;
    elementClass?: string;
    sectionsClass?: string;
    useScroll?: boolean;
    offsetX?: number;
    offsetY?: number;
    throttle?: number;

    main_wrapper?: HTMLElement;
    element_top_wrapper?: HTMLElement;
    element_wrapper?: HTMLElement;
    resolve_fun?: any;
}
