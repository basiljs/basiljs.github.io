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
/******/ 		"reference": 0
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
/******/ 	deferredModules.push(["./_source/assets/js/src/reference.js","vendors~reference"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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
  var div = document.createElement("div");
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

document.addEventListener("DOMContentLoaded", function () {
  var searchfield = document.querySelector("input#lunr-search");
  var clearbutton = document.querySelector("button#lunr-clear");
  var searchresults = document.querySelector("#flex-search-results");
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
                var container = document.createElement("div");
                container.classList.add("search-result-container");
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
            return fetch("/reference/lunrjs.data.json").catch(function (err) {
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
              tokenize: "reverse",
              depth: 4,
              cache: true,
              encode: "simple",
              threshold: 8,
              doc: {
                id: "id",
                field: ["summary", "codetitle", "name", "description"]
              }
            });
            idx.add(json);

            if (params.has("query")) {
              search(decodeURI(params.get("query")));
            }

            if (clearbutton !== null) {
              clearbutton.addEventListener("click", function (event) {
                searchfield.value = "";

                if (searchresults !== null) {
                  clearElement(searchresults);
                }
              });
            }

            if (searchfield !== null) {
              // console.log(searchfield);
              searchfield.addEventListener("onfocusout", function (event) {
                clearElement(searchresults);
              });
              searchfield.addEventListener("keyup", function (event) {
                var txt = searchfield.value;

                if (event.key === "Backspace" && txt.length === 0) {
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vX3NvdXJjZS9hc3NldHMvanMvc3JjL3JlZmVyZW5jZS5qcyJdLCJuYW1lcyI6WyJjbGVhckVsZW1lbnQiLCJlbGUiLCJoYXNDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJjcmVhdGVFbGVtZW50RnJvbUhUTUwiLCJodG1sU3RyaW5nIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidHJpbSIsImZpcnN0Q2hpbGQiLCJlbnRyeVRlbXBsYXRlIiwib3B0IiwiaWQiLCJocmVmIiwiY29kZXRpdGxlIiwic3VtbWFyeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZWFyY2hmaWVsZCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGVhcmJ1dHRvbiIsInNlYXJjaHJlc3VsdHMiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInR4dCIsInJlc3VsdHMiLCJpZHgiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiY29udGFpbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9yRWFjaCIsInJlcyIsImUiLCJhcHBlbmRDaGlsZCIsImNsb25lTm9kZSIsIm1hdGNoZXMiLCJqc29uIiwiZmlsdGVyIiwidGVtcGxhdGUiLCJmZXRjaCIsImNhdGNoIiwiZXJyIiwicmVzcG9uc2UiLCJGbGV4U2VhcmNoIiwidG9rZW5pemUiLCJkZXB0aCIsImNhY2hlIiwiZW5jb2RlIiwidGhyZXNob2xkIiwiZG9jIiwiZmllbGQiLCJoYXMiLCJkZWNvZGVVUkkiLCJnZXQiLCJldmVudCIsInZhbHVlIiwia2V5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUQsQ0FBWjtBQUNEO0FBQ0YsZUFMRDtBQU1EOztBQUNELGdCQUFJSCxXQUFXLEtBQUssSUFBcEIsRUFBMEI7QUFDeEI7QUFDQUEseUJBQVcsQ0FBQ0QsZ0JBQVosQ0FBNkIsWUFBN0IsRUFBMkMsVUFBQTJDLEtBQUssRUFBSTtBQUNsRDlELDRCQUFZLENBQUN1QixhQUFELENBQVo7QUFDRCxlQUZEO0FBR0FILHlCQUFXLENBQUNELGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFVBQUEyQyxLQUFLLEVBQUk7QUFDN0Msb0JBQUlqQyxHQUFHLEdBQUdULFdBQVcsQ0FBQzJDLEtBQXRCOztBQUNBLG9CQUFJRCxLQUFLLENBQUNFLEdBQU4sS0FBYyxXQUFkLElBQTZCbkMsR0FBRyxDQUFDSyxNQUFKLEtBQWUsQ0FBaEQsRUFBbUQ7QUFDakRsQyw4QkFBWSxDQUFDdUIsYUFBRCxDQUFaO0FBQ0E7QUFDRDs7QUFDREssc0JBQU0sQ0FBQ0MsR0FBRCxDQUFOO0FBQ0QsZUFQRDtBQVFEOztBQTFFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFEO0FBNEVELENBbEZELEUiLCJmaWxlIjoicmVmZXJlbmNlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJyZWZlcmVuY2VcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL19zb3VyY2UvYXNzZXRzL2pzL3NyYy9yZWZlcmVuY2UuanNcIixcInZlbmRvcnN+cmVmZXJlbmNlXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IEZsZXhTZWFyY2ggZnJvbSBcImZsZXhzZWFyY2hcIjtcblxuZnVuY3Rpb24gY2xlYXJFbGVtZW50KGVsZSkge1xuICB3aGlsZSAoZWxlLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIGVsZS5yZW1vdmVDaGlsZChlbGUubGFzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50RnJvbUhUTUwoaHRtbFN0cmluZykge1xuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmlubmVySFRNTCA9IGh0bWxTdHJpbmcudHJpbSgpO1xuICAvLyBDaGFuZ2UgdGhpcyB0byBkaXYuY2hpbGROb2RlcyB0byBzdXBwb3J0IG11bHRpcGxlIHRvcC1sZXZlbCBub2Rlc1xuICByZXR1cm4gZGl2LmZpcnN0Q2hpbGQ7XG59XG5cbi8qKlxuICogVE9ETzogVGhpcyBzaG91bGQgbm90IGJlIGEgc3RyaW5nIHRlbXBsYXRlLiBDb25zdHJ1Y3Qgbm9kZXMuXG4gKiBAcGFyYW0ge29vYmplY3R9IG9wdCBjb250YWluZXMgdGhlIElEIHRoZSBjb2RldGl0bGUsIHRoZSBzdW1tYXJ5IGFuZCB0aGUgaHJlZlxuICovXG5mdW5jdGlvbiBlbnRyeVRlbXBsYXRlKG9wdCkge1xuICByZXR1cm4gYDxkaXYgY2xhc3M9XCJyZWYtZW50cnlcIiBpZD1cIiR7b3B0LmlkfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJlbnRyeS1oZWFkaW5nXCI+PGEgY2xhc3M9XCJlbnRyeS1oZWFkaW5nLWxpbmtcIiBocmVmPVwiJHtvcHQuaHJlZn1cIj4ke29wdC5jb2RldGl0bGV9PC9hPjwvZGl2PlxuICAgIDxwIGNsYXNzPVwic3VtbWFyeVwiPiR7b3B0LnN1bW1hcnl9PC9wPlxuICA8L2Rpdj5gO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgY29uc3Qgc2VhcmNoZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjbHVuci1zZWFyY2hcIik7XG4gIGNvbnN0IGNsZWFyYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNsdW5yLWNsZWFyXCIpO1xuICBjb25zdCBzZWFyY2hyZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmbGV4LXNlYXJjaC1yZXN1bHRzXCIpO1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuXG4gIChhc3luYyBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzZWFyY2ggPSB0eHQgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGlkeC5zZWFyY2godHh0KTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuICAgICAgaWYgKHR4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY2xlYXJFbGVtZW50KHNlYXJjaHJlc3VsdHMpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNlYXJjaC1yZXN1bHQtY29udGFpbmVyXCIpO1xuICAgICAgICByZXN1bHRzLmZvckVhY2gocmVzID0+IHtcbiAgICAgICAgICBsZXQgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Jlcy5pZH1gKTtcbiAgICAgICAgICBpZiAoZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGpzb24uZmlsdGVyKGVsZSA9PiBlbGUuaWQgPT09IHJlcy5pZCk7XG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGVudHJ5VGVtcGxhdGUobWF0Y2hlc1swXSk7XG4gICAgICAgICAgICBlID0gY3JlYXRlRWxlbWVudEZyb21IVE1MKHRlbXBsYXRlKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc2VhcmNocmVzdWx0cyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFyRWxlbWVudChzZWFyY2hyZXN1bHRzKTtcbiAgICAgICAgICBzZWFyY2hyZXN1bHRzLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFyRWxlbWVudChzZWFyY2hyZXN1bHRzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9yZWZlcmVuY2UvbHVucmpzLmRhdGEuanNvblwiKS5jYXRjaChlcnIgPT5cbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICApO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAvLyBjb25zb2xlLmxvZyhqc29uKTtcbiAgICBjb25zdCBpZHggPSBuZXcgRmxleFNlYXJjaCh7XG4gICAgICB0b2tlbml6ZTogXCJyZXZlcnNlXCIsXG4gICAgICBkZXB0aDogNCxcbiAgICAgIGNhY2hlOiB0cnVlLFxuICAgICAgZW5jb2RlOiBcInNpbXBsZVwiLFxuICAgICAgdGhyZXNob2xkOiA4LFxuICAgICAgZG9jOiB7XG4gICAgICAgIGlkOiBcImlkXCIsXG4gICAgICAgIGZpZWxkOiBbXCJzdW1tYXJ5XCIsIFwiY29kZXRpdGxlXCIsIFwibmFtZVwiLCBcImRlc2NyaXB0aW9uXCJdXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWR4LmFkZChqc29uKTtcblxuICAgIGlmIChwYXJhbXMuaGFzKFwicXVlcnlcIikpIHtcbiAgICAgIHNlYXJjaChkZWNvZGVVUkkocGFyYW1zLmdldChcInF1ZXJ5XCIpKSk7XG4gICAgfVxuXG4gICAgaWYgKGNsZWFyYnV0dG9uICE9PSBudWxsKSB7XG4gICAgICBjbGVhcmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgICAgICBzZWFyY2hmaWVsZC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGlmIChzZWFyY2hyZXN1bHRzICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJFbGVtZW50KHNlYXJjaHJlc3VsdHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHNlYXJjaGZpZWxkICE9PSBudWxsKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hmaWVsZCk7XG4gICAgICBzZWFyY2hmaWVsZC5hZGRFdmVudExpc3RlbmVyKFwib25mb2N1c291dFwiLCBldmVudCA9PiB7XG4gICAgICAgIGNsZWFyRWxlbWVudChzZWFyY2hyZXN1bHRzKTtcbiAgICAgIH0pO1xuICAgICAgc2VhcmNoZmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IHR4dCA9IHNlYXJjaGZpZWxkLnZhbHVlO1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiICYmIHR4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjbGVhckVsZW1lbnQoc2VhcmNocmVzdWx0cyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNlYXJjaCh0eHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KSgpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9