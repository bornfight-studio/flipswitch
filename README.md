<div align="center">
  <img align="center" width="140" height="140" src="./logo.svg" />
  <h2>Flipswitch.js</h2>
  <blockquote>Pure ES6 library for clipping fixed positioned elements on scroll</blockquote>
  
  [![Node version](https://img.shields.io/node/v/[NPM-MODULE-NAME].svg?style=flat)](http://nodejs.org/download/) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/bornfight/flipswitch/issues)
  
</div>

## 🔨️ Why ![start with why](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat)

- allows to clip fixed elements trough sections on scroll
- it's simple to use
- lightweight (minified ~8kb)
- fast and customizable
- no __dependencies__

## 📦 Getting Started

- install flipswitch trough __npm__ or pull ti from git

```
npm i flipswitch
```

- include flipswitch to your __JS__ and __SCSS__ after running __npm install__

###### JS
``` JS
import Flipswitch from 'flipswitch';
```

###### SCSS
``` SCSS
@import "~flipswitch/src/scss/flipswitch.scss";
```
###### or CSS  
``` HTML
<link rel="stylesheet" href="flipswitch.css">
```

## 💎 Customization

##### Basic usage
- element needs to have ```js-flipswitch-element``` class
- sections needs to have ```js-flipswitch-section``` class and ```data-flipswitch-class``` attribute 
- ```data-flipswitch-class``` is a flag that will define witch element will be clipped
- library will use ```requestAnimationFrame()``` (not scroll event)
- element will be wrapped and position to body

```JS
new Flipswitch();
```

##### Advanced usage
- library will use scroll event
- element will be wrapped and position to ```js-parent```
- element is offsetted from left 50px and from top -50px

```JS
new Flipswitch({
    parentClass: 'js-parent',
    elementClass: 'js-element',
    sectionsClass: 'js-section',
    useScroll: true,
    offsetX: 50,
    offsetY: -50
});
```

## ✅ Properties

Option | Type | Default | Example | Description
------ | ---- | ------- | ------- | -----------
parentClass | string | body | 'js-parent' | Element will be wrapped and moved to that parent and not to body 
elementClass | string | 'js-flipswitch-element' | 'js-element' | Changes default class
sectionsClass | string | 'js-flipswitch-section' | 'js-section' | Changes default class 
useScroll | boolean | false | true | Use scroll event and not ```requestAnimationFrame()```
offsetX | number | 0 | 50 | Enables elements connecting 
offsetY | number | 0 | -50 | Enables elements connecting 
throttle | number | 0 | 10 | Enables elements connecting (only available if ```useScroll: false```)
data-flipswitch-class | html attr |   | ```data-flipswitch-class="red-section"``` | flag that will define witch element will be clipped

## 🚀 Useful to know

- every section needs to have ```data-flipswitch-class``` and section class (default is ```js-flipswitch-section```)
- ```data-flipswitch-class``` is added to element wrapper as modifier class
- element needs to be ```position: fixed ```
- every second section doesn't need to have ```data-flipswitch-class``` - default class (and element clone) is available
- every element need to have __it's own__ Flipswitch instance (and different classes - sections and element classes)
- __throttle__ is only available if useScroll is __false__

