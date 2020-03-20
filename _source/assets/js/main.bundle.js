/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_source/assets/css/styles.scss":
/*!****************************************!*\
  !*** ./_source/assets/css/styles.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "../css/styles.css");

/***/ }),

/***/ "./_source/assets/js/src/decoration.js":
/*!*********************************************!*\
  !*** ./_source/assets/js/src/decoration.js ***!
  \*********************************************/
/*! exports provided: specialChars, createGuideLines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specialChars", function() { return specialChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGuideLines", function() { return createGuideLines; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

function specialChars() {
  var elements = document.querySelectorAll('a.textgrow, .textgrow');

  _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(elements).forEach(function (element) {
    if (element.classList.contains('dont-decorate') !== true) {
      var chars = element.innerText.split('');
      element.innerHTML = null;
      chars.forEach(function (char, i) {
        var fontSize = 30 - 2 * i;
        var style = "border-bottom-width: ".concat(i + 1, "px; font-size: ").concat(fontSize, "px; top: -").concat(i + 2 * i, "px;");
        var node = document.createElement('span');
        node.style.cssText = style;
        var content = document.createTextNode(char);
        node.appendChild(content);
        element.appendChild(node);
      });
    }
  });
  /**
   * not in the reference
   */


  if (_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(document.body.classList).includes('reference') === false) {
    var elementsShrink = document.querySelectorAll('.textshrink, h1, h2, h3, h4, h5, h6');

    _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(elementsShrink).forEach(function (element) {
      if (element.classList.contains('dont-decorate') !== true) {
        var chars = element.innerText.split('');
        var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
        var fs = parseFloat(style);
        element.innerHTML = null;
        var minfs = 16;
        var decr = (fs - minfs) / chars.length;
        chars.forEach(function (char, i) {
          fs -= decr;
          var style = "border-bottom-width: ".concat(2 / i, "px; font-size: ").concat(fs, "px; top: -").concat(i, "px;");
          var node = document.createElement('span');
          node.className = 'textshrink-item';
          node.style.cssText = style;
          var content = document.createTextNode(char);
          node.appendChild(content);
          element.appendChild(node);
        });
      }
    });
  }
}
function createGuideLines() {
  var element = document.querySelector('.guidelines');
  var bottomlines = document.createElement('div');
  var rightlines = document.createElement('div');
  var pagelines = document.createElement('div');
  bottomlines.className = 'bottom_lines';
  rightlines.className = 'right_lines';
  pagelines.className = 'page_lines';

  for (var i = 0; i < 5; i++) {
    var line = document.createElement('div');
    line.classList.add('bottomLine', "line_".concat(i + 1));
    bottomlines.appendChild(line);
  }

  for (var _i = 0; _i < 3; _i++) {
    var _line = document.createElement('div');

    _line.classList.add('right_line', "line_".concat(_i + 1));

    rightlines.appendChild(_line);
  }

  for (var _i2 = 0; _i2 < 4; _i2++) {
    var _line2 = document.createElement('div');

    _line2.classList.add('line', "line_".concat(_i2 + 1));

    pagelines.appendChild(_line2);
  }

  element.appendChild(bottomlines);
  element.appendChild(rightlines);
  element.appendChild(pagelines);
}

/***/ }),

/***/ "./_source/assets/js/src/main.js":
/*!***************************************!*\
  !*** ./_source/assets/js/src/main.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var p5_lib_p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p5/lib/p5 */ "./node_modules/p5/lib/p5.js");
/* harmony import */ var p5_lib_p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5_lib_p5__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _p5sketch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./p5sketch */ "./_source/assets/js/src/p5sketch.js");
/* harmony import */ var _mobile_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-nav */ "./_source/assets/js/src/mobile-nav.js");
/* harmony import */ var _tweets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tweets */ "./_source/assets/js/src/tweets.js");
/* harmony import */ var _decoration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decoration */ "./_source/assets/js/src/decoration.js");
/* harmony import */ var _shuffle_gallery_items__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shuffle-gallery-items */ "./_source/assets/js/src/shuffle-gallery-items.js");






var p5sketch;
document.addEventListener("DOMContentLoaded", function () {
  console.log("hello world");
  Object(_tweets__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_shuffle_gallery_items__WEBPACK_IMPORTED_MODULE_5__["shuffleGalleryItems"])();
  Object(_decoration__WEBPACK_IMPORTED_MODULE_4__["specialChars"])();
  Object(_decoration__WEBPACK_IMPORTED_MODULE_4__["createGuideLines"])();
  Object(_mobile_nav__WEBPACK_IMPORTED_MODULE_2__["default"])();
  p5sketch = new p5_lib_p5__WEBPACK_IMPORTED_MODULE_0___default.a(_p5sketch__WEBPACK_IMPORTED_MODULE_1__["default"]);
});

window.onblur = function () {
  p5sketch.noLoop();
};

window.onfocus = function () {
  p5sketch.loop();
};

/***/ }),

/***/ "./_source/assets/js/src/mobile-nav.js":
/*!*********************************************!*\
  !*** ./_source/assets/js/src/mobile-nav.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mobileNav; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);


/* global $ */
function toggle(ele) {
  if (window.getComputedStyle(ele).display === 'block') {
    ele.style.display = 'none';
  } else {
    ele.style.display = 'block';
  }
}

function mobileNav() {
  var mainmenu = document.querySelector('.main-menu');
  var navmeter = document.querySelector('.nav-o-meter');
  navmeter.addEventListener('click', function () {
    navmeter.classList.toggle('opened');
    toggle(mainmenu);
    var links = document.querySelectorAll('.menu-link');

    _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(links).forEach(function (ele) {
      ele.addEventListener('click', function () {
        if (ele.classList.contains('opened')) {
          navmeter.classList.toggle('opened');
          toggle(mainmenu);
        }
      });
    });
  }); // $('.nav-o-meter').on('click', function() {
  //   $(this).toggleClass('opened');
  //   $('.main-menu').toggle();
  //   $('.main-menu').find('li a').bind('click', function() {
  //     if ($('.nav-o-meter').hasClass('opened')) {
  //       $('.nav-o-meter').toggleClass('opened');
  //       $('.main_menu').toggle();
  //     }
  //   });
  // });
}

/***/ }),

