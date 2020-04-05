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
/* harmony import */ var p5_lib_p5_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p5/lib/p5.min */ "./node_modules/p5/lib/p5.min.js");
/* harmony import */ var p5_lib_p5_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5_lib_p5_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _p5sketch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./p5sketch.js */ "./_source/assets/js/src/p5sketch.js");
/* harmony import */ var _mobile_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-nav.js */ "./_source/assets/js/src/mobile-nav.js");
/* harmony import */ var _tweets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tweets.js */ "./_source/assets/js/src/tweets.js");
/* harmony import */ var _decoration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decoration.js */ "./_source/assets/js/src/decoration.js");
/* harmony import */ var _shuffle_gallery_items__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shuffle-gallery-items */ "./_source/assets/js/src/shuffle-gallery-items.js");






var p5sketch;
document.addEventListener('DOMContentLoaded', function () {
  Object(_tweets_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_shuffle_gallery_items__WEBPACK_IMPORTED_MODULE_5__["shuffleGalleryItems"])();
  Object(_decoration_js__WEBPACK_IMPORTED_MODULE_4__["specialChars"])();
  Object(_decoration_js__WEBPACK_IMPORTED_MODULE_4__["createGuideLines"])();
  Object(_mobile_nav_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  p5sketch = new p5_lib_p5_min__WEBPACK_IMPORTED_MODULE_0___default.a(_p5sketch_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
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

/***/ "./_source/assets/js/src/reference.js":
/*!********************************************!*\
  !*** ./_source/assets/js/src/reference.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flexsearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flexsearch */ "./node_modules/flexsearch/dist/flexsearch.min.js");
/* harmony import */ var flexsearch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flexsearch__WEBPACK_IMPORTED_MODULE_2__);




function clearElement(ele) {
  while (ele.hasChildNodes()) {
    ele.removeChild(ele.lastChild);
  }
}

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim(); // Change this to div.childNodes to support multiple top-level nodes

  return div.firstChild;
}
/**
 * TODO: This should not be a string template. Construct nodes.
 * @param {oobject} opt containes the ID the codetitle, the summary and the href
 */


function entryTemplate(opt) {
  return "<div class=\"ref-entry\" id=\"".concat(opt.id, "\">\n    <div class=\"entry-heading\"><a class=\"entry-heading-link\" href=\"").concat(opt.href, "\">").concat(opt.codetitle, "</a></div>\n    <p class=\"summary\">").concat(opt.summary, "</p>\n  </div>");
}

document.addEventListener('DOMContentLoaded', function () {
  var searchfield = document.querySelector('input#lunr-search');
  var clearbutton = document.querySelector('button#lunr-clear');
  var searchresults = document.querySelector('#flex-search-results');
  var params = new URLSearchParams(window.location.search);

  _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var search, response, json, idx;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            search = function search(txt) {
              var results = idx.search(txt);
              console.log(results);

              if (txt.length === 0) {
                clearElement(searchresults);
              }

              if (results.length > 0) {
                var container = document.createElement('div');
                container.classList.add('search-result-container');
                results.forEach(function (res) {
                  var e = document.querySelector("#".concat(res.id));

                  if (e !== null) {
                    container.appendChild(e.cloneNode(true));
                  } else {
                    var matches = json.filter(function (ele) {
                      return ele.id === res.id;
                    });
                    var template = entryTemplate(matches[0]);
                    e = createElementFromHTML(template);
                    container.appendChild(e);
                  }
                });

                if (searchresults !== null) {
                  clearElement(searchresults);
                  searchresults.appendChild(container);
                }
              } else {
                clearElement(searchresults);
              }
            };

            _context.next = 3;
            return fetch('/reference/lunrjs.data.json').catch(function (err) {
              return console.log(err);
            });

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json().catch(function (err) {
              return console.log(err);
            });

          case 6:
            json = _context.sent;
            // console.log(json);
            idx = new flexsearch__WEBPACK_IMPORTED_MODULE_2___default.a({
              tokenize: 'reverse',
              depth: 4,
              cache: true,
              encode: 'simple',
              threshold: 8,
              doc: {
                id: 'id',
                field: ['summary', 'codetitle', 'name', 'description']
              }
            });
            idx.add(json);

            if (params.has('query')) {
              search(decodeURI(params.get('query')));
            }

            if (clearbutton !== null) {
              clearbutton.addEventListener('click', function (event) {
                searchfield.value = '';

                if (searchresults !== null) {
                  clearElement(searchresults);
                }
              });
            }

            if (searchfield !== null) {
              // console.log(searchfield);
              searchfield.addEventListener('onfocusout', function (event) {
                clearElement(searchresults);
              });
              searchfield.addEventListener('keyup', function (event) {
                var txt = searchfield.value;

                if (event.key === 'Backspace' && txt.length === 0) {
                  clearElement(searchresults);
                  return;
                }

                search(txt);
              });
            }

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))();
});

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

/***/ "./_source/assets/ts/index.ts":
/*!************************************!*\
  !*** ./_source/assets/ts/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),

/***/ 0:
/*!************************************************************************************************************************************************!*\
  !*** multi ./_source/assets/js/src/reference.js ./_source/assets/js/src/main.js ./_source/assets/ts/index.ts ./_source/assets/css/styles.scss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_source/assets/js/src/reference.js */"./_source/assets/js/src/reference.js");
