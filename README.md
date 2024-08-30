<div align="center">
  <img align="center" width="140" height="140" src="https://user-images.githubusercontent.com/27209422/68217890-b45a8100-ffe3-11e9-999d-7e8ab2cf685a.png" />
  <h2>Flipswitch.js - <a href="https://raw.githack.com/bornfight-studio/flipswitch/master/demo/index.html">DEMO</a></h2>
  <blockquote>Pure ES6 library for clipping fixed positioned elements on scroll</blockquote>
  
  [![npm version](https://badge.fury.io/js/%40bornfight%2Fflipswitch.svg)](https://badge.fury.io/js/%40bornfight%2Fflipswitch)
  ![GitHub last commit](https://img.shields.io/github/last-commit/bornfight-studio/flipswitch)
  [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/bornfight-studio/flipswitch/issues)
 [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
  
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
npm i @bornfight/flipswitch
```

- include flipswitch to your __JS__ and __SCSS__ after running __npm install__

###### JS
``` JS
import Flipswitch from "@bornfight/flipswitch";
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

##### HTML markup
- `data-flipswitch-class` doesn't need to be different for every section (could be something like dark and light) 

```HTML
<p class="js-flipswitch-element">
    Flipswitch element
</p>

<section class="js-flipswitch-section" data-flipswitch-class="first-section">
    ...
</section>
<section class="js-flipswitch-section" data-flipswitch-class="second-section">
    ...
</section>
<section class="js-flipswitch-section" data-flipswitch-class="fourth-section">
    ...
</section>

<!-- default section -->
<section class="js-flipswitch-section">
    ...
</section>
```

##### Basic usage
- element needs to have ```js-flipswitch-element``` class
- section needs to have ```js-flipswitch-section``` class and ```data-flipswitch-class``` attribute 
- ```data-flipswitch-class``` is a flag that will define witch element will be clipped
- library will use ```requestAnimationFrame()``` (not scroll event)
- element will be wrapped and positioned to body

```JS
new Flipswitch();
```

##### Advanced usage
- below example will use scroll event
- element will be wrapped and positioned to ```js-parent```
- element is offset by 50px from left and -50px from top

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
parentClass | string | element parent | 'js-parent' | Element will be wrapped and moved to that parent and not to initial parent element 
elementClass | string | 'js-flipswitch-element' | 'js-element' | Changes default class
sectionsClass | string | 'js-flipswitch-section' | 'js-section' | Changes default class 
useScroll | boolean | false | true | Use scroll event and not ```requestAnimationFrame()```
offsetX | number | 0 | 50 | Offsets element from top 
offsetY | number | 0 | -50 | Offsets element from left 
throttle | number | 0 | 10 | Refreshes element position every XY milliseconds (only available if ```useScroll: false```)
data-flipswitch-class | html attr |   | ```data-flipswitch-class="red-section"``` | flag that will define witch element will be clipped

## 🚀 Useful to know

1. every section needs to have ```data-flipswitch-class``` (look 4.) and section class (default is ```js-flipswitch-section```)
2. ```data-flipswitch-class``` is added to element wrapper as modifier class
3. element needs to be ```position: fixed```
4. every second section doesn't need to have ```data-flipswitch-class``` - default class (and element clone) is available
5. every element needs to have __it's own__ Flipswitch instance (and different sections and element classes)
6. __throttle__ is only available if useScroll is __false__ and value have to be in milliseconds
7. first section on page needs to have class ```js-flipswitch-section``` but doesn't needs to have ```data-flipswitch-class``` attr

