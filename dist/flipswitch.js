(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Flipswitch", [], factory);
	else if(typeof exports === 'object')
		exports["Flipswitch"] = factory();
	else
		root["Flipswitch"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/Flipswitch.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scss/flipswitch.scss":
/*!**********************************!*\
  !*** ./src/scss/flipswitch.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://Flipswitch/./src/scss/flipswitch.scss?");

/***/ }),

/***/ "./src/ts/Flipswitch.ts":
/*!******************************!*\
  !*** ./src/ts/Flipswitch.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Flipswitch; });\n/* harmony import */ var _scss_flipswitch_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/flipswitch.scss */ \"./src/scss/flipswitch.scss\");\n/* harmony import */ var _scss_flipswitch_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_flipswitch_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AddWrappers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AddWrappers */ \"./src/ts/components/AddWrappers.ts\");\n/* harmony import */ var _components_ScrollController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ScrollController */ \"./src/ts/components/ScrollController.ts\");\n\n\n\n/*\n * Midnight Rewrite v 1.0.0\n * Repo: https://github.com/bornfight/flipswitch\n * Author: Bornfight\n *\n * Year: 2019\n */\n\nclass Flipswitch {\n  constructor(options = {}) {\n    /**\n     * @param {string} elementClass (element class)\n     * @param {string} sectionsClass (sections class)\n     * @param options\n     * @param {number} options.throttle (delay between calls - works only if useScroll is false / time unit milliseconds)\n     * @param {number} options.offsetY (offset in px)\n     * @param {number} options.offsetX (offset in px)\n     * @param {boolean} options.useScroll (requestAnimationFrame or scroll event)\n     */\n    this.defaults = {};\n    this.element = undefined;\n    const _defaults = {\n      elementClass: 'js-flipswitch-element',\n      sectionsClass: 'js-flipswitch-section',\n      useScroll: false,\n      offsetX: 0,\n      offsetY: 0,\n      throttle: 0\n    };\n    this.defaults = Object.assign({}, _defaults, options);\n    this.element = document.querySelector(`.${this.defaults.elementClass}`);\n    this.sections = document.querySelectorAll(`.${this.defaults.sectionsClass}`);\n\n    if (this.element !== undefined) {\n      this.init();\n      new Promise((resolve, reject) => {\n        new _components_AddWrappers__WEBPACK_IMPORTED_MODULE_1__[\"AddWrappers\"](this.defaults, this.element, this.sections, resolve);\n      }).then(() => {\n        new _components_ScrollController__WEBPACK_IMPORTED_MODULE_2__[\"ScrollController\"](this.defaults, this.defaults.elementClass, this.sections);\n      });\n    } else {\n      throw new Error('Missing element or sections selector (class)!');\n    }\n  }\n  /**\n   * Initialization\n   */\n\n\n  init() {\n    console.log(\"Flipswitch initialised!\");\n  }\n\n}\n\n//# sourceURL=webpack://Flipswitch/./src/ts/Flipswitch.ts?");

/***/ }),

/***/ "./src/ts/components/AddWrappers.ts":
/*!******************************************!*\
  !*** ./src/ts/components/AddWrappers.ts ***!
  \******************************************/