/***/ "./_source/assets/js/src/p5sketch.js":
/*!*******************************************!*\
  !*** ./_source/assets/js/src/p5sketch.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sketch; });
function sketch(ctx) {
  var myX = [-78, -72, -69, -65, -64, -63, -61, -61, -61, -61, -60, -60, -60, -59, -56, -54, -51, -48, -44, -42, -39, -35, -33, -31, -27, -23, -19, -16, -13, -11, -9, -6, 3, 5, 6, 9, 12, 14, 18, 20, 22, 23, 28, 31, 34, 39, 40, 44, 48, 51, 54, 56, 59, 62, 66, 68, 72, 74, 76, 78, 80, 81, 81, 81, 80, 80, 79, 79, 78, 77, 76, 75, 75, 74, 72, 71, 70, 70, 68, 67, 64, 63, 62, 60, 58, 58, 58, 56, 54, 52, 50, 47, 47, 45, 43, 39, 36, 33, 28, 25, 24, 22, 18, 14, 11, 8, 6, 3, -4, -12, -14, -17, -23, -26, -29, -32, -34, -37, -38, -42, -44, -47, -49, -51, -53, -55, -57, -59, -61, -64, -66, -69, -74, -79];
  var myY = [35, 34, 33, 32, 31, 31, 25, 20, 15, 11, 7, 1, -5, -10, -16, -20, -25, -29, -34, -37, -40, -42, -44, -44, -47, -48, -50, -51, -52, -50, -50, -52, -55, -56, -54, -54, -54, -55, -55, -56, -55, -54, -55, -55, -56, -55, -54, -54, -55, -55, -56, -56, -56, -55, -54, -55, -55, -56, -56, -58, -58, -55, -52, -49, -46, -43, -40, -36, -33, -29, -27, -23, -21, -18, -13, -10, -8, -5, -3, -1, 3, 6, 8, 10, 13, 15, 16, 18, 21, 24, 25, 28, 31, 33, 36, 38, 41, 43, 47, 49, 50, 50, 53, 54, 55, 56, 57, 58, 59, 60, 59, 59, 57, 56, 56, 55, 54, 53, 50, 48, 46, 45, 43, 41, 39, 37, 36, 35, 35, 36, 38, 38, 38, 40];
  var pX = [34.73, 36.925602, 39.121204, 40.218998, 40.218998, 40.218998, 40.218998, 40.129597, 40.46505, 42.178234, 44.492817, 46.29773, 48.263775, 49.87481, 51.09646, 51.894337, 52.204422, 52.232235, 51.962, 51.36969, 50.50196, 49.101078, 47.433903, 45.2101, 43.085804, 41.298832, 39.621998, 39.025, 37.414375, 35.266884, 34.73, 34.73, 34.73, 34.73, 34.73, 34.73, 34.73, 34.73, 34.73, 34.73, 34.73, 34.73, 34.73, 34.73, 43.17, 45.201645, 46.300346, 46.58493, 46.54274, 46.03485, 44.647438, 42.457493, 40.666344, 40.22, 40.22, 40.22, 40.22, 41.708122, 43.17, 64.346, 63.425694, 61.433, 59.536774, 57.55473, 56.019493, 55.048485, 55.007504, 56.8547, 58.809822, 60.869217, 62.980003, 65.23102, 67.05482, 68.434814, 69.35446, 69.74758, 69.837, 69.837, 69.837, 69.837, 69.837, 69.837, 67.596, 65.91525, 65.14949, 64.43601, 62.76375, 60.435608, 58.397907, 56.630394, 54.993286, 54.083694, 53.93827, 54.447872, 55.764256, 57.516342, 59.36923, 61.64047, 63.628033, 64.346, 61.284, 63.536304, 64.346, 64.346, 62.823853, 61.096436, 59.498234, 59.41652, 61.284, 74.804, 76.76117, 78.64615, 80.76899, 81.937, 80.3157, 78.73352, 76.554886, 75.04784, 73.67342, 73.272995, 73.69169, 74.886406, 76.76508, 78.69861, 80.965614, 82.6243, 84.9855, 86.5523, 85.979996, 84.748, 83.44357, 81.493484, 79.345955, 78.477005, 79.951744, 82.049995, 84.12782, 85.5992, 86.82153, 87.03921, 86.561165, 85.41458, 83.61761, 81.72396, 79.435, 77.438416, 75.43108, 73.56181, 72.647995, 73.87999, 74.804, 89.706, 90.607254, 92.34741, 94.38993, 95.904144, 95.72229, 94.38994, 92.34741, 90.29656, 89.706, 90.154, 92.34999, 94.545975, 95.644, 95.644, 95.644, 95.644, 95.644, 95.644, 95.644, 95.644, 95.644, 95.095, 92.89902, 91.25203, 90.154, 90.154, 90.154, 90.154, 90.154, 90.154, 90.154, 90.154, 90.154, 90.154, 99.902, 102.09719, 104.29238, 105.39, 105.39, 105.39, 105.39, 105.39, 105.39, 105.39, 105.39, 105.39, 105.39, 105.47872, 106.669876, 107.371, 107.707, 106.27636, 104.39595, 102.19113, 100.78569, 100.064255, 99.902, 99.902, 99.902, 99.902, 99.902, 99.902, 99.902, 99.902, 99.902, 99.902, 99.902, 111.74, 113.93599, 116.13197, 117.229996, 117.229996, 117.229996, 117.229996, 117.229996, 117.229996, 117.229996, 117.229996, 117.229996, 117.22234, 116.93256, 116.35508, 114.80314, 113.24318, 111.208374, 108.70149, 107.49237, 107.977875, 108.341995, 110.24903, 111.6628, 111.74, 111.74, 111.74, 111.74, 111.74, 111.74, 111.74, 111.74, 111.74, 111.74, 111.33, 112.23074, 113.97043, 116.41181, 117.52358, 117.3383, 115.996635, 113.97044, 111.92022, 111.33, 122.907, 124.8646, 126.749245, 128.87242, 130.04, 128.4189, 126.83724, 124.65834, 123.150986, 121.776436, 121.376, 121.79469, 122.98941, 124.86809, 126.80161, 129.06882, 130.72792, 133.08922, 134.65555, 134.08264, 132.85016, 131.54544, 129.59618, 127.44726, 126.57803, 128.05318, 130.151, 132.22969, 133.70164, 134.92445, 135.14221, 134.66403, 133.51715, 131.71986, 129.82603, 127.537, 125.54042, 123.53309, 121.66382, 120.75012, 121.982605, 122.907];
  var pY = [41.515, 41.515, 41.515, 42.05025, 44.191257, 46.332264, 47.938, 49.641396, 50.44291, 49.374413, 48.742218, 48.83979, 49.53096, 50.796993, 52.585056, 54.84232, 56.950455, 58.705364, 60.96892, 62.945198, 64.62214, 66.27902, 67.42582, 68.095535, 67.95912, 67.16196, 65.751, 67.69301, 67.693, 67.693, 66.68615, 64.67245, 62.658756, 60.64507, 58.631382, 56.114273, 54.100586, 52.0869, 50.07321, 48.059525, 46.045837, 43.52873, 41.51504, 41.515, 63.66, 62.837532, 60.802208, 58.940083, 56.883503, 54.842415, 53.43418, 53.33354, 54.426582, 56.400997, 58.42233, 60.44366, 62.464993, 63.3985, 63.66, 55.78, 53.67234, 53.092, 53.382114, 54.19562, 53.866497, 52.055492, 50.888897, 49.958313, 49.251816, 48.82538, 48.7333, 49.096245, 49.985825, 51.412308, 53.385983, 55.365814, 57.593044, 59.61323, 61.63342, 63.653606, 66.178856, 67.694, 67.694, 67.694, 66.741, 66.124825, 67.26136, 68.062744, 68.06118, 67.46021, 66.0107, 63.967957, 62.156532, 60.10266, 58.448914, 57.363567, 56.67948, 56.153385, 55.859318, 55.78, 63.884, 63.05069, 61.232, 59.065998, 59.325825, 59.841225, 60.991894, 63.114815, 63.884, 62.129, 63.360867, 63.990047, 63.928825, 62.502, 60.824398, 60.181618, 59.233253, 58.213715, 56.42844, 54.51, 52.35013, 50.61553, 49.395504, 48.84999, 48.7393, 48.979248, 49.859158, 50.818916, 52.30662, 53.950115, 53.70578, 52.900467, 52.962147, 54.58537, 55.811115, 56.602, 57.517826, 58.586384, 60.553024, 62.581863, 64.51652, 66.135605, 67.33762, 67.93074, 68.14, 67.92749, 67.33252, 66.41891, 65.13374, 63.41674, 62.129, 43.569, 41.519627, 40.765076, 41.02649, 42.62873, 44.930878, 46.14052, 46.40886, 45.30676, 43.569, 49.17, 49.17, 49.17, 49.67062, 51.673107, 53.675594, 56.178703, 58.18119, 60.183678, 62.186165, 64.18865, 66.69174, 67.693, 67.693, 67.693, 67.19238, 65.18991, 62.68681, 60.684322, 58.681835, 56.679348, 54.67686, 52.17375, 50.171265, 49.17, 41.515, 41.515, 41.515, 42.018707, 44.03354, 46.04837, 48.56691, 50.58174, 52.596573, 54.611404, 56.626236, 58.641068, 61.159607, 62.89433, 63.688625, 65.65849, 67.693985, 68.059105, 68.122665, 67.50792, 66.10339, 64.02092, 61.941998, 59.899303, 57.85661, 55.813915, 53.77122, 51.728527, 49.17516, 47.132465, 45.08977, 43.047077, 41.515, 71.239, 71.239, 71.239, 71.75036, 73.7958, 75.84124, 77.88668, 79.93212, 82.48892, 84.53436, 86.5798, 88.625244, 90.12874, 92.40411, 94.00667, 95.88817, 96.69513, 97.06485, 96.93099, 96.05486, 94.03835, 92.52599, 92.75411, 91.00604, 88.79764, 86.790924, 84.78421, 82.7775, 80.77078, 78.76407, 76.25568, 74.24896, 72.24225, 71.239, 65.638, 63.589127, 62.83505, 63.31579, 64.69784, 66.999886, 68.209526, 68.47789, 67.376205, 65.638, 84.197, 85.42887, 86.05806, 85.99665, 84.57, 82.89248, 82.25014, 81.3024, 80.28318, 78.49831, 76.58, 74.4196, 72.68471, 71.46455, 70.91901, 70.808304, 71.04825, 71.928154, 72.88791, 74.37562, 76.01911, 75.77478, 74.96947, 75.03122, 76.65562, 77.880615, 78.672, 79.58755, 80.65629, 82.62276, 84.65111, 86.58683, 88.206726, 89.409294, 90.00266, 90.212, 89.99947, 89.404366, 88.490395, 87.20437, 85.48586, 84.197];
  var leafGrow = 1.08;
  var numLines = myX.length; // var leafContour = 3;

  var myNoise = [];
  var myNoiseLetter = [];
  var typoOff = 75;
  var canvas = null;

  ctx.setup = function () {
    canvas = ctx.createCanvas(180, 130);
    canvas.parent('#logo');
    ctx.background(255);
    ctx.frameRate(15);
    ctx.smooth();

    for (var n = 2; n < numLines; n++) {
      myNoise.push(n);
      myNoiseLetter.push(n);
      var mapN = ctx.floor(ctx.map(n, 0, numLines - numLines / 3, 0, pX.length));
      mapN = ctx.constrain(mapN, 0, pX.length);
      myNoiseLetter[n] = mapN;

      if (n > numLines - numLines / 3) {
        mapN = ctx.floor(ctx.map(n, numLines - numLines / 3, numLines, pX.length - pX.length / 3, pX.length / 6));
        mapN = ctx.constrain(mapN, 0, pX.length);
        myNoiseLetter[n] = mapN;
      }
    }
  };

  ctx.draw = function () {
    ctx.background(255);
    ctx.strokeWeight(.75);
    ctx.translate(ctx.width / 2, ctx.height / 2);
    ctx.stroke(0);
    ctx.noFill();
    var linksCount = 1;

    for (var n = 0; n < myNoise.length - 1; n += 1) {
      myNoiseLetter[n] += ctx.floor(ctx.random(-1, 2));
      var letterFill = 25;

      if (myNoiseLetter[n] < letterFill) {
        myNoiseLetter[n] = letterFill;
      } else if (myNoiseLetter[n] > pX.length - letterFill) {
        myNoiseLetter[n] = pX.length - letterFill;
      }

      ctx.strokeWeight(.5); //var randDrop = random(100);
      //if (randDrop>99)continue;

      if (n > 4 && n < myNoise.length - 2) {
        ctx.line(pX[myNoiseLetter[n]] - typoOff, pY[myNoiseLetter[n]] - typoOff, myX[myNoise[n]] * leafGrow, myY[myNoise[n]] * leafGrow);
      }

      ctx.stroke(0);
      ctx.fill(255);
      ctx.strokeWeight(.75);

      if (n % 2 == 0) {
        ctx.beginShape();
        ctx.stroke(0);

        for (var j = parseInt(-letterFill / 2); j < parseInt(letterFill / 2) - 1; j++) {
          if (ctx.abs(pX[myNoiseLetter[n] + j - 1] - typoOff - (pX[myNoiseLetter[n] + j] - typoOff)) < 3 && ctx.abs(pY[myNoiseLetter[n] + j - 1] - typoOff - (pY[myNoiseLetter[n] + j] - typoOff)) < 3) {
            ctx.vertex(pX[myNoiseLetter[n] + j - 1] - typoOff, pY[myNoiseLetter[n] + j - 1] - typoOff);
          } else {
            ctx.endShape();
            ctx.beginShape();
          }
        }

        ctx.endShape();
      }

      ctx.stroke(0);
      ctx.strokeWeight(.75); //if (randDrop>90)continue;

      ctx.line(myX[myNoise[n]] * leafGrow, myY[myNoise[n]] * leafGrow, myX[myNoise[n + 1]] * leafGrow, myY[myNoise[n + 1]] * leafGrow);
    }
  };
}

/***/ }),