__webpack_require__(/*! ./_source/assets/js/src/main.js */"./_source/assets/js/src/main.js");
__webpack_require__(/*! ./_source/assets/ts/index.ts */"./_source/assets/ts/index.ts");
module.exports = __webpack_require__(/*! ./_source/assets/css/styles.scss */"./_source/assets/css/styles.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vX3NvdXJjZS9hc3NldHMvY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL19zb3VyY2UvYXNzZXRzL2pzL3NyYy9kZWNvcmF0aW9uLmpzIiwid2VicGFjazovLy8uL19zb3VyY2UvYXNzZXRzL2pzL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL19zb3VyY2UvYXNzZXRzL2pzL3NyYy9tb2JpbGUtbmF2LmpzIiwid2VicGFjazovLy8uL19zb3VyY2UvYXNzZXRzL2pzL3NyYy9wNXNrZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9fc291cmNlL2Fzc2V0cy9qcy9zcmMvcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8uL19zb3VyY2UvYXNzZXRzL2pzL3NyYy9zaHVmZmxlLWdhbGxlcnktaXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vX3NvdXJjZS9hc3NldHMvanMvc3JjL3R3ZWV0cy5qcyIsIndlYnBhY2s6Ly8vLi9fc291cmNlL2Fzc2V0cy90cy9pbmRleC50cyJdLCJuYW1lcyI6WyJzcGVjaWFsQ2hhcnMiLCJlbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjaGFycyIsImlubmVyVGV4dCIsInNwbGl0IiwiaW5uZXJIVE1MIiwiY2hhciIsImkiLCJmb250U2l6ZSIsInN0eWxlIiwibm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJjc3NUZXh0IiwiY29udGVudCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJib2R5IiwiaW5jbHVkZXMiLCJlbGVtZW50c1NocmluayIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZnMiLCJwYXJzZUZsb2F0IiwibWluZnMiLCJkZWNyIiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwiY3JlYXRlR3VpZGVMaW5lcyIsInF1ZXJ5U2VsZWN0b3IiLCJib3R0b21saW5lcyIsInJpZ2h0bGluZXMiLCJwYWdlbGluZXMiLCJsaW5lIiwiYWRkIiwicDVza2V0Y2giLCJhZGRFdmVudExpc3RlbmVyIiwidHdlZXRzIiwic2h1ZmZsZUdhbGxlcnlJdGVtcyIsIm1vYmlsZU5hdiIsInA1Iiwic2tldGNoIiwib25ibHVyIiwibm9Mb29wIiwib25mb2N1cyIsImxvb3AiLCJ0b2dnbGUiLCJlbGUiLCJkaXNwbGF5IiwibWFpbm1lbnUiLCJuYXZtZXRlciIsImxpbmtzIiwiY3R4IiwibXlYIiwibXlZIiwicFgiLCJwWSIsImxlYWZHcm93IiwibnVtTGluZXMiLCJteU5vaXNlIiwibXlOb2lzZUxldHRlciIsInR5cG9PZmYiLCJjYW52YXMiLCJzZXR1cCIsImNyZWF0ZUNhbnZhcyIsInBhcmVudCIsImJhY2tncm91bmQiLCJmcmFtZVJhdGUiLCJzbW9vdGgiLCJuIiwicHVzaCIsIm1hcE4iLCJmbG9vciIsIm1hcCIsImNvbnN0cmFpbiIsImRyYXciLCJzdHJva2VXZWlnaHQiLCJ0cmFuc2xhdGUiLCJ3aWR0aCIsImhlaWdodCIsInN0cm9rZSIsIm5vRmlsbCIsImxpbmtzQ291bnQiLCJyYW5kb20iLCJsZXR0ZXJGaWxsIiwiZmlsbCIsImJlZ2luU2hhcGUiLCJqIiwicGFyc2VJbnQiLCJhYnMiLCJ2ZXJ0ZXgiLCJlbmRTaGFwZSIsImNsZWFyRWxlbWVudCIsImhhc0NoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImNyZWF0ZUVsZW1lbnRGcm9tSFRNTCIsImh0bWxTdHJpbmciLCJkaXYiLCJ0cmltIiwiZmlyc3RDaGlsZCIsImVudHJ5VGVtcGxhdGUiLCJvcHQiLCJpZCIsImhyZWYiLCJjb2RldGl0bGUiLCJzdW1tYXJ5Iiwic2VhcmNoZmllbGQiLCJjbGVhcmJ1dHRvbiIsInNlYXJjaHJlc3VsdHMiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInR4dCIsInJlc3VsdHMiLCJpZHgiLCJjb25zb2xlIiwibG9nIiwiY29udGFpbmVyIiwicmVzIiwiZSIsImNsb25lTm9kZSIsIm1hdGNoZXMiLCJqc29uIiwiZmlsdGVyIiwidGVtcGxhdGUiLCJmZXRjaCIsImNhdGNoIiwiZXJyIiwicmVzcG9uc2UiLCJGbGV4U2VhcmNoIiwidG9rZW5pemUiLCJkZXB0aCIsImNhY2hlIiwiZW5jb2RlIiwidGhyZXNob2xkIiwiZG9jIiwiZmllbGQiLCJoYXMiLCJkZWNvZGVVUkkiLCJnZXQiLCJldmVudCIsInZhbHVlIiwia2V5IiwiQXJyYXkiLCJmcm9tIiwib3JkZXIiLCJNYXRoIiwieG1saHR0cCIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJzdGF0dXMiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJsYXRlc3QiLCJkYXRhIiwidGV4dCIsImRhdGUiLCJjcmVhdGVkX2F0Iiwib3BlbiIsInNlbmQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FB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Q0ssTUFBUixJQUFrQixHQUF0QixFQUEyQjtBQUN6QixZQUFNckgsT0FBTSxHQUFHc0gsSUFBSSxDQUFDQyxLQUFMLENBQVdQLE9BQU8sQ0FBQ1EsWUFBbkIsQ0FBZjs7QUFDQSxZQUFNQyxNQUFNLEdBQUd6SCxPQUFNLENBQUMwSCxJQUFQLENBQVksQ0FBWixDQUFmO0FBQ0EsWUFBTUMsSUFBSSxHQUFHRixNQUFNLENBQUNFLElBQXBCO0FBQ0EsWUFBTUMsSUFBSSxHQUFHSCxNQUFNLENBQUNJLFVBQXBCO0FBQ0F0SyxnQkFBUSxDQUFDaUMsYUFBVCxDQUF1QixZQUF2QixFQUFxQ3hCLFNBQXJDLEdBQWlENEosSUFBakQ7QUFDQXJLLGdCQUFRLENBQUNpQyxhQUFULENBQXVCLFVBQXZCLEVBQW1DeEIsU0FBbkMsR0FBK0MySixJQUEvQztBQUNELE9BUEQsTUFPTyxJQUFJWCxPQUFPLENBQUNLLE1BQVIsSUFBa0IsR0FBdEIsRUFBMkI7QUFDaENyQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNELE9BRk0sTUFFQTtBQUNMRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSw0Q0FBWixFQURLLENBRUw7QUFDRDtBQUNGO0FBQ0YsR0FoQkQsQ0FGOEIsQ0FtQjlCOzs7QUFDQStCLFNBQU8sQ0FBQ2MsSUFBUixDQUFhLEtBQWIsRUFBb0IsdUNBQXBCLEVBQTZELElBQTdEO0FBQ0FkLFNBQU8sQ0FBQ2UsSUFBUjtBQUNELEM7Ozs7Ozs7Ozs7OztBQ3RCWSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi4vY3NzL3N0eWxlcy5jc3NcIjsiLCJcbmV4cG9ydCBmdW5jdGlvbiBzcGVjaWFsQ2hhcnMoKSB7XG5cbiAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYS50ZXh0Z3JvdywgLnRleHRncm93Jyk7XG4gIFsuLi5lbGVtZW50c10uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2RvbnQtZGVjb3JhdGUnKSAhPT0gdHJ1ZSkge1xuICAgICAgY29uc3QgY2hhcnMgPSBlbGVtZW50LmlubmVyVGV4dC5zcGxpdCgnJyk7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IG51bGw7XG4gICAgICBjaGFycy5mb3JFYWNoKChjaGFyLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gMzAgLSAoMiAqIGkpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IGBib3JkZXItYm90dG9tLXdpZHRoOiAkeyhpICsgMSl9cHg7IGZvbnQtc2l6ZTogJHtmb250U2l6ZX1weDsgdG9wOiAtJHsoaSArICgyICogaSkpfXB4O2A7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9IHN0eWxlO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hhcik7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBub3QgaW4gdGhlIHJlZmVyZW5jZVxuICAgKi9cbiAgaWYgKFsuLi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdF0uaW5jbHVkZXMoJ3JlZmVyZW5jZScpID09PSBmYWxzZSkge1xuXG4gICAgbGV0IGVsZW1lbnRzU2hyaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRzaHJpbmssIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYnKTtcblxuICAgIFsuLi5lbGVtZW50c1Nocmlua10uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZG9udC1kZWNvcmF0ZScpICE9PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGNoYXJzID0gZWxlbWVudC5pbm5lclRleHQuc3BsaXQoJycpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtc2l6ZScpO1xuICAgICAgICBsZXQgZnMgPSBwYXJzZUZsb2F0KHN0eWxlKTtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBudWxsO1xuICAgICAgICBjb25zdCBtaW5mcyA9IDE2O1xuICAgICAgICBjb25zdCBkZWNyID0gKGZzIC0gbWluZnMpIC8gY2hhcnMubGVuZ3RoO1xuICAgICAgICBjaGFycy5mb3JFYWNoKChjaGFyLCBpKSA9PiB7XG4gICAgICAgICAgZnMgLT0gZGVjcjtcbiAgICAgICAgICBjb25zdCBzdHlsZSA9IGBib3JkZXItYm90dG9tLXdpZHRoOiAkeygyIC8gaSl9cHg7IGZvbnQtc2l6ZTogJHtmc31weDsgdG9wOiAtJHtpfXB4O2A7XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9ICd0ZXh0c2hyaW5rLWl0ZW0nO1xuICAgICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9IHN0eWxlO1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGFyKTtcbiAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR3VpZGVMaW5lcygpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWlkZWxpbmVzJyk7XG4gIGNvbnN0IGJvdHRvbWxpbmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHJpZ2h0bGluZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcGFnZWxpbmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvdHRvbWxpbmVzLmNsYXNzTmFtZSA9ICdib3R0b21fbGluZXMnO1xuICByaWdodGxpbmVzLmNsYXNzTmFtZSA9ICdyaWdodF9saW5lcyc7XG4gIHBhZ2VsaW5lcy5jbGFzc05hbWUgPSAncGFnZV9saW5lcyc7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGluZS5jbGFzc0xpc3QuYWRkKCdib3R0b21MaW5lJywgYGxpbmVfJHtpICsgMX1gKTtcbiAgICBib3R0b21saW5lcy5hcHBlbmRDaGlsZChsaW5lKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaW5lLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0X2xpbmUnLCBgbGluZV8ke2kgKyAxfWApO1xuICAgIHJpZ2h0bGluZXMuYXBwZW5kQ2hpbGQobGluZSk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGluZS5jbGFzc0xpc3QuYWRkKCdsaW5lJywgYGxpbmVfJHtpICsgMX1gKTtcbiAgICBwYWdlbGluZXMuYXBwZW5kQ2hpbGQobGluZSk7XG4gIH1cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChib3R0b21saW5lcyk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQocmlnaHRsaW5lcyk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQocGFnZWxpbmVzKTtcbn1cbiIsImltcG9ydCBwNSBmcm9tICdwNS9saWIvcDUubWluJztcbmltcG9ydCBza2V0Y2ggZnJvbSAnLi9wNXNrZXRjaC5qcyc7XG5pbXBvcnQgbW9iaWxlTmF2IGZyb20gJy4vbW9iaWxlLW5hdi5qcyc7XG5pbXBvcnQgdHdlZXRzIGZyb20gJy4vdHdlZXRzLmpzJztcbmltcG9ydCB7c3BlY2lhbENoYXJzLCBjcmVhdGVHdWlkZUxpbmVzfSBmcm9tICcuL2RlY29yYXRpb24uanMnO1xuaW1wb3J0IHtzaHVmZmxlR2FsbGVyeUl0ZW1zfSBmcm9tICcuL3NodWZmbGUtZ2FsbGVyeS1pdGVtcyc7XG5sZXQgcDVza2V0Y2g7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywoKSA9PntcbiAgdHdlZXRzKCk7XG4gIHNodWZmbGVHYWxsZXJ5SXRlbXMoKTtcbiAgc3BlY2lhbENoYXJzKCk7XG4gIGNyZWF0ZUd1aWRlTGluZXMoKTtcbiAgbW9iaWxlTmF2KCk7XG4gIHA1c2tldGNoID0gbmV3IHA1KHNrZXRjaCk7XG59KTtcblxuXG5cbndpbmRvdy5vbmJsdXIgPSBmdW5jdGlvbigpIHtcbiAgcDVza2V0Y2gubm9Mb29wKCk7XG59O1xud2luZG93Lm9uZm9jdXMgPSBmdW5jdGlvbigpIHtcbiAgcDVza2V0Y2gubG9vcCgpO1xufTtcbiIsIi8qIGdsb2JhbCAkICovXG5cbmZ1bmN0aW9uIHRvZ2dsZSAoZWxlKXtcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZSkuZGlzcGxheSA9PT0gJ2Jsb2NrJyl7XG4gICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0gZWxzZSB7XG4gICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vYmlsZU5hdigpIHtcbiAgY29uc3QgbWFpbm1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51Jyk7XG4gIGNvbnN0IG5hdm1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1vLW1ldGVyJyk7XG4gIG5hdm1ldGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5hdm1ldGVyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW5lZCcpO1xuICAgIHRvZ2dsZShtYWlubWVudSk7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1saW5rJyk7XG4gICAgWy4uLmxpbmtzXS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuZWQnKSl7XG4gICAgICAgICAgbmF2bWV0ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkJyk7XG4gICAgICAgICAgdG9nZ2xlKG1haW5tZW51KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vICQoJy5uYXYtby1tZXRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAvLyAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW5lZCcpO1xuICAvLyAgICQoJy5tYWluLW1lbnUnKS50b2dnbGUoKTtcbiAgLy8gICAkKCcubWFpbi1tZW51JykuZmluZCgnbGkgYScpLmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIC8vICAgICBpZiAoJCgnLm5hdi1vLW1ldGVyJykuaGFzQ2xhc3MoJ29wZW5lZCcpKSB7XG4gIC8vICAgICAgICQoJy5uYXYtby1tZXRlcicpLnRvZ2dsZUNsYXNzKCdvcGVuZWQnKTtcbiAgLy8gICAgICAgJCgnLm1haW5fbWVudScpLnRvZ2dsZSgpO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvLyB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNrZXRjaChjdHgpe1xuXG4gIGNvbnN0IG15WD0gWy03OCwgLTcyLCAtNjksIC02NSwgLTY0LCAtNjMsIC02MSwgLTYxLCAtNjEsIC02MSwgLTYwLCAtNjAsIC02MCwgLTU5LCAtNTYsIC01NCwgLTUxLCAtNDgsIC00NCwgLTQyLCAtMzksIC0zNSwgLTMzLCAtMzEsIC0yNywgLTIzLCAtMTksIC0xNiwgLTEzLCAtMTEsIC05LCAtNiwgMywgNSwgNiwgOSwgMTIsIDE0LCAxOCwgMjAsIDIyLCAyMywgMjgsIDMxLCAzNCwgMzksIDQwLCA0NCwgNDgsIDUxLCA1NCwgNTYsIDU5LCA2MiwgNjYsIDY4LCA3MiwgNzQsIDc2LCA3OCwgODAsIDgxLCA4MSwgODEsIDgwLCA4MCwgNzksIDc5LCA3OCwgNzcsIDc2LCA3NSwgNzUsIDc0LCA3MiwgNzEsIDcwLCA3MCwgNjgsIDY3LCA2NCwgNjMsIDYyLCA2MCwgNTgsIDU4LCA1OCwgNTYsIDU0LCA1MiwgNTAsIDQ3LCA0NywgNDUsIDQzLCAzOSwgMzYsIDMzLCAyOCwgMjUsIDI0LCAyMiwgMTgsIDE0LCAxMSwgOCwgNiwgMywgLTQsIC0xMiwgLTE0LCAtMTcsIC0yMywgLTI2LCAtMjksIC0zMiwgLTM0LCAtMzcsIC0zOCwgLTQyLCAtNDQsIC00NywgLTQ5LCAtNTEsIC01MywgLTU1LCAtNTcsIC01OSwgLTYxLCAtNjQsIC02NiwgLTY5LCAtNzQsIC03OV07XG4gIGNvbnN0IG15WT0gWzM1LCAzNCwgMzMsIDMyLCAzMSwgMzEsIDI1LCAyMCwgMTUsIDExLCA3LCAxLCAtNSwgLTEwLCAtMTYsIC0yMCwgLTI1LCAtMjksIC0zNCwgLTM3LCAtNDAsIC00MiwgLTQ0LCAtNDQsIC00NywgLTQ4LCAtNTAsIC01MSwgLTUyLCAtNTAsIC01MCwgLTUyLCAtNTUsIC01NiwgLTU0LCAtNTQsIC01NCwgLTU1LCAtNTUsIC01NiwgLTU1LCAtNTQsIC01NSwgLTU1LCAtNTYsIC01NSwgLTU0LCAtNTQsIC01NSwgLTU1LCAtNTYsIC01NiwgLTU2LCAtNTUsIC01NCwgLTU1LCAtNTUsIC01NiwgLTU2LCAtNTgsIC01OCwgLTU1LCAtNTIsIC00OSwgLTQ2LCAtNDMsIC00MCwgLTM2LCAtMzMsIC0yOSwgLTI3LCAtMjMsIC0yMSwgLTE4LCAtMTMsIC0xMCwgLTgsIC01LCAtMywgLTEsIDMsIDYsIDgsIDEwLCAxMywgMTUsIDE2LCAxOCwgMjEsIDI0LCAyNSwgMjgsIDMxLCAzMywgMzYsIDM4LCA0MSwgNDMsIDQ3LCA0OSwgNTAsIDUwLCA1MywgNTQsIDU1LCA1NiwgNTcsIDU4LCA1OSwgNjAsIDU5LCA1OSwgNTcsIDU2LCA1NiwgNTUsIDU0LCA1MywgNTAsIDQ4LCA0NiwgNDUsIDQzLCA0MSwgMzksIDM3LCAzNiwgMzUsIDM1LCAzNiwgMzgsIDM4LCAzOCwgNDBdO1xuICBjb25zdCBwWD0gWzM0LjczLCAzNi45MjU2MDIsIDM5LjEyMTIwNCwgNDAuMjE4OTk4LCA0MC4yMTg5OTgsIDQwLjIxODk5OCwgNDAuMjE4OTk4LCA0MC4xMjk1OTcsIDQwLjQ2NTA1LCA0Mi4xNzgyMzQsIDQ0LjQ5MjgxNywgNDYuMjk3NzMsIDQ4LjI2Mzc3NSwgNDkuODc0ODEsIDUxLjA5NjQ2LCA1MS44OTQzMzcsIDUyLjIwNDQyMiwgNTIuMjMyMjM1LCA1MS45NjIsIDUxLjM2OTY5LCA1MC41MDE5NiwgNDkuMTAxMDc4LCA0Ny40MzM5MDMsIDQ1LjIxMDEsIDQzLjA4NTgwNCwgNDEuMjk4ODMyLCAzOS42MjE5OTgsIDM5LjAyNSwgMzcuNDE0Mzc1LCAzNS4yNjY4ODQsIDM0LjczLCAzNC43MywgMzQuNzMsIDM0LjczLCAzNC43MywgMzQuNzMsIDM0LjczLCAzNC43MywgMzQuNzMsIDM0LjczLCAzNC43MywgMzQuNzMsIDM0LjczLCAzNC43MywgNDMuMTcsIDQ1LjIwMTY0NSwgNDYuMzAwMzQ2LCA0Ni41ODQ5MywgNDYuNTQyNzQsIDQ2LjAzNDg1LCA0NC42NDc0MzgsIDQyLjQ1NzQ5MywgNDAuNjY2MzQ0LCA0MC4yMiwgNDAuMjIsIDQwLjIyLCA0MC4yMiwgNDEuNzA4MTIyLCA0My4xNywgNjQuMzQ2LCA2My40MjU2OTQsIDYxLjQzMywgNTkuNTM2Nzc0LCA1Ny41NTQ3MywgNTYuMDE5NDkzLCA1NS4wNDg0ODUsIDU1LjAwNzUwNCwgNTYuODU0NywgNTguODA5ODIyLCA2MC44NjkyMTcsIDYyLjk4MDAwMywgNjUuMjMxMDIsIDY3LjA1NDgyLCA2OC40MzQ4MTQsIDY5LjM1NDQ2LCA2OS43NDc1OCwgNjkuODM3LCA2OS44MzcsIDY5LjgzNywgNjkuODM3LCA2OS44MzcsIDY5LjgzNywgNjcuNTk2LCA2NS45MTUyNSwgNjUuMTQ5NDksIDY0LjQzNjAxLCA2Mi43NjM3NSwgNjAuNDM1NjA4LCA1OC4zOTc5MDcsIDU2LjYzMDM5NCwgNTQuOTkzMjg2LCA1NC4wODM2OTQsIDUzLjkzODI3LCA1NC40NDc4NzIsIDU1Ljc2NDI1NiwgNTcuNTE2MzQyLCA1OS4zNjkyMywgNjEuNjQwNDcsIDYzLjYyODAzMywgNjQuMzQ2LCA2MS4yODQsIDYzLjUzNjMwNCwgNjQuMzQ2LCA2NC4zNDYsIDYyLjgyMzg1MywgNjEuMDk2NDM2LCA1OS40OTgyMzQsIDU5LjQxNjUyLCA2MS4yODQsIDc0LjgwNCwgNzYuNzYxMTcsIDc4LjY0NjE1LCA4MC43Njg5OSwgODEuOTM3LCA4MC4zMTU3LCA3OC43MzM1MiwgNzYuNTU0ODg2LCA3NS4wNDc4NCwgNzMuNjczNDIsIDczLjI3Mjk5NSwgNzMuNjkxNjksIDc0Ljg4NjQwNiwgNzYuNzY1MDgsIDc4LjY5ODYxLCA4MC45NjU2MTQsIDgyLjYyNDMsIDg0Ljk4NTUsIDg2LjU1MjMsIDg1Ljk3OTk5NiwgODQuNzQ4LCA4My40NDM1NywgODEuNDkzNDg0LCA3OS4zNDU5NTUsIDc4LjQ3NzAwNSwgNzkuOTUxNzQ0LCA4Mi4wNDk5OTUsIDg0LjEyNzgyLCA4NS41OTkyLCA4Ni44MjE1MywgODcuMDM5MjEsIDg2LjU2MTE2NSwgODUuNDE0NTgsIDgzLjYxNzYxLCA4MS43MjM5NiwgNzkuNDM1LCA3Ny40Mzg0MTYsIDc1LjQzMTA4LCA3My41NjE4MSwgNzIuNjQ3OTk1LCA3My44Nzk5OSwgNzQuODA0LCA4OS43MDYsIDkwLjYwNzI1NCwgOTIuMzQ3NDEsIDk0LjM4OTkzLCA5NS45MDQxNDQsIDk1LjcyMjI5LCA5NC4zODk5NCwgOTIuMzQ3NDEsIDkwLjI5NjU2LCA4OS43MDYsIDkwLjE1NCwgOTIuMzQ5OTksIDk0LjU0NTk3NSwgOTUuNjQ0LCA5NS42NDQsIDk1LjY0NCwgOTUuNjQ0LCA5NS42NDQsIDk1LjY0NCwgOTUuNjQ0LCA5NS42NDQsIDk1LjY0NCwgOTUuMDk1LCA5Mi44OTkwMiwgOTEuMjUyMDMsIDkwLjE1NCwgOTAuMTU0LCA5MC4xNTQsIDkwLjE1NCwgOTAuMTU0LCA5MC4xNTQsIDkwLjE1NCwgOTAuMTU0LCA5MC4xNTQsIDkwLjE1NCwgOTkuOTAyLCAxMDIuMDk3MTksIDEwNC4yOTIzOCwgMTA1LjM5LCAxMDUuMzksIDEwNS4zOSwgMTA1LjM5LCAxMDUuMzksIDEwNS4zOSwgMTA1LjM5LCAxMDUuMzksIDEwNS4zOSwgMTA1LjM5LCAxMDUuNDc4NzIsIDEwNi42Njk4NzYsIDEwNy4zNzEsIDEwNy43MDcsIDEwNi4yNzYzNiwgMTA0LjM5NTk1LCAxMDIuMTkxMTMsIDEwMC43ODU2OSwgMTAwLjA2NDI1NSwgOTkuOTAyLCA5OS45MDIsIDk5LjkwMiwgOTkuOTAyLCA5OS45MDIsIDk5LjkwMiwgOTkuOTAyLCA5OS45MDIsIDk5LjkwMiwgOTkuOTAyLCA5OS45MDIsIDExMS43NCwgMTEzLjkzNTk5LCAxMTYuMTMxOTcsIDExNy4yMjk5OTYsIDExNy4yMjk5OTYsIDExNy4yMjk5OTYsIDExNy4yMjk5OTYsIDExNy4yMjk5OTYsIDExNy4yMjk5OTYsIDExNy4yMjk5OTYsIDExNy4yMjk5OTYsIDExNy4yMjk5OTYsIDExNy4yMjIzNCwgMTE2LjkzMjU2LCAxMTYuMzU1MDgsIDExNC44MDMxNCwgMTEzLjI0MzE4LCAxMTEuMjA4Mzc0LCAxMDguNzAxNDksIDEwNy40OTIzNywgMTA3Ljk3Nzg3NSwgMTA4LjM0MTk5NSwgMTEwLjI0OTAzLCAxMTEuNjYyOCwgMTExLjc0LCAxMTEuNzQsIDExMS43NCwgMTExLjc0LCAxMTEuNzQsIDExMS43NCwgMTExLjc0LCAxMTEuNzQsIDExMS43NCwgMTExLjc0LCAxMTEuMzMsIDExMi4yMzA3NCwgMTEzLjk3MDQzLCAxMTYuNDExODEsIDExNy41MjM1OCwgMTE3LjMzODMsIDExNS45OTY2MzUsIDExMy45NzA0NCwgMTExLjkyMDIyLCAxMTEuMzMsIDEyMi45MDcsIDEyNC44NjQ2LCAxMjYuNzQ5MjQ1LCAxMjguODcyNDIsIDEzMC4wNCwgMTI4LjQxODksIDEyNi44MzcyNCwgMTI0LjY1ODM0LCAxMjMuMTUwOTg2LCAxMjEuNzc2NDM2LCAxMjEuMzc2LCAxMjEuNzk0NjksIDEyMi45ODk0MSwgMTI0Ljg2ODA5LCAxMjYuODAxNjEsIDEyOS4wNjg4MiwgMTMwLjcyNzkyLCAxMzMuMDg5MjIsIDEzNC42NTU1NSwgMTM0LjA4MjY0LCAxMzIuODUwMTYsIDEzMS41NDU0NCwgMTI5LjU5NjE4LCAxMjcuNDQ3MjYsIDEyNi41NzgwMywgMTI4LjA1MzE4LCAxMzAuMTUxLCAxMzIuMjI5NjksIDEzMy43MDE2NCwgMTM0LjkyNDQ1LCAxMzUuMTQyMjEsIDEzNC42NjQwMywgMTMzLjUxNzE1LCAxMzEuNzE5ODYsIDEyOS44MjYwMywgMTI3LjUzNywgMTI1LjU0MDQyLCAxMjMuNTMzMDksIDEyMS42NjM4MiwgMTIwLjc1MDEyLCAxMjEuOTgyNjA1LCAxMjIuOTA3XTtcbiAgY29uc3QgcFk9IFs0MS41MTUsIDQxLjUxNSwgNDEuNTE1LCA0Mi4wNTAyNSwgNDQuMTkxMjU3LCA0Ni4zMzIyNjQsIDQ3LjkzOCwgNDkuNjQxMzk2LCA1MC40NDI5MSwgNDkuMzc0NDEzLCA0OC43NDIyMTgsIDQ4LjgzOTc5LCA0OS41MzA5NiwgNTAuNzk2OTkzLCA1Mi41ODUwNTYsIDU0Ljg0MjMyLCA1Ni45NTA0NTUsIDU4LjcwNTM2NCwgNjAuOTY4OTIsIDYyLjk0NTE5OCwgNjQuNjIyMTQsIDY2LjI3OTAyLCA2Ny40MjU4MiwgNjguMDk1NTM1LCA2Ny45NTkxMiwgNjcuMTYxOTYsIDY1Ljc1MSwgNjcuNjkzMDEsIDY3LjY5MywgNjcuNjkzLCA2Ni42ODYxNSwgNjQuNjcyNDUsIDYyLjY1ODc1NiwgNjAuNjQ1MDcsIDU4LjYzMTM4MiwgNTYuMTE0MjczLCA1NC4xMDA1ODYsIDUyLjA4NjksIDUwLjA3MzIxLCA0OC4wNTk1MjUsIDQ2LjA0NTgzNywgNDMuNTI4NzMsIDQxLjUxNTA0LCA0MS41MTUsIDYzLjY2LCA2Mi44Mzc1MzIsIDYwLjgwMjIwOCwgNTguOTQwMDgzLCA1Ni44ODM1MDMsIDU0Ljg0MjQxNSwgNTMuNDM0MTgsIDUzLjMzMzU0LCA1NC40MjY1ODIsIDU2LjQwMDk5NywgNTguNDIyMzMsIDYwLjQ0MzY2LCA2Mi40NjQ5OTMsIDYzLjM5ODUsIDYzLjY2LCA1NS43OCwgNTMuNjcyMzQsIDUzLjA5MiwgNTMuMzgyMTE0LCA1NC4xOTU2MiwgNTMuODY2NDk3LCA1Mi4wNTU0OTIsIDUwLjg4ODg5NywgNDkuOTU4MzEzLCA0OS4yNTE4MTYsIDQ4LjgyNTM4LCA0OC43MzMzLCA0OS4wOTYyNDUsIDQ5Ljk4NTgyNSwgNTEuNDEyMzA4LCA1My4zODU5ODMsIDU1LjM2NTgxNCwgNTcuNTkzMDQ0LCA1OS42MTMyMywgNjEuNjMzNDIsIDYzLjY1MzYwNiwgNjYuMTc4ODU2LCA2Ny42OTQsIDY3LjY5NCwgNjcuNjk0LCA2Ni43NDEsIDY2LjEyNDgyNSwgNjcuMjYxMzYsIDY4LjA2Mjc0NCwgNjguMDYxMTgsIDY3LjQ2MDIxLCA2Ni4wMTA3LCA2My45Njc5NTcsIDYyLjE1NjUzMiwgNjAuMTAyNjYsIDU4LjQ0ODkxNCwgNTcuMzYzNTY3LCA1Ni42Nzk0OCwgNTYuMTUzMzg1LCA1NS44NTkzMTgsIDU1Ljc4LCA2My44ODQsIDYzLjA1MDY5LCA2MS4yMzIsIDU5LjA2NTk5OCwgNTkuMzI1ODI1LCA1OS44NDEyMjUsIDYwLjk5MTg5NCwgNjMuMTE0ODE1LCA2My44ODQsIDYyLjEyOSwgNjMuMzYwODY3LCA2My45OTAwNDcsIDYzLjkyODgyNSwgNjIuNTAyLCA2MC44MjQzOTgsIDYwLjE4MTYxOCwgNTkuMjMzMjUzLCA1OC4yMTM3MTUsIDU2LjQyODQ0LCA1NC41MSwgNTIuMzUwMTMsIDUwLjYxNTUzLCA0OS4zOTU1MDQsIDQ4Ljg0OTk5LCA0OC43MzkzLCA0OC45NzkyNDgsIDQ5Ljg1OTE1OCwgNTAuODE4OTE2LCA1Mi4zMDY2MiwgNTMuOTUwMTE1LCA1My43MDU3OCwgNTIuOTAwNDY3LCA1Mi45NjIxNDcsIDU0LjU4NTM3LCA1NS44MTExMTUsIDU2LjYwMiwgNTcuNTE3ODI2LCA1OC41ODYzODQsIDYwLjU1MzAyNCwgNjIuNTgxODYzLCA2NC41MTY1MiwgNjYuMTM1NjA1LCA2Ny4zMzc2MiwgNjcuOTMwNzQsIDY4LjE0LCA2Ny45Mjc0OSwgNjcuMzMyNTIsIDY2LjQxODkxLCA2NS4xMzM3NCwgNjMuNDE2NzQsIDYyLjEyOSwgNDMuNTY5LCA0MS41MTk2MjcsIDQwLjc2NTA3NiwgNDEuMDI2NDksIDQyLjYyODczLCA0NC45MzA4NzgsIDQ2LjE0MDUyLCA0Ni40MDg4NiwgNDUuMzA2NzYsIDQzLjU2OSwgNDkuMTcsIDQ5LjE3LCA0OS4xNywgNDkuNjcwNjIsIDUxLjY3MzEwNywgNTMuNjc1NTk0LCA1Ni4xNzg3MDMsIDU4LjE4MTE5LCA2MC4xODM2NzgsIDYyLjE4NjE2NSwgNjQuMTg4NjUsIDY2LjY5MTc0LCA2Ny42OTMsIDY3LjY5MywgNjcuNjkzLCA2Ny4xOTIzOCwgNjUuMTg5OTEsIDYyLjY4NjgxLCA2MC42ODQzMjIsIDU4LjY4MTgzNSwgNTYuNjc5MzQ4LCA1NC42NzY4NiwgNTIuMTczNzUsIDUwLjE3MTI2NSwgNDkuMTcsIDQxLjUxNSwgNDEuNTE1LCA0MS41MTUsIDQyLjAxODcwNywgNDQuMDMzNTQsIDQ2LjA0ODM3LCA0OC41NjY5MSwgNTAuNTgxNzQsIDUyLjU5NjU3MywgNTQuNjExNDA0LCA1Ni42MjYyMzYsIDU4LjY0MTA2OCwgNjEuMTU5NjA3LCA2Mi44OTQzMywgNjMuNjg4NjI1LCA2NS42NTg0OSwgNjcuNjkzOTg1LCA2OC4wNTkxMDUsIDY4LjEyMjY2NSwgNjcuNTA3OTIsIDY2LjEwMzM5LCA2NC4wMjA5MiwgNjEuOTQxOTk4LCA1OS44OTkzMDMsIDU3Ljg1NjYxLCA1NS44MTM5MTUsIDUzLjc3MTIyLCA1MS43Mjg1MjcsIDQ5LjE3NTE2LCA0Ny4xMzI0NjUsIDQ1LjA4OTc3LCA0My4wNDcwNzcsIDQxLjUxNSwgNzEuMjM5LCA3MS4yMzksIDcxLjIzOSwgNzEuNzUwMzYsIDczLjc5NTgsIDc1Ljg0MTI0LCA3Ny44ODY2OCwgNzkuOTMyMTIsIDgyLjQ4ODkyLCA4NC41MzQzNiwgODYuNTc5OCwgODguNjI1MjQ0LCA5MC4xMjg3NCwgOTIuNDA0MTEsIDk0LjAwNjY3LCA5NS44ODgxNywgOTYuNjk1MTMsIDk3LjA2NDg1LCA5Ni45MzA5OSwgOTYuMDU0ODYsIDk0LjAzODM1LCA5Mi41MjU5OSwgOTIuNzU0MTEsIDkxLjAwNjA0LCA4OC43OTc2NCwgODYuNzkwOTI0LCA4NC43ODQyMSwgODIuNzc3NSwgODAuNzcwNzgsIDc4Ljc2NDA3LCA3Ni4yNTU2OCwgNzQuMjQ4OTYsIDcyLjI0MjI1LCA3MS4yMzksIDY1LjYzOCwgNjMuNTg5MTI3LCA2Mi44MzUwNSwgNjMuMzE1NzksIDY0LjY5Nzg0LCA2Ni45OTk4ODYsIDY4LjIwOTUyNiwgNjguNDc3ODksIDY3LjM3NjIwNSwgNjUuNjM4LCA4NC4xOTcsIDg1LjQyODg3LCA4Ni4wNTgwNiwgODUuOTk2NjUsIDg0LjU3LCA4Mi44OTI0OCwgODIuMjUwMTQsIDgxLjMwMjQsIDgwLjI4MzE4LCA3OC40OTgzMSwgNzYuNTgsIDc0LjQxOTYsIDcyLjY4NDcxLCA3MS40NjQ1NSwgNzAuOTE5MDEsIDcwLjgwODMwNCwgNzEuMDQ4MjUsIDcxLjkyODE1NCwgNzIuODg3OTEsIDc0LjM3NTYyLCA3Ni4wMTkxMSwgNzUuNzc0NzgsIDc0Ljk2OTQ3LCA3NS4wMzEyMiwgNzYuNjU1NjIsIDc3Ljg4MDYxNSwgNzguNjcyLCA3OS41ODc1NSwgODAuNjU2MjksIDgyLjYyMjc2LCA4NC42NTExMSwgODYuNTg2ODMsIDg4LjIwNjcyNiwgODkuNDA5Mjk0LCA5MC4wMDI2NiwgOTAuMjEyLCA4OS45OTk0NywgODkuNDA0MzY2LCA4OC40OTAzOTUsIDg3LjIwNDM3LCA4NS40ODU4NiwgODQuMTk3XTtcblxuICBjb25zdCBsZWFmR3JvdyA9IDEuMDg7XG4gIGNvbnN0IG51bUxpbmVzID0gbXlYLmxlbmd0aDtcbiAgLy8gdmFyIGxlYWZDb250b3VyID0gMztcblxuICBjb25zdCBteU5vaXNlID0gW107XG4gIGNvbnN0IG15Tm9pc2VMZXR0ZXIgPSBbXTtcblxuICBjb25zdCB0eXBvT2ZmID0gNzU7XG4gIGxldCBjYW52YXMgPSBudWxsO1xuXG4gIGN0eC5zZXR1cCA9ICgpID0+IHtcblxuICAgIGNhbnZhcyA9IGN0eC5jcmVhdGVDYW52YXMoMTgwLCAxMzApO1xuICAgIGNhbnZhcy5wYXJlbnQoJyNsb2dvJyk7XG4gICAgY3R4LmJhY2tncm91bmQoMjU1KTtcbiAgICBjdHguZnJhbWVSYXRlKDE1KTtcbiAgICBjdHguc21vb3RoKCk7XG5cbiAgICBmb3IgKGxldCBuPTI7IG4gPCBudW1MaW5lczsgbisrKSB7XG4gICAgICBteU5vaXNlLnB1c2gobik7XG4gICAgICBteU5vaXNlTGV0dGVyLnB1c2gobik7XG5cbiAgICAgIGxldCBtYXBOID0gY3R4LmZsb29yKGN0eC5tYXAobiwgMCwgbnVtTGluZXMtbnVtTGluZXMvMywgMCwgcFgubGVuZ3RoKSk7XG4gICAgICBtYXBOID0gY3R4LmNvbnN0cmFpbihtYXBOLCAwLCBwWC5sZW5ndGgpO1xuICAgICAgbXlOb2lzZUxldHRlcltuXSA9IG1hcE47XG5cbiAgICAgIGlmIChuID4gbnVtTGluZXMtbnVtTGluZXMvMyl7XG4gICAgICAgIG1hcE4gPSBjdHguZmxvb3IoY3R4Lm1hcChuLCBudW1MaW5lcy1udW1MaW5lcy8zLCBudW1MaW5lcywgcFgubGVuZ3RoLXBYLmxlbmd0aC8zLCBwWC5sZW5ndGgvNikpO1xuICAgICAgICBtYXBOID0gY3R4LmNvbnN0cmFpbihtYXBOLCAwLCBwWC5sZW5ndGgpO1xuICAgICAgICBteU5vaXNlTGV0dGVyW25dID0gbWFwTjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGN0eC5kcmF3ID0gKCk9PntcblxuICAgIGN0eC5iYWNrZ3JvdW5kKDI1NSk7XG4gICAgY3R4LnN0cm9rZVdlaWdodCguNzUpO1xuICAgIGN0eC50cmFuc2xhdGUoY3R4LndpZHRoLzIsIGN0eC5oZWlnaHQvMik7XG4gICAgY3R4LnN0cm9rZSgwKTtcbiAgICBjdHgubm9GaWxsKCk7XG5cbiAgICBjb25zdCBsaW5rc0NvdW50ID0gMTtcblxuICAgIGZvciAobGV0IG49MDsgbiA8IG15Tm9pc2UubGVuZ3RoLTE7IG4rPTEpIHtcbiAgICAgIG15Tm9pc2VMZXR0ZXJbbl0gKz0gY3R4LmZsb29yKGN0eC5yYW5kb20oLTEsIDIpKTtcbiAgICAgIGNvbnN0IGxldHRlckZpbGwgPSAyNTtcblxuICAgICAgaWYgKG15Tm9pc2VMZXR0ZXJbbl0gPCBsZXR0ZXJGaWxsKSB7XG4gICAgICAgIG15Tm9pc2VMZXR0ZXJbbl0gPSBsZXR0ZXJGaWxsO1xuICAgICAgfSBlbHNlIGlmIChteU5vaXNlTGV0dGVyW25dID4gcFgubGVuZ3RoLWxldHRlckZpbGwpIHtcbiAgICAgICAgbXlOb2lzZUxldHRlcltuXSA9IHBYLmxlbmd0aC1sZXR0ZXJGaWxsO1xuICAgICAgfVxuXG4gICAgICBjdHguc3Ryb2tlV2VpZ2h0KC41KTtcblxuICAgICAgLy92YXIgcmFuZERyb3AgPSByYW5kb20oMTAwKTtcblxuICAgICAgLy9pZiAocmFuZERyb3A+OTkpY29udGludWU7XG4gICAgICBpZiAobiA+IDQgJiYgbiA8IG15Tm9pc2UubGVuZ3RoLTIpe1xuICAgICAgICBjdHgubGluZShwWFtteU5vaXNlTGV0dGVyW25dXS10eXBvT2ZmLCBwWVtteU5vaXNlTGV0dGVyW25dXS10eXBvT2ZmLCBteVhbbXlOb2lzZVtuXV0qbGVhZkdyb3csIG15WVtteU5vaXNlW25dXSpsZWFmR3Jvdyk7XG4gICAgICB9XG4gICAgICBjdHguc3Ryb2tlKDApO1xuICAgICAgY3R4LmZpbGwoMjU1KTtcbiAgICAgIGN0eC5zdHJva2VXZWlnaHQoLjc1KTtcbiAgICAgIGlmIChuJTIgPT0wKSB7XG4gICAgICAgIGN0eC5iZWdpblNoYXBlKCk7XG4gICAgICAgIGN0eC5zdHJva2UoMCk7XG4gICAgICAgIGZvciAobGV0IGo9IHBhcnNlSW50KC1sZXR0ZXJGaWxsLzIpOyBqIDwgcGFyc2VJbnQobGV0dGVyRmlsbC8yKS0xOyBqKyspIHtcblxuICAgICAgICAgIGlmIChjdHguYWJzKChwWFtteU5vaXNlTGV0dGVyW25dK2otMV0tdHlwb09mZiktKHBYW215Tm9pc2VMZXR0ZXJbbl0ral0tdHlwb09mZikpIDwgMyAmJiBjdHguYWJzKChwWVtteU5vaXNlTGV0dGVyW25dK2otMV0tdHlwb09mZiktKHBZW215Tm9pc2VMZXR0ZXJbbl0ral0tdHlwb09mZikpIDwgMykge1xuICAgICAgICAgICAgY3R4LnZlcnRleChwWFtteU5vaXNlTGV0dGVyW25dK2otMV0tdHlwb09mZiwgcFlbbXlOb2lzZUxldHRlcltuXStqLTFdLXR5cG9PZmYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguZW5kU2hhcGUoKTtcbiAgICAgICAgICAgIGN0eC5iZWdpblNoYXBlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGN0eC5lbmRTaGFwZSgpO1xuICAgICAgfVxuICAgICAgY3R4LnN0cm9rZSgwKTtcbiAgICAgIGN0eC5zdHJva2VXZWlnaHQoLjc1KTtcblxuICAgICAgLy9pZiAocmFuZERyb3A+OTApY29udGludWU7XG4gICAgICBjdHgubGluZShteVhbbXlOb2lzZVtuXV0qbGVhZkdyb3csIG15WVtteU5vaXNlW25dXSpsZWFmR3JvdywgbXlYW215Tm9pc2VbbisxXV0qbGVhZkdyb3csIG15WVtteU5vaXNlW24rMV1dKmxlYWZHcm93KTtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgRmxleFNlYXJjaCBmcm9tICdmbGV4c2VhcmNoJztcblxuZnVuY3Rpb24gY2xlYXJFbGVtZW50KGVsZSkge1xuICB3aGlsZSAoZWxlLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIGVsZS5yZW1vdmVDaGlsZChlbGUubGFzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50RnJvbUhUTUwoaHRtbFN0cmluZykge1xuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBodG1sU3RyaW5nLnRyaW0oKTtcbiAgLy8gQ2hhbmdlIHRoaXMgdG8gZGl2LmNoaWxkTm9kZXMgdG8gc3VwcG9ydCBtdWx0aXBsZSB0b3AtbGV2ZWwgbm9kZXNcbiAgcmV0dXJuIGRpdi5maXJzdENoaWxkO1xufVxuXG4vKipcbiAqIFRPRE86IFRoaXMgc2hvdWxkIG5vdCBiZSBhIHN0cmluZyB0ZW1wbGF0ZS4gQ29uc3RydWN0IG5vZGVzLlxuICogQHBhcmFtIHtvb2JqZWN0fSBvcHQgY29udGFpbmVzIHRoZSBJRCB0aGUgY29kZXRpdGxlLCB0aGUgc3VtbWFyeSBhbmQgdGhlIGhyZWZcbiAqL1xuZnVuY3Rpb24gZW50cnlUZW1wbGF0ZShvcHQpIHtcbiAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwicmVmLWVudHJ5XCIgaWQ9XCIke29wdC5pZH1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiZW50cnktaGVhZGluZ1wiPjxhIGNsYXNzPVwiZW50cnktaGVhZGluZy1saW5rXCIgaHJlZj1cIiR7b3B0LmhyZWZ9XCI+JHtvcHQuY29kZXRpdGxlfTwvYT48L2Rpdj5cbiAgICA8cCBjbGFzcz1cInN1bW1hcnlcIj4ke29wdC5zdW1tYXJ5fTwvcD5cbiAgPC9kaXY+YDtcbn1cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG5cbiAgY29uc3Qgc2VhcmNoZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNsdW5yLXNlYXJjaCcpO1xuICBjb25zdCBjbGVhcmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiNsdW5yLWNsZWFyJyk7XG4gIGNvbnN0IHNlYXJjaHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmxleC1zZWFyY2gtcmVzdWx0cycpO1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuXG5cbiAgKGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNlYXJjaCA9IHR4dCA9PiB7XG4gICAgICBjb25zdCByZXN1bHRzID0gaWR4LnNlYXJjaCh0eHQpO1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0cyk7XG4gICAgICBpZiAodHh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjbGVhckVsZW1lbnQoc2VhcmNocmVzdWx0cyk7XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLXJlc3VsdC1jb250YWluZXInKTtcbiAgICAgICAgcmVzdWx0cy5mb3JFYWNoKHJlcyA9PiB7XG5cbiAgICAgICAgICBsZXQgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Jlcy5pZH1gKTtcbiAgICAgICAgICBpZiAoZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGpzb24uZmlsdGVyKGVsZSA9PiBlbGUuaWQgPT09IHJlcy5pZCk7XG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGVudHJ5VGVtcGxhdGUobWF0Y2hlc1swXSk7XG4gICAgICAgICAgICBlID0gY3JlYXRlRWxlbWVudEZyb21IVE1MKHRlbXBsYXRlKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc2VhcmNocmVzdWx0cyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFyRWxlbWVudChzZWFyY2hyZXN1bHRzKTtcbiAgICAgICAgICBzZWFyY2hyZXN1bHRzLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFyRWxlbWVudChzZWFyY2hyZXN1bHRzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL3JlZmVyZW5jZS9sdW5yanMuZGF0YS5qc29uJykuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAvLyBjb25zb2xlLmxvZyhqc29uKTtcbiAgICBjb25zdCBpZHggPSBuZXcgRmxleFNlYXJjaCh7XG4gICAgICB0b2tlbml6ZTogJ3JldmVyc2UnLFxuICAgICAgZGVwdGg6IDQsXG4gICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgIGVuY29kZTogJ3NpbXBsZScsXG4gICAgICB0aHJlc2hvbGQ6IDgsXG4gICAgICBkb2M6IHtcbiAgICAgICAgaWQ6ICdpZCcsXG4gICAgICAgIGZpZWxkOiBbXG4gICAgICAgICAgJ3N1bW1hcnknLFxuICAgICAgICAgICdjb2RldGl0bGUnLFxuICAgICAgICAgICduYW1lJyxcbiAgICAgICAgICAnZGVzY3JpcHRpb24nLFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWR4LmFkZChqc29uKTtcblxuICAgIGlmIChwYXJhbXMuaGFzKCdxdWVyeScpKSB7XG4gICAgICBzZWFyY2goZGVjb2RlVVJJKHBhcmFtcy5nZXQoJ3F1ZXJ5JykpKTtcbiAgICB9XG5cbiAgICBpZiAoY2xlYXJidXR0b24gIT09IG51bGwpIHtcbiAgICAgIGNsZWFyYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBzZWFyY2hmaWVsZC52YWx1ZSA9ICcnO1xuICAgICAgICBpZiAoc2VhcmNocmVzdWx0cyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFyRWxlbWVudChzZWFyY2hyZXN1bHRzKTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHNlYXJjaGZpZWxkICE9PSBudWxsKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hmaWVsZCk7XG4gICAgICBzZWFyY2hmaWVsZC5hZGRFdmVudExpc3RlbmVyKCdvbmZvY3Vzb3V0JywgZXZlbnQgPT4ge1xuICAgICAgICBjbGVhckVsZW1lbnQoc2VhcmNocmVzdWx0cyk7XG4gICAgICB9KTtcbiAgICAgIHNlYXJjaGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICBsZXQgdHh0ID0gc2VhcmNoZmllbGQudmFsdWU7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdCYWNrc3BhY2UnICYmIHR4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjbGVhckVsZW1lbnQoc2VhcmNocmVzdWx0cyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNlYXJjaCh0eHQpO1xuXG4gICAgICB9KTtcbiAgICB9XG4gIH0pKCk7XG5cbn0pO1xuIiwiZXhwb3J0IGNvbnN0IHNodWZmbGVHYWxsZXJ5SXRlbXMgPSAoKSA9PiB7XG5cbiAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKFsuLi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdF0uaW5jbHVkZXMoJ2dhbGxlcnknKSkge1xuXG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FsbGVyeS1vdmVydmlldy1pdGVtLXdyYXBwZXInKTtcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID49IDApIHtcbiAgICAgIEFycmF5LmZyb20oZWxlbWVudHMpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3JkZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbGVtZW50cy5sZW5ndGgpO1xuICAgICAgfSk7XG5cbiAgICB9XG4gIH1cbiAgLy8gfSk7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHdlZXRzKCl7XG4gIGNvbnN0IHhtbGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgeG1saHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoeG1saHR0cC5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHsgICAvLyBYTUxIdHRwUmVxdWVzdC5ET05FID09IDRcbiAgICAgIGlmICh4bWxodHRwLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgY29uc3QgdHdlZXRzID0gSlNPTi5wYXJzZSh4bWxodHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIGNvbnN0IGxhdGVzdCA9IHR3ZWV0cy5kYXRhWzBdO1xuICAgICAgICBjb25zdCB0ZXh0ID0gbGF0ZXN0LnRleHQ7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBsYXRlc3QuY3JlYXRlZF9hdDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR3ZWV0dGltZScpLmlubmVySFRNTCA9IGRhdGU7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJykuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgIH0gZWxzZSBpZiAoeG1saHR0cC5zdGF0dXMgPT0gNDAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgNDAwJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnc29tZXRoaW5nIGVsc2Ugb3RoZXIgdGhhbiAyMDAgd2FzIHJldHVybmVkJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHhtbGh0dHApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgLy8gbGV0IGRldlVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xuICB4bWxodHRwLm9wZW4oJ0dFVCcsICdodHRwczovL2Jhc2lsanMtbGF0ZXN0LXR3ZWV0cy5ub3cuc2gvJywgdHJ1ZSk7XG4gIHhtbGh0dHAuc2VuZCgpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4iXSwic291cmNlUm9vdCI6IiJ9