/*! exports provided: AddWrappers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddWrappers\", function() { return AddWrappers; });\nclass AddWrappers {\n  constructor(defaults, element, sections, resolve) {\n    this.element = undefined;\n    this.sections = undefined;\n    this.element = element;\n    this.sections = sections;\n    this.defaults = defaults;\n    this.init(resolve);\n  }\n\n  init(resolve) {\n    // adding wrappers around main object\n    if (this.element === undefined) {\n      return;\n    } // check if element have transform props\n\n\n    const style = window.getComputedStyle(this.element);\n    let transformX = 0;\n    let transformY = 0;\n\n    if (style.transform != null) {\n      const matrix = new WebKitCSSMatrix(style.transform);\n      transformX = matrix.m41;\n      transformY = matrix.m42;\n    }\n\n    const mainWrapper = document.createElement('div');\n    mainWrapper.classList.add('js-flipswitch-main-wrapper', 'c-flipswitch__main-wrapper'); // position main wrapper to element position\n\n    mainWrapper.style.position = 'fixed';\n\n    if (this.defaults.offsetY != null) {\n      mainWrapper.style.top = `${this.element.offsetTop + this.defaults.offsetY}px`;\n    } else {\n      mainWrapper.style.top = `${this.element.offsetTop}px`;\n    }\n\n    if (this.defaults.offsetX != null) {\n      mainWrapper.style.left = `${this.element.offsetLeft + this.defaults.offsetX}px`;\n    } else {\n      mainWrapper.style.left = `${this.element.offsetLeft}px`;\n    }\n\n    mainWrapper.style.width = `${this.element.offsetWidth}px`;\n    mainWrapper.style.height = `${this.element.offsetHeight}px`;\n    mainWrapper.style.transform = `translate(${transformX}px, ${transformY}px)`; // position element inside wrappers\n\n    this.element.style.position = 'relative';\n    this.element.style.top = '0px';\n    this.element.style.left = '0px'; // remove transform if has any\n\n    this.element.style.transform = \"none\";\n    const elementTopWrapper = document.createElement('div');\n    elementTopWrapper.classList.add('js-flipswitch-element-top-wrapper', 'c-flipswitch__element-top-wrapper');\n    const elementWrapper = document.createElement('div');\n    elementWrapper.classList.add('js-flipswitch-element-wrapper', 'c-flipswitch__element-wrapper');\n    const parent = this.element.parentElement;\n    this.iterateItems(mainWrapper, elementTopWrapper, elementWrapper, resolve);\n    parent.removeChild(this.element);\n    parent.appendChild(mainWrapper);\n  }\n\n  iterateItems(mainWrapper, elementTopWrapper, elementWrapper, resolve) {\n    if (this.sections === undefined || this.element === undefined) {\n      return;\n    }\n\n    for (let i = 0; i < this.sections.length + 1; i++) {\n      const clonedTopWrapper = elementTopWrapper.cloneNode(true);\n      const clonedWrapper = elementWrapper.cloneNode(true);\n      const clonedElement = this.element.cloneNode(true);\n\n      if (i === this.sections.length) {\n        clonedWrapper.appendChild(clonedElement);\n        clonedTopWrapper.appendChild(clonedWrapper);\n        clonedTopWrapper.classList.add('c-flipswitch__element-top-wrapper--default');\n        mainWrapper.appendChild(clonedTopWrapper);\n      } else {\n        const elementClass = this.sections[i].dataset.flipswitchClass || '';\n\n        if (elementClass !== '') {\n          clonedElement.classList.add(elementClass);\n        }\n\n        clonedWrapper.appendChild(clonedElement);\n        clonedTopWrapper.appendChild(clonedWrapper);\n        mainWrapper.appendChild(clonedTopWrapper);\n      }\n    }\n\n    resolve(true);\n  }\n\n}\n\n//# sourceURL=webpack://Flipswitch/./src/ts/components/AddWrappers.ts?");

/***/ }),

/***/ "./src/ts/components/ScrollController.ts":
/*!***********************************************!*\
  !*** ./src/ts/components/ScrollController.ts ***!
  \***********************************************/
