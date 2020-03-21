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





var p5sketch;
document.addEventListener("DOMContentLoaded", function () {
  // console.log("hello main");
  Object(_tweets__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vX3NvdXJjZS9hc3NldHMvY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL19zb3VyY2UvYXNzZXRzL2pzL3NyYy9kZWNvcmF0aW9uLmpzIiwid2VicGFjazovLy8uL19zb3VyY2UvYXNzZXRzL2pzL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL19zb3VyY2UvYXNzZXRzL2pzL3NyYy9tb2JpbGUtbmF2LmpzIiwid2VicGFjazovLy8uL19zb3VyY2UvYXNzZXRzL2pzL3NyYy9wNXNrZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9fc291cmNlL2Fzc2V0cy9qcy9zcmMvdHdlZXRzLmpzIl0sIm5hbWVzIjpbInNwZWNpYWxDaGFycyIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNoYXJzIiwiaW5uZXJUZXh0Iiwic3BsaXQiLCJpbm5lckhUTUwiLCJjaGFyIiwiaSIsImZvbnRTaXplIiwic3R5bGUiLCJub2RlIiwiY3JlYXRlRWxlbWVudCIsImNzc1RleHQiLCJjb250ZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImJvZHkiLCJpbmNsdWRlcyIsImVsZW1lbnRzU2hyaW5rIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJmcyIsInBhcnNlRmxvYXQiLCJtaW5mcyIsImRlY3IiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJjcmVhdGVHdWlkZUxpbmVzIiwicXVlcnlTZWxlY3RvciIsImJvdHRvbWxpbmVzIiwicmlnaHRsaW5lcyIsInBhZ2VsaW5lcyIsImxpbmUiLCJhZGQiLCJwNXNrZXRjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0d2VldHMiLCJtb2JpbGVOYXYiLCJwNSIsInNrZXRjaCIsIm9uYmx1ciIsIm5vTG9vcCIsIm9uZm9jdXMiLCJsb29wIiwidG9nZ2xlIiwiZWxlIiwiZGlzcGxheSIsIm1haW5tZW51IiwibmF2bWV0ZXIiLCJsaW5rcyIsImN0eCIsIm15WCIsIm15WSIsInBYIiwicFkiLCJsZWFmR3JvdyIsIm51bUxpbmVzIiwibXlOb2lzZSIsIm15Tm9pc2VMZXR0ZXIiLCJ0eXBvT2ZmIiwiY2FudmFzIiwic2V0dXAiLCJjcmVhdGVDYW52YXMiLCJwYXJlbnQiLCJiYWNrZ3JvdW5kIiwiZnJhbWVSYXRlIiwic21vb3RoIiwibiIsInB1c2giLCJtYXBOIiwiZmxvb3IiLCJtYXAiLCJjb25zdHJhaW4iLCJkcmF3Iiwic3Ryb2tlV2VpZ2h0IiwidHJhbnNsYXRlIiwid2lkdGgiLCJoZWlnaHQiLCJzdHJva2UiLCJub0ZpbGwiLCJsaW5rc0NvdW50IiwicmFuZG9tIiwibGV0dGVyRmlsbCIsImZpbGwiLCJiZWdpblNoYXBlIiwiaiIsInBhcnNlSW50IiwiYWJzIiwidmVydGV4IiwiZW5kU2hhcGUiLCJ4bWxodHRwIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiRE9ORSIsInN0YXR1cyIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImxhdGVzdCIsImRhdGEiLCJ0ZXh0IiwiZGF0ZSIsImNyZWF0ZWRfYXQiLCJjb25zb2xlIiwibG9nIiwib3BlbiIsInNlbmQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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TUFBTSxHQUFHL0QsT0FBTSxDQUFDZ0UsSUFBUCxDQUFZLENBQVosQ0FBZjtBQUNBLFlBQU1DLElBQUksR0FBR0YsTUFBTSxDQUFDRSxJQUFwQjtBQUNBLFlBQU1DLElBQUksR0FBR0gsTUFBTSxDQUFDSSxVQUFwQjtBQUNBNUcsZ0JBQVEsQ0FBQ2lDLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUN4QixTQUFyQyxHQUFpRGtHLElBQWpEO0FBQ0EzRyxnQkFBUSxDQUFDaUMsYUFBVCxDQUF1QixVQUF2QixFQUFtQ3hCLFNBQW5DLEdBQStDaUcsSUFBL0M7QUFDRCxPQVBELE1BT08sSUFBSVgsT0FBTyxDQUFDSyxNQUFSLElBQWtCLEdBQXRCLEVBQTJCO0FBQ2hDUyxlQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNELE9BRk0sTUFFQTtBQUNMRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSw0Q0FBWixFQURLLENBRUw7QUFDRDtBQUNGO0FBQ0YsR0FoQkQsQ0FGOEIsQ0FtQjlCOzs7QUFDQWYsU0FBTyxDQUFDZ0IsSUFBUixDQUFhLEtBQWIsRUFBb0IsdUNBQXBCLEVBQTZELElBQTdEO0FBQ0FoQixTQUFPLENBQUNpQixJQUFSO0FBQ0QsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi4vY3NzL3N0eWxlcy5jc3NcIjsiLCJcbmV4cG9ydCBmdW5jdGlvbiBzcGVjaWFsQ2hhcnMoKSB7XG5cbiAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYS50ZXh0Z3JvdywgLnRleHRncm93Jyk7XG4gIFsuLi5lbGVtZW50c10uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2RvbnQtZGVjb3JhdGUnKSAhPT0gdHJ1ZSkge1xuICAgICAgY29uc3QgY2hhcnMgPSBlbGVtZW50LmlubmVyVGV4dC5zcGxpdCgnJyk7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IG51bGw7XG4gICAgICBjaGFycy5mb3JFYWNoKChjaGFyLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gMzAgLSAoMiAqIGkpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IGBib3JkZXItYm90dG9tLXdpZHRoOiAkeyhpICsgMSl9cHg7IGZvbnQtc2l6ZTogJHtmb250U2l6ZX1weDsgdG9wOiAtJHsoaSArICgyICogaSkpfXB4O2A7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9IHN0eWxlO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hhcik7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBub3QgaW4gdGhlIHJlZmVyZW5jZVxuICAgKi9cbiAgaWYgKFsuLi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdF0uaW5jbHVkZXMoJ3JlZmVyZW5jZScpID09PSBmYWxzZSkge1xuXG4gICAgbGV0IGVsZW1lbnRzU2hyaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRzaHJpbmssIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYnKTtcblxuICAgIFsuLi5lbGVtZW50c1Nocmlua10uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZG9udC1kZWNvcmF0ZScpICE9PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGNoYXJzID0gZWxlbWVudC5pbm5lclRleHQuc3BsaXQoJycpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtc2l6ZScpO1xuICAgICAgICBsZXQgZnMgPSBwYXJzZUZsb2F0KHN0eWxlKTtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBudWxsO1xuICAgICAgICBjb25zdCBtaW5mcyA9IDE2O1xuICAgICAgICBjb25zdCBkZWNyID0gKGZzIC0gbWluZnMpIC8gY2hhcnMubGVuZ3RoO1xuICAgICAgICBjaGFycy5mb3JFYWNoKChjaGFyLCBpKSA9PiB7XG4gICAgICAgICAgZnMgLT0gZGVjcjtcbiAgICAgICAgICBjb25zdCBzdHlsZSA9IGBib3JkZXItYm90dG9tLXdpZHRoOiAkeygyIC8gaSl9cHg7IGZvbnQtc2l6ZTogJHtmc31weDsgdG9wOiAtJHtpfXB4O2A7XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9ICd0ZXh0c2hyaW5rLWl0ZW0nO1xuICAgICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9IHN0eWxlO1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGFyKTtcbiAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR3VpZGVMaW5lcygpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWlkZWxpbmVzJyk7XG4gIGNvbnN0IGJvdHRvbWxpbmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHJpZ2h0bGluZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcGFnZWxpbmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvdHRvbWxpbmVzLmNsYXNzTmFtZSA9ICdib3R0b21fbGluZXMnO1xuICByaWdodGxpbmVzLmNsYXNzTmFtZSA9ICdyaWdodF9saW5lcyc7XG4gIHBhZ2VsaW5lcy5jbGFzc05hbWUgPSAncGFnZV9saW5lcyc7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGluZS5jbGFzc0xpc3QuYWRkKCdib3R0b21MaW5lJywgYGxpbmVfJHtpICsgMX1gKTtcbiAgICBib3R0b21saW5lcy5hcHBlbmRDaGlsZChsaW5lKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaW5lLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0X2xpbmUnLCBgbGluZV8ke2kgKyAxfWApO1xuICAgIHJpZ2h0bGluZXMuYXBwZW5kQ2hpbGQobGluZSk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGluZS5jbGFzc0xpc3QuYWRkKCdsaW5lJywgYGxpbmVfJHtpICsgMX1gKTtcbiAgICBwYWdlbGluZXMuYXBwZW5kQ2hpbGQobGluZSk7XG4gIH1cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChib3R0b21saW5lcyk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQocmlnaHRsaW5lcyk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQocGFnZWxpbmVzKTtcbn1cbiIsImltcG9ydCBwNSBmcm9tIFwicDUvbGliL3A1XCI7XG5pbXBvcnQgc2tldGNoIGZyb20gXCIuL3A1c2tldGNoXCI7XG5pbXBvcnQgbW9iaWxlTmF2IGZyb20gXCIuL21vYmlsZS1uYXZcIjtcbmltcG9ydCB0d2VldHMgZnJvbSBcIi4vdHdlZXRzXCI7XG5pbXBvcnQgeyBzcGVjaWFsQ2hhcnMsIGNyZWF0ZUd1aWRlTGluZXMgfSBmcm9tIFwiLi9kZWNvcmF0aW9uXCI7XG5sZXQgcDVza2V0Y2g7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKFwiaGVsbG8gbWFpblwiKTtcbiAgdHdlZXRzKCk7XG4gIHNwZWNpYWxDaGFycygpO1xuICBjcmVhdGVHdWlkZUxpbmVzKCk7XG4gIG1vYmlsZU5hdigpO1xuICBwNXNrZXRjaCA9IG5ldyBwNShza2V0Y2gpO1xufSk7XG5cbndpbmRvdy5vbmJsdXIgPSBmdW5jdGlvbigpIHtcbiAgcDVza2V0Y2gubm9Mb29wKCk7XG59O1xud2luZG93Lm9uZm9jdXMgPSBmdW5jdGlvbigpIHtcbiAgcDVza2V0Y2gubG9vcCgpO1xufTtcbiIsIi8qIGdsb2JhbCAkICovXG5cbmZ1bmN0aW9uIHRvZ2dsZSAoZWxlKXtcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZSkuZGlzcGxheSA9PT0gJ2Jsb2NrJyl7XG4gICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0gZWxzZSB7XG4gICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vYmlsZU5hdigpIHtcbiAgY29uc3QgbWFpbm1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51Jyk7XG4gIGNvbnN0IG5hdm1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1vLW1ldGVyJyk7XG4gIG5hdm1ldGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5hdm1ldGVyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW5lZCcpO1xuICAgIHRvZ2dsZShtYWlubWVudSk7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1saW5rJyk7XG4gICAgWy4uLmxpbmtzXS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuZWQnKSl7XG4gICAgICAgICAgbmF2bWV0ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkJyk7XG4gICAgICAgICAgdG9nZ2xlKG1haW5tZW51KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vICQoJy5uYXYtby1tZXRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAvLyAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW5lZCcpO1xuICAvLyAgICQoJy5tYWluLW1lbnUnKS50b2dnbGUoKTtcbiAgLy8gICAkKCcubWFpbi1tZW51JykuZmluZCgnbGkgYScpLmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIC8vICAgICBpZiAoJCgnLm5hdi1vLW1ldGVyJykuaGFzQ2xhc3MoJ29wZW5lZCcpKSB7XG4gIC8vICAgICAgICQoJy5uYXYtby1tZXRlcicpLnRvZ2dsZUNsYXNzKCdvcGVuZWQnKTtcbiAgLy8gICAgICAgJCgnLm1haW5fbWVudScpLnRvZ2dsZSgpO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvLyB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNrZXRjaChjdHgpe1xuXG4gIGNvbnN0IG15WD0gWy03OCwgLTcyLCAtNjksIC02NSwgLTY0LCAtNjMsIC02MSwgLTYxLCAtNjEsIC02MSwgLTYwLCAtNjAsIC02MCwgLTU5LCAtNTYsIC01NCwgLTUxLCAtNDgsIC00NCwgLTQyLCAtMzksIC0zNSwgLTMzLCAtMzEsIC0yNywgLTIzLCAtMTksIC0xNiwgLTEzLCAtMTEsIC05LCAtNiwgMywgNSwgNiwgOSwgMTIsIDE0LCAxOCwgMjAsIDIyLCAyMywgMjgsIDMxLCAzNCwgMzksIDQwLCA0NCwgNDgsIDUxLCA1NCwgNTYsIDU5LCA2MiwgNjYsIDY4LCA3MiwgNzQsIDc2LCA3OCwgODAsIDgxLCA4MSwgODEsIDgwLCA4MCwgNzksIDc5LCA3OCwgNzcsIDc2LCA3NSwgNzUsIDc0LCA3MiwgNzEsIDcwLCA3MCwgNjgsIDY3LCA2NCwgNjMsIDYyLCA2MCwgNTgsIDU4LCA1OCwgNTYsIDU0LCA1MiwgNTAsIDQ3LCA0NywgNDUsIDQzLCAzOSwgMzYsIDMzLCAyOCwgMjUsIDI0LCAyMiwgMTgsIDE0LCAxMSwgOCwgNiwgMywgLTQsIC0xMiwgLTE0LCAtMTcsIC0yMywgLTI2LCAtMjksIC0zMiwgLTM0LCAtMzcsIC0zOCwgLTQyLCAtNDQsIC00NywgLTQ5LCAtNTEsIC01MywgLTU1LCAtNTcsIC01OSwgLTYxLCAtNjQsIC02NiwgLTY5LCAtNzQsIC03OV07XG4gIGNvbnN0IG15WT0gWzM1LCAzNCwgMzMsIDMyLCAzMSwgMzEsIDI1LCAyMCwgMTUsIDExLCA3LCAxLCAtNSwgLTEwLCAtMTYsIC0yMCwgLTI1LCAtMjksIC0zNCwgLTM3LCAtNDAsIC00MiwgLTQ0LCAtNDQsIC00NywgLTQ4LCAtNTAsIC01MSwgLTUyLCAtNTAsIC01MCwgLTUyLCAtNTUsIC01NiwgLTU0LCAtNTQsIC01NCwgLTU1LCAtNTUsIC01NiwgLTU1LCAtNTQsIC01NSwgLTU1LCAtNTYsIC01NSwgLTU0LCAtNTQsIC01NSwgLTU1LCAtNTYsIC01NiwgLTU2LCAtNTUsIC01NCwgLTU1LCAtNTUsIC01NiwgLTU2LCAtNTgsIC01OCwgLTU1LCAtNTIsIC00OSwgLTQ2LCAtNDMsIC00MCwgLTM2LCAtMzMsIC0yOSwgLTI3LCAtMjMsIC0yMSwgLTE4LCAtMTMsIC0xMCwgLTgsIC01LCAtMywgLTEsIDMsIDYsIDgsIDEwLCAxMywgMTUsIDE2LCAxOCwgMjEsIDI0LCAyNSwgMjgsIDMxLCAzMywgMzYsIDM4LCA0MSwgNDMsIDQ3LCA0OSwgNTAsIDUwLCA1MywgNTQsIDU1LCA1NiwgNTcsIDU4LCA1OSwgNjAsIDU5LCA1OSwgNTcsIDU2LCA1NiwgNTUsIDU0LCA1MywgNTAsIDQ4LCA0NiwgNDUsIDQzLCA0MSwgMzksIDM3LCAzNiwgMzUsIDM1LCAzNiwgMzgsIDM4LCAzOCwgNDBdO1xuICBjb25zdCBwWD0gWzM0LjczLCAzNi45MjU2MDIsIDM5LjEyMTIwNCwgNDAuMjE4OTk4LCA0MC4yMTg5OTgsIDQwLjIxODk5OCwgNDAuMjE4OTk4LCA0MC4xMjk1OTcsIDQwLjQ2NTA1LCA0Mi4xNzgyMzQsIDQ0LjQ5MjgxNywgNDYuMjk3NzMsIDQ4LjI2Mzc3NSwgNDkuODc0ODEsIDUxLjA5NjQ2LCA1MS44OTQzMzcsIDUyLjIwNDQyMiwgNTIuMjMyMjM1LCA1MS45NjIsIDUxLjM2OTY5LCA1MC41MDE5NiwgNDkuMTAxMDc4LCA0Ny40MzM5MDMsIDQ1LjIxMDEsIDQzLjA4NTgwNCwgNDEuMjk4ODMyLCAzOS42MjE5OTgsIDM5LjAyNSwgMzcuNDE0Mzc1LCAzNS4yNjY4ODQsIDM0LjczLCAzNC43MywgMzQuNzMsIDM0LjczLCAzNC43MywgMzQuNzMsIDM0LjczLCAzNC43MywgMzQuNzMsIDM0LjczLCAzNC43MywgMzQuNzMsIDM0LjczLCAzNC43MywgNDMuMTcsIDQ1LjIwMTY0NSwgNDYuMzAwMzQ2LCA0Ni41ODQ5MywgNDYuNTQyNzQsIDQ2LjAzNDg1LCA0NC42NDc0MzgsIDQyLjQ1NzQ5MywgNDAuNjY2MzQ0LCA0MC4yMiwgNDAuMjIsIDQwLjIyLCA0MC4yMiwgNDEuNzA4MTIyLCA0My4xNywgNjQuMzQ2LCA2My40MjU2OTQsIDYxLjQzMywgNTkuNTM2Nzc0LCA1Ny41NTQ3MywgNTYuMDE5NDkzLCA1NS4wNDg0ODUsIDU1LjAwNzUwNCwgNTYuODU0NywgNTguODA5ODIyLCA2MC44NjkyMTcsIDYyLjk4MDAwMywgNjUuMjMxMDIsIDY3LjA1NDgyLCA2OC40MzQ4MTQsIDY5LjM1NDQ2LCA2OS43NDc1OCwgNjkuODM3LCA2OS44MzcsIDY5LjgzNywgNjkuODM3LCA2OS44MzcsIDY5LjgzNywgNjcuNTk2LCA2NS45MTUyNSwgNjUuMTQ5NDksIDY0LjQzNjAxLCA2Mi43NjM3NSwgNjAuNDM1NjA4LCA1OC4zOTc5MDcsIDU2LjYzMDM5NCwgNTQuOTkzMjg2LCA1NC4wODM2OTQsIDUzLjkzODI3LCA1NC40NDc4NzIsIDU1Ljc2NDI1NiwgNTcuNTE2MzQyLCA1OS4zNjkyMywgNjEuNjQwNDcsIDYzLjYyODAzMywgNjQuMzQ2LCA2MS4yODQsIDYzLjUzNjMwNCwgNjQuMzQ2LCA2NC4zNDYsIDYyLjgyMzg1MywgNjEuMDk2NDM2LCA1OS40OTgyMzQsIDU5LjQxNjUyLCA2MS4yODQsIDc0LjgwNCwgNzYuNzYxMTcsIDc4LjY0NjE1LCA4MC43Njg5OSwgODEuOTM3LCA4MC4zMTU3LCA3OC43MzM1MiwgNzYuNTU0ODg2LCA3NS4wNDc4NCwgNzMuNjczNDIsIDczLjI3Mjk5NSwgNzMuNjkxNjksIDc0Ljg4NjQwNiwgNzYuNzY1MDgsIDc4LjY5ODYxLCA4MC45NjU2MTQsIDgyLjYyNDMsIDg0Ljk4NTUsIDg2LjU1MjMsIDg1Ljk3OTk5NiwgODQuNzQ4LCA4My40NDM1NywgODEuNDkzNDg0LCA3OS4zNDU5NTUsIDc4LjQ3NzAwNSwgNzkuOTUxNzQ0LCA4Mi4wNDk5OTUsIDg0LjEyNzgyLCA4NS41OTkyLCA4Ni44MjE1MywgODcuMDM5MjEsIDg2LjU2MTE2NSwgODUuNDE0NTgsIDgzLjYxNzYxLCA4MS43MjM5NiwgNzkuNDM1LCA3Ny40Mzg0MTYsIDc1LjQzMTA4LCA3My41NjE4MSwgNzIuNjQ3OTk1LCA3My44Nzk5OSwgNzQuODA0LCA4OS43MDYsIDkwLjYwNzI1NCwgOTIuMzQ3NDEsIDk0LjM4OTkzLCA5NS45MDQxNDQsIDk1LjcyMjI5LCA5NC4zODk5NCwgOTIuMzQ3NDEsIDkwLjI5NjU2LCA4OS43MDYsIDkwLjE1NCwgOTIuMzQ5OTksIDk0LjU0NTk3NSwgOTUuNjQ0LCA5NS42NDQsIDk1LjY0NCwgOTUuNjQ0LCA5NS42NDQsIDk1LjY0NCwgOTUuNjQ0LCA5NS42NDQsIDk1LjY0NCwgOTUuMDk1LCA5Mi44OTkwMiwgOTEuMjUyMDMsIDkwLjE1NCwgOTAuMTU0LCA5MC4xNTQsIDkwLjE1NCwgOTAuMTU0LCA5MC4xNTQsIDkwLjE1NCwgOTAuMTU0LCA5MC4xNTQsIDkwLjE1NCwgOTkuOTAyLCAxMDIuMDk3MTksIDEwNC4yOTIzOCwgMTA1LjM5LCAxMDUuMzksIDEwNS4zOSwgMTA1LjM5LCAxMDUuMzksIDEwNS4zOSwgMTA1LjM5LCAxMDUuMzksIDEwNS4zOSwgMTA1LjM5LCAxMDUuNDc4NzIsIDEwNi42Njk4NzYsIDEwNy4zNzEsIDEwNy43MDcsIDEwNi4yNzYzNiwgMTA0LjM5NTk1LCAxMDIuMTkxMTMsIDEwMC43ODU2OSwgMTAwLjA2NDI1NSwgOTkuOTAyLCA5OS45MDIsIDk5LjkwMiwgOTkuOTAyLCA5OS45MDIsIDk5LjkwMiwgOTkuOTAyLCA5OS45MDIsIDk5LjkwMiwgOTkuOTAyLCA5OS45MDIsIDExMS43NCwgMTEzLjkzNTk5LCAxMTYuMTMxOTcsIDExNy4yMjk5OTYsIDExNy4yMjk5OTYsIDExNy4yMjk5OTYsIDExNy4yMjk5OTYsIDExNy4yMjk5OTYsIDExNy4yMjk5OTYsIDExNy4yMjk5OTYsIDExNy4yMjk5OTYsIDExNy4yMjk5OTYsIDExNy4yMjIzNCwgMTE2LjkzMjU2LCAxMTYuMzU1MDgsIDExNC44MDMxNCwgMTEzLjI0MzE4LCAxMTEuMjA4Mzc0LCAxMDguNzAxNDksIDEwNy40OTIzNywgMTA3Ljk3Nzg3NSwgMTA4LjM0MTk5NSwgMTEwLjI0OTAzLCAxMTEuNjYyOCwgMTExLjc0LCAxMTEuNzQsIDExMS43NCwgMTExLjc0LCAxMTEuNzQsIDExMS43NCwgMTExLjc0LCAxMTEuNzQsIDExMS43NCwgMTExLjc0LCAxMTEuMzMsIDExMi4yMzA3NCwgMTEzLjk3MDQzLCAxMTYuNDExODEsIDExNy41MjM1OCwgMTE3LjMzODMsIDExNS45OTY2MzUsIDExMy45NzA0NCwgMTExLjkyMDIyLCAxMTEuMzMsIDEyMi45MDcsIDEyNC44NjQ2LCAxMjYuNzQ5MjQ1LCAxMjguODcyNDIsIDEzMC4wNCwgMTI4LjQxODksIDEyNi44MzcyNCwgMTI0LjY1ODM0LCAxMjMuMTUwOTg2LCAxMjEuNzc2NDM2LCAxMjEuMzc2LCAxMjEuNzk0NjksIDEyMi45ODk0MSwgMTI0Ljg2ODA5LCAxMjYuODAxNjEsIDEyOS4wNjg4MiwgMTMwLjcyNzkyLCAxMzMuMDg5MjIsIDEzNC42NTU1NSwgMTM0LjA4MjY0LCAxMzIuODUwMTYsIDEzMS41NDU0NCwgMTI5LjU5NjE4LCAxMjcuNDQ3MjYsIDEyNi41NzgwMywgMTI4LjA1MzE4LCAxMzAuMTUxLCAxMzIuMjI5NjksIDEzMy43MDE2NCwgMTM0LjkyNDQ1LCAxMzUuMTQyMjEsIDEzNC42NjQwMywgMTMzLjUxNzE1LCAxMzEuNzE5ODYsIDEyOS44MjYwMywgMTI3LjUzNywgMTI1LjU0MDQyLCAxMjMuNTMzMDksIDEyMS42NjM4MiwgMTIwLjc1MDEyLCAxMjEuOTgyNjA1LCAxMjIuOTA3XTtcbiAgY29uc3QgcFk9IFs0MS41MTUsIDQxLjUxNSwgNDEuNTE1LCA0Mi4wNTAyNSwgNDQuMTkxMjU3LCA0Ni4zMzIyNjQsIDQ3LjkzOCwgNDkuNjQxMzk2LCA1MC40NDI5MSwgNDkuMzc0NDEzLCA0OC43NDIyMTgsIDQ4LjgzOTc5LCA0OS41MzA5NiwgNTAuNzk2OTkzLCA1Mi41ODUwNTYsIDU0Ljg0MjMyLCA1Ni45NTA0NTUsIDU4LjcwNTM2NCwgNjAuOTY4OTIsIDYyLjk0NTE5OCwgNjQuNjIyMTQsIDY2LjI3OTAyLCA2Ny40MjU4MiwgNjguMDk1NTM1LCA2Ny45NTkxMiwgNjcuMTYxOTYsIDY1Ljc1MSwgNjcuNjkzMDEsIDY3LjY5MywgNjcuNjkzLCA2Ni42ODYxNSwgNjQuNjcyNDUsIDYyLjY1ODc1NiwgNjAuNjQ1MDcsIDU4LjYzMTM4MiwgNTYuMTE0MjczLCA1NC4xMDA1ODYsIDUyLjA4NjksIDUwLjA3MzIxLCA0OC4wNTk1MjUsIDQ2LjA0NTgzNywgNDMuNTI4NzMsIDQxLjUxNTA0LCA0MS41MTUsIDYzLjY2LCA2Mi44Mzc1MzIsIDYwLjgwMjIwOCwgNTguOTQwMDgzLCA1Ni44ODM1MDMsIDU0Ljg0MjQxNSwgNTMuNDM0MTgsIDUzLjMzMzU0LCA1NC40MjY1ODIsIDU2LjQwMDk5NywgNTguNDIyMzMsIDYwLjQ0MzY2LCA2Mi40NjQ5OTMsIDYzLjM5ODUsIDYzLjY2LCA1NS43OCwgNTMuNjcyMzQsIDUzLjA5MiwgNTMuMzgyMTE0LCA1NC4xOTU2MiwgNTMuODY2NDk3LCA1Mi4wNTU0OTIsIDUwLjg4ODg5NywgNDkuOTU4MzEzLCA0OS4yNTE4MTYsIDQ4LjgyNTM4LCA0OC43MzMzLCA0OS4wOTYyNDUsIDQ5Ljk4NTgyNSwgNTEuNDEyMzA4LCA1My4zODU5ODMsIDU1LjM2NTgxNCwgNTcuNTkzMDQ0LCA1OS42MTMyMywgNjEuNjMzNDIsIDYzLjY1MzYwNiwgNjYuMTc4ODU2LCA2Ny42OTQsIDY3LjY5NCwgNjcuNjk0LCA2Ni43NDEsIDY2LjEyNDgyNSwgNjcuMjYxMzYsIDY4LjA2Mjc0NCwgNjguMDYxMTgsIDY3LjQ2MDIxLCA2Ni4wMTA3LCA2My45Njc5NTcsIDYyLjE1NjUzMiwgNjAuMTAyNjYsIDU4LjQ0ODkxNCwgNTcuMzYzNTY3LCA1Ni42Nzk0OCwgNTYuMTUzMzg1LCA1NS44NTkzMTgsIDU1Ljc4LCA2My44ODQsIDYzLjA1MDY5LCA2MS4yMzIsIDU5LjA2NTk5OCwgNTkuMzI1ODI1LCA1OS44NDEyMjUsIDYwLjk5MTg5NCwgNjMuMTE0ODE1LCA2My44ODQsIDYyLjEyOSwgNjMuMzYwODY3LCA2My45OTAwNDcsIDYzLjkyODgyNSwgNjIuNTAyLCA2MC44MjQzOTgsIDYwLjE4MTYxOCwgNTkuMjMzMjUzLCA1OC4yMTM3MTUsIDU2LjQyODQ0LCA1NC41MSwgNTIuMzUwMTMsIDUwLjYxNTUzLCA0OS4zOTU1MDQsIDQ4Ljg0OTk5LCA0OC43MzkzLCA0OC45NzkyNDgsIDQ5Ljg1OTE1OCwgNTAuODE4OTE2LCA1Mi4zMDY2MiwgNTMuOTUwMTE1LCA1My43MDU3OCwgNTIuOTAwNDY3LCA1Mi45NjIxNDcsIDU0LjU4NTM3LCA1NS44MTExMTUsIDU2LjYwMiwgNTcuNTE3ODI2LCA1OC41ODYzODQsIDYwLjU1MzAyNCwgNjIuNTgxODYzLCA2NC41MTY1MiwgNjYuMTM1NjA1LCA2Ny4zMzc2MiwgNjcuOTMwNzQsIDY4LjE0LCA2Ny45Mjc0OSwgNjcuMzMyNTIsIDY2LjQxODkxLCA2NS4xMzM3NCwgNjMuNDE2NzQsIDYyLjEyOSwgNDMuNTY5LCA0MS41MTk2MjcsIDQwLjc2NTA3NiwgNDEuMDI2NDksIDQyLjYyODczLCA0NC45MzA4NzgsIDQ2LjE0MDUyLCA0Ni40MDg4NiwgNDUuMzA2NzYsIDQzLjU2OSwgNDkuMTcsIDQ5LjE3LCA0OS4xNywgNDkuNjcwNjIsIDUxLjY3MzEwNywgNTMuNjc1NTk0LCA1Ni4xNzg3MDMsIDU4LjE4MTE5LCA2MC4xODM2NzgsIDYyLjE4NjE2NSwgNjQuMTg4NjUsIDY2LjY5MTc0LCA2Ny42OTMsIDY3LjY5MywgNjcuNjkzLCA2Ny4xOTIzOCwgNjUuMTg5OTEsIDYyLjY4NjgxLCA2MC42ODQzMjIsIDU4LjY4MTgzNSwgNTYuNjc5MzQ4LCA1NC42NzY4NiwgNTIuMTczNzUsIDUwLjE3MTI2NSwgNDkuMTcsIDQxLjUxNSwgNDEuNTE1LCA0MS41MTUsIDQyLjAxODcwNywgNDQuMDMzNTQsIDQ2LjA0ODM3LCA0OC41NjY5MSwgNTAuNTgxNzQsIDUyLjU5NjU3MywgNTQuNjExNDA0LCA1Ni42MjYyMzYsIDU4LjY0MTA2OCwgNjEuMTU5NjA3LCA2Mi44OTQzMywgNjMuNjg4NjI1LCA2NS42NTg0OSwgNjcuNjkzOTg1LCA2OC4wNTkxMDUsIDY4LjEyMjY2NSwgNjcuNTA3OTIsIDY2LjEwMzM5LCA2NC4wMjA5MiwgNjEuOTQxOTk4LCA1OS44OTkzMDMsIDU3Ljg1NjYxLCA1NS44MTM5MTUsIDUzLjc3MTIyLCA1MS43Mjg1MjcsIDQ5LjE3NTE2LCA0Ny4xMzI0NjUsIDQ1LjA4OTc3LCA0My4wNDcwNzcsIDQxLjUxNSwgNzEuMjM5LCA3MS4yMzksIDcxLjIzOSwgNzEuNzUwMzYsIDczLjc5NTgsIDc1Ljg0MTI0LCA3Ny44ODY2OCwgNzkuOTMyMTIsIDgyLjQ4ODkyLCA4NC41MzQzNiwgODYuNTc5OCwgODguNjI1MjQ0LCA5MC4xMjg3NCwgOTIuNDA0MTEsIDk0LjAwNjY3LCA5NS44ODgxNywgOTYuNjk1MTMsIDk3LjA2NDg1LCA5Ni45MzA5OSwgOTYuMDU0ODYsIDk0LjAzODM1LCA5Mi41MjU5OSwgOTIuNzU0MTEsIDkxLjAwNjA0LCA4OC43OTc2NCwgODYuNzkwOTI0LCA4NC43ODQyMSwgODIuNzc3NSwgODAuNzcwNzgsIDc4Ljc2NDA3LCA3Ni4yNTU2OCwgNzQuMjQ4OTYsIDcyLjI0MjI1LCA3MS4yMzksIDY1LjYzOCwgNjMuNTg5MTI3LCA2Mi44MzUwNSwgNjMuMzE1NzksIDY0LjY5Nzg0LCA2Ni45OTk4ODYsIDY4LjIwOTUyNiwgNjguNDc3ODksIDY3LjM3NjIwNSwgNjUuNjM4LCA4NC4xOTcsIDg1LjQyODg3LCA4Ni4wNTgwNiwgODUuOTk2NjUsIDg0LjU3LCA4Mi44OTI0OCwgODIuMjUwMTQsIDgxLjMwMjQsIDgwLjI4MzE4LCA3OC40OTgzMSwgNzYuNTgsIDc0LjQxOTYsIDcyLjY4NDcxLCA3MS40NjQ1NSwgNzAuOTE5MDEsIDcwLjgwODMwNCwgNzEuMDQ4MjUsIDcxLjkyODE1NCwgNzIuODg3OTEsIDc0LjM3NTYyLCA3Ni4wMTkxMSwgNzUuNzc0NzgsIDc0Ljk2OTQ3LCA3NS4wMzEyMiwgNzYuNjU1NjIsIDc3Ljg4MDYxNSwgNzguNjcyLCA3OS41ODc1NSwgODAuNjU2MjksIDgyLjYyMjc2LCA4NC42NTExMSwgODYuNTg2ODMsIDg4LjIwNjcyNiwgODkuNDA5Mjk0LCA5MC4wMDI2NiwgOTAuMjEyLCA4OS45OTk0NywgODkuNDA0MzY2LCA4OC40OTAzOTUsIDg3LjIwNDM3LCA4NS40ODU4NiwgODQuMTk3XTtcblxuICBjb25zdCBsZWFmR3JvdyA9IDEuMDg7XG4gIGNvbnN0IG51bUxpbmVzID0gbXlYLmxlbmd0aDtcbiAgLy8gdmFyIGxlYWZDb250b3VyID0gMztcblxuICBjb25zdCBteU5vaXNlID0gW107XG4gIGNvbnN0IG15Tm9pc2VMZXR0ZXIgPSBbXTtcblxuICBjb25zdCB0eXBvT2ZmID0gNzU7XG4gIGxldCBjYW52YXMgPSBudWxsO1xuXG4gIGN0eC5zZXR1cCA9ICgpID0+IHtcblxuICAgIGNhbnZhcyA9IGN0eC5jcmVhdGVDYW52YXMoMTgwLCAxMzApO1xuICAgIGNhbnZhcy5wYXJlbnQoJyNsb2dvJyk7XG4gICAgY3R4LmJhY2tncm91bmQoMjU1KTtcbiAgICBjdHguZnJhbWVSYXRlKDE1KTtcbiAgICBjdHguc21vb3RoKCk7XG5cbiAgICBmb3IgKGxldCBuPTI7IG4gPCBudW1MaW5lczsgbisrKSB7XG4gICAgICBteU5vaXNlLnB1c2gobik7XG4gICAgICBteU5vaXNlTGV0dGVyLnB1c2gobik7XG5cbiAgICAgIGxldCBtYXBOID0gY3R4LmZsb29yKGN0eC5tYXAobiwgMCwgbnVtTGluZXMtbnVtTGluZXMvMywgMCwgcFgubGVuZ3RoKSk7XG4gICAgICBtYXBOID0gY3R4LmNvbnN0cmFpbihtYXBOLCAwLCBwWC5sZW5ndGgpO1xuICAgICAgbXlOb2lzZUxldHRlcltuXSA9IG1hcE47XG5cbiAgICAgIGlmIChuID4gbnVtTGluZXMtbnVtTGluZXMvMyl7XG4gICAgICAgIG1hcE4gPSBjdHguZmxvb3IoY3R4Lm1hcChuLCBudW1MaW5lcy1udW1MaW5lcy8zLCBudW1MaW5lcywgcFgubGVuZ3RoLXBYLmxlbmd0aC8zLCBwWC5sZW5ndGgvNikpO1xuICAgICAgICBtYXBOID0gY3R4LmNvbnN0cmFpbihtYXBOLCAwLCBwWC5sZW5ndGgpO1xuICAgICAgICBteU5vaXNlTGV0dGVyW25dID0gbWFwTjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGN0eC5kcmF3ID0gKCk9PntcblxuICAgIGN0eC5iYWNrZ3JvdW5kKDI1NSk7XG4gICAgY3R4LnN0cm9rZVdlaWdodCguNzUpO1xuICAgIGN0eC50cmFuc2xhdGUoY3R4LndpZHRoLzIsIGN0eC5oZWlnaHQvMik7XG4gICAgY3R4LnN0cm9rZSgwKTtcbiAgICBjdHgubm9GaWxsKCk7XG5cbiAgICBjb25zdCBsaW5rc0NvdW50ID0gMTtcblxuICAgIGZvciAobGV0IG49MDsgbiA8IG15Tm9pc2UubGVuZ3RoLTE7IG4rPTEpIHtcbiAgICAgIG15Tm9pc2VMZXR0ZXJbbl0gKz0gY3R4LmZsb29yKGN0eC5yYW5kb20oLTEsIDIpKTtcbiAgICAgIGNvbnN0IGxldHRlckZpbGwgPSAyNTtcblxuICAgICAgaWYgKG15Tm9pc2VMZXR0ZXJbbl0gPCBsZXR0ZXJGaWxsKSB7XG4gICAgICAgIG15Tm9pc2VMZXR0ZXJbbl0gPSBsZXR0ZXJGaWxsO1xuICAgICAgfSBlbHNlIGlmIChteU5vaXNlTGV0dGVyW25dID4gcFgubGVuZ3RoLWxldHRlckZpbGwpIHtcbiAgICAgICAgbXlOb2lzZUxldHRlcltuXSA9IHBYLmxlbmd0aC1sZXR0ZXJGaWxsO1xuICAgICAgfVxuXG4gICAgICBjdHguc3Ryb2tlV2VpZ2h0KC41KTtcblxuICAgICAgLy92YXIgcmFuZERyb3AgPSByYW5kb20oMTAwKTtcblxuICAgICAgLy9pZiAocmFuZERyb3A+OTkpY29udGludWU7XG4gICAgICBpZiAobiA+IDQgJiYgbiA8IG15Tm9pc2UubGVuZ3RoLTIpe1xuICAgICAgICBjdHgubGluZShwWFtteU5vaXNlTGV0dGVyW25dXS10eXBvT2ZmLCBwWVtteU5vaXNlTGV0dGVyW25dXS10eXBvT2ZmLCBteVhbbXlOb2lzZVtuXV0qbGVhZkdyb3csIG15WVtteU5vaXNlW25dXSpsZWFmR3Jvdyk7XG4gICAgICB9XG4gICAgICBjdHguc3Ryb2tlKDApO1xuICAgICAgY3R4LmZpbGwoMjU1KTtcbiAgICAgIGN0eC5zdHJva2VXZWlnaHQoLjc1KTtcbiAgICAgIGlmIChuJTIgPT0wKSB7XG4gICAgICAgIGN0eC5iZWdpblNoYXBlKCk7XG4gICAgICAgIGN0eC5zdHJva2UoMCk7XG4gICAgICAgIGZvciAobGV0IGo9IHBhcnNlSW50KC1sZXR0ZXJGaWxsLzIpOyBqIDwgcGFyc2VJbnQobGV0dGVyRmlsbC8yKS0xOyBqKyspIHtcblxuICAgICAgICAgIGlmIChjdHguYWJzKChwWFtteU5vaXNlTGV0dGVyW25dK2otMV0tdHlwb09mZiktKHBYW215Tm9pc2VMZXR0ZXJbbl0ral0tdHlwb09mZikpIDwgMyAmJiBjdHguYWJzKChwWVtteU5vaXNlTGV0dGVyW25dK2otMV0tdHlwb09mZiktKHBZW215Tm9pc2VMZXR0ZXJbbl0ral0tdHlwb09mZikpIDwgMykge1xuICAgICAgICAgICAgY3R4LnZlcnRleChwWFtteU5vaXNlTGV0dGVyW25dK2otMV0tdHlwb09mZiwgcFlbbXlOb2lzZUxldHRlcltuXStqLTFdLXR5cG9PZmYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguZW5kU2hhcGUoKTtcbiAgICAgICAgICAgIGN0eC5iZWdpblNoYXBlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGN0eC5lbmRTaGFwZSgpO1xuICAgICAgfVxuICAgICAgY3R4LnN0cm9rZSgwKTtcbiAgICAgIGN0eC5zdHJva2VXZWlnaHQoLjc1KTtcblxuICAgICAgLy9pZiAocmFuZERyb3A+OTApY29udGludWU7XG4gICAgICBjdHgubGluZShteVhbbXlOb2lzZVtuXV0qbGVhZkdyb3csIG15WVtteU5vaXNlW25dXSpsZWFmR3JvdywgbXlYW215Tm9pc2VbbisxXV0qbGVhZkdyb3csIG15WVtteU5vaXNlW24rMV1dKmxlYWZHcm93KTtcbiAgICB9XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0d2VldHMoKXtcbiAgY29uc3QgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICB4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh4bWxodHRwLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkgeyAgIC8vIFhNTEh0dHBSZXF1ZXN0LkRPTkUgPT0gNFxuICAgICAgaWYgKHhtbGh0dHAuc3RhdHVzID09IDIwMCkge1xuICAgICAgICBjb25zdCB0d2VldHMgPSBKU09OLnBhcnNlKHhtbGh0dHAucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgY29uc3QgbGF0ZXN0ID0gdHdlZXRzLmRhdGFbMF07XG4gICAgICAgIGNvbnN0IHRleHQgPSBsYXRlc3QudGV4dDtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGxhdGVzdC5jcmVhdGVkX2F0O1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHdlZXR0aW1lJykuaW5uZXJIVE1MID0gZGF0ZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKS5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgfSBlbHNlIGlmICh4bWxodHRwLnN0YXR1cyA9PSA0MDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciA0MDAnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzb21ldGhpbmcgZWxzZSBvdGhlciB0aGFuIDIwMCB3YXMgcmV0dXJuZWQnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coeG1saHR0cCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAvLyBsZXQgZGV2VXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XG4gIHhtbGh0dHAub3BlbignR0VUJywgJ2h0dHBzOi8vYmFzaWxqcy1sYXRlc3QtdHdlZXRzLm5vdy5zaC8nLCB0cnVlKTtcbiAgeG1saHR0cC5zZW5kKCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9