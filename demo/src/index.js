import './index.scss';

import Flipswitch from '../../dist/flipswitch';

new Flipswitch({
    parentClass: 'js-parent',
    elementClass: 'js-element',
    sectionsClass: 'js-section',
    useScroll: false,
    offsetX: 0,
    offsetY: 0,
    throttle: 0,
});