/***/ "./_source/assets/js/src/shuffle-gallery-items.js":
/*!********************************************************!*\
  !*** ./_source/assets/js/src/shuffle-gallery-items.js ***!
  \********************************************************/
/*! exports provided: shuffleGalleryItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleGalleryItems", function() { return shuffleGalleryItems; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

var shuffleGalleryItems = function shuffleGalleryItems() {
  // document.addEventListener('DOMContentLoaded', function () {
  if (_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(document.body.classList).includes('gallery')) {
    var elements = document.querySelectorAll('.gallery-overview-item-wrapper');

    if (elements.length >= 0) {
      Array.from(elements).forEach(function (element) {
        element.style.order = Math.floor(Math.random() * elements.length);
      });
    }
  } // });

};

/***/ }),

/***/ "./_source/assets/js/src/tweets.js":
/*!*****************************************!*\
  !*** ./_source/assets/js/src/tweets.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tweets; });
function tweets() {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      // XMLHttpRequest.DONE == 4
      if (xmlhttp.status == 200) {
        var _tweets = JSON.parse(xmlhttp.responseText);

        var latest = _tweets.data[0];
        var text = latest.text;
        var date = latest.created_at;
        document.querySelector('.tweettime').innerHTML = date;
        document.querySelector('.message').innerHTML = text;
      } else if (xmlhttp.status == 400) {
        console.log('There was an error 400');
      } else {
        console.log('something else other than 200 was returned'); // console.log(xmlhttp);
      }
    }
  }; // let devUrl = 'http://localhost:3000';


  xmlhttp.open('GET', 'https://basiljs-latest-tweets.now.sh/', true);
  xmlhttp.send();
}

/***/ }),

/***/ 0:
/*!******************************************************************************!*\
  !*** multi ./_source/assets/js/src/main.js ./_source/assets/css/styles.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_source/assets/js/src/main.js */"./_source/assets/js/src/main.js");
module.exports = __webpack_require__(/*! ./_source/assets/css/styles.scss */"./_source/assets/css/styles.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vX3NvdXJjZS9hc3NldHMvY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL19zb3VyY2UvYXNzZXRzL2pzL3NyYy9kZWNvcmF0aW9uLmpzIiwid2VicGFjazovLy8uL19zb3VyY2UvYXNzZXRzL2pzL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL19zb3VyY2UvYXNzZXRzL2pzL3NyYy9tb2JpbGUtbmF2LmpzIiwid2VicGFjazovLy8uL19zb3VyY2UvYXNzZXRzL2pzL3NyYy9wNXNrZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9fc291cmNlL2Fzc2V0cy9qcy9zcmMvc2h1ZmZsZS1nYWxsZXJ5LWl0ZW1zLmpzIiwid2VicGFjazovLy8uL19zb3VyY2UvYXNzZXRzL2pzL3NyYy90d2VldHMuanMiXSwibmFtZXMiOlsic3BlY2lhbENoYXJzIiwiZWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiY2hhcnMiLCJpbm5lclRleHQiLCJzcGxpdCIsImlubmVySFRNTCIsImNoYXIiLCJpIiwiZm9udFNpemUiLCJzdHlsZSIsIm5vZGUiLCJjcmVhdGVFbGVtZW50IiwiY3NzVGV4dCIsImNvbnRlbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwiYm9keSIsImluY2x1ZGVzIiwiZWxlbWVudHNTaHJpbmsiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImZzIiwicGFyc2VGbG9hdCIsIm1pbmZzIiwiZGVjciIsImxlbmd0aCIsImNsYXNzTmFtZSIsImNyZWF0ZUd1aWRlTGluZXMiLCJxdWVyeVNlbGVjdG9yIiwiYm90dG9tbGluZXMiLCJyaWdodGxpbmVzIiwicGFnZWxpbmVzIiwibGluZSIsImFkZCIsInA1c2tldGNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJ0d2VldHMiLCJzaHVmZmxlR2FsbGVyeUl0ZW1zIiwibW9iaWxlTmF2IiwicDUiLCJza2V0Y2giLCJvbmJsdXIiLCJub0xvb3AiLCJvbmZvY3VzIiwibG9vcCIsInRvZ2dsZSIsImVsZSIsImRpc3BsYXkiLCJtYWlubWVudSIsIm5hdm1ldGVyIiwibGlua3MiLCJjdHgiLCJteVgiLCJteVkiLCJwWCIsInBZIiwibGVhZkdyb3ciLCJudW1MaW5lcyIsIm15Tm9pc2UiLCJteU5vaXNlTGV0dGVyIiwidHlwb09mZiIsImNhbnZhcyIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwicGFyZW50IiwiYmFja2dyb3VuZCIsImZyYW1lUmF0ZSIsInNtb290aCIsIm4iLCJwdXNoIiwibWFwTiIsImZsb29yIiwibWFwIiwiY29uc3RyYWluIiwiZHJhdyIsInN0cm9rZVdlaWdodCIsInRyYW5zbGF0ZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3Ryb2tlIiwibm9GaWxsIiwibGlua3NDb3VudCIsInJhbmRvbSIsImxldHRlckZpbGwiLCJmaWxsIiwiYmVnaW5TaGFwZSIsImoiLCJwYXJzZUludCIsImFicyIsInZlcnRleCIsImVuZFNoYXBlIiwiQXJyYXkiLCJmcm9tIiwib3JkZXIiLCJNYXRoIiwieG1saHR0cCIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJzdGF0dXMiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJsYXRlc3QiLCJkYXRhIiwidGV4dCIsImRhdGUiLCJjcmVhdGVkX2F0Iiwib3BlbiIsInNlbmQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7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QUEvQztBQUNELE9BUEQsTUFPTyxJQUFJWCxPQUFPLENBQUNLLE1BQVIsSUFBa0IsR0FBdEIsRUFBMkI7QUFDaENsRSxlQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNELE9BRk0sTUFFQTtBQUNMRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSw0Q0FBWixFQURLLENBRUw7QUFDRDtBQUNGO0FBQ0YsR0FoQkQsQ0FGOEIsQ0FtQjlCOzs7QUFDQTRELFNBQU8sQ0FBQ2MsSUFBUixDQUFhLEtBQWIsRUFBb0IsdUNBQXBCLEVBQTZELElBQTdEO0FBQ0FkLFNBQU8sQ0FBQ2UsSUFBUjtBQUNELEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4uL2Nzcy9zdHlsZXMuY3NzXCI7IiwiXG5leHBvcnQgZnVuY3Rpb24gc3BlY2lhbENoYXJzKCkge1xuXG4gIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EudGV4dGdyb3csIC50ZXh0Z3JvdycpO1xuICBbLi4uZWxlbWVudHNdLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkb250LWRlY29yYXRlJykgIT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGNoYXJzID0gZWxlbWVudC5pbm5lclRleHQuc3BsaXQoJycpO1xuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBudWxsO1xuICAgICAgY2hhcnMuZm9yRWFjaCgoY2hhciwgaSkgPT4ge1xuICAgICAgICBjb25zdCBmb250U2l6ZSA9IDMwIC0gKDIgKiBpKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBgYm9yZGVyLWJvdHRvbS13aWR0aDogJHsoaSArIDEpfXB4OyBmb250LXNpemU6ICR7Zm9udFNpemV9cHg7IHRvcDogLSR7KGkgKyAoMiAqIGkpKX1weDtgO1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBzdHlsZTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoYXIpO1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogbm90IGluIHRoZSByZWZlcmVuY2VcbiAgICovXG4gIGlmIChbLi4uZG9jdW1lbnQuYm9keS5jbGFzc0xpc3RdLmluY2x1ZGVzKCdyZWZlcmVuY2UnKSA9PT0gZmFsc2UpIHtcblxuICAgIGxldCBlbGVtZW50c1NocmluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0c2hyaW5rLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2Jyk7XG5cbiAgICBbLi4uZWxlbWVudHNTaHJpbmtdLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2RvbnQtZGVjb3JhdGUnKSAhPT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBjaGFycyA9IGVsZW1lbnQuaW5uZXJUZXh0LnNwbGl0KCcnKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LXNpemUnKTtcbiAgICAgICAgbGV0IGZzID0gcGFyc2VGbG9hdChzdHlsZSk7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gbnVsbDtcbiAgICAgICAgY29uc3QgbWluZnMgPSAxNjtcbiAgICAgICAgY29uc3QgZGVjciA9IChmcyAtIG1pbmZzKSAvIGNoYXJzLmxlbmd0aDtcbiAgICAgICAgY2hhcnMuZm9yRWFjaCgoY2hhciwgaSkgPT4ge1xuICAgICAgICAgIGZzIC09IGRlY3I7XG4gICAgICAgICAgY29uc3Qgc3R5bGUgPSBgYm9yZGVyLWJvdHRvbS13aWR0aDogJHsoMiAvIGkpfXB4OyBmb250LXNpemU6ICR7ZnN9cHg7IHRvcDogLSR7aX1weDtgO1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgbm9kZS5jbGFzc05hbWUgPSAndGV4dHNocmluay1pdGVtJztcbiAgICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBzdHlsZTtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hhcik7XG4gICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUd1aWRlTGluZXMoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3VpZGVsaW5lcycpO1xuICBjb25zdCBib3R0b21saW5lcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCByaWdodGxpbmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHBhZ2VsaW5lcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib3R0b21saW5lcy5jbGFzc05hbWUgPSAnYm90dG9tX2xpbmVzJztcbiAgcmlnaHRsaW5lcy5jbGFzc05hbWUgPSAncmlnaHRfbGluZXMnO1xuICBwYWdlbGluZXMuY2xhc3NOYW1lID0gJ3BhZ2VfbGluZXMnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpbmUuY2xhc3NMaXN0LmFkZCgnYm90dG9tTGluZScsIGBsaW5lXyR7aSArIDF9YCk7XG4gICAgYm90dG9tbGluZXMuYXBwZW5kQ2hpbGQobGluZSk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGluZS5jbGFzc0xpc3QuYWRkKCdyaWdodF9saW5lJywgYGxpbmVfJHtpICsgMX1gKTtcbiAgICByaWdodGxpbmVzLmFwcGVuZENoaWxkKGxpbmUpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpbmUuY2xhc3NMaXN0LmFkZCgnbGluZScsIGBsaW5lXyR7aSArIDF9YCk7XG4gICAgcGFnZWxpbmVzLmFwcGVuZENoaWxkKGxpbmUpO1xuICB9XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYm90dG9tbGluZXMpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHJpZ2h0bGluZXMpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHBhZ2VsaW5lcyk7XG59XG4iLCJpbXBvcnQgcDUgZnJvbSBcInA1L2xpYi9wNVwiO1xuaW1wb3J0IHNrZXRjaCBmcm9tIFwiLi9wNXNrZXRjaFwiO1xuaW1wb3J0IG1vYmlsZU5hdiBmcm9tIFwiLi9tb2JpbGUtbmF2XCI7XG5pbXBvcnQgdHdlZXRzIGZyb20gXCIuL3R3ZWV0c1wiO1xuaW1wb3J0IHsgc3BlY2lhbENoYXJzLCBjcmVhdGVHdWlkZUxpbmVzIH0gZnJvbSBcIi4vZGVjb3JhdGlvblwiO1xuaW1wb3J0IHsgc2h1ZmZsZUdhbGxlcnlJdGVtcyB9IGZyb20gXCIuL3NodWZmbGUtZ2FsbGVyeS1pdGVtc1wiO1xubGV0IHA1c2tldGNoO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkXCIpO1xuICB0d2VldHMoKTtcbiAgc2h1ZmZsZUdhbGxlcnlJdGVtcygpO1xuICBzcGVjaWFsQ2hhcnMoKTtcbiAgY3JlYXRlR3VpZGVMaW5lcygpO1xuICBtb2JpbGVOYXYoKTtcbiAgcDVza2V0Y2ggPSBuZXcgcDUoc2tldGNoKTtcbn0pO1xuXG53aW5kb3cub25ibHVyID0gZnVuY3Rpb24oKSB7XG4gIHA1c2tldGNoLm5vTG9vcCgpO1xufTtcbndpbmRvdy5vbmZvY3VzID0gZnVuY3Rpb24oKSB7XG4gIHA1c2tldGNoLmxvb3AoKTtcbn07XG4iLCIvKiBnbG9iYWwgJCAqL1xuXG5mdW5jdGlvbiB0b2dnbGUgKGVsZSl7XG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGUpLmRpc3BsYXkgPT09ICdibG9jaycpe1xuICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9IGVsc2Uge1xuICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2JpbGVOYXYoKSB7XG4gIGNvbnN0IG1haW5tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbWVudScpO1xuICBjb25zdCBuYXZtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtby1tZXRlcicpO1xuICBuYXZtZXRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuYXZtZXRlci5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuZWQnKTtcbiAgICB0b2dnbGUobWFpbm1lbnUpO1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtbGluaycpO1xuICAgIFsuLi5saW5rc10uZm9yRWFjaChlbGUgPT4ge1xuICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoZWxlLmNsYXNzTGlzdC5jb250YWlucygnb3BlbmVkJykpe1xuICAgICAgICAgIG5hdm1ldGVyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW5lZCcpO1xuICAgICAgICAgIHRvZ2dsZShtYWlubWVudSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyAkKCcubmF2LW8tbWV0ZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgLy8gICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuZWQnKTtcbiAgLy8gICAkKCcubWFpbi1tZW51JykudG9nZ2xlKCk7XG4gIC8vICAgJCgnLm1haW4tbWVudScpLmZpbmQoJ2xpIGEnKS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAvLyAgICAgaWYgKCQoJy5uYXYtby1tZXRlcicpLmhhc0NsYXNzKCdvcGVuZWQnKSkge1xuICAvLyAgICAgICAkKCcubmF2LW8tbWV0ZXInKS50b2dnbGVDbGFzcygnb3BlbmVkJyk7XG4gIC8vICAgICAgICQoJy5tYWluX21lbnUnKS50b2dnbGUoKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy8gfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBza2V0Y2goY3R4KXtcblxuICBjb25zdCBteVg9IFstNzgsIC03MiwgLTY5LCAtNjUsIC02NCwgLTYzLCAtNjEsIC02MSwgLTYxLCAtNjEsIC02MCwgLTYwLCAtNjAsIC01OSwgLTU2LCAtNTQsIC01MSwgLTQ4LCAtNDQsIC00MiwgLTM5LCAtMzUsIC0zMywgLTMxLCAtMjcsIC0yMywgLTE5LCAtMTYsIC0xMywgLTExLCAtOSwgLTYsIDMsIDUsIDYsIDksIDEyLCAxNCwgMTgsIDIwLCAyMiwgMjMsIDI4LCAzMSwgMzQsIDM5LCA0MCwgNDQsIDQ4LCA1MSwgNTQsIDU2LCA1OSwgNjIsIDY2LCA2OCwgNzIsIDc0LCA3NiwgNzgsIDgwLCA4MSwgODEsIDgxLCA4MCwgODAsIDc5LCA3OSwgNzgsIDc3LCA3NiwgNzUsIDc1LCA3NCwgNzIsIDcxLCA3MCwgNzAsIDY4LCA2NywgNjQsIDYzLCA2MiwgNjAsIDU4LCA1OCwgNTgsIDU2LCA1NCwgNTIsIDUwLCA0NywgNDcsIDQ1LCA0MywgMzksIDM2LCAzMywgMjgsIDI1LCAyNCwgMjIsIDE4LCAxNCwgMTEsIDgsIDYsIDMsIC00LCAtMTIsIC0xNCwgLTE3LCAtMjMsIC0yNiwgLTI5LCAtMzIsIC0zNCwgLTM3LCAtMzgsIC00MiwgLTQ0LCAtNDcsIC00OSwgLTUxLCAtNTMsIC01NSwgLTU3LCAtNTksIC02MSwgLTY0LCAtNjYsIC02OSwgLTc0LCAtNzldO1xuICBjb25zdCBteVk9IFszNSwgMzQsIDMzLCAzMiwgMzEsIDMxLCAyNSwgMjAsIDE1LCAxMSwgNywgMSwgLTUsIC0xMCwgLTE2LCAtMjAsIC0yNSwgLTI5LCAtMzQsIC0zNywgLTQwLCAtNDIsIC00NCwgLTQ0LCAtNDcsIC00OCwgLTUwLCAtNTEsIC01MiwgLTUwLCAtNTAsIC01MiwgLTU1LCAtNTYsIC01NCwgLTU0LCAtNTQsIC01NSwgLTU1LCAtNTYsIC01NSwgLTU0LCAtNTUsIC01NSwgLTU2LCAtNTUsIC01NCwgLTU0LCAtNTUsIC01NSwgLTU2LCAtNTYsIC01NiwgLTU1LCAtNTQsIC01NSwgLTU1LCAtNTYsIC01NiwgLTU4LCAtNTgsIC01NSwgLTUyLCAtNDksIC00NiwgLTQzLCAtNDAsIC0zNiwgLTMzLCAtMjksIC0yNywgLTIzLCAtMjEsIC0xOCwgLTEzLCAtMTAsIC04LCAtNSwgLTMsIC0xLCAzLCA2LCA4LCAxMCwgMTMsIDE1LCAxNiwgMTgsIDIxLCAyNCwgMjUsIDI4LCAzMSwgMzMsIDM2LCAzOCwgNDEsIDQzLCA0NywgNDksIDUwLCA1MCwgNTMsIDU0LCA1NSwgNTYsIDU3LCA1OCwgNTksIDYwLCA1OSwgNTksIDU3LCA1NiwgNTYsIDU1LCA1NCwgNTMsIDUwLCA0OCwgNDYsIDQ1LCA0MywgNDEsIDM5LCAzNywgMzYsIDM1LCAzNSwgMzYsIDM4LCAzOCwgMzgsIDQwXTtcbiAgY29uc3QgcFg9IFszNC43MywgMzYuOTI1NjAyLCAzOS4xMjEyMDQsIDQwLjIxODk5OCwgNDAuMjE4OTk4LCA0MC4yMTg5OTgsIDQwLjIxODk5OCwgNDAuMTI5NTk3LCA0MC40NjUwNSwgNDIuMTc4MjM0LCA0NC40OTI4MTcsIDQ2LjI5NzczLCA0OC4yNjM3NzUsIDQ5Ljg3NDgxLCA1MS4wOTY0NiwgNTEuODk0MzM3LCA1Mi4yMDQ0MjIsIDUyLjIzMjIzNSwgNTEuOTYyLCA1MS4zNjk2OSwgNTAuNTAxOTYsIDQ5LjEwMTA3OCwgNDcuNDMzOTAzLCA0NS4yMTAxLCA0My4wODU4MDQsIDQxLjI5ODgzMiwgMzkuNjIxOTk4LCAzOS4wMjUsIDM3LjQxNDM3NSwgMzUuMjY2ODg0LCAzNC43MywgMzQuNzMsIDM0LjczLCAzNC43MywgMzQuNzMsIDM0LjczLCAzNC43MywgMzQuNzMsIDM0LjczLCAzNC43MywgMzQuNzMsIDM0LjczLCAzNC43MywgMzQuNzMsIDQzLjE3LCA0NS4yMDE2NDUsIDQ2LjMwMDM0NiwgNDYuNTg0OTMsIDQ2LjU0Mjc0LCA0Ni4wMzQ4NSwgNDQuNjQ3NDM4LCA0Mi40NTc0OTMsIDQwLjY2NjM0NCwgNDAuMjIsIDQwLjIyLCA0MC4yMiwgNDAuMjIsIDQxLjcwODEyMiwgNDMuMTcsIDY0LjM0NiwgNjMuNDI1Njk0LCA2MS40MzMsIDU5LjUzNjc3NCwgNTcuNTU0NzMsIDU2LjAxOTQ5MywgNTUuMDQ4NDg1LCA1NS4wMDc1MDQsIDU2Ljg1NDcsIDU4LjgwOTgyMiwgNjAuODY5MjE3LCA2Mi45ODAwMDMsIDY1LjIzMTAyLCA2Ny4wNTQ4MiwgNjguNDM0ODE0LCA2OS4zNTQ0NiwgNjkuNzQ3NTgsIDY5LjgzNywgNjkuODM3LCA2OS44MzcsIDY5LjgzNywgNjkuODM3LCA2OS44MzcsIDY3LjU5NiwgNjUuOTE1MjUsIDY1LjE0OTQ5LCA2NC40MzYwMSwgNjIuNzYzNzUsIDYwLjQzNTYwOCwgNTguMzk3OTA3LCA1Ni42MzAzOTQsIDU0Ljk5MzI4NiwgNTQuMDgzNjk0LCA1My45MzgyNywgNTQuNDQ3ODcyLCA1NS43NjQyNTYsIDU3LjUxNjM0MiwgNTkuMzY5MjMsIDYxLjY0MDQ3LCA2My42MjgwMzMsIDY0LjM0NiwgNjEuMjg0LCA2My41MzYzMDQsIDY0LjM0NiwgNjQuMzQ2LCA2Mi44MjM4NTMsIDYxLjA5NjQzNiwgNTkuNDk4MjM0LCA1OS40MTY1MiwgNjEuMjg0LCA3NC44MDQsIDc2Ljc2MTE3LCA3OC42NDYxNSwgODAuNzY4OTksIDgxLjkzNywgODAuMzE1NywgNzguNzMzNTIsIDc2LjU1NDg4NiwgNzUuMDQ3ODQsIDczLjY3MzQyLCA3My4yNzI5OTUsIDczLjY5MTY5LCA3NC44ODY0MDYsIDc2Ljc2NTA4LCA3OC42OTg2MSwgODAuOTY1NjE0LCA4Mi42MjQzLCA4NC45ODU1LCA4Ni41NTIzLCA4NS45Nzk5OTYsIDg0Ljc0OCwgODMuNDQzNTcsIDgxLjQ5MzQ4NCwgNzkuMzQ1OTU1LCA3OC40NzcwMDUsIDc5Ljk1MTc0NCwgODIuMDQ5OTk1LCA4NC4xMjc4MiwgODUuNTk5MiwgODYuODIxNTMsIDg3LjAzOTIxLCA4Ni41NjExNjUsIDg1LjQxNDU4LCA4My42MTc2MSwgODEuNzIzOTYsIDc5LjQzNSwgNzcuNDM4NDE2LCA3NS40MzEwOCwgNzMuNTYxODEsIDcyLjY0Nzk5NSwgNzMuODc5OTksIDc0LjgwNCwgODkuNzA2LCA5MC42MDcyNTQsIDkyLjM0NzQxLCA5NC4zODk5MywgOTUuOTA0MTQ0LCA5NS43MjIyOSwgOTQuMzg5OTQsIDkyLjM0NzQxLCA5MC4yOTY1NiwgODkuNzA2LCA5MC4xNTQsIDkyLjM0OTk5LCA5NC41NDU5NzUsIDk1LjY0NCwgOTUuNjQ0LCA5NS42NDQsIDk1LjY0NCwgOTUuNjQ0LCA5NS42NDQsIDk1LjY0NCwgOTUuNjQ0LCA5NS42NDQsIDk1LjA5NSwgOTIuODk5MDIsIDkxLjI1MjAzLCA5MC4xNTQsIDkwLjE1NCwgOTAuMTU0LCA5MC4xNTQsIDkwLjE1NCwgOTAuMTU0LCA5MC4xNTQsIDkwLjE1NCwgOTAuMTU0LCA5MC4xNTQsIDk5LjkwMiwgMTAyLjA5NzE5LCAxMDQuMjkyMzgsIDEwNS4zOSwgMTA1LjM5LCAxMDUuMzksIDEwNS4zOSwgMTA1LjM5LCAxMDUuMzksIDEwNS4zOSwgMTA1LjM5LCAxMDUuMzksIDEwNS4zOSwgMTA1LjQ3ODcyLCAxMDYuNjY5ODc2LCAxMDcuMzcxLCAxMDcuNzA3LCAxMDYuMjc2MzYsIDEwNC4zOTU5NSwgMTAyLjE5MTEzLCAxMDAuNzg1NjksIDEwMC4wNjQyNTUsIDk5LjkwMiwgOTkuOTAyLCA5OS45MDIsIDk5LjkwMiwgOTkuOTAyLCA5OS45MDIsIDk5LjkwMiwgOTkuOTAyLCA5OS45MDIsIDk5LjkwMiwgOTkuOTAyLCAxMTEuNzQsIDExMy45MzU5OSwgMTE2LjEzMTk3LCAxMTcuMjI5OTk2LCAxMTcuMjI5OTk2LCAxMTcuMjI5OTk2LCAxMTcuMjI5OTk2LCAxMTcuMjI5OTk2LCAxMTcuMjI5OTk2LCAxMTcuMjI5OTk2LCAxMTcuMjI5OTk2LCAxMTcuMjI5OTk2LCAxMTcuMjIyMzQsIDExNi45MzI1NiwgMTE2LjM1NTA4LCAxMTQuODAzMTQsIDExMy4yNDMxOCwgMTExLjIwODM3NCwgMTA4LjcwMTQ5LCAxMDcuNDkyMzcsIDEwNy45Nzc4NzUsIDEwOC4zNDE5OTUsIDExMC4yNDkwMywgMTExLjY2MjgsIDExMS43NCwgMTExLjc0LCAxMTEuNzQsIDExMS43NCwgMTExLjc0LCAxMTEuNzQsIDExMS43NCwgMTExLjc0LCAxMTEuNzQsIDExMS43NCwgMTExLjMzLCAxMTIuMjMwNzQsIDExMy45NzA0MywgMTE2LjQxMTgxLCAxMTcuNTIzNTgsIDExNy4zMzgzLCAxMTUuOTk2NjM1LCAxMTMuOTcwNDQsIDExMS45MjAyMiwgMTExLjMzLCAxMjIuOTA3LCAxMjQuODY0NiwgMTI2Ljc0OTI0NSwgMTI4Ljg3MjQyLCAxMzAuMDQsIDEyOC40MTg5LCAxMjYuODM3MjQsIDEyNC42NTgzNCwgMTIzLjE1MDk4NiwgMTIxLjc3NjQzNiwgMTIxLjM3NiwgMTIxLjc5NDY5LCAxMjIuOTg5NDEsIDEyNC44NjgwOSwgMTI2LjgwMTYxLCAxMjkuMDY4ODIsIDEzMC43Mjc5MiwgMTMzLjA4OTIyLCAxMzQuNjU1NTUsIDEzNC4wODI2NCwgMTMyLjg1MDE2LCAxMzEuNTQ1NDQsIDEyOS41OTYxOCwgMTI3LjQ0NzI2LCAxMjYuNTc4MDMsIDEyOC4wNTMxOCwgMTMwLjE1MSwgMTMyLjIyOTY5LCAxMzMuNzAxNjQsIDEzNC45MjQ0NSwgMTM1LjE0MjIxLCAxMzQuNjY0MDMsIDEzMy41MTcxNSwgMTMxLjcxOTg2LCAxMjkuODI2MDMsIDEyNy41MzcsIDEyNS41NDA0MiwgMTIzLjUzMzA5LCAxMjEuNjYzODIsIDEyMC43NTAxMiwgMTIxLjk4MjYwNSwgMTIyLjkwN107XG4gIGNvbnN0IHBZPSBbNDEuNTE1LCA0MS41MTUsIDQxLjUxNSwgNDIuMDUwMjUsIDQ0LjE5MTI1NywgNDYuMzMyMjY0LCA0Ny45MzgsIDQ5LjY0MTM5NiwgNTAuNDQyOTEsIDQ5LjM3NDQxMywgNDguNzQyMjE4LCA0OC44Mzk3OSwgNDkuNTMwOTYsIDUwLjc5Njk5MywgNTIuNTg1MDU2LCA1NC44NDIzMiwgNTYuOTUwNDU1LCA1OC43MDUzNjQsIDYwLjk2ODkyLCA2Mi45NDUxOTgsIDY0LjYyMjE0LCA2Ni4yNzkwMiwgNjcuNDI1ODIsIDY4LjA5NTUzNSwgNjcuOTU5MTIsIDY3LjE2MTk2LCA2NS43NTEsIDY3LjY5MzAxLCA2Ny42OTMsIDY3LjY5MywgNjYuNjg2MTUsIDY0LjY3MjQ1LCA2Mi42NTg3NTYsIDYwLjY0NTA3LCA1OC42MzEzODIsIDU2LjExNDI3MywgNTQuMTAwNTg2LCA1Mi4wODY5LCA1MC4wNzMyMSwgNDguMDU5NTI1LCA0Ni4wNDU4MzcsIDQzLjUyODczLCA0MS41MTUwNCwgNDEuNTE1LCA2My42NiwgNjIuODM3NTMyLCA2MC44MDIyMDgsIDU4Ljk0MDA4MywgNTYuODgzNTAzLCA1NC44NDI0MTUsIDUzLjQzNDE4LCA1My4zMzM1NCwgNTQuNDI2NTgyLCA1Ni40MDA5OTcsIDU4LjQyMjMzLCA2MC40NDM2NiwgNjIuNDY0OTkzLCA2My4zOTg1LCA2My42NiwgNTUuNzgsIDUzLjY3MjM0LCA1My4wOTIsIDUzLjM4MjExNCwgNTQuMTk1NjIsIDUzLjg2NjQ5NywgNTIuMDU1NDkyLCA1MC44ODg4OTcsIDQ5Ljk1ODMxMywgNDkuMjUxODE2LCA0OC44MjUzOCwgNDguNzMzMywgNDkuMDk2MjQ1LCA0OS45ODU4MjUsIDUxLjQxMjMwOCwgNTMuMzg1OTgzLCA1NS4zNjU4MTQsIDU3LjU5MzA0NCwgNTkuNjEzMjMsIDYxLjYzMzQyLCA2My42NTM2MDYsIDY2LjE3ODg1NiwgNjcuNjk0LCA2Ny42OTQsIDY3LjY5NCwgNjYuNzQxLCA2Ni4xMjQ4MjUsIDY3LjI2MTM2LCA2OC4wNjI3NDQsIDY4LjA2MTE4LCA2Ny40NjAyMSwgNjYuMDEwNywgNjMuOTY3OTU3LCA2Mi4xNTY1MzIsIDYwLjEwMjY2LCA1OC40NDg5MTQsIDU3LjM2MzU2NywgNTYuNjc5NDgsIDU2LjE1MzM4NSwgNTUuODU5MzE4LCA1NS43OCwgNjMuODg0LCA2My4wNTA2OSwgNjEuMjMyLCA1OS4wNjU5OTgsIDU5LjMyNTgyNSwgNTkuODQxMjI1LCA2MC45OTE4OTQsIDYzLjExNDgxNSwgNjMuODg0LCA2Mi4xMjksIDYzLjM2MDg2NywgNjMuOTkwMDQ3LCA2My45Mjg4MjUsIDYyLjUwMiwgNjAuODI0Mzk4LCA2MC4xODE2MTgsIDU5LjIzMzI1MywgNTguMjEzNzE1LCA1Ni40Mjg0NCwgNTQuNTEsIDUyLjM1MDEzLCA1MC42MTU1MywgNDkuMzk1NTA0LCA0OC44NDk5OSwgNDguNzM5MywgNDguOTc5MjQ4LCA0OS44NTkxNTgsIDUwLjgxODkxNiwgNTIuMzA2NjIsIDUzLjk1MDExNSwgNTMuNzA1NzgsIDUyLjkwMDQ2NywgNTIuOTYyMTQ3LCA1NC41ODUzNywgNTUuODExMTE1LCA1Ni42MDIsIDU3LjUxNzgyNiwgNTguNTg2Mzg0LCA2MC41NTMwMjQsIDYyLjU4MTg2MywgNjQuNTE2NTIsIDY2LjEzNTYwNSwgNjcuMzM3NjIsIDY3LjkzMDc0LCA2OC4xNCwgNjcuOTI3NDksIDY3LjMzMjUyLCA2Ni40MTg5MSwgNjUuMTMzNzQsIDYzLjQxNjc0LCA2Mi4xMjksIDQzLjU2OSwgNDEuNTE5NjI3LCA0MC43NjUwNzYsIDQxLjAyNjQ5LCA0Mi42Mjg3MywgNDQuOTMwODc4LCA0Ni4xNDA1MiwgNDYuNDA4ODYsIDQ1LjMwNjc2LCA0My41NjksIDQ5LjE3LCA0OS4xNywgNDkuMTcsIDQ5LjY3MDYyLCA1MS42NzMxMDcsIDUzLjY3NTU5NCwgNTYuMTc4NzAzLCA1OC4xODExOSwgNjAuMTgzNjc4LCA2Mi4xODYxNjUsIDY0LjE4ODY1LCA2Ni42OTE3NCwgNjcuNjkzLCA2Ny42OTMsIDY3LjY5MywgNjcuMTkyMzgsIDY1LjE4OTkxLCA2Mi42ODY4MSwgNjAuNjg0MzIyLCA1OC42ODE4MzUsIDU2LjY3OTM0OCwgNTQuNjc2ODYsIDUyLjE3Mzc1LCA1MC4xNzEyNjUsIDQ5LjE3LCA0MS41MTUsIDQxLjUxNSwgNDEuNTE1LCA0Mi4wMTg3MDcsIDQ0LjAzMzU0LCA0Ni4wNDgzNywgNDguNTY2OTEsIDUwLjU4MTc0LCA1Mi41OTY1NzMsIDU0LjYxMTQwNCwgNTYuNjI2MjM2LCA1OC42NDEwNjgsIDYxLjE1OTYwNywgNjIuODk0MzMsIDYzLjY4ODYyNSwgNjUuNjU4NDksIDY3LjY5Mzk4NSwgNjguMDU5MTA1LCA2OC4xMjI2NjUsIDY3LjUwNzkyLCA2Ni4xMDMzOSwgNjQuMDIwOTIsIDYxLjk0MTk5OCwgNTkuODk5MzAzLCA1Ny44NTY2MSwgNTUuODEzOTE1LCA1My43NzEyMiwgNTEuNzI4NTI3LCA0OS4xNzUxNiwgNDcuMTMyNDY1LCA0NS4wODk3NywgNDMuMDQ3MDc3LCA0MS41MTUsIDcxLjIzOSwgNzEuMjM5LCA3MS4yMzksIDcxLjc1MDM2LCA3My43OTU4LCA3NS44NDEyNCwgNzcuODg2NjgsIDc5LjkzMjEyLCA4Mi40ODg5MiwgODQuNTM0MzYsIDg2LjU3OTgsIDg4LjYyNTI0NCwgOTAuMTI4NzQsIDkyLjQwNDExLCA5NC4wMDY2NywgOTUuODg4MTcsIDk2LjY5NTEzLCA5Ny4wNjQ4NSwgOTYuOTMwOTksIDk2LjA1NDg2LCA5NC4wMzgzNSwgOTIuNTI1OTksIDkyLjc1NDExLCA5MS4wMDYwNCwgODguNzk3NjQsIDg2Ljc5MDkyNCwgODQuNzg0MjEsIDgyLjc3NzUsIDgwLjc3MDc4LCA3OC43NjQwNywgNzYuMjU1NjgsIDc0LjI0ODk2LCA3Mi4yNDIyNSwgNzEuMjM5LCA2NS42MzgsIDYzLjU4OTEyNywgNjIuODM1MDUsIDYzLjMxNTc5LCA2NC42OTc4NCwgNjYuOTk5ODg2LCA2OC4yMDk1MjYsIDY4LjQ3Nzg5LCA2Ny4zNzYyMDUsIDY1LjYzOCwgODQuMTk3LCA4NS40Mjg4NywgODYuMDU4MDYsIDg1Ljk5NjY1LCA4NC41NywgODIuODkyNDgsIDgyLjI1MDE0LCA4MS4zMDI0LCA4MC4yODMxOCwgNzguNDk4MzEsIDc2LjU4LCA3NC40MTk2LCA3Mi42ODQ3MSwgNzEuNDY0NTUsIDcwLjkxOTAxLCA3MC44MDgzMDQsIDcxLjA0ODI1LCA3MS45MjgxNTQsIDcyLjg4NzkxLCA3NC4zNzU2MiwgNzYuMDE5MTEsIDc1Ljc3NDc4LCA3NC45Njk0NywgNzUuMDMxMjIsIDc2LjY1NTYyLCA3Ny44ODA2MTUsIDc4LjY3MiwgNzkuNTg3NTUsIDgwLjY1NjI5LCA4Mi42MjI3NiwgODQuNjUxMTEsIDg2LjU4NjgzLCA4OC4yMDY3MjYsIDg5LjQwOTI5NCwgOTAuMDAyNjYsIDkwLjIxMiwgODkuOTk5NDcsIDg5LjQwNDM2NiwgODguNDkwMzk1LCA4Ny4yMDQzNywgODUuNDg1ODYsIDg0LjE5N107XG5cbiAgY29uc3QgbGVhZkdyb3cgPSAxLjA4O1xuICBjb25zdCBudW1MaW5lcyA9IG15WC5sZW5ndGg7XG4gIC8vIHZhciBsZWFmQ29udG91ciA9IDM7XG5cbiAgY29uc3QgbXlOb2lzZSA9IFtdO1xuICBjb25zdCBteU5vaXNlTGV0dGVyID0gW107XG5cbiAgY29uc3QgdHlwb09mZiA9IDc1O1xuICBsZXQgY2FudmFzID0gbnVsbDtcblxuICBjdHguc2V0dXAgPSAoKSA9PiB7XG5cbiAgICBjYW52YXMgPSBjdHguY3JlYXRlQ2FudmFzKDE4MCwgMTMwKTtcbiAgICBjYW52YXMucGFyZW50KCcjbG9nbycpO1xuICAgIGN0eC5iYWNrZ3JvdW5kKDI1NSk7XG4gICAgY3R4LmZyYW1lUmF0ZSgxNSk7XG4gICAgY3R4LnNtb290aCgpO1xuXG4gICAgZm9yIChsZXQgbj0yOyBuIDwgbnVtTGluZXM7IG4rKykge1xuICAgICAgbXlOb2lzZS5wdXNoKG4pO1xuICAgICAgbXlOb2lzZUxldHRlci5wdXNoKG4pO1xuXG4gICAgICBsZXQgbWFwTiA9IGN0eC5mbG9vcihjdHgubWFwKG4sIDAsIG51bUxpbmVzLW51bUxpbmVzLzMsIDAsIHBYLmxlbmd0aCkpO1xuICAgICAgbWFwTiA9IGN0eC5jb25zdHJhaW4obWFwTiwgMCwgcFgubGVuZ3RoKTtcbiAgICAgIG15Tm9pc2VMZXR0ZXJbbl0gPSBtYXBOO1xuXG4gICAgICBpZiAobiA+IG51bUxpbmVzLW51bUxpbmVzLzMpe1xuICAgICAgICBtYXBOID0gY3R4LmZsb29yKGN0eC5tYXAobiwgbnVtTGluZXMtbnVtTGluZXMvMywgbnVtTGluZXMsIHBYLmxlbmd0aC1wWC5sZW5ndGgvMywgcFgubGVuZ3RoLzYpKTtcbiAgICAgICAgbWFwTiA9IGN0eC5jb25zdHJhaW4obWFwTiwgMCwgcFgubGVuZ3RoKTtcbiAgICAgICAgbXlOb2lzZUxldHRlcltuXSA9IG1hcE47XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjdHguZHJhdyA9ICgpPT57XG5cbiAgICBjdHguYmFja2dyb3VuZCgyNTUpO1xuICAgIGN0eC5zdHJva2VXZWlnaHQoLjc1KTtcbiAgICBjdHgudHJhbnNsYXRlKGN0eC53aWR0aC8yLCBjdHguaGVpZ2h0LzIpO1xuICAgIGN0eC5zdHJva2UoMCk7XG4gICAgY3R4Lm5vRmlsbCgpO1xuXG4gICAgY29uc3QgbGlua3NDb3VudCA9IDE7XG5cbiAgICBmb3IgKGxldCBuPTA7IG4gPCBteU5vaXNlLmxlbmd0aC0xOyBuKz0xKSB7XG4gICAgICBteU5vaXNlTGV0dGVyW25dICs9IGN0eC5mbG9vcihjdHgucmFuZG9tKC0xLCAyKSk7XG4gICAgICBjb25zdCBsZXR0ZXJGaWxsID0gMjU7XG5cbiAgICAgIGlmIChteU5vaXNlTGV0dGVyW25dIDwgbGV0dGVyRmlsbCkge1xuICAgICAgICBteU5vaXNlTGV0dGVyW25dID0gbGV0dGVyRmlsbDtcbiAgICAgIH0gZWxzZSBpZiAobXlOb2lzZUxldHRlcltuXSA+IHBYLmxlbmd0aC1sZXR0ZXJGaWxsKSB7XG4gICAgICAgIG15Tm9pc2VMZXR0ZXJbbl0gPSBwWC5sZW5ndGgtbGV0dGVyRmlsbDtcbiAgICAgIH1cblxuICAgICAgY3R4LnN0cm9rZVdlaWdodCguNSk7XG5cbiAgICAgIC8vdmFyIHJhbmREcm9wID0gcmFuZG9tKDEwMCk7XG5cbiAgICAgIC8vaWYgKHJhbmREcm9wPjk5KWNvbnRpbnVlO1xuICAgICAgaWYgKG4gPiA0ICYmIG4gPCBteU5vaXNlLmxlbmd0aC0yKXtcbiAgICAgICAgY3R4LmxpbmUocFhbbXlOb2lzZUxldHRlcltuXV0tdHlwb09mZiwgcFlbbXlOb2lzZUxldHRlcltuXV0tdHlwb09mZiwgbXlYW215Tm9pc2Vbbl1dKmxlYWZHcm93LCBteVlbbXlOb2lzZVtuXV0qbGVhZkdyb3cpO1xuICAgICAgfVxuICAgICAgY3R4LnN0cm9rZSgwKTtcbiAgICAgIGN0eC5maWxsKDI1NSk7XG4gICAgICBjdHguc3Ryb2tlV2VpZ2h0KC43NSk7XG4gICAgICBpZiAobiUyID09MCkge1xuICAgICAgICBjdHguYmVnaW5TaGFwZSgpO1xuICAgICAgICBjdHguc3Ryb2tlKDApO1xuICAgICAgICBmb3IgKGxldCBqPSBwYXJzZUludCgtbGV0dGVyRmlsbC8yKTsgaiA8IHBhcnNlSW50KGxldHRlckZpbGwvMiktMTsgaisrKSB7XG5cbiAgICAgICAgICBpZiAoY3R4LmFicygocFhbbXlOb2lzZUxldHRlcltuXStqLTFdLXR5cG9PZmYpLShwWFtteU5vaXNlTGV0dGVyW25dK2pdLXR5cG9PZmYpKSA8IDMgJiYgY3R4LmFicygocFlbbXlOb2lzZUxldHRlcltuXStqLTFdLXR5cG9PZmYpLShwWVtteU5vaXNlTGV0dGVyW25dK2pdLXR5cG9PZmYpKSA8IDMpIHtcbiAgICAgICAgICAgIGN0eC52ZXJ0ZXgocFhbbXlOb2lzZUxldHRlcltuXStqLTFdLXR5cG9PZmYsIHBZW215Tm9pc2VMZXR0ZXJbbl0rai0xXS10eXBvT2ZmKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3R4LmVuZFNoYXBlKCk7XG4gICAgICAgICAgICBjdHguYmVnaW5TaGFwZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjdHguZW5kU2hhcGUoKTtcbiAgICAgIH1cbiAgICAgIGN0eC5zdHJva2UoMCk7XG4gICAgICBjdHguc3Ryb2tlV2VpZ2h0KC43NSk7XG5cbiAgICAgIC8vaWYgKHJhbmREcm9wPjkwKWNvbnRpbnVlO1xuICAgICAgY3R4LmxpbmUobXlYW215Tm9pc2Vbbl1dKmxlYWZHcm93LCBteVlbbXlOb2lzZVtuXV0qbGVhZkdyb3csIG15WFtteU5vaXNlW24rMV1dKmxlYWZHcm93LCBteVlbbXlOb2lzZVtuKzFdXSpsZWFmR3Jvdyk7XG4gICAgfVxuICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IHNodWZmbGVHYWxsZXJ5SXRlbXMgPSAoKSA9PiB7XG5cbiAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKFsuLi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdF0uaW5jbHVkZXMoJ2dhbGxlcnknKSkge1xuXG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FsbGVyeS1vdmVydmlldy1pdGVtLXdyYXBwZXInKTtcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID49IDApIHtcbiAgICAgIEFycmF5LmZyb20oZWxlbWVudHMpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3JkZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbGVtZW50cy5sZW5ndGgpO1xuICAgICAgfSk7XG5cbiAgICB9XG4gIH1cbiAgLy8gfSk7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHdlZXRzKCl7XG4gIGNvbnN0IHhtbGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgeG1saHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoeG1saHR0cC5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHsgICAvLyBYTUxIdHRwUmVxdWVzdC5ET05FID09IDRcbiAgICAgIGlmICh4bWxodHRwLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgY29uc3QgdHdlZXRzID0gSlNPTi5wYXJzZSh4bWxodHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIGNvbnN0IGxhdGVzdCA9IHR3ZWV0cy5kYXRhWzBdO1xuICAgICAgICBjb25zdCB0ZXh0ID0gbGF0ZXN0LnRleHQ7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBsYXRlc3QuY3JlYXRlZF9hdDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR3ZWV0dGltZScpLmlubmVySFRNTCA9IGRhdGU7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJykuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgIH0gZWxzZSBpZiAoeG1saHR0cC5zdGF0dXMgPT0gNDAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgNDAwJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnc29tZXRoaW5nIGVsc2Ugb3RoZXIgdGhhbiAyMDAgd2FzIHJldHVybmVkJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHhtbGh0dHApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgLy8gbGV0IGRldlVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xuICB4bWxodHRwLm9wZW4oJ0dFVCcsICdodHRwczovL2Jhc2lsanMtbGF0ZXN0LXR3ZWV0cy5ub3cuc2gvJywgdHJ1ZSk7XG4gIHhtbGh0dHAuc2VuZCgpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==