/*! exports provided: ScrollController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollController\", function() { return ScrollController; });\nclass ScrollController {\n  constructor(defaults, element, sections) {\n    this.sections = undefined;\n    this.mainWrapper = document.querySelector('.js-flipswitch-main-wrapper');\n    this.elementWrappers = document.querySelectorAll('.js-flipswitch-element-wrapper');\n    this.elementTopWrappers = document.querySelectorAll('.js-flipswitch-element-top-wrapper');\n    this.defaultSection = false;\n    this.transformOnX = 0;\n    this.elements = document.querySelectorAll(`.${element}`);\n    this.sections = sections;\n    this.defaults = defaults; // check if element have transform props\n\n    const style = window.getComputedStyle(this.mainWrapper);\n\n    if (style.transform != null) {\n      const matrix = new WebKitCSSMatrix(style.transform);\n      this.transformOnX = matrix.m42;\n    }\n\n    this.init();\n  }\n\n  init() {\n    const fixedPosition = this.mainWrapper.offsetTop;\n    const fixedHeight = this.mainWrapper.offsetHeight;\n    const fixedFullOffset = fixedPosition + fixedHeight;\n\n    if (this.sections === undefined) {\n      return;\n    }\n\n    this.checkScrollPosition(fixedPosition, fixedHeight, fixedFullOffset);\n\n    if (this.defaults.useScroll) {\n      window.addEventListener('scroll', () => {\n        this.checkScrollPosition(fixedPosition, fixedHeight, fixedFullOffset);\n      });\n    }\n  }\n\n  checkScrollPosition(fixedPosition, fixedHeight, fixedFullOffset) {\n    if (this.sections === undefined) {\n      return;\n    }\n\n    for (let i = 0; i < this.sections.length; i++) {\n      this.iterateSections(fixedHeight, fixedPosition, i, fixedFullOffset);\n    }\n\n    if (!this.defaults.useScroll) {\n      if (this.defaults.throttle != null && this.defaults.throttle !== 0) {\n        setTimeout(() => {\n          requestAnimationFrame(() => this.checkScrollPosition(fixedPosition, fixedHeight, fixedFullOffset));\n        }, this.defaults.throttle);\n      } else {\n        requestAnimationFrame(() => this.checkScrollPosition(fixedPosition, fixedHeight, fixedFullOffset));\n      }\n    }\n  }\n\n  iterateSections(fixedHeight, fixedPosition, i, fixedFullOffset) {\n    if (this.sections === undefined) {\n      return;\n    }\n\n    const toCrossPosition = this.sections[i].getBoundingClientRect().top - this.transformOnX;\n    const percentage = this.getPercentage(this.sections[i].offsetHeight + toCrossPosition - fixedPosition, fixedHeight);\n\n    if (fixedFullOffset > toCrossPosition && fixedFullOffset < toCrossPosition + fixedHeight) {\n      let percentage = this.getPercentage(toCrossPosition - fixedPosition, fixedHeight);\n\n      if (i > 0 && !this.defaultSection) {\n        if (this.sections[i].offsetTop > this.sections[i - 1].offsetTop + this.sections[i - 1].offsetHeight) {\n          this.positionElement(this.elementTopWrappers[i - 1], this.elementWrappers[i - 1], 100);\n        } else {\n          this.positionElement(this.elementTopWrappers[i - 1], this.elementWrappers[i - 1], percentage);\n        }\n      }\n\n      this.elementTopWrappers[i].style.transform = `translateY(${100 - percentage}%)`;\n      this.elementWrappers[i].style.transform = `translateY(-${100 - percentage}%)`;\n      this.setInvisibleWrappers(i);\n    } else if (-(toCrossPosition - fixedPosition) > this.sections[i].offsetHeight - fixedHeight && Math.abs(toCrossPosition - fixedPosition) < this.sections[i].offsetHeight) {\n      if (i > 0 && !this.defaultSection) {\n        this.positionElement(this.elementTopWrappers[i - 1], this.elementWrappers[i - 1], percentage);\n      }\n\n      this.positionElement(this.elementTopWrappers[i], this.elementWrappers[i], percentage);\n      this.setInvisibleWrappers(i);\n    } else if (toCrossPosition - fixedPosition < 0 && Math.abs(toCrossPosition - fixedPosition) < this.sections[i].offsetHeight - fixedHeight) {\n      this.setInvisibleWrappers(i);\n      this.elementTopWrappers[i].style.transform = `translateY(0%)`;\n      this.elementWrappers[i].style.transform = `translateY(0%)`;\n    } else if (-(toCrossPosition - fixedPosition) > this.sections[i].offsetHeight && -(toCrossPosition - fixedPosition) < this.sections[i].offsetHeight + this.sections[i].offsetHeight - fixedHeight) {\n      this.defaultSection = true;\n\n      if (i > 0 && !this.defaultSection) {\n        this.positionElement(this.elementTopWrappers[i - 1], this.elementWrappers[i - 1], percentage);\n      }\n\n      this.positionElement(this.elementTopWrappers[i], this.elementWrappers[i], percentage);\n\n      for (let j = 0; j < this.sections.length; j++) {\n        this.elementTopWrappers[j].style.transform = `translateY(-100%)`;\n        this.elementWrappers[j].style.transform = `translateY(-100%)`;\n      }\n\n      this.setInvisibleWrappers(i);\n    }\n  }\n\n  setInvisibleWrappers(i) {\n    if (i > 0 && this.sections !== undefined) {\n      for (let j = 0; j < this.sections.length; j++) {\n        if (j < i && j < i - 1) {\n          this.elementWrappers[j].style.transform = `translateY(-100%)`;\n          this.elementTopWrappers[j].style.transform = `translateY(100%)`;\n        } else if (j > i) {\n          this.elementWrappers[j].style.transform = `translateY(100%)`;\n          this.elementTopWrappers[j].style.transform = `translateY(-100%)`;\n        }\n      }\n    } else if (this.sections !== undefined) {\n      for (let j = 0; j < this.sections.length; j++) {\n        if (j > i) {\n          this.elementWrappers[j].style.transform = `translateY(100%)`;\n          this.elementTopWrappers[j].style.transform = `translateY(-100%)`;\n        }\n      }\n    }\n  }\n\n  getPercentage(num, totalDuration) {\n    return 100 - 100 / totalDuration * num;\n  }\n\n  positionElement(elementTopWrapper, elementWrapper, offset) {\n    if (offset >= 100 && offset <= -100) {\n      return;\n    }\n\n    elementTopWrapper.style.transform = `translateY(-${offset}%)`;\n    elementWrapper.style.transform = `translateY(${offset}%)`;\n  }\n\n}\n\n//# sourceURL=webpack://Flipswitch/./src/ts/components/ScrollController.ts?");

/***/ })

/******/ });
});