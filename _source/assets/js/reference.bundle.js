/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./_source/assets/js/src/reference.js");
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
    }, _callee, this);
  }))();
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/flexsearch/dist/flexsearch.min.js":
/*!********************************************************!*\
  !*** ./node_modules/flexsearch/dist/flexsearch.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 FlexSearch v0.6.2
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
(function(y,L,m){let B;(B=m.define)&&B.amd?B([],function(){return L}):(B=m.modules)?B[y.toLowerCase()]=L: true?module.exports=L:undefined})("FlexSearch",function da(y){function m(a,b){const c=b?b.id:a&&a.id;this.id=c||0===c?c:ea++;this.init(a,b);M(this,"index",function(){return this.a?Object.keys(this.a.index[this.a.keys[0]].c):Object.keys(this.c)});M(this,"length",function(){return this.index.length})}function B(a,b,c,d){this.u!==this.g&&(this.o=this.o.concat(c),this.u++,
d&&this.o.length>=d&&(this.u=this.g),this.u===this.g&&(this.cache&&this.l.set(b,this.o),this.F&&this.F(this.o)));return this}function N(a,b){const c=a.length,d=J(b),e=[];for(let g=0,f=0;g<c;g++){const c=a[g];if(d&&b(c)||!d&&!b[c])e[f++]=c}return e}function R(a,b,c,d,e,g,f,l,r,p){c=Y(c,f?0:e,l,g,b,r,p);let q;l&&(l=c.page,q=c.next,c=c.result);if(f)b=this.where(f,null,e,c);else{b=c;c=this.h;e=b.length;g=Array(e);for(f=0;f<e;f++)g[f]=c[b[f]];b=g}c=b;d&&(J(d)||(A=d.split(":"),1<A.length?d=fa:(A=A[0],d=
ha)),c.sort(d));c=O(l,q,c);this.cache&&this.l.set(a,c);return c}function M(a,b,c){Object.defineProperty(a,b,{get:c})}function h(a){return new RegExp(a,"g")}function K(a,b){for(let c=0;c<b.length;c+=2)a=a.replace(b[c],b[c+1]);return a}function S(a,b,c,d,e,g,f,l){if(b[c])return b[c];e=e?(l-(f||l/1.5))*g+(f||l/1.5)*e:g;b[c]=e;e>=f&&(a=a[l-(e+.5>>0)],a=a[c]||(a[c]=[]),a[a.length]=d);return e}function W(a,b){if(a){const c=Object.keys(a);for(let d=0,e=c.length;d<e;d++){const e=c[d],f=a[e];if(f)for(let c=
0,d=f.length;c<d;c++)if(f[c]===b){1===d?delete a[e]:f.splice(c,1);break}else E(f[c])&&W(f[c],b)}}}function X(a){let b="",c="";var d="";for(let e=0;e<a.length;e++){const g=a[e];if(g!==c)if(e&&"h"===g){if(d="a"===d||"e"===d||"i"===d||"o"===d||"u"===d||"y"===d,("a"===c||"e"===c||"i"===c||"o"===c||"u"===c||"y"===c)&&d||" "===c)b+=g}else b+=g;d=e===a.length-1?"":a[e+1];c=g}return b}function ia(a,b){a=a.length-b.length;return 0>a?1:a?-1:0}function ha(a,b){a=a[A];b=b[A];return a<b?-1:a>b?1:0}function fa(a,
b){const c=A.length;for(let d=0;d<c;d++)a=a[A[d]],b=b[A[d]];return a<b?-1:a>b?1:0}function O(a,b,c){return a?{page:a,next:b?""+b:null,result:c}:c}function Y(a,b,c,d,e,g,f){let l,r=[];if(!0===c){c="0";var p=""}else p=c&&c.split(":");const q=a.length;if(1<q){const U=w();let D=[],P,I;var n=0,k;let u;var h=!0;let F,G=0,x,z,y,B;p&&(2===p.length?(y=p,p=!1):p=B=parseInt(p[0],10));if(f){for(P=w();n<q;n++)if("not"===e[n])for(I=a[n],u=I.length,k=0;k<u;k++)P["@"+I[k]]=1;else z=n+1;if(C(z))return O(c,l,r);n=
0}else x=H(e)&&e;let A;for(;n<q;n++){const w=n===(z||q)-1;if(!x||!n)if((k=x||e&&e[n])&&"and"!==k)if("or"===k)A=!1;else continue;else A=g=!0;I=a[n];if(u=I.length){if(h)if(F){var t=F.length;for(k=0;k<t;k++){h=F[k];var m="@"+h;f&&P[m]||(U[m]=1,g||(r[G++]=h))}F=null;h=!1}else{F=I;continue}m=!1;for(k=0;k<u;k++){t=I[k];var v="@"+t;const a=g?U[v]||0:n;if(!(!a&&!d||f&&P[v]||!g&&U[v]))if(a===n){if(w){if(!B||--B<G)if(r[G++]=t,b&&G===b)return O(c,G+(p||0),r)}else U[v]=n+1;m=!0}else d&&(v=D[a]||(D[a]=[]),v[v.length]=
t)}if(A&&!m&&!d)break}else if(A&&!d)return O(c,l,I)}if(F)if(n=F.length,f)for(k=p?parseInt(p,10):0;k<n;k++)a=F[k],P["@"+a]||(r[G++]=a);else r=F;if(d)for(G=r.length,y?(n=parseInt(y[0],10)+1,k=parseInt(y[1],10)+1):(n=D.length,k=0);n--;)if(t=D[n]){for(u=t.length;k<u;k++)if(d=t[k],!f||!P["@"+d])if(r[G++]=d,b&&G===b)return O(c,n+":"+k,r);k=0}}else!q||e&&"not"===e[0]||(r=a[0],p&&(p=parseInt(p[0],10)));b&&(f=r.length,p&&p>f&&(p=0),p=p||0,l=p+b,l<f?r=r.slice(p,l):(l=0,p&&(r=r.slice(p))));return O(c,l,r)}function H(a){return"string"===
typeof a}function z(a){return a.constructor===Array}function J(a){return"function"===typeof a}function E(a){return"object"===typeof a}function C(a){return"undefined"===typeof a}function Z(a){const b=Array(a);for(let c=0;c<a;c++)b[c]=w();return b}function w(){return Object.create(null)}function ja(){let a,b;self.onmessage=function(c){if(c=c.data)if(c.search){const d=b.search(c.content,c.threshold?{limit:c.limit,threshold:c.threshold,where:c.where}:c.limit);self.postMessage({id:a,content:c.content,
limit:c.limit,result:d})}else c.add?b.add(c.id,c.content):c.update?b.update(c.id,c.content):c.remove?b.remove(c.id):c.clear?b.clear():c.info?(c=b.info(),c.worker=a,console.log(c)):c.register&&(a=c.id,c.options.cache=!1,c.options.async=!1,c.options.worker=!1,b=(new Function(c.register.substring(c.register.indexOf("{")+1,c.register.lastIndexOf("}"))))(),b=new b(c.options))}}function ka(a,b,c,d){a=y("flexsearch","id"+a,ja,function(a){(a=a.data)&&a.result&&d(a.id,a.content,a.result,a.limit,a.where,a.cursor,
a.suggest)},b);const e=da.toString();c.id=b;a.postMessage({register:e,options:c,id:b});return a}const x={encode:"icase",f:"forward",split:/\W+/,cache:!1,async:!1,g:!1,D:!1,a:!1,b:9,threshold:0,depth:0},aa={memory:{encode:"extra",f:"strict",threshold:0,b:1},speed:{encode:"icase",f:"strict",threshold:1,b:3,depth:2},match:{encode:"extra",f:"full",threshold:1,b:3},score:{encode:"extra",f:"strict",threshold:1,b:9,depth:4},balance:{encode:"balance",f:"strict",threshold:0,b:3,depth:3},fast:{encode:"icase",
f:"strict",threshold:8,b:9,depth:1}},V=[];let ea=0;const ba={},ca={};m.create=function(a,b){return new m(a,b)};m.registerMatcher=function(a){for(const b in a)a.hasOwnProperty(b)&&V.push(h(b),a[b]);return this};m.registerEncoder=function(a,b){Q[a]=b.bind(Q);return this};m.registerLanguage=function(a,b){ba[a]=b.filter;ca[a]=b.stemmer;return this};m.encode=function(a,b){return Q[a](b)};m.prototype.init=function(a,b){this.v=[];if(b){var c=b.preset;a=b}else a||(a=x),c=a.preset;b={};H(a)?(b=aa[a],a={}):
c&&(b=aa[c]);if(c=a.worker)if("undefined"===typeof Worker)a.worker=!1,this.m=null;else{var d=parseInt(c,10)||4;this.C=-1;this.u=0;this.o=[];this.F=null;this.m=Array(d);for(var e=0;e<d;e++)this.m[e]=ka(this.id,e,a,B.bind(this))}this.f=a.tokenize||b.f||this.f||x.f;this.split=a.split||this.split||x.split;this.D=a.rtl||this.D||x.D;this.async="undefined"===typeof Promise||C(c=a.async)?this.async||x.async:c;this.g=C(c=a.worker)?this.g||x.g:c;this.threshold=C(c=a.threshold)?b.threshold||this.threshold||
x.threshold:c;this.b=C(c=a.resolution)?c=b.b||this.b||x.b:c;c<=this.threshold&&(this.b=this.threshold+1);this.depth="strict"!==this.f||C(c=a.depth)?b.depth||this.depth||x.depth:c;this.w=(c=C(c=a.encode)?b.encode||x.encode:c)&&Q[c]&&Q[c].bind(Q)||(J(c)?c:this.w||!1);(c=a.matcher)&&this.addMatcher(c);if(c=(b=a.lang)||a.filter){H(c)&&(c=ba[c]);if(z(c)){d=this.w;e=w();for(var g=0;g<c.length;g++){var f=d?d(c[g]):c[g];e[f]=1}c=e}this.filter=c}if(c=b||a.stemmer){var l;b=H(c)?ca[c]:c;d=this.w;e=[];for(l in b)b.hasOwnProperty(l)&&
(g=d?d(l):l,e.push(h(g+"($|\\W)"),d?d(b[l]):b[l]));this.stemmer=l=e}this.a=e=(c=a.doc)?c:this.a||x.a;this.j=Z(this.b-(this.threshold||0));this.i=w();this.c=w();if(e){this.h=w();a.doc=null;l=e.index={};b=e.keys=[];d=e.field;g=e.tag;z(e.id)||(e.id=e.id.split(":"));if(g){this.G=w();f=w();if(d)if(H(d))f[d]=a;else if(z(d))for(let b=0;b<d.length;b++)f[d[b]]=a;else E(d)&&(f=d);z(g)||(e.tag=g=[g]);for(d=0;d<g.length;d++)this.G[g[d]]=w();this.I=g;d=f}if(d){let c;z(d)||(E(d)?(c=d,e.field=d=Object.keys(d)):
e.field=d=[d]);for(e=0;e<d.length;e++)g=d[e],z(g)||(c&&(a=c[g]),b[e]=g,d[e]=g.split(":")),l[g]=new m(a),l[g].h=this.h}}this.B=!0;this.l=(this.cache=c=C(c=a.cache)?this.cache||x.cache:c)?new la(c):!1;return this};m.prototype.encode=function(a){a&&V.length&&(a=K(a,V));a&&this.v.length&&(a=K(a,this.v));a&&this.w&&(a=this.w(a));a&&this.stemmer&&(a=K(a,this.stemmer));return a};m.prototype.addMatcher=function(a){const b=this.v;for(const c in a)a.hasOwnProperty(c)&&b.push(h(c),a[c]);return this};m.prototype.add=
function(a,b,c,d,e){if(this.a&&E(a))return this.A("add",a,b);if(b&&H(b)&&(a||0===a)){var g="@"+a;if(this.c[g]&&!d)return this.update(a,b);if(this.g)return++this.C>=this.m.length&&(this.C=0),this.m[this.C].postMessage({add:!0,id:a,content:b}),this.c[g]=""+this.C,c&&c(),this;if(!e){if(this.async&&"function"!==typeof importScripts){let e=this;g=new Promise(function(c){setTimeout(function(){e.add(a,b,null,d,!0);e=null;c()})});if(c)g.then(c);else return g;return this}if(c)return this.add(a,b,null,d,!0),
c(),this}b=this.encode(b);if(!b.length)return this;c=this.f;e=J(c)?c(b):b.split(this.split);this.filter&&(e=N(e,this.filter));const n=w();n._ctx=w();const k=e.length,h=this.threshold,m=this.depth,u=this.b,v=this.j,T=this.D;for(let b=0;b<k;b++){var f=e[b];if(f){var l=f.length,r=(T?b+1:k-b)/k,p="";switch(c){case "reverse":case "both":for(var q=l;--q;)p=f[q]+p,S(v,n,p,a,T?1:(l-q)/l,r,h,u-1);p="";case "forward":for(q=0;q<l;q++)p+=f[q],S(v,n,p,a,T?(q+1)/l:1,r,h,u-1);break;case "full":for(q=0;q<l;q++){const b=
(T?q+1:l-q)/l;for(let c=l;c>q;c--)p=f.substring(q,c),S(v,n,p,a,b,r,h,u-1)}break;default:if(l=S(v,n,f,a,1,r,h,u-1),m&&1<k&&l>=h)for(l=n._ctx[f]||(n._ctx[f]=w()),f=this.i[f]||(this.i[f]=Z(u-(h||0))),r=b-m,p=b+m+1,0>r&&(r=0),p>k&&(p=k);r<p;r++)r!==b&&S(f,l,e[r],a,0,u-(r<b?b-r:r-b),h,u-1)}}}this.c[g]=1;this.B=!1}return this};m.prototype.A=function(a,b,c){if(z(b))for(let d=0,e=b.length;d<e;d++){if(d===e-1)return this.A(a,b[d],c);this.A(a,b[d])}else{const h=this.a.index,p=this.a.keys;var d=this.a.tag,e=
this.a.id;let q;let n;for(var g=0;g<e.length;g++)q=(q||b)[e[g]];if(d){for(e=0;e<d.length;e++){var f=d[e];var l=f.split(":");for(g=0;g<l.length;g++)n=(n||b)[l[g]];n="@"+n}l=this.G[f];l=l[n]||(l[n]=[])}if("remove"===a){delete this.h[q];for(let a=0,b=p.length;a<b;a++){if(a===b-1)return h[p[a]].remove(q,c),this;h[p[a]].remove(q)}}e=this.a.field;l&&(l[l.length]=b);this.h[q]=b;for(let g=0,l=e.length;g<l;g++){d=e[g];let k;for(f=0;f<d.length;f++)k=(k||b)[d[f]];d=h[p[g]];f="add"===a?d.add:d.update;g===l-1?
f.call(d,q,k,c):f.call(d,q,k)}}return this};m.prototype.update=function(a,b,c){if(this.a&&E(a))return this.A("update",a,b);this.c["@"+a]&&H(b)&&(this.remove(a),this.add(a,b,c,!0));return this};m.prototype.remove=function(a,b,c){if(this.a&&E(a))return this.A("remove",a,b);var d="@"+a;if(this.c[d]){if(this.g)return this.m[this.c[d]].postMessage({remove:!0,id:a}),delete this.c[d],b&&b(),this;if(!c){if(this.async&&"function"!==typeof importScripts){let c=this;d=new Promise(function(b){setTimeout(function(){c.remove(a,
null,!0);c=null;b()})});if(b)d.then(b);else return d;return this}if(b)return this.remove(a,null,!0),b(),this}for(b=0;b<this.b-(this.threshold||0);b++)W(this.j[b],a);this.depth&&W(this.i,a);delete this.c[d];this.B=!1}return this};let A;m.prototype.search=function(a,b,c,d){if(E(b)){if(z(b))for(var e=0;e<b.length;e++)b[e].query=a;else b.query=a;a=b;b=1E3}else b&&J(b)?(c=b,b=1E3):b||0===b||(b=1E3);let g=[],f=a;let l,h,p;if(E(a)&&!z(a)){c||(c=a.callback)&&(f.callback=null);h=a.sort;l=a.page;b=a.limit;
var q=a.threshold;p=a.suggest;a=a.query}if(this.a){q=this.a.index;const r=f.where;var n=f.bool||"or",k=f.field;let D=n;let u,v;if(k)z(k)||(k=[k]);else if(z(f)){var m=f;k=[];D=[];for(var t=0;t<f.length;t++)d=f[t],e=d.bool||n,k[t]=d.field,D[t]=e,"not"===e?u=!0:"and"===e&&(v=!0)}else k=this.a.keys;n=k.length;for(t=0;t<n;t++)m&&(f=m[t]),l&&!H(f)&&(f.page=null,f.limit=0),g[t]=q[k[t]].search(f,0);if(c)return c(R.call(this,a,D,g,h,b,p,r,l,v,u));if(this.async){const c=this;return new Promise(function(d){Promise.all(g).then(function(e){d(R.call(c,
a,D,e,h,b,p,r,l,v,u))})})}return R.call(this,a,D,g,h,b,p,r,l,v,u)}q||(q=this.threshold||0);if(this.g)for(this.F=c,this.u=0,this.o=[],k=0;k<this.g;k++)this.m[k].postMessage({search:!0,limit:b,cursor:l,threshold:q,content:a});else{if(!d){if(this.async&&"function"!==typeof importScripts){let a=this;q=new Promise(function(c){setTimeout(function(){c(a.search(f,b,null,!0));a=null})});if(c)q.then(c);else return q;return this}if(c)return c(this.search(f,b,null,!0)),this}if(!a||!H(a))return g;f=a;if(this.cache)if(this.B){if(c=
this.l.get(a))return c}else this.l.clear(),this.B=!0;f=this.encode(f);if(!f.length)return g;c=this.f;c=J(c)?c(f):f.split(this.split);this.filter&&(c=N(c,this.filter));m=c.length;d=!0;e=[];var u=w(),v=0;1<m&&(this.depth&&"strict"===this.f?n=!0:c.sort(ia));if(!n||(t=this.i)){const a=this.b;for(;v<m;v++){let b=c[v];if(b){if(n){if(!k)if(t[b])k=b,u[b]=1;else if(!p)return g;if(p&&v===m-1&&!e.length)n=!1,b=k||b,u[b]=0;else if(!k)continue}if(!u[b]){const c=[];let f=!1,g=0;const l=n?t[k]:this.j;if(l){let d;
for(let e=0;e<a-q;e++)if(d=l[e][b])c[g++]=d,f=!0}if(f)k=b,e[e.length]=1<g?c.concat.apply([],c):c[0];else if(!p){d=!1;break}u[b]=1}}}}else d=!1;d&&(g=Y(e,b,l,p));this.cache&&this.l.set(a,g);return g}};m.prototype.find=function(a,b){return this.where(a,b,1)[0]||null};m.prototype.where=function(a,b,c,d){const e=this.h,g=[];let f=0;let l;var h;let p;if(E(a)){c||(c=b);var q=Object.keys(a);var n=q.length;l=!1;if(1===n&&"id"===q[0])return[e[a.id]];if((h=this.I)&&!d)for(var k=0;k<h.length;k++){var m=h[k],
t=a[m];if(!C(t)){p=this.G[m]["@"+t];if(0===--n)return p;q.splice(q.indexOf(m),1);delete a[m];break}}h=Array(n);for(k=0;k<n;k++)h[k]=q[k].split(":")}else{if(J(a)){b=d||Object.keys(e);c=b.length;for(q=0;q<c;q++)n=e[b[q]],a(n)&&(g[f++]=n);return g}if(C(b))return[e[a]];if("id"===a)return[e[b]];q=[a];n=1;h=[a.split(":")];l=!0}d=p||d||Object.keys(e);k=d.length;for(m=0;m<k;m++){t=p?d[m]:e[d[m]];let k=!0;for(let c=0;c<n;c++){l||(b=a[q[c]]);const d=h[c],e=d.length;let f=t;if(1<e)for(let a=0;a<e;a++)f=f[d[a]];
else f=f[d[0]];if(f!==b){k=!1;break}}if(k&&(g[f++]=t,c&&f===c))break}return g};m.prototype.info=function(){if(this.g)for(let a=0;a<this.g;a++)this.m[a].postMessage({info:!0,id:this.id});else return{id:this.id,items:this.length,cache:this.cache&&this.cache.s?this.cache.s.length:!1,matcher:V.length+(this.v?this.v.length:0),worker:this.g,threshold:this.threshold,depth:this.depth,resolution:this.b,contextual:this.depth&&"strict"===this.f}};m.prototype.clear=function(){return this.destroy().init()};m.prototype.destroy=
function(){this.cache&&(this.l.clear(),this.l=null);this.j=this.i=this.c=null;if(this.a){const a=this.a.keys;for(let b=0;b<a.length;b++)this.a.index[a[b]].destroy();this.a=this.h=null}return this};m.prototype.export=function(){let a;if(this.a){const b=this.a.keys;a=Array(b.length+1);let c=0;for(;c<b.length;c++){const d=this.a.index[b[c]];a[c]=[d.j,d.i,Object.keys(d.c)]}a[c]=this.h}else a=[this.j,this.i,Object.keys(this.c)];return JSON.stringify(a)};m.prototype.import=function(a){a=JSON.parse(a);const b=
w();if(this.a){var c=this.a.keys,d=c.length,e=a[0][2];for(var g=0;g<e.length;g++)b[e[g]]=1;for(e=0;e<d;e++)g=this.a.index[c[e]],g.j=a[e][0],g.i=a[e][1],g.c=b,g.h=a[d];this.h=a[d]}else{c=a[2];for(d=0;d<c.length;d++)b[c[d]]=1;this.j=a[0];this.i=a[1];this.c=b}};const Q={icase:function(a){return a.toLowerCase()},simple:function(){const a=[h("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),"a",h("[\u00e8\u00e9\u00ea\u00eb]"),"e",h("[\u00ec\u00ed\u00ee\u00ef]"),"i",h("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),
"o",h("[\u00f9\u00fa\u00fb\u00fc\u0171]"),"u",h("[\u00fd\u0177\u00ff]"),"y",h("\u00f1"),"n",h("\u00e7"),"c",h("\u00df"),"s",h(" & ")," and ",h("[-/]")," ",h("[^a-z0-9 ]"),"",h("\\s+")," "];return function(b){b=K(b.toLowerCase(),a);return" "===b?"":b}}(),advanced:function(){const a=[h("ae"),"a",h("ai"),"ei",h("ay"),"ei",h("ey"),"ei",h("oe"),"o",h("ue"),"u",h("ie"),"i",h("sz"),"s",h("zs"),"s",h("sh"),"s",h("ck"),"k",h("cc"),"k",h("dt"),"t",h("ph"),"f",h("pf"),"f",h("ou"),"o",h("uo"),"u"];return function(b,
c){if(!b)return b;b=this.simple(b);2<b.length&&(b=K(b,a));c||1<b.length&&(b=X(b));return b}}(),extra:function(){const a=[h("p"),"b",h("z"),"s",h("[cgq]"),"k",h("n"),"m",h("d"),"t",h("[vw]"),"f",h("[aeiouy]"),""];return function(b){if(!b)return b;b=this.advanced(b,!0);if(1<b.length){b=b.split(" ");for(let c=0;c<b.length;c++){const d=b[c];1<d.length&&(b[c]=d[0]+K(d.substring(1),a))}b=b.join(" ");b=X(b)}return b}}(),balance:function(){const a=[h("[-/]")," ",h("[^a-z0-9 ]"),"",h("\\s+")," "];return function(b){return X(K(b.toLowerCase(),
a))}}()},la=function(){function a(a){this.clear();this.H=!0!==a&&a}a.prototype.clear=function(){this.cache=w();this.count=w();this.index=w();this.s=[]};a.prototype.set=function(a,c){if(this.H&&C(this.cache[a])){let b=this.s.length;if(b===this.H){b--;const a=this.s[b];delete this.cache[a];delete this.count[a];delete this.index[a]}this.index[a]=b;this.s[b]=a;this.count[a]=-1;this.cache[a]=c;this.get(a)}else this.cache[a]=c};a.prototype.get=function(a){const b=this.cache[a];if(this.H&&b){var d=++this.count[a];
const b=this.index;let c=b[a];if(0<c){const f=this.s;for(var e=c;this.count[f[--c]]<=d&&-1!==c;);c++;if(c!==e){for(d=e;d>c;d--)e=f[d-1],f[d]=e,b[e]=d;f[c]=a;b[a]=c}}}return b};return a}();return m}(function(){const y={},L="undefined"!==typeof Blob&&"undefined"!==typeof URL&&URL.createObjectURL;return function(m,B,N,R,M){N=L?URL.createObjectURL(new Blob(["("+N.toString()+")()"],{type:"text/javascript"})):m+".min.js";m+="-"+B;y[m]||(y[m]=[]);y[m][M]=new Worker(N);y[m][M].onmessage=R;return y[m][M]}}()),
this);


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ })

/******/ });
//# sourceMappingURL=reference.bundle.js.map