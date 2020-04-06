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
/* harmony import */ var _tweets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tweets */ "./_source/assets/js/src/tweets.js");
/* harmony import */ var _decoration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decoration */ "./_source/assets/js/src/decoration.js");

 // import mobileNav from "./mobile-nav";



var p5sketch;
document.addEventListener("DOMContentLoaded", function () {
  // console.log("hello main");
  Object(_tweets__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_decoration__WEBPACK_IMPORTED_MODULE_3__["specialChars"])();
  Object(_decoration__WEBPACK_IMPORTED_MODULE_3__["createGuideLines"])(); // mobileNav();

  p5sketch = new p5_lib_p5__WEBPACK_IMPORTED_MODULE_0___default.a(_p5sketch__WEBPACK_IMPORTED_MODULE_1__["default"]);
});

window.onblur = function () {
  p5sketch.noLoop();
};

window.onfocus = function () {
  p5sketch.loop();
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vX3NvdXJjZS9hc3NldHMvY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL19zb3VyY2UvYXNzZXRzL2pzL3NyYy9kZWNvcmF0aW9uLmpzIiwid2VicGFjazovLy8uL19zb3VyY2UvYXNzZXRzL2pzL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL19zb3VyY2UvYXNzZXRzL2pzL3NyYy9wNXNrZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9fc291cmNlL2Fzc2V0cy9qcy9zcmMvdHdlZXRzLmpzIl0sIm5hbWVzIjpbInNwZWNpYWxDaGFycyIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNoYXJzIiwiaW5uZXJUZXh0Iiwic3BsaXQiLCJpbm5lckhUTUwiLCJjaGFyIiwiaSIsImZvbnRTaXplIiwic3R5bGUiLCJub2RlIiwiY3JlYXRlRWxlbWVudCIsImNzc1RleHQiLCJjb250ZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImJvZHkiLCJpbmNsdWRlcyIsImVsZW1lbnRzU2hyaW5rIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJmcyIsInBhcnNlRmxvYXQiLCJtaW5mcyIsImRlY3IiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJjcmVhdGVHdWlkZUxpbmVzIiwicXVlcnlTZWxlY3RvciIsImJvdHRvbWxpbmVzIiwicmlnaHRsaW5lcyIsInBhZ2VsaW5lcyIsImxpbmUiLCJhZGQiLCJwNXNrZXRjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0d2VldHMiLCJwNSIsInNrZXRjaCIsIm9uYmx1ciIsIm5vTG9vcCIsIm9uZm9jdXMiLCJsb29wIiwiY3R4IiwibXlYIiwibXlZIiwicFgiLCJwWSIsImxlYWZHcm93IiwibnVtTGluZXMiLCJteU5vaXNlIiwibXlOb2lzZUxldHRlciIsInR5cG9PZmYiLCJjYW52YXMiLCJzZXR1cCIsImNyZWF0ZUNhbnZhcyIsInBhcmVudCIsImJhY2tncm91bmQiLCJmcmFtZVJhdGUiLCJzbW9vdGgiLCJuIiwicHVzaCIsIm1hcE4iLCJmbG9vciIsIm1hcCIsImNvbnN0cmFpbiIsImRyYXciLCJzdHJva2VXZWlnaHQiLCJ0cmFuc2xhdGUiLCJ3aWR0aCIsImhlaWdodCIsInN0cm9rZSIsIm5vRmlsbCIsImxpbmtzQ291bnQiLCJyYW5kb20iLCJsZXR0ZXJGaWxsIiwiZmlsbCIsImJlZ2luU2hhcGUiLCJqIiwicGFyc2VJbnQiLCJhYnMiLCJ2ZXJ0ZXgiLCJlbmRTaGFwZSIsInhtbGh0dHAiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJET05FIiwic3RhdHVzIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwibGF0ZXN0IiwiZGF0YSIsInRleHQiLCJkYXRlIiwiY3JlYXRlZF9hdCIsImNvbnNvbGUiLCJsb2ciLCJvcGVuIiwic2VuZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QixZQUF2QixFQUFxQ3hCLFNBQXJDLEdBQWlEMkYsSUFBakQ7QUFDQXBHLGdCQUFRLENBQUNpQyxhQUFULENBQXVCLFVBQXZCLEVBQW1DeEIsU0FBbkMsR0FBK0MwRixJQUEvQztBQUNELE9BUEQsTUFPTyxJQUFJWCxPQUFPLENBQUNLLE1BQVIsSUFBa0IsR0FBdEIsRUFBMkI7QUFDaENTLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaO0FBQ0QsT0FGTSxNQUVBO0FBQ0xELGVBQU8sQ0FBQ0MsR0FBUixDQUFZLDRDQUFaLEVBREssQ0FFTDtBQUNEO0FBQ0Y7QUFDRixHQWhCRCxDQUY4QixDQW1COUI7OztBQUNBZixTQUFPLENBQUNnQixJQUFSLENBQWEsS0FBYixFQUFvQix1Q0FBcEIsRUFBNkQsSUFBN0Q7QUFDQWhCLFNBQU8sQ0FBQ2lCLElBQVI7QUFDRCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuLi9jc3Mvc3R5bGVzLmNzc1wiOyIsIlxuZXhwb3J0IGZ1bmN0aW9uIHNwZWNpYWxDaGFycygpIHtcblxuICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhLnRleHRncm93LCAudGV4dGdyb3cnKTtcbiAgWy4uLmVsZW1lbnRzXS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZG9udC1kZWNvcmF0ZScpICE9PSB0cnVlKSB7XG4gICAgICBjb25zdCBjaGFycyA9IGVsZW1lbnQuaW5uZXJUZXh0LnNwbGl0KCcnKTtcbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gbnVsbDtcbiAgICAgIGNoYXJzLmZvckVhY2goKGNoYXIsIGkpID0+IHtcbiAgICAgICAgY29uc3QgZm9udFNpemUgPSAzMCAtICgyICogaSk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gYGJvcmRlci1ib3R0b20td2lkdGg6ICR7KGkgKyAxKX1weDsgZm9udC1zaXplOiAke2ZvbnRTaXplfXB4OyB0b3A6IC0keyhpICsgKDIgKiBpKSl9cHg7YDtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gc3R5bGU7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGFyKTtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIG5vdCBpbiB0aGUgcmVmZXJlbmNlXG4gICAqL1xuICBpZiAoWy4uLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0XS5pbmNsdWRlcygncmVmZXJlbmNlJykgPT09IGZhbHNlKSB7XG5cbiAgICBsZXQgZWxlbWVudHNTaHJpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dHNocmluaywgaDEsIGgyLCBoMywgaDQsIGg1LCBoNicpO1xuXG4gICAgWy4uLmVsZW1lbnRzU2hyaW5rXS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkb250LWRlY29yYXRlJykgIT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgY2hhcnMgPSBlbGVtZW50LmlubmVyVGV4dC5zcGxpdCgnJyk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1zaXplJyk7XG4gICAgICAgIGxldCBmcyA9IHBhcnNlRmxvYXQoc3R5bGUpO1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IG51bGw7XG4gICAgICAgIGNvbnN0IG1pbmZzID0gMTY7XG4gICAgICAgIGNvbnN0IGRlY3IgPSAoZnMgLSBtaW5mcykgLyBjaGFycy5sZW5ndGg7XG4gICAgICAgIGNoYXJzLmZvckVhY2goKGNoYXIsIGkpID0+IHtcbiAgICAgICAgICBmcyAtPSBkZWNyO1xuICAgICAgICAgIGNvbnN0IHN0eWxlID0gYGJvcmRlci1ib3R0b20td2lkdGg6ICR7KDIgLyBpKX1weDsgZm9udC1zaXplOiAke2ZzfXB4OyB0b3A6IC0ke2l9cHg7YDtcbiAgICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gJ3RleHRzaHJpbmstaXRlbSc7XG4gICAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gc3R5bGU7XG4gICAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoYXIpO1xuICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHdWlkZUxpbmVzKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1aWRlbGluZXMnKTtcbiAgY29uc3QgYm90dG9tbGluZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcmlnaHRsaW5lcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwYWdlbGluZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm90dG9tbGluZXMuY2xhc3NOYW1lID0gJ2JvdHRvbV9saW5lcyc7XG4gIHJpZ2h0bGluZXMuY2xhc3NOYW1lID0gJ3JpZ2h0X2xpbmVzJztcbiAgcGFnZWxpbmVzLmNsYXNzTmFtZSA9ICdwYWdlX2xpbmVzJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaW5lLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbUxpbmUnLCBgbGluZV8ke2kgKyAxfWApO1xuICAgIGJvdHRvbWxpbmVzLmFwcGVuZENoaWxkKGxpbmUpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpbmUuY2xhc3NMaXN0LmFkZCgncmlnaHRfbGluZScsIGBsaW5lXyR7aSArIDF9YCk7XG4gICAgcmlnaHRsaW5lcy5hcHBlbmRDaGlsZChsaW5lKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaW5lLmNsYXNzTGlzdC5hZGQoJ2xpbmUnLCBgbGluZV8ke2kgKyAxfWApO1xuICAgIHBhZ2VsaW5lcy5hcHBlbmRDaGlsZChsaW5lKTtcbiAgfVxuICBlbGVtZW50LmFwcGVuZENoaWxkKGJvdHRvbWxpbmVzKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChyaWdodGxpbmVzKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChwYWdlbGluZXMpO1xufVxuIiwiaW1wb3J0IHA1IGZyb20gXCJwNS9saWIvcDVcIjtcbmltcG9ydCBza2V0Y2ggZnJvbSBcIi4vcDVza2V0Y2hcIjtcbi8vIGltcG9ydCBtb2JpbGVOYXYgZnJvbSBcIi4vbW9iaWxlLW5hdlwiO1xuaW1wb3J0IHR3ZWV0cyBmcm9tIFwiLi90d2VldHNcIjtcbmltcG9ydCB7IHNwZWNpYWxDaGFycywgY3JlYXRlR3VpZGVMaW5lcyB9IGZyb20gXCIuL2RlY29yYXRpb25cIjtcbmxldCBwNXNrZXRjaDtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgLy8gY29uc29sZS5sb2coXCJoZWxsbyBtYWluXCIpO1xuICB0d2VldHMoKTtcbiAgc3BlY2lhbENoYXJzKCk7XG4gIGNyZWF0ZUd1aWRlTGluZXMoKTtcbiAgLy8gbW9iaWxlTmF2KCk7XG4gIHA1c2tldGNoID0gbmV3IHA1KHNrZXRjaCk7XG59KTtcblxud2luZG93Lm9uYmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgcDVza2V0Y2gubm9Mb29wKCk7XG59O1xud2luZG93Lm9uZm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gIHA1c2tldGNoLmxvb3AoKTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBza2V0Y2goY3R4KXtcblxuICBjb25zdCBteVg9IFstNzgsIC03MiwgLTY5LCAtNjUsIC02NCwgLTYzLCAtNjEsIC02MSwgLTYxLCAtNjEsIC02MCwgLTYwLCAtNjAsIC01OSwgLTU2LCAtNTQsIC01MSwgLTQ4LCAtNDQsIC00MiwgLTM5LCAtMzUsIC0zMywgLTMxLCAtMjcsIC0yMywgLTE5LCAtMTYsIC0xMywgLTExLCAtOSwgLTYsIDMsIDUsIDYsIDksIDEyLCAxNCwgMTgsIDIwLCAyMiwgMjMsIDI4LCAzMSwgMzQsIDM5LCA0MCwgNDQsIDQ4LCA1MSwgNTQsIDU2LCA1OSwgNjIsIDY2LCA2OCwgNzIsIDc0LCA3NiwgNzgsIDgwLCA4MSwgODEsIDgxLCA4MCwgODAsIDc5LCA3OSwgNzgsIDc3LCA3NiwgNzUsIDc1LCA3NCwgNzIsIDcxLCA3MCwgNzAsIDY4LCA2NywgNjQsIDYzLCA2MiwgNjAsIDU4LCA1OCwgNTgsIDU2LCA1NCwgNTIsIDUwLCA0NywgNDcsIDQ1LCA0MywgMzksIDM2LCAzMywgMjgsIDI1LCAyNCwgMjIsIDE4LCAxNCwgMTEsIDgsIDYsIDMsIC00LCAtMTIsIC0xNCwgLTE3LCAtMjMsIC0yNiwgLTI5LCAtMzIsIC0zNCwgLTM3LCAtMzgsIC00MiwgLTQ0LCAtNDcsIC00OSwgLTUxLCAtNTMsIC01NSwgLTU3LCAtNTksIC02MSwgLTY0LCAtNjYsIC02OSwgLTc0LCAtNzldO1xuICBjb25zdCBteVk9IFszNSwgMzQsIDMzLCAzMiwgMzEsIDMxLCAyNSwgMjAsIDE1LCAxMSwgNywgMSwgLTUsIC0xMCwgLTE2LCAtMjAsIC0yNSwgLTI5LCAtMzQsIC0zNywgLTQwLCAtNDIsIC00NCwgLTQ0LCAtNDcsIC00OCwgLTUwLCAtNTEsIC01MiwgLTUwLCAtNTAsIC01MiwgLTU1LCAtNTYsIC01NCwgLTU0LCAtNTQsIC01NSwgLTU1LCAtNTYsIC01NSwgLTU0LCAtNTUsIC01NSwgLTU2LCAtNTUsIC01NCwgLTU0LCAtNTUsIC01NSwgLTU2LCAtNTYsIC01NiwgLTU1LCAtNTQsIC01NSwgLTU1LCAtNTYsIC01NiwgLTU4LCAtNTgsIC01NSwgLTUyLCAtNDksIC00NiwgLTQzLCAtNDAsIC0zNiwgLTMzLCAtMjksIC0yNywgLTIzLCAtMjEsIC0xOCwgLTEzLCAtMTAsIC04LCAtNSwgLTMsIC0xLCAzLCA2LCA4LCAxMCwgMTMsIDE1LCAxNiwgMTgsIDIxLCAyNCwgMjUsIDI4LCAzMSwgMzMsIDM2LCAzOCwgNDEsIDQzLCA0NywgNDksIDUwLCA1MCwgNTMsIDU0LCA1NSwgNTYsIDU3LCA1OCwgNTksIDYwLCA1OSwgNTksIDU3LCA1NiwgNTYsIDU1LCA1NCwgNTMsIDUwLCA0OCwgNDYsIDQ1LCA0MywgNDEsIDM5LCAzNywgMzYsIDM1LCAzNSwgMzYsIDM4LCAzOCwgMzgsIDQwXTtcbiAgY29uc3QgcFg9IFszNC43MywgMzYuOTI1NjAyLCAzOS4xMjEyMDQsIDQwLjIxODk5OCwgNDAuMjE4OTk4LCA0MC4yMTg5OTgsIDQwLjIxODk5OCwgNDAuMTI5NTk3LCA0MC40NjUwNSwgNDIuMTc4MjM0LCA0NC40OTI4MTcsIDQ2LjI5NzczLCA0OC4yNjM3NzUsIDQ5Ljg3NDgxLCA1MS4wOTY0NiwgNTEuODk0MzM3LCA1Mi4yMDQ0MjIsIDUyLjIzMjIzNSwgNTEuOTYyLCA1MS4zNjk2OSwgNTAuNTAxOTYsIDQ5LjEwMTA3OCwgNDcuNDMzOTAzLCA0NS4yMTAxLCA0My4wODU4MDQsIDQxLjI5ODgzMiwgMzkuNjIxOTk4LCAzOS4wMjUsIDM3LjQxNDM3NSwgMzUuMjY2ODg0LCAzNC43MywgMzQuNzMsIDM0LjczLCAzNC43MywgMzQuNzMsIDM0LjczLCAzNC43MywgMzQuNzMsIDM0LjczLCAzNC43MywgMzQuNzMsIDM0LjczLCAzNC43MywgMzQuNzMsIDQzLjE3LCA0NS4yMDE2NDUsIDQ2LjMwMDM0NiwgNDYuNTg0OTMsIDQ2LjU0Mjc0LCA0Ni4wMzQ4NSwgNDQuNjQ3NDM4LCA0Mi40NTc0OTMsIDQwLjY2NjM0NCwgNDAuMjIsIDQwLjIyLCA0MC4yMiwgNDAuMjIsIDQxLjcwODEyMiwgNDMuMTcsIDY0LjM0NiwgNjMuNDI1Njk0LCA2MS40MzMsIDU5LjUzNjc3NCwgNTcuNTU0NzMsIDU2LjAxOTQ5MywgNTUuMDQ4NDg1LCA1NS4wMDc1MDQsIDU2Ljg1NDcsIDU4LjgwOTgyMiwgNjAuODY5MjE3LCA2Mi45ODAwMDMsIDY1LjIzMTAyLCA2Ny4wNTQ4MiwgNjguNDM0ODE0LCA2OS4zNTQ0NiwgNjkuNzQ3NTgsIDY5LjgzNywgNjkuODM3LCA2OS44MzcsIDY5LjgzNywgNjkuODM3LCA2OS44MzcsIDY3LjU5NiwgNjUuOTE1MjUsIDY1LjE0OTQ5LCA2NC40MzYwMSwgNjIuNzYzNzUsIDYwLjQzNTYwOCwgNTguMzk3OTA3LCA1Ni42MzAzOTQsIDU0Ljk5MzI4NiwgNTQuMDgzNjk0LCA1My45MzgyNywgNTQuNDQ3ODcyLCA1NS43NjQyNTYsIDU3LjUxNjM0MiwgNTkuMzY5MjMsIDYxLjY0MDQ3LCA2My42MjgwMzMsIDY0LjM0NiwgNjEuMjg0LCA2My41MzYzMDQsIDY0LjM0NiwgNjQuMzQ2LCA2Mi44MjM4NTMsIDYxLjA5NjQzNiwgNTkuNDk4MjM0LCA1OS40MTY1MiwgNjEuMjg0LCA3NC44MDQsIDc2Ljc2MTE3LCA3OC42NDYxNSwgODAuNzY4OTksIDgxLjkzNywgODAuMzE1NywgNzguNzMzNTIsIDc2LjU1NDg4NiwgNzUuMDQ3ODQsIDczLjY3MzQyLCA3My4yNzI5OTUsIDczLjY5MTY5LCA3NC44ODY0MDYsIDc2Ljc2NTA4LCA3OC42OTg2MSwgODAuOTY1NjE0LCA4Mi42MjQzLCA4NC45ODU1LCA4Ni41NTIzLCA4NS45Nzk5OTYsIDg0Ljc0OCwgODMuNDQzNTcsIDgxLjQ5MzQ4NCwgNzkuMzQ1OTU1LCA3OC40NzcwMDUsIDc5Ljk1MTc0NCwgODIuMDQ5OTk1LCA4NC4xMjc4MiwgODUuNTk5MiwgODYuODIxNTMsIDg3LjAzOTIxLCA4Ni41NjExNjUsIDg1LjQxNDU4LCA4My42MTc2MSwgODEuNzIzOTYsIDc5LjQzNSwgNzcuNDM4NDE2LCA3NS40MzEwOCwgNzMuNTYxODEsIDcyLjY0Nzk5NSwgNzMuODc5OTksIDc0LjgwNCwgODkuNzA2LCA5MC42MDcyNTQsIDkyLjM0NzQxLCA5NC4zODk5MywgOTUuOTA0MTQ0LCA5NS43MjIyOSwgOTQuMzg5OTQsIDkyLjM0NzQxLCA5MC4yOTY1NiwgODkuNzA2LCA5MC4xNTQsIDkyLjM0OTk5LCA5NC41NDU5NzUsIDk1LjY0NCwgOTUuNjQ0LCA5NS42NDQsIDk1LjY0NCwgOTUuNjQ0LCA5NS42NDQsIDk1LjY0NCwgOTUuNjQ0LCA5NS42NDQsIDk1LjA5NSwgOTIuODk5MDIsIDkxLjI1MjAzLCA5MC4xNTQsIDkwLjE1NCwgOTAuMTU0LCA5MC4xNTQsIDkwLjE1NCwgOTAuMTU0LCA5MC4xNTQsIDkwLjE1NCwgOTAuMTU0LCA5MC4xNTQsIDk5LjkwMiwgMTAyLjA5NzE5LCAxMDQuMjkyMzgsIDEwNS4zOSwgMTA1LjM5LCAxMDUuMzksIDEwNS4zOSwgMTA1LjM5LCAxMDUuMzksIDEwNS4zOSwgMTA1LjM5LCAxMDUuMzksIDEwNS4zOSwgMTA1LjQ3ODcyLCAxMDYuNjY5ODc2LCAxMDcuMzcxLCAxMDcuNzA3LCAxMDYuMjc2MzYsIDEwNC4zOTU5NSwgMTAyLjE5MTEzLCAxMDAuNzg1NjksIDEwMC4wNjQyNTUsIDk5LjkwMiwgOTkuOTAyLCA5OS45MDIsIDk5LjkwMiwgOTkuOTAyLCA5OS45MDIsIDk5LjkwMiwgOTkuOTAyLCA5OS45MDIsIDk5LjkwMiwgOTkuOTAyLCAxMTEuNzQsIDExMy45MzU5OSwgMTE2LjEzMTk3LCAxMTcuMjI5OTk2LCAxMTcuMjI5OTk2LCAxMTcuMjI5OTk2LCAxMTcuMjI5OTk2LCAxMTcuMjI5OTk2LCAxMTcuMjI5OTk2LCAxMTcuMjI5OTk2LCAxMTcuMjI5OTk2LCAxMTcuMjI5OTk2LCAxMTcuMjIyMzQsIDExNi45MzI1NiwgMTE2LjM1NTA4LCAxMTQuODAzMTQsIDExMy4yNDMxOCwgMTExLjIwODM3NCwgMTA4LjcwMTQ5LCAxMDcuNDkyMzcsIDEwNy45Nzc4NzUsIDEwOC4zNDE5OTUsIDExMC4yNDkwMywgMTExLjY2MjgsIDExMS43NCwgMTExLjc0LCAxMTEuNzQsIDExMS43NCwgMTExLjc0LCAxMTEuNzQsIDExMS43NCwgMTExLjc0LCAxMTEuNzQsIDExMS43NCwgMTExLjMzLCAxMTIuMjMwNzQsIDExMy45NzA0MywgMTE2LjQxMTgxLCAxMTcuNTIzNTgsIDExNy4zMzgzLCAxMTUuOTk2NjM1LCAxMTMuOTcwNDQsIDExMS45MjAyMiwgMTExLjMzLCAxMjIuOTA3LCAxMjQuODY0NiwgMTI2Ljc0OTI0NSwgMTI4Ljg3MjQyLCAxMzAuMDQsIDEyOC40MTg5LCAxMjYuODM3MjQsIDEyNC42NTgzNCwgMTIzLjE1MDk4NiwgMTIxLjc3NjQzNiwgMTIxLjM3NiwgMTIxLjc5NDY5LCAxMjIuOTg5NDEsIDEyNC44NjgwOSwgMTI2LjgwMTYxLCAxMjkuMDY4ODIsIDEzMC43Mjc5MiwgMTMzLjA4OTIyLCAxMzQuNjU1NTUsIDEzNC4wODI2NCwgMTMyLjg1MDE2LCAxMzEuNTQ1NDQsIDEyOS41OTYxOCwgMTI3LjQ0NzI2LCAxMjYuNTc4MDMsIDEyOC4wNTMxOCwgMTMwLjE1MSwgMTMyLjIyOTY5LCAxMzMuNzAxNjQsIDEzNC45MjQ0NSwgMTM1LjE0MjIxLCAxMzQuNjY0MDMsIDEzMy41MTcxNSwgMTMxLjcxOTg2LCAxMjkuODI2MDMsIDEyNy41MzcsIDEyNS41NDA0MiwgMTIzLjUzMzA5LCAxMjEuNjYzODIsIDEyMC43NTAxMiwgMTIxLjk4MjYwNSwgMTIyLjkwN107XG4gIGNvbnN0IHBZPSBbNDEuNTE1LCA0MS41MTUsIDQxLjUxNSwgNDIuMDUwMjUsIDQ0LjE5MTI1NywgNDYuMzMyMjY0LCA0Ny45MzgsIDQ5LjY0MTM5NiwgNTAuNDQyOTEsIDQ5LjM3NDQxMywgNDguNzQyMjE4LCA0OC44Mzk3OSwgNDkuNTMwOTYsIDUwLjc5Njk5MywgNTIuNTg1MDU2LCA1NC44NDIzMiwgNTYuOTUwNDU1LCA1OC43MDUzNjQsIDYwLjk2ODkyLCA2Mi45NDUxOTgsIDY0LjYyMjE0LCA2Ni4yNzkwMiwgNjcuNDI1ODIsIDY4LjA5NTUzNSwgNjcuOTU5MTIsIDY3LjE2MTk2LCA2NS43NTEsIDY3LjY5MzAxLCA2Ny42OTMsIDY3LjY5MywgNjYuNjg2MTUsIDY0LjY3MjQ1LCA2Mi42NTg3NTYsIDYwLjY0NTA3LCA1OC42MzEzODIsIDU2LjExNDI3MywgNTQuMTAwNTg2LCA1Mi4wODY5LCA1MC4wNzMyMSwgNDguMDU5NTI1LCA0Ni4wNDU4MzcsIDQzLjUyODczLCA0MS41MTUwNCwgNDEuNTE1LCA2My42NiwgNjIuODM3NTMyLCA2MC44MDIyMDgsIDU4Ljk0MDA4MywgNTYuODgzNTAzLCA1NC44NDI0MTUsIDUzLjQzNDE4LCA1My4zMzM1NCwgNTQuNDI2NTgyLCA1Ni40MDA5OTcsIDU4LjQyMjMzLCA2MC40NDM2NiwgNjIuNDY0OTkzLCA2My4zOTg1LCA2My42NiwgNTUuNzgsIDUzLjY3MjM0LCA1My4wOTIsIDUzLjM4MjExNCwgNTQuMTk1NjIsIDUzLjg2NjQ5NywgNTIuMDU1NDkyLCA1MC44ODg4OTcsIDQ5Ljk1ODMxMywgNDkuMjUxODE2LCA0OC44MjUzOCwgNDguNzMzMywgNDkuMDk2MjQ1LCA0OS45ODU4MjUsIDUxLjQxMjMwOCwgNTMuMzg1OTgzLCA1NS4zNjU4MTQsIDU3LjU5MzA0NCwgNTkuNjEzMjMsIDYxLjYzMzQyLCA2My42NTM2MDYsIDY2LjE3ODg1NiwgNjcuNjk0LCA2Ny42OTQsIDY3LjY5NCwgNjYuNzQxLCA2Ni4xMjQ4MjUsIDY3LjI2MTM2LCA2OC4wNjI3NDQsIDY4LjA2MTE4LCA2Ny40NjAyMSwgNjYuMDEwNywgNjMuOTY3OTU3LCA2Mi4xNTY1MzIsIDYwLjEwMjY2LCA1OC40NDg5MTQsIDU3LjM2MzU2NywgNTYuNjc5NDgsIDU2LjE1MzM4NSwgNTUuODU5MzE4LCA1NS43OCwgNjMuODg0LCA2My4wNTA2OSwgNjEuMjMyLCA1OS4wNjU5OTgsIDU5LjMyNTgyNSwgNTkuODQxMjI1LCA2MC45OTE4OTQsIDYzLjExNDgxNSwgNjMuODg0LCA2Mi4xMjksIDYzLjM2MDg2NywgNjMuOTkwMDQ3LCA2My45Mjg4MjUsIDYyLjUwMiwgNjAuODI0Mzk4LCA2MC4xODE2MTgsIDU5LjIzMzI1MywgNTguMjEzNzE1LCA1Ni40Mjg0NCwgNTQuNTEsIDUyLjM1MDEzLCA1MC42MTU1MywgNDkuMzk1NTA0LCA0OC44NDk5OSwgNDguNzM5MywgNDguOTc5MjQ4LCA0OS44NTkxNTgsIDUwLjgxODkxNiwgNTIuMzA2NjIsIDUzLjk1MDExNSwgNTMuNzA1NzgsIDUyLjkwMDQ2NywgNTIuOTYyMTQ3LCA1NC41ODUzNywgNTUuODExMTE1LCA1Ni42MDIsIDU3LjUxNzgyNiwgNTguNTg2Mzg0LCA2MC41NTMwMjQsIDYyLjU4MTg2MywgNjQuNTE2NTIsIDY2LjEzNTYwNSwgNjcuMzM3NjIsIDY3LjkzMDc0LCA2OC4xNCwgNjcuOTI3NDksIDY3LjMzMjUyLCA2Ni40MTg5MSwgNjUuMTMzNzQsIDYzLjQxNjc0LCA2Mi4xMjksIDQzLjU2OSwgNDEuNTE5NjI3LCA0MC43NjUwNzYsIDQxLjAyNjQ5LCA0Mi42Mjg3MywgNDQuOTMwODc4LCA0Ni4xNDA1MiwgNDYuNDA4ODYsIDQ1LjMwNjc2LCA0My41NjksIDQ5LjE3LCA0OS4xNywgNDkuMTcsIDQ5LjY3MDYyLCA1MS42NzMxMDcsIDUzLjY3NTU5NCwgNTYuMTc4NzAzLCA1OC4xODExOSwgNjAuMTgzNjc4LCA2Mi4xODYxNjUsIDY0LjE4ODY1LCA2Ni42OTE3NCwgNjcuNjkzLCA2Ny42OTMsIDY3LjY5MywgNjcuMTkyMzgsIDY1LjE4OTkxLCA2Mi42ODY4MSwgNjAuNjg0MzIyLCA1OC42ODE4MzUsIDU2LjY3OTM0OCwgNTQuNjc2ODYsIDUyLjE3Mzc1LCA1MC4xNzEyNjUsIDQ5LjE3LCA0MS41MTUsIDQxLjUxNSwgNDEuNTE1LCA0Mi4wMTg3MDcsIDQ0LjAzMzU0LCA0Ni4wNDgzNywgNDguNTY2OTEsIDUwLjU4MTc0LCA1Mi41OTY1NzMsIDU0LjYxMTQwNCwgNTYuNjI2MjM2LCA1OC42NDEwNjgsIDYxLjE1OTYwNywgNjIuODk0MzMsIDYzLjY4ODYyNSwgNjUuNjU4NDksIDY3LjY5Mzk4NSwgNjguMDU5MTA1LCA2OC4xMjI2NjUsIDY3LjUwNzkyLCA2Ni4xMDMzOSwgNjQuMDIwOTIsIDYxLjk0MTk5OCwgNTkuODk5MzAzLCA1Ny44NTY2MSwgNTUuODEzOTE1LCA1My43NzEyMiwgNTEuNzI4NTI3LCA0OS4xNzUxNiwgNDcuMTMyNDY1LCA0NS4wODk3NywgNDMuMDQ3MDc3LCA0MS41MTUsIDcxLjIzOSwgNzEuMjM5LCA3MS4yMzksIDcxLjc1MDM2LCA3My43OTU4LCA3NS44NDEyNCwgNzcuODg2NjgsIDc5LjkzMjEyLCA4Mi40ODg5MiwgODQuNTM0MzYsIDg2LjU3OTgsIDg4LjYyNTI0NCwgOTAuMTI4NzQsIDkyLjQwNDExLCA5NC4wMDY2NywgOTUuODg4MTcsIDk2LjY5NTEzLCA5Ny4wNjQ4NSwgOTYuOTMwOTksIDk2LjA1NDg2LCA5NC4wMzgzNSwgOTIuNTI1OTksIDkyLjc1NDExLCA5MS4wMDYwNCwgODguNzk3NjQsIDg2Ljc5MDkyNCwgODQuNzg0MjEsIDgyLjc3NzUsIDgwLjc3MDc4LCA3OC43NjQwNywgNzYuMjU1NjgsIDc0LjI0ODk2LCA3Mi4yNDIyNSwgNzEuMjM5LCA2NS42MzgsIDYzLjU4OTEyNywgNjIuODM1MDUsIDYzLjMxNTc5LCA2NC42OTc4NCwgNjYuOTk5ODg2LCA2OC4yMDk1MjYsIDY4LjQ3Nzg5LCA2Ny4zNzYyMDUsIDY1LjYzOCwgODQuMTk3LCA4NS40Mjg4NywgODYuMDU4MDYsIDg1Ljk5NjY1LCA4NC41NywgODIuODkyNDgsIDgyLjI1MDE0LCA4MS4zMDI0LCA4MC4yODMxOCwgNzguNDk4MzEsIDc2LjU4LCA3NC40MTk2LCA3Mi42ODQ3MSwgNzEuNDY0NTUsIDcwLjkxOTAxLCA3MC44MDgzMDQsIDcxLjA0ODI1LCA3MS45MjgxNTQsIDcyLjg4NzkxLCA3NC4zNzU2MiwgNzYuMDE5MTEsIDc1Ljc3NDc4LCA3NC45Njk0NywgNzUuMDMxMjIsIDc2LjY1NTYyLCA3Ny44ODA2MTUsIDc4LjY3MiwgNzkuNTg3NTUsIDgwLjY1NjI5LCA4Mi42MjI3NiwgODQuNjUxMTEsIDg2LjU4NjgzLCA4OC4yMDY3MjYsIDg5LjQwOTI5NCwgOTAuMDAyNjYsIDkwLjIxMiwgODkuOTk5NDcsIDg5LjQwNDM2NiwgODguNDkwMzk1LCA4Ny4yMDQzNywgODUuNDg1ODYsIDg0LjE5N107XG5cbiAgY29uc3QgbGVhZkdyb3cgPSAxLjA4O1xuICBjb25zdCBudW1MaW5lcyA9IG15WC5sZW5ndGg7XG4gIC8vIHZhciBsZWFmQ29udG91ciA9IDM7XG5cbiAgY29uc3QgbXlOb2lzZSA9IFtdO1xuICBjb25zdCBteU5vaXNlTGV0dGVyID0gW107XG5cbiAgY29uc3QgdHlwb09mZiA9IDc1O1xuICBsZXQgY2FudmFzID0gbnVsbDtcblxuICBjdHguc2V0dXAgPSAoKSA9PiB7XG5cbiAgICBjYW52YXMgPSBjdHguY3JlYXRlQ2FudmFzKDE4MCwgMTMwKTtcbiAgICBjYW52YXMucGFyZW50KCcjbG9nbycpO1xuICAgIGN0eC5iYWNrZ3JvdW5kKDI1NSk7XG4gICAgY3R4LmZyYW1lUmF0ZSgxNSk7XG4gICAgY3R4LnNtb290aCgpO1xuXG4gICAgZm9yIChsZXQgbj0yOyBuIDwgbnVtTGluZXM7IG4rKykge1xuICAgICAgbXlOb2lzZS5wdXNoKG4pO1xuICAgICAgbXlOb2lzZUxldHRlci5wdXNoKG4pO1xuXG4gICAgICBsZXQgbWFwTiA9IGN0eC5mbG9vcihjdHgubWFwKG4sIDAsIG51bUxpbmVzLW51bUxpbmVzLzMsIDAsIHBYLmxlbmd0aCkpO1xuICAgICAgbWFwTiA9IGN0eC5jb25zdHJhaW4obWFwTiwgMCwgcFgubGVuZ3RoKTtcbiAgICAgIG15Tm9pc2VMZXR0ZXJbbl0gPSBtYXBOO1xuXG4gICAgICBpZiAobiA+IG51bUxpbmVzLW51bUxpbmVzLzMpe1xuICAgICAgICBtYXBOID0gY3R4LmZsb29yKGN0eC5tYXAobiwgbnVtTGluZXMtbnVtTGluZXMvMywgbnVtTGluZXMsIHBYLmxlbmd0aC1wWC5sZW5ndGgvMywgcFgubGVuZ3RoLzYpKTtcbiAgICAgICAgbWFwTiA9IGN0eC5jb25zdHJhaW4obWFwTiwgMCwgcFgubGVuZ3RoKTtcbiAgICAgICAgbXlOb2lzZUxldHRlcltuXSA9IG1hcE47XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjdHguZHJhdyA9ICgpPT57XG5cbiAgICBjdHguYmFja2dyb3VuZCgyNTUpO1xuICAgIGN0eC5zdHJva2VXZWlnaHQoLjc1KTtcbiAgICBjdHgudHJhbnNsYXRlKGN0eC53aWR0aC8yLCBjdHguaGVpZ2h0LzIpO1xuICAgIGN0eC5zdHJva2UoMCk7XG4gICAgY3R4Lm5vRmlsbCgpO1xuXG4gICAgY29uc3QgbGlua3NDb3VudCA9IDE7XG5cbiAgICBmb3IgKGxldCBuPTA7IG4gPCBteU5vaXNlLmxlbmd0aC0xOyBuKz0xKSB7XG4gICAgICBteU5vaXNlTGV0dGVyW25dICs9IGN0eC5mbG9vcihjdHgucmFuZG9tKC0xLCAyKSk7XG4gICAgICBjb25zdCBsZXR0ZXJGaWxsID0gMjU7XG5cbiAgICAgIGlmIChteU5vaXNlTGV0dGVyW25dIDwgbGV0dGVyRmlsbCkge1xuICAgICAgICBteU5vaXNlTGV0dGVyW25dID0gbGV0dGVyRmlsbDtcbiAgICAgIH0gZWxzZSBpZiAobXlOb2lzZUxldHRlcltuXSA+IHBYLmxlbmd0aC1sZXR0ZXJGaWxsKSB7XG4gICAgICAgIG15Tm9pc2VMZXR0ZXJbbl0gPSBwWC5sZW5ndGgtbGV0dGVyRmlsbDtcbiAgICAgIH1cblxuICAgICAgY3R4LnN0cm9rZVdlaWdodCguNSk7XG5cbiAgICAgIC8vdmFyIHJhbmREcm9wID0gcmFuZG9tKDEwMCk7XG5cbiAgICAgIC8vaWYgKHJhbmREcm9wPjk5KWNvbnRpbnVlO1xuICAgICAgaWYgKG4gPiA0ICYmIG4gPCBteU5vaXNlLmxlbmd0aC0yKXtcbiAgICAgICAgY3R4LmxpbmUocFhbbXlOb2lzZUxldHRlcltuXV0tdHlwb09mZiwgcFlbbXlOb2lzZUxldHRlcltuXV0tdHlwb09mZiwgbXlYW215Tm9pc2Vbbl1dKmxlYWZHcm93LCBteVlbbXlOb2lzZVtuXV0qbGVhZkdyb3cpO1xuICAgICAgfVxuICAgICAgY3R4LnN0cm9rZSgwKTtcbiAgICAgIGN0eC5maWxsKDI1NSk7XG4gICAgICBjdHguc3Ryb2tlV2VpZ2h0KC43NSk7XG4gICAgICBpZiAobiUyID09MCkge1xuICAgICAgICBjdHguYmVnaW5TaGFwZSgpO1xuICAgICAgICBjdHguc3Ryb2tlKDApO1xuICAgICAgICBmb3IgKGxldCBqPSBwYXJzZUludCgtbGV0dGVyRmlsbC8yKTsgaiA8IHBhcnNlSW50KGxldHRlckZpbGwvMiktMTsgaisrKSB7XG5cbiAgICAgICAgICBpZiAoY3R4LmFicygocFhbbXlOb2lzZUxldHRlcltuXStqLTFdLXR5cG9PZmYpLShwWFtteU5vaXNlTGV0dGVyW25dK2pdLXR5cG9PZmYpKSA8IDMgJiYgY3R4LmFicygocFlbbXlOb2lzZUxldHRlcltuXStqLTFdLXR5cG9PZmYpLShwWVtteU5vaXNlTGV0dGVyW25dK2pdLXR5cG9PZmYpKSA8IDMpIHtcbiAgICAgICAgICAgIGN0eC52ZXJ0ZXgocFhbbXlOb2lzZUxldHRlcltuXStqLTFdLXR5cG9PZmYsIHBZW215Tm9pc2VMZXR0ZXJbbl0rai0xXS10eXBvT2ZmKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3R4LmVuZFNoYXBlKCk7XG4gICAgICAgICAgICBjdHguYmVnaW5TaGFwZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjdHguZW5kU2hhcGUoKTtcbiAgICAgIH1cbiAgICAgIGN0eC5zdHJva2UoMCk7XG4gICAgICBjdHguc3Ryb2tlV2VpZ2h0KC43NSk7XG5cbiAgICAgIC8vaWYgKHJhbmREcm9wPjkwKWNvbnRpbnVlO1xuICAgICAgY3R4LmxpbmUobXlYW215Tm9pc2Vbbl1dKmxlYWZHcm93LCBteVlbbXlOb2lzZVtuXV0qbGVhZkdyb3csIG15WFtteU5vaXNlW24rMV1dKmxlYWZHcm93LCBteVlbbXlOb2lzZVtuKzFdXSpsZWFmR3Jvdyk7XG4gICAgfVxuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHdlZXRzKCl7XG4gIGNvbnN0IHhtbGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgeG1saHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoeG1saHR0cC5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHsgICAvLyBYTUxIdHRwUmVxdWVzdC5ET05FID09IDRcbiAgICAgIGlmICh4bWxodHRwLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgY29uc3QgdHdlZXRzID0gSlNPTi5wYXJzZSh4bWxodHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIGNvbnN0IGxhdGVzdCA9IHR3ZWV0cy5kYXRhWzBdO1xuICAgICAgICBjb25zdCB0ZXh0ID0gbGF0ZXN0LnRleHQ7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBsYXRlc3QuY3JlYXRlZF9hdDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR3ZWV0dGltZScpLmlubmVySFRNTCA9IGRhdGU7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJykuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgIH0gZWxzZSBpZiAoeG1saHR0cC5zdGF0dXMgPT0gNDAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgNDAwJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnc29tZXRoaW5nIGVsc2Ugb3RoZXIgdGhhbiAyMDAgd2FzIHJldHVybmVkJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHhtbGh0dHApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgLy8gbGV0IGRldlVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xuICB4bWxodHRwLm9wZW4oJ0dFVCcsICdodHRwczovL2Jhc2lsanMtbGF0ZXN0LXR3ZWV0cy5ub3cuc2gvJywgdHJ1ZSk7XG4gIHhtbGh0dHAuc2VuZCgpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==