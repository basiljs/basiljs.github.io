(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~reference"],{

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

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/flexsearch/dist/flexsearch.min.js":
/*!********************************************************!*\
  !*** ./node_modules/flexsearch/dist/flexsearch.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 FlexSearch v0.6.30
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
(function(K,R,w){let L;(L=w.define)&&L.amd?L([],function(){return R}):(L=w.modules)?L[K.toLowerCase()]=R: true?module.exports=R:undefined})("FlexSearch",function ma(K){function w(a,c){const b=c?c.id:a&&a.id;this.id=b||0===b?b:na++;this.init(a,c);fa(this,"index",function(){return this.a?Object.keys(this.a.index[this.a.keys[0]].c):Object.keys(this.c)});fa(this,"length",function(){return this.index.length})}function L(a,c,b,d){this.u!==this.g&&(this.o=this.o.concat(b),this.u++,
d&&this.o.length>=d&&(this.u=this.g),this.u===this.g&&(this.cache&&this.j.set(c,this.o),this.F&&this.F(this.o)));return this}function S(a){const c=B();for(const b in a)if(a.hasOwnProperty(b)){const d=a[b];F(d)?c[b]=d.slice(0):G(d)?c[b]=S(d):c[b]=d}return c}function W(a,c){const b=a.length,d=O(c),e=[];for(let g=0,f=0;g<b;g++){const h=a[g];if(d&&c(h)||!d&&!c[h])e[f++]=h}return e}function P(a,c,b,d,e,g,f,h,k,l){b=ha(b,f?0:e,h,g,c,k,l);let n;h&&(h=b.page,n=b.next,b=b.result);if(f)c=this.where(f,null,
e,b);else{c=b;b=this.l;e=c.length;g=Array(e);for(f=0;f<e;f++)g[f]=b[c[f]];c=g}b=c;d&&(O(d)||(M=d.split(":"),1<M.length?d=oa:(M=M[0],d=pa)),b.sort(d));b=T(h,n,b);this.cache&&this.j.set(a,b);return b}function fa(a,c,b){Object.defineProperty(a,c,{get:b})}function r(a){return new RegExp(a,"g")}function Q(a,c){for(let b=0;b<c.length;b+=2)a=a.replace(c[b],c[b+1]);return a}function V(a,c,b,d,e,g,f,h){if(c[b])return c[b];e=e?(h-(f||h/1.5))*g+(f||h/1.5)*e:g;c[b]=e;e>=f&&(a=a[h-(e+.5>>0)],a=a[b]||(a[b]=[]),
a[a.length]=d);return e}function ba(a,c){if(a){const b=Object.keys(a);for(let d=0,e=b.length;d<e;d++){const g=b[d],f=a[g];if(f)for(let h=0,k=f.length;h<k;h++)if(f[h]===c){1===k?delete a[g]:f.splice(h,1);break}else G(f[h])&&ba(f[h],c)}}}function ca(a){let c="",b="";var d="";for(let e=0;e<a.length;e++){const g=a[e];if(g!==b)if(e&&"h"===g){if(d="a"===d||"e"===d||"i"===d||"o"===d||"u"===d||"y"===d,("a"===b||"e"===b||"i"===b||"o"===b||"u"===b||"y"===b)&&d||" "===b)c+=g}else c+=g;d=e===a.length-1?"":a[e+
1];b=g}return c}function qa(a,c){a=a.length-c.length;return 0>a?1:a?-1:0}function pa(a,c){a=a[M];c=c[M];return a<c?-1:a>c?1:0}function oa(a,c){const b=M.length;for(let d=0;d<b;d++)a=a[M[d]],c=c[M[d]];return a<c?-1:a>c?1:0}function T(a,c,b){return a?{page:a,next:c?""+c:null,result:b}:b}function ha(a,c,b,d,e,g,f){let h,k=[];if(!0===b){b="0";var l=""}else l=b&&b.split(":");const n=a.length;if(1<n){const y=B(),t=[];let v,x;var p=0,m;let I;var u=!0;let D,E=0,N,da,X,ea;l&&(2===l.length?(X=l,l=!1):l=ea=
parseInt(l[0],10));if(f){for(v=B();p<n;p++)if("not"===e[p])for(x=a[p],I=x.length,m=0;m<I;m++)v["@"+x[m]]=1;else da=p+1;if(C(da))return T(b,h,k);p=0}else N=J(e)&&e;let Y;for(;p<n;p++){const ra=p===(da||n)-1;if(!N||!p)if((m=N||e&&e[p])&&"and"!==m)if("or"===m)Y=!1;else continue;else Y=g=!0;x=a[p];if(I=x.length){if(u)if(D){var q=D.length;for(m=0;m<q;m++){u=D[m];var A="@"+u;f&&v[A]||(y[A]=1,g||(k[E++]=u))}D=null;u=!1}else{D=x;continue}A=!1;for(m=0;m<I;m++){q=x[m];var z="@"+q;const Z=g?y[z]||0:p;if(!(!Z&&
!d||f&&v[z]||!g&&y[z]))if(Z===p){if(ra){if(!ea||--ea<E)if(k[E++]=q,c&&E===c)return T(b,E+(l||0),k)}else y[z]=p+1;A=!0}else d&&(z=t[Z]||(t[Z]=[]),z[z.length]=q)}if(Y&&!A&&!d)break}else if(Y&&!d)return T(b,h,x)}if(D)if(p=D.length,f)for(m=l?parseInt(l,10):0;m<p;m++)a=D[m],v["@"+a]||(k[E++]=a);else k=D;if(d)for(E=k.length,X?(p=parseInt(X[0],10)+1,m=parseInt(X[1],10)+1):(p=t.length,m=0);p--;)if(q=t[p]){for(I=q.length;m<I;m++)if(d=q[m],!f||!v["@"+d])if(k[E++]=d,c&&E===c)return T(b,p+":"+m,k);m=0}}else!n||
e&&"not"===e[0]||(k=a[0],l&&(l=parseInt(l[0],10)));c&&(f=k.length,l&&l>f&&(l=0),l=l||0,h=l+c,h<f?k=k.slice(l,h):(h=0,l&&(k=k.slice(l))));return T(b,h,k)}function J(a){return"string"===typeof a}function F(a){return a.constructor===Array}function O(a){return"function"===typeof a}function G(a){return"object"===typeof a}function C(a){return"undefined"===typeof a}function ia(a){const c=Array(a);for(let b=0;b<a;b++)c[b]=B();return c}function B(){return Object.create(null)}function sa(){let a,c;self.onmessage=
function(b){if(b=b.data)if(b.search){const d=c.search(b.content,b.threshold?{limit:b.limit,threshold:b.threshold,where:b.where}:b.limit);self.postMessage({id:a,content:b.content,limit:b.limit,result:d})}else b.add?c.add(b.id,b.content):b.update?c.update(b.id,b.content):b.remove?c.remove(b.id):b.clear?c.clear():b.info?(b=c.info(),b.worker=a,console.log(b)):b.register&&(a=b.id,b.options.cache=!1,b.options.async=!1,b.options.worker=!1,c=(new Function(b.register.substring(b.register.indexOf("{")+1,b.register.lastIndexOf("}"))))(),
c=new c(b.options))}}function ta(a,c,b,d){a=K("flexsearch","id"+a,sa,function(g){(g=g.data)&&g.result&&d(g.id,g.content,g.result,g.limit,g.where,g.cursor,g.suggest)},c);const e=ma.toString();b.id=c;a.postMessage({register:e,options:b,id:c});return a}const H={encode:"icase",f:"forward",split:/\W+/,cache:!1,async:!1,g:!1,D:!1,a:!1,b:9,threshold:0,depth:0},ja={memory:{encode:"extra",f:"strict",threshold:0,b:1},speed:{encode:"icase",f:"strict",threshold:1,b:3,depth:2},match:{encode:"extra",f:"full",threshold:1,
b:3},score:{encode:"extra",f:"strict",threshold:1,b:9,depth:4},balance:{encode:"balance",f:"strict",threshold:0,b:3,depth:3},fast:{encode:"icase",f:"strict",threshold:8,b:9,depth:1}},aa=[];let na=0;const ka={},la={};w.create=function(a,c){return new w(a,c)};w.registerMatcher=function(a){for(const c in a)a.hasOwnProperty(c)&&aa.push(r(c),a[c]);return this};w.registerEncoder=function(a,c){U[a]=c.bind(U);return this};w.registerLanguage=function(a,c){ka[a]=c.filter;la[a]=c.stemmer;return this};w.encode=
function(a,c){return U[a](c)};w.prototype.init=function(a,c){this.v=[];if(c){var b=c.preset;a=c}else a||(a=H),b=a.preset;c={};J(a)?(c=ja[a],a={}):b&&(c=ja[b]);if(b=a.worker)if("undefined"===typeof Worker)a.worker=!1,this.m=null;else{var d=parseInt(b,10)||4;this.C=-1;this.u=0;this.o=[];this.F=null;this.m=Array(d);for(var e=0;e<d;e++)this.m[e]=ta(this.id,e,a,L.bind(this))}this.f=a.tokenize||c.f||this.f||H.f;this.split=C(b=a.split)?this.split||H.split:J(b)?r(b):b;this.D=a.rtl||this.D||H.D;this.async=
"undefined"===typeof Promise||C(b=a.async)?this.async||H.async:b;this.g=C(b=a.worker)?this.g||H.g:b;this.threshold=C(b=a.threshold)?c.threshold||this.threshold||H.threshold:b;this.b=C(b=a.resolution)?b=c.b||this.b||H.b:b;b<=this.threshold&&(this.b=this.threshold+1);this.depth="strict"!==this.f||C(b=a.depth)?c.depth||this.depth||H.depth:b;this.w=(b=C(b=a.encode)?c.encode||H.encode:b)&&U[b]&&U[b].bind(U)||(O(b)?b:this.w||!1);(b=a.matcher)&&this.addMatcher(b);if(b=(c=a.lang)||a.filter){J(b)&&(b=ka[b]);
if(F(b)){d=this.w;e=B();for(var g=0;g<b.length;g++){var f=d?d(b[g]):b[g];e[f]=1}b=e}this.filter=b}if(b=c||a.stemmer){var h;c=J(b)?la[b]:b;d=this.w;e=[];for(h in c)c.hasOwnProperty(h)&&(g=d?d(h):h,e.push(r(g+"($|\\W)"),d?d(c[h]):c[h]));this.stemmer=h=e}this.a=e=(b=a.doc)?S(b):this.a||H.a;this.i=ia(this.b-(this.threshold||0));this.h=B();this.c=B();if(e){this.l=B();a.doc=null;h=e.index={};c=e.keys=[];d=e.field;g=e.tag;f=e.store;F(e.id)||(e.id=e.id.split(":"));if(f){var k=B();if(J(f))k[f]=1;else if(F(f))for(let l=
0;l<f.length;l++)k[f[l]]=1;else G(f)&&(k=f);e.store=k}if(g){this.G=B();f=B();if(d)if(J(d))f[d]=a;else if(F(d))for(k=0;k<d.length;k++)f[d[k]]=a;else G(d)&&(f=d);F(g)||(e.tag=g=[g]);for(d=0;d<g.length;d++)this.G[g[d]]=B();this.I=g;d=f}if(d){let l;F(d)||(G(d)?(l=d,e.field=d=Object.keys(d)):e.field=d=[d]);for(e=0;e<d.length;e++)g=d[e],F(g)||(l&&(a=l[g]),c[e]=g,d[e]=g.split(":")),h[g]=new w(a)}a.doc=b}this.B=!0;this.j=(this.cache=b=C(b=a.cache)?this.cache||H.cache:b)?new ua(b):!1;return this};w.prototype.encode=
function(a){a&&(aa.length&&(a=Q(a,aa)),this.v.length&&(a=Q(a,this.v)),this.w&&(a=this.w(a)),this.stemmer&&(a=Q(a,this.stemmer)));return a};w.prototype.addMatcher=function(a){const c=this.v;for(const b in a)a.hasOwnProperty(b)&&c.push(r(b),a[b]);return this};w.prototype.add=function(a,c,b,d,e){if(this.a&&G(a))return this.A("add",a,c);if(c&&J(c)&&(a||0===a)){var g="@"+a;if(this.c[g]&&!d)return this.update(a,c);if(this.g)return++this.C>=this.m.length&&(this.C=0),this.m[this.C].postMessage({add:!0,id:a,
content:c}),this.c[g]=""+this.C,b&&b(),this;if(!e){if(this.async&&"function"!==typeof importScripts){let t=this;g=new Promise(function(v){setTimeout(function(){t.add(a,c,null,d,!0);t=null;v()})});if(b)g.then(b);else return g;return this}if(b)return this.add(a,c,null,d,!0),b(),this}c=this.encode(c);if(!c.length)return this;b=this.f;e=O(b)?b(c):c.split(this.split);this.filter&&(e=W(e,this.filter));const p=B();p._ctx=B();const m=e.length,u=this.threshold,q=this.depth,A=this.b,z=this.i,y=this.D;for(let t=
0;t<m;t++){var f=e[t];if(f){var h=f.length,k=(y?t+1:m-t)/m,l="";switch(b){case "reverse":case "both":for(var n=h;--n;)l=f[n]+l,V(z,p,l,a,y?1:(h-n)/h,k,u,A-1);l="";case "forward":for(n=0;n<h;n++)l+=f[n],V(z,p,l,a,y?(n+1)/h:1,k,u,A-1);break;case "full":for(n=0;n<h;n++){const v=(y?n+1:h-n)/h;for(let x=h;x>n;x--)l=f.substring(n,x),V(z,p,l,a,v,k,u,A-1)}break;default:if(h=V(z,p,f,a,1,k,u,A-1),q&&1<m&&h>=u)for(h=p._ctx[f]||(p._ctx[f]=B()),f=this.h[f]||(this.h[f]=ia(A-(u||0))),k=t-q,l=t+q+1,0>k&&(k=0),l>
m&&(l=m);k<l;k++)k!==t&&V(f,h,e[k],a,0,A-(k<t?t-k:k-t),u,A-1)}}}this.c[g]=1;this.B=!1}return this};w.prototype.A=function(a,c,b){if(F(c)){var d=c.length;if(d--){for(var e=0;e<d;e++)this.A(a,c[e]);return this.A(a,c[d],b)}}else{var g=this.a.index,f=this.a.keys,h=this.a.tag;e=this.a.store;var k;var l=this.a.id;d=c;for(var n=0;n<l.length;n++)d=d[l[n]];if("remove"===a&&(delete this.l[d],l=f.length,l--)){for(c=0;c<l;c++)g[f[c]].remove(d);return g[f[l]].remove(d,b)}if(h){for(k=0;k<h.length;k++){var p=h[k];
var m=c;l=p.split(":");for(n=0;n<l.length;n++)m=m[l[n]];m="@"+m}k=this.G[p];k=k[m]||(k[m]=[])}l=this.a.field;for(let u=0,q=l.length;u<q;u++){p=l[u];h=c;for(m=0;m<p.length;m++)h=h[p[m]];p=g[f[u]];m="add"===a?p.add:p.update;u===q-1?m.call(p,d,h,b):m.call(p,d,h)}if(e){b=Object.keys(e);a=B();for(g=0;g<b.length;g++)if(f=b[g],e[f]){f=f.split(":");let u,q;for(l=0;l<f.length;l++)h=f[l],q=(q||c)[h],u=(u||a)[h]=q}c=a}k&&(k[k.length]=c);this.l[d]=c}return this};w.prototype.update=function(a,c,b){if(this.a&&
G(a))return this.A("update",a,c);this.c["@"+a]&&J(c)&&(this.remove(a),this.add(a,c,b,!0));return this};w.prototype.remove=function(a,c,b){if(this.a&&G(a))return this.A("remove",a,c);var d="@"+a;if(this.c[d]){if(this.g)return this.m[this.c[d]].postMessage({remove:!0,id:a}),delete this.c[d],c&&c(),this;if(!b){if(this.async&&"function"!==typeof importScripts){let e=this;d=new Promise(function(g){setTimeout(function(){e.remove(a,null,!0);e=null;g()})});if(c)d.then(c);else return d;return this}if(c)return this.remove(a,
null,!0),c(),this}for(c=0;c<this.b-(this.threshold||0);c++)ba(this.i[c],a);this.depth&&ba(this.h,a);delete this.c[d];this.B=!1}return this};let M;w.prototype.search=function(a,c,b,d){if(G(c)){if(F(c))for(var e=0;e<c.length;e++)c[e].query=a;else c.query=a;a=c;c=1E3}else c&&O(c)?(b=c,c=1E3):c||0===c||(c=1E3);let g=[],f=a;let h,k,l;if(G(a)&&!F(a)){b||(b=a.callback)&&(f.callback=null);k=a.sort;h=a.page;c=a.limit;var n=a.threshold;l=a.suggest;a=a.query}if(this.a){n=this.a.index;const y=f.where;var p=f.bool||
"or",m=f.field;let t=p;let v,x;if(m)F(m)||(m=[m]);else if(F(f)){var u=f;m=[];t=[];for(var q=0;q<f.length;q++)d=f[q],e=d.bool||p,m[q]=d.field,t[q]=e,"not"===e?v=!0:"and"===e&&(x=!0)}else m=this.a.keys;p=m.length;for(q=0;q<p;q++)u&&(f=u[q]),h&&!J(f)&&(f.page=null,f.limit=0),g[q]=n[m[q]].search(f,0);if(b)return b(P.call(this,a,t,g,k,c,l,y,h,x,v));if(this.async){const I=this;return new Promise(function(D){Promise.all(g).then(function(E){D(P.call(I,a,t,E,k,c,l,y,h,x,v))})})}return P.call(this,a,t,g,k,
c,l,y,h,x,v)}n||(n=this.threshold||0);if(this.g)for(this.F=b,this.u=0,this.o=[],n=0;n<this.g;n++)this.m[n].postMessage({search:!0,limit:c,content:f});else{if(!d){if(this.async&&"function"!==typeof importScripts){let y=this;n=new Promise(function(t){setTimeout(function(){t(y.search(f,c,null,!0));y=null})});if(b)n.then(b);else return n;return this}if(b)return b(this.search(f,c,null,!0)),this}if(!a||!J(a))return g;f=a;if(this.cache)if(this.B){if(b=this.j.get(a))return b}else this.j.clear(),this.B=!0;
f=this.encode(f);if(!f.length)return g;b=this.f;b=O(b)?b(f):f.split(this.split);this.filter&&(b=W(b,this.filter));u=b.length;d=!0;e=[];var A=B(),z=0;1<u&&(this.depth&&"strict"===this.f?p=!0:b.sort(qa));if(!p||(q=this.h)){const y=this.b;for(;z<u;z++){let t=b[z];if(t){if(p){if(!m)if(q[t])m=t,A[t]=1;else if(!l)return g;if(l&&z===u-1&&!e.length)p=!1,t=m||t,A[t]=0;else if(!m)continue}if(!A[t]){const v=[];let x=!1,I=0;const D=p?q[m]:this.i;if(D){let E;for(let N=0;N<y-n;N++)if(E=D[N]&&D[N][t])v[I++]=E,x=
!0}if(x)m=t,e[e.length]=1<I?v.concat.apply([],v):v[0];else if(!l){d=!1;break}A[t]=1}}}}else d=!1;d&&(g=ha(e,c,h,l));this.cache&&this.j.set(a,g);return g}};w.prototype.find=function(a,c){return this.where(a,c,1)[0]||null};w.prototype.where=function(a,c,b,d){const e=this.l,g=[];let f=0;let h;var k;let l;if(G(a)){b||(b=c);var n=Object.keys(a);var p=n.length;h=!1;if(1===p&&"id"===n[0])return[e[a.id]];if((k=this.I)&&!d)for(var m=0;m<k.length;m++){var u=k[m],q=a[u];if(!C(q)){l=this.G[u]["@"+q];if(0===--p)return l;
n.splice(n.indexOf(u),1);delete a[u];break}}k=Array(p);for(m=0;m<p;m++)k[m]=n[m].split(":")}else{if(O(a)){c=d||Object.keys(e);b=c.length;for(n=0;n<b;n++)p=e[c[n]],a(p)&&(g[f++]=p);return g}if(C(c))return[e[a]];if("id"===a)return[e[c]];n=[a];p=1;k=[a.split(":")];h=!0}d=l||d||Object.keys(e);m=d.length;for(u=0;u<m;u++){q=l?d[u]:e[d[u]];let A=!0;for(let z=0;z<p;z++){h||(c=a[n[z]]);const y=k[z],t=y.length;let v=q;if(1<t)for(let x=0;x<t;x++)v=v[y[x]];else v=v[y[0]];if(v!==c){A=!1;break}}if(A&&(g[f++]=q,
b&&f===b))break}return g};w.prototype.info=function(){if(this.g)for(let a=0;a<this.g;a++)this.m[a].postMessage({info:!0,id:this.id});else return{id:this.id,items:this.length,cache:this.cache&&this.cache.s?this.cache.s.length:!1,matcher:aa.length+(this.v?this.v.length:0),worker:this.g,threshold:this.threshold,depth:this.depth,resolution:this.b,contextual:this.depth&&"strict"===this.f}};w.prototype.clear=function(){return this.destroy().init()};w.prototype.destroy=function(){this.cache&&(this.j.clear(),
this.j=null);this.i=this.h=this.c=null;if(this.a){const a=this.a.keys;for(let c=0;c<a.length;c++)this.a.index[a[c]].destroy();this.a=this.l=null}return this};w.prototype.export=function(a){const c=!a||C(a.serialize)||a.serialize;if(this.a){const d=!a||C(a.doc)||a.doc;var b=!a||C(a.index)||a.index;a=[];let e=0;if(b)for(b=this.a.keys;e<b.length;e++){const g=this.a.index[b[e]];a[e]=[g.i,g.h,Object.keys(g.c)]}d&&(a[e]=this.l)}else a=[this.i,this.h,Object.keys(this.c)];c&&(a=JSON.stringify(a));return a};
w.prototype.import=function(a,c){if(!c||C(c.serialize)||c.serialize)a=JSON.parse(a);const b=B();if(this.a){var d=!c||C(c.doc)||c.doc,e=0;if(!c||C(c.index)||c.index){c=this.a.keys;const f=c.length;for(var g=a[0][2];e<g.length;e++)b[g[e]]=1;for(e=0;e<f;e++){g=this.a.index[c[e]];const h=a[e];h&&(g.i=h[0],g.h=h[1],g.c=b)}}d&&(this.l=G(d)?d:a[e])}else{d=a[2];for(e=0;e<d.length;e++)b[d[e]]=1;this.i=a[0];this.h=a[1];this.c=b}};const va=function(){const a=r("\\s+"),c=r("[^a-z0-9 ]"),b=[r("[-/]")," ",c,"",
a," "];return function(d){return ca(Q(d.toLowerCase(),b))}}(),U={icase:function(a){return a.toLowerCase()},simple:function(){const a=r("\\s+"),c=r("[^a-z0-9 ]"),b=r("[-/]"),d=r("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),e=r("[\u00e8\u00e9\u00ea\u00eb]"),g=r("[\u00ec\u00ed\u00ee\u00ef]"),f=r("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),h=r("[\u00f9\u00fa\u00fb\u00fc\u0171]"),k=r("[\u00fd\u0177\u00ff]"),l=r("\u00f1"),n=r("[\u00e7c]"),p=r("\u00df"),m=r(" & "),u=[d,"a",e,"e",g,"i",f,"o",h,"u",k,"y",l,"n",
n,"k",p,"s",m," and ",b," ",c,"",a," "];return function(q){q=Q(q.toLowerCase(),u);return" "===q?"":q}}(),advanced:function(){const a=r("ae"),c=r("ai"),b=r("ay"),d=r("ey"),e=r("oe"),g=r("ue"),f=r("ie"),h=r("sz"),k=r("zs"),l=r("ck"),n=r("cc"),p=r("sh"),m=r("th"),u=r("dt"),q=r("ph"),A=r("pf"),z=r("ou"),y=r("uo"),t=[a,"a",c,"ei",b,"ei",d,"ei",e,"o",g,"u",f,"i",h,"s",k,"s",p,"s",l,"k",n,"k",m,"t",u,"t",q,"f",A,"f",z,"o",y,"u"];return function(v,x){if(!v)return v;v=this.simple(v);2<v.length&&(v=Q(v,t));
x||1<v.length&&(v=ca(v));return v}}(),extra:function(){const a=r("p"),c=r("z"),b=r("[cgq]"),d=r("n"),e=r("d"),g=r("[vw]"),f=r("[aeiouy]"),h=[a,"b",c,"s",b,"k",d,"m",e,"t",g,"f",f,""];return function(k){if(!k)return k;k=this.advanced(k,!0);if(1<k.length){k=k.split(" ");for(let l=0;l<k.length;l++){const n=k[l];1<n.length&&(k[l]=n[0]+Q(n.substring(1),h))}k=k.join(" ");k=ca(k)}return k}}(),balance:va},ua=function(){function a(c){this.clear();this.H=!0!==c&&c}a.prototype.clear=function(){this.cache=B();
this.count=B();this.index=B();this.s=[]};a.prototype.set=function(c,b){if(this.H&&C(this.cache[c])){let d=this.s.length;if(d===this.H){d--;const e=this.s[d];delete this.cache[e];delete this.count[e];delete this.index[e]}this.index[c]=d;this.s[d]=c;this.count[c]=-1;this.cache[c]=b;this.get(c)}else this.cache[c]=b};a.prototype.get=function(c){const b=this.cache[c];if(this.H&&b){var d=++this.count[c];const g=this.index;let f=g[c];if(0<f){const h=this.s;for(var e=f;this.count[h[--f]]<=d&&-1!==f;);f++;
if(f!==e){for(d=e;d>f;d--)e=h[d-1],h[d]=e,g[e]=d;h[f]=c;g[c]=f}}}return b};return a}();return w}(function(){const K={},R="undefined"!==typeof Blob&&"undefined"!==typeof URL&&URL.createObjectURL;return function(w,L,S,W,P){S=R?URL.createObjectURL(new Blob(["("+S.toString()+")()"],{type:"text/javascript"})):w+".min.js";w+="-"+L;K[w]||(K[w]=[]);K[w][P]=new Worker(S);K[w][P].onmessage=W;return K[w][P]}}()),this);


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

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
  exports.wrap = wrap;

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

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
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
  exports.awrap = function(arg) {
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
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
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
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
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

  exports.keys = function(object) {
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
  exports.values = values;

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

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxleHNlYXJjaC9kaXN0L2ZsZXhzZWFyY2gubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsbUM7Ozs7Ozs7Ozs7O0FDcENBLGlCQUFpQixtQkFBTyxDQUFDLDBFQUFxQjs7Ozs7Ozs7Ozs7OztBQ0E5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNhLGlCQUFpQixNQUFNLG9DQUFvQyxTQUFTLHFDQUFxQyxLQUF5QixrQkFBa0IsU0FBTSxDQUFDLDhCQUE4QixnQkFBZ0IsdUJBQXVCLHdCQUF3QixlQUFlLDJCQUEyQiw4RUFBOEUsRUFBRSw0QkFBNEIseUJBQXlCLEVBQUUsb0JBQW9CO0FBQzFjLGlIQUFpSCxZQUFZLGNBQWMsWUFBWSx5Q0FBeUMsYUFBYSwyQ0FBMkMsU0FBUyxnQkFBZ0IsNkJBQTZCLGdCQUFnQixJQUFJLEtBQUssYUFBYSwrQkFBK0IsU0FBUyxnQ0FBZ0Msd0JBQXdCLE1BQU0sa0NBQWtDO0FBQzVkLEtBQUssS0FBSyxJQUFJLFNBQVMsV0FBVyxXQUFXLFFBQVEsSUFBSSxpQkFBaUIsSUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixTQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ2ZW5kb3JzfnJlZmVyZW5jZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLypcclxuIEZsZXhTZWFyY2ggdjAuNi4zMFxyXG4gQ29weXJpZ2h0IDIwMTkgTmV4dGFwcHMgR21iSFxyXG4gQXV0aG9yOiBUaG9tYXMgV2lsa2VybGluZ1xyXG4gUmVsZWFzZWQgdW5kZXIgdGhlIEFwYWNoZSAyLjAgTGljZW5jZVxyXG4gaHR0cHM6Ly9naXRodWIuY29tL25leHRhcHBzLWRlL2ZsZXhzZWFyY2hcclxuKi9cclxuJ3VzZSBzdHJpY3QnOyhmdW5jdGlvbihLLFIsdyl7bGV0IEw7KEw9dy5kZWZpbmUpJiZMLmFtZD9MKFtdLGZ1bmN0aW9uKCl7cmV0dXJuIFJ9KTooTD13Lm1vZHVsZXMpP0xbSy50b0xvd2VyQ2FzZSgpXT1SOlwib2JqZWN0XCI9PT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1SOndbS109Un0pKFwiRmxleFNlYXJjaFwiLGZ1bmN0aW9uIG1hKEspe2Z1bmN0aW9uIHcoYSxjKXtjb25zdCBiPWM/Yy5pZDphJiZhLmlkO3RoaXMuaWQ9Ynx8MD09PWI/YjpuYSsrO3RoaXMuaW5pdChhLGMpO2ZhKHRoaXMsXCJpbmRleFwiLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYT9PYmplY3Qua2V5cyh0aGlzLmEuaW5kZXhbdGhpcy5hLmtleXNbMF1dLmMpOk9iamVjdC5rZXlzKHRoaXMuYyl9KTtmYSh0aGlzLFwibGVuZ3RoXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbmRleC5sZW5ndGh9KX1mdW5jdGlvbiBMKGEsYyxiLGQpe3RoaXMudSE9PXRoaXMuZyYmKHRoaXMubz10aGlzLm8uY29uY2F0KGIpLHRoaXMudSsrLFxyXG5kJiZ0aGlzLm8ubGVuZ3RoPj1kJiYodGhpcy51PXRoaXMuZyksdGhpcy51PT09dGhpcy5nJiYodGhpcy5jYWNoZSYmdGhpcy5qLnNldChjLHRoaXMubyksdGhpcy5GJiZ0aGlzLkYodGhpcy5vKSkpO3JldHVybiB0aGlzfWZ1bmN0aW9uIFMoYSl7Y29uc3QgYz1CKCk7Zm9yKGNvbnN0IGIgaW4gYSlpZihhLmhhc093blByb3BlcnR5KGIpKXtjb25zdCBkPWFbYl07RihkKT9jW2JdPWQuc2xpY2UoMCk6RyhkKT9jW2JdPVMoZCk6Y1tiXT1kfXJldHVybiBjfWZ1bmN0aW9uIFcoYSxjKXtjb25zdCBiPWEubGVuZ3RoLGQ9TyhjKSxlPVtdO2ZvcihsZXQgZz0wLGY9MDtnPGI7ZysrKXtjb25zdCBoPWFbZ107aWYoZCYmYyhoKXx8IWQmJiFjW2hdKWVbZisrXT1ofXJldHVybiBlfWZ1bmN0aW9uIFAoYSxjLGIsZCxlLGcsZixoLGssbCl7Yj1oYShiLGY/MDplLGgsZyxjLGssbCk7bGV0IG47aCYmKGg9Yi5wYWdlLG49Yi5uZXh0LGI9Yi5yZXN1bHQpO2lmKGYpYz10aGlzLndoZXJlKGYsbnVsbCxcclxuZSxiKTtlbHNle2M9YjtiPXRoaXMubDtlPWMubGVuZ3RoO2c9QXJyYXkoZSk7Zm9yKGY9MDtmPGU7ZisrKWdbZl09YltjW2ZdXTtjPWd9Yj1jO2QmJihPKGQpfHwoTT1kLnNwbGl0KFwiOlwiKSwxPE0ubGVuZ3RoP2Q9b2E6KE09TVswXSxkPXBhKSksYi5zb3J0KGQpKTtiPVQoaCxuLGIpO3RoaXMuY2FjaGUmJnRoaXMuai5zZXQoYSxiKTtyZXR1cm4gYn1mdW5jdGlvbiBmYShhLGMsYil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYyx7Z2V0OmJ9KX1mdW5jdGlvbiByKGEpe3JldHVybiBuZXcgUmVnRXhwKGEsXCJnXCIpfWZ1bmN0aW9uIFEoYSxjKXtmb3IobGV0IGI9MDtiPGMubGVuZ3RoO2IrPTIpYT1hLnJlcGxhY2UoY1tiXSxjW2IrMV0pO3JldHVybiBhfWZ1bmN0aW9uIFYoYSxjLGIsZCxlLGcsZixoKXtpZihjW2JdKXJldHVybiBjW2JdO2U9ZT8oaC0oZnx8aC8xLjUpKSpnKyhmfHxoLzEuNSkqZTpnO2NbYl09ZTtlPj1mJiYoYT1hW2gtKGUrLjU+PjApXSxhPWFbYl18fChhW2JdPVtdKSxcclxuYVthLmxlbmd0aF09ZCk7cmV0dXJuIGV9ZnVuY3Rpb24gYmEoYSxjKXtpZihhKXtjb25zdCBiPU9iamVjdC5rZXlzKGEpO2ZvcihsZXQgZD0wLGU9Yi5sZW5ndGg7ZDxlO2QrKyl7Y29uc3QgZz1iW2RdLGY9YVtnXTtpZihmKWZvcihsZXQgaD0wLGs9Zi5sZW5ndGg7aDxrO2grKylpZihmW2hdPT09Yyl7MT09PWs/ZGVsZXRlIGFbZ106Zi5zcGxpY2UoaCwxKTticmVha31lbHNlIEcoZltoXSkmJmJhKGZbaF0sYyl9fX1mdW5jdGlvbiBjYShhKXtsZXQgYz1cIlwiLGI9XCJcIjt2YXIgZD1cIlwiO2ZvcihsZXQgZT0wO2U8YS5sZW5ndGg7ZSsrKXtjb25zdCBnPWFbZV07aWYoZyE9PWIpaWYoZSYmXCJoXCI9PT1nKXtpZihkPVwiYVwiPT09ZHx8XCJlXCI9PT1kfHxcImlcIj09PWR8fFwib1wiPT09ZHx8XCJ1XCI9PT1kfHxcInlcIj09PWQsKFwiYVwiPT09Ynx8XCJlXCI9PT1ifHxcImlcIj09PWJ8fFwib1wiPT09Ynx8XCJ1XCI9PT1ifHxcInlcIj09PWIpJiZkfHxcIiBcIj09PWIpYys9Z31lbHNlIGMrPWc7ZD1lPT09YS5sZW5ndGgtMT9cIlwiOmFbZStcclxuMV07Yj1nfXJldHVybiBjfWZ1bmN0aW9uIHFhKGEsYyl7YT1hLmxlbmd0aC1jLmxlbmd0aDtyZXR1cm4gMD5hPzE6YT8tMTowfWZ1bmN0aW9uIHBhKGEsYyl7YT1hW01dO2M9Y1tNXTtyZXR1cm4gYTxjPy0xOmE+Yz8xOjB9ZnVuY3Rpb24gb2EoYSxjKXtjb25zdCBiPU0ubGVuZ3RoO2ZvcihsZXQgZD0wO2Q8YjtkKyspYT1hW01bZF1dLGM9Y1tNW2RdXTtyZXR1cm4gYTxjPy0xOmE+Yz8xOjB9ZnVuY3Rpb24gVChhLGMsYil7cmV0dXJuIGE/e3BhZ2U6YSxuZXh0OmM/XCJcIitjOm51bGwscmVzdWx0OmJ9OmJ9ZnVuY3Rpb24gaGEoYSxjLGIsZCxlLGcsZil7bGV0IGgsaz1bXTtpZighMD09PWIpe2I9XCIwXCI7dmFyIGw9XCJcIn1lbHNlIGw9YiYmYi5zcGxpdChcIjpcIik7Y29uc3Qgbj1hLmxlbmd0aDtpZigxPG4pe2NvbnN0IHk9QigpLHQ9W107bGV0IHYseDt2YXIgcD0wLG07bGV0IEk7dmFyIHU9ITA7bGV0IEQsRT0wLE4sZGEsWCxlYTtsJiYoMj09PWwubGVuZ3RoPyhYPWwsbD0hMSk6bD1lYT1cclxucGFyc2VJbnQobFswXSwxMCkpO2lmKGYpe2Zvcih2PUIoKTtwPG47cCsrKWlmKFwibm90XCI9PT1lW3BdKWZvcih4PWFbcF0sST14Lmxlbmd0aCxtPTA7bTxJO20rKyl2W1wiQFwiK3hbbV1dPTE7ZWxzZSBkYT1wKzE7aWYoQyhkYSkpcmV0dXJuIFQoYixoLGspO3A9MH1lbHNlIE49SihlKSYmZTtsZXQgWTtmb3IoO3A8bjtwKyspe2NvbnN0IHJhPXA9PT0oZGF8fG4pLTE7aWYoIU58fCFwKWlmKChtPU58fGUmJmVbcF0pJiZcImFuZFwiIT09bSlpZihcIm9yXCI9PT1tKVk9ITE7ZWxzZSBjb250aW51ZTtlbHNlIFk9Zz0hMDt4PWFbcF07aWYoST14Lmxlbmd0aCl7aWYodSlpZihEKXt2YXIgcT1ELmxlbmd0aDtmb3IobT0wO208cTttKyspe3U9RFttXTt2YXIgQT1cIkBcIit1O2YmJnZbQV18fCh5W0FdPTEsZ3x8KGtbRSsrXT11KSl9RD1udWxsO3U9ITF9ZWxzZXtEPXg7Y29udGludWV9QT0hMTtmb3IobT0wO208STttKyspe3E9eFttXTt2YXIgej1cIkBcIitxO2NvbnN0IFo9Zz95W3pdfHwwOnA7aWYoISghWiYmXHJcbiFkfHxmJiZ2W3pdfHwhZyYmeVt6XSkpaWYoWj09PXApe2lmKHJhKXtpZighZWF8fC0tZWE8RSlpZihrW0UrK109cSxjJiZFPT09YylyZXR1cm4gVChiLEUrKGx8fDApLGspfWVsc2UgeVt6XT1wKzE7QT0hMH1lbHNlIGQmJih6PXRbWl18fCh0W1pdPVtdKSx6W3oubGVuZ3RoXT1xKX1pZihZJiYhQSYmIWQpYnJlYWt9ZWxzZSBpZihZJiYhZClyZXR1cm4gVChiLGgseCl9aWYoRClpZihwPUQubGVuZ3RoLGYpZm9yKG09bD9wYXJzZUludChsLDEwKTowO208cDttKyspYT1EW21dLHZbXCJAXCIrYV18fChrW0UrK109YSk7ZWxzZSBrPUQ7aWYoZClmb3IoRT1rLmxlbmd0aCxYPyhwPXBhcnNlSW50KFhbMF0sMTApKzEsbT1wYXJzZUludChYWzFdLDEwKSsxKToocD10Lmxlbmd0aCxtPTApO3AtLTspaWYocT10W3BdKXtmb3IoST1xLmxlbmd0aDttPEk7bSsrKWlmKGQ9cVttXSwhZnx8IXZbXCJAXCIrZF0paWYoa1tFKytdPWQsYyYmRT09PWMpcmV0dXJuIFQoYixwK1wiOlwiK20sayk7bT0wfX1lbHNlIW58fFxyXG5lJiZcIm5vdFwiPT09ZVswXXx8KGs9YVswXSxsJiYobD1wYXJzZUludChsWzBdLDEwKSkpO2MmJihmPWsubGVuZ3RoLGwmJmw+ZiYmKGw9MCksbD1sfHwwLGg9bCtjLGg8Zj9rPWsuc2xpY2UobCxoKTooaD0wLGwmJihrPWsuc2xpY2UobCkpKSk7cmV0dXJuIFQoYixoLGspfWZ1bmN0aW9uIEooYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhfWZ1bmN0aW9uIEYoYSl7cmV0dXJuIGEuY29uc3RydWN0b3I9PT1BcnJheX1mdW5jdGlvbiBPKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhfWZ1bmN0aW9uIEcoYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhfWZ1bmN0aW9uIEMoYSl7cmV0dXJuXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhfWZ1bmN0aW9uIGlhKGEpe2NvbnN0IGM9QXJyYXkoYSk7Zm9yKGxldCBiPTA7YjxhO2IrKyljW2JdPUIoKTtyZXR1cm4gY31mdW5jdGlvbiBCKCl7cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCl9ZnVuY3Rpb24gc2EoKXtsZXQgYSxjO3NlbGYub25tZXNzYWdlPVxyXG5mdW5jdGlvbihiKXtpZihiPWIuZGF0YSlpZihiLnNlYXJjaCl7Y29uc3QgZD1jLnNlYXJjaChiLmNvbnRlbnQsYi50aHJlc2hvbGQ/e2xpbWl0OmIubGltaXQsdGhyZXNob2xkOmIudGhyZXNob2xkLHdoZXJlOmIud2hlcmV9OmIubGltaXQpO3NlbGYucG9zdE1lc3NhZ2Uoe2lkOmEsY29udGVudDpiLmNvbnRlbnQsbGltaXQ6Yi5saW1pdCxyZXN1bHQ6ZH0pfWVsc2UgYi5hZGQ/Yy5hZGQoYi5pZCxiLmNvbnRlbnQpOmIudXBkYXRlP2MudXBkYXRlKGIuaWQsYi5jb250ZW50KTpiLnJlbW92ZT9jLnJlbW92ZShiLmlkKTpiLmNsZWFyP2MuY2xlYXIoKTpiLmluZm8/KGI9Yy5pbmZvKCksYi53b3JrZXI9YSxjb25zb2xlLmxvZyhiKSk6Yi5yZWdpc3RlciYmKGE9Yi5pZCxiLm9wdGlvbnMuY2FjaGU9ITEsYi5vcHRpb25zLmFzeW5jPSExLGIub3B0aW9ucy53b3JrZXI9ITEsYz0obmV3IEZ1bmN0aW9uKGIucmVnaXN0ZXIuc3Vic3RyaW5nKGIucmVnaXN0ZXIuaW5kZXhPZihcIntcIikrMSxiLnJlZ2lzdGVyLmxhc3RJbmRleE9mKFwifVwiKSkpKSgpLFxyXG5jPW5ldyBjKGIub3B0aW9ucykpfX1mdW5jdGlvbiB0YShhLGMsYixkKXthPUsoXCJmbGV4c2VhcmNoXCIsXCJpZFwiK2Esc2EsZnVuY3Rpb24oZyl7KGc9Zy5kYXRhKSYmZy5yZXN1bHQmJmQoZy5pZCxnLmNvbnRlbnQsZy5yZXN1bHQsZy5saW1pdCxnLndoZXJlLGcuY3Vyc29yLGcuc3VnZ2VzdCl9LGMpO2NvbnN0IGU9bWEudG9TdHJpbmcoKTtiLmlkPWM7YS5wb3N0TWVzc2FnZSh7cmVnaXN0ZXI6ZSxvcHRpb25zOmIsaWQ6Y30pO3JldHVybiBhfWNvbnN0IEg9e2VuY29kZTpcImljYXNlXCIsZjpcImZvcndhcmRcIixzcGxpdDovXFxXKy8sY2FjaGU6ITEsYXN5bmM6ITEsZzohMSxEOiExLGE6ITEsYjo5LHRocmVzaG9sZDowLGRlcHRoOjB9LGphPXttZW1vcnk6e2VuY29kZTpcImV4dHJhXCIsZjpcInN0cmljdFwiLHRocmVzaG9sZDowLGI6MX0sc3BlZWQ6e2VuY29kZTpcImljYXNlXCIsZjpcInN0cmljdFwiLHRocmVzaG9sZDoxLGI6MyxkZXB0aDoyfSxtYXRjaDp7ZW5jb2RlOlwiZXh0cmFcIixmOlwiZnVsbFwiLHRocmVzaG9sZDoxLFxyXG5iOjN9LHNjb3JlOntlbmNvZGU6XCJleHRyYVwiLGY6XCJzdHJpY3RcIix0aHJlc2hvbGQ6MSxiOjksZGVwdGg6NH0sYmFsYW5jZTp7ZW5jb2RlOlwiYmFsYW5jZVwiLGY6XCJzdHJpY3RcIix0aHJlc2hvbGQ6MCxiOjMsZGVwdGg6M30sZmFzdDp7ZW5jb2RlOlwiaWNhc2VcIixmOlwic3RyaWN0XCIsdGhyZXNob2xkOjgsYjo5LGRlcHRoOjF9fSxhYT1bXTtsZXQgbmE9MDtjb25zdCBrYT17fSxsYT17fTt3LmNyZWF0ZT1mdW5jdGlvbihhLGMpe3JldHVybiBuZXcgdyhhLGMpfTt3LnJlZ2lzdGVyTWF0Y2hlcj1mdW5jdGlvbihhKXtmb3IoY29uc3QgYyBpbiBhKWEuaGFzT3duUHJvcGVydHkoYykmJmFhLnB1c2gocihjKSxhW2NdKTtyZXR1cm4gdGhpc307dy5yZWdpc3RlckVuY29kZXI9ZnVuY3Rpb24oYSxjKXtVW2FdPWMuYmluZChVKTtyZXR1cm4gdGhpc307dy5yZWdpc3Rlckxhbmd1YWdlPWZ1bmN0aW9uKGEsYyl7a2FbYV09Yy5maWx0ZXI7bGFbYV09Yy5zdGVtbWVyO3JldHVybiB0aGlzfTt3LmVuY29kZT1cclxuZnVuY3Rpb24oYSxjKXtyZXR1cm4gVVthXShjKX07dy5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbihhLGMpe3RoaXMudj1bXTtpZihjKXt2YXIgYj1jLnByZXNldDthPWN9ZWxzZSBhfHwoYT1IKSxiPWEucHJlc2V0O2M9e307SihhKT8oYz1qYVthXSxhPXt9KTpiJiYoYz1qYVtiXSk7aWYoYj1hLndvcmtlcilpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIFdvcmtlcilhLndvcmtlcj0hMSx0aGlzLm09bnVsbDtlbHNle3ZhciBkPXBhcnNlSW50KGIsMTApfHw0O3RoaXMuQz0tMTt0aGlzLnU9MDt0aGlzLm89W107dGhpcy5GPW51bGw7dGhpcy5tPUFycmF5KGQpO2Zvcih2YXIgZT0wO2U8ZDtlKyspdGhpcy5tW2VdPXRhKHRoaXMuaWQsZSxhLEwuYmluZCh0aGlzKSl9dGhpcy5mPWEudG9rZW5pemV8fGMuZnx8dGhpcy5mfHxILmY7dGhpcy5zcGxpdD1DKGI9YS5zcGxpdCk/dGhpcy5zcGxpdHx8SC5zcGxpdDpKKGIpP3IoYik6Yjt0aGlzLkQ9YS5ydGx8fHRoaXMuRHx8SC5EO3RoaXMuYXN5bmM9XHJcblwidW5kZWZpbmVkXCI9PT10eXBlb2YgUHJvbWlzZXx8QyhiPWEuYXN5bmMpP3RoaXMuYXN5bmN8fEguYXN5bmM6Yjt0aGlzLmc9QyhiPWEud29ya2VyKT90aGlzLmd8fEguZzpiO3RoaXMudGhyZXNob2xkPUMoYj1hLnRocmVzaG9sZCk/Yy50aHJlc2hvbGR8fHRoaXMudGhyZXNob2xkfHxILnRocmVzaG9sZDpiO3RoaXMuYj1DKGI9YS5yZXNvbHV0aW9uKT9iPWMuYnx8dGhpcy5ifHxILmI6YjtiPD10aGlzLnRocmVzaG9sZCYmKHRoaXMuYj10aGlzLnRocmVzaG9sZCsxKTt0aGlzLmRlcHRoPVwic3RyaWN0XCIhPT10aGlzLmZ8fEMoYj1hLmRlcHRoKT9jLmRlcHRofHx0aGlzLmRlcHRofHxILmRlcHRoOmI7dGhpcy53PShiPUMoYj1hLmVuY29kZSk/Yy5lbmNvZGV8fEguZW5jb2RlOmIpJiZVW2JdJiZVW2JdLmJpbmQoVSl8fChPKGIpP2I6dGhpcy53fHwhMSk7KGI9YS5tYXRjaGVyKSYmdGhpcy5hZGRNYXRjaGVyKGIpO2lmKGI9KGM9YS5sYW5nKXx8YS5maWx0ZXIpe0ooYikmJihiPWthW2JdKTtcclxuaWYoRihiKSl7ZD10aGlzLnc7ZT1CKCk7Zm9yKHZhciBnPTA7ZzxiLmxlbmd0aDtnKyspe3ZhciBmPWQ/ZChiW2ddKTpiW2ddO2VbZl09MX1iPWV9dGhpcy5maWx0ZXI9Yn1pZihiPWN8fGEuc3RlbW1lcil7dmFyIGg7Yz1KKGIpP2xhW2JdOmI7ZD10aGlzLnc7ZT1bXTtmb3IoaCBpbiBjKWMuaGFzT3duUHJvcGVydHkoaCkmJihnPWQ/ZChoKTpoLGUucHVzaChyKGcrXCIoJHxcXFxcVylcIiksZD9kKGNbaF0pOmNbaF0pKTt0aGlzLnN0ZW1tZXI9aD1lfXRoaXMuYT1lPShiPWEuZG9jKT9TKGIpOnRoaXMuYXx8SC5hO3RoaXMuaT1pYSh0aGlzLmItKHRoaXMudGhyZXNob2xkfHwwKSk7dGhpcy5oPUIoKTt0aGlzLmM9QigpO2lmKGUpe3RoaXMubD1CKCk7YS5kb2M9bnVsbDtoPWUuaW5kZXg9e307Yz1lLmtleXM9W107ZD1lLmZpZWxkO2c9ZS50YWc7Zj1lLnN0b3JlO0YoZS5pZCl8fChlLmlkPWUuaWQuc3BsaXQoXCI6XCIpKTtpZihmKXt2YXIgaz1CKCk7aWYoSihmKSlrW2ZdPTE7ZWxzZSBpZihGKGYpKWZvcihsZXQgbD1cclxuMDtsPGYubGVuZ3RoO2wrKylrW2ZbbF1dPTE7ZWxzZSBHKGYpJiYoaz1mKTtlLnN0b3JlPWt9aWYoZyl7dGhpcy5HPUIoKTtmPUIoKTtpZihkKWlmKEooZCkpZltkXT1hO2Vsc2UgaWYoRihkKSlmb3Ioaz0wO2s8ZC5sZW5ndGg7aysrKWZbZFtrXV09YTtlbHNlIEcoZCkmJihmPWQpO0YoZyl8fChlLnRhZz1nPVtnXSk7Zm9yKGQ9MDtkPGcubGVuZ3RoO2QrKyl0aGlzLkdbZ1tkXV09QigpO3RoaXMuST1nO2Q9Zn1pZihkKXtsZXQgbDtGKGQpfHwoRyhkKT8obD1kLGUuZmllbGQ9ZD1PYmplY3Qua2V5cyhkKSk6ZS5maWVsZD1kPVtkXSk7Zm9yKGU9MDtlPGQubGVuZ3RoO2UrKylnPWRbZV0sRihnKXx8KGwmJihhPWxbZ10pLGNbZV09ZyxkW2VdPWcuc3BsaXQoXCI6XCIpKSxoW2ddPW5ldyB3KGEpfWEuZG9jPWJ9dGhpcy5CPSEwO3RoaXMuaj0odGhpcy5jYWNoZT1iPUMoYj1hLmNhY2hlKT90aGlzLmNhY2hlfHxILmNhY2hlOmIpP25ldyB1YShiKTohMTtyZXR1cm4gdGhpc307dy5wcm90b3R5cGUuZW5jb2RlPVxyXG5mdW5jdGlvbihhKXthJiYoYWEubGVuZ3RoJiYoYT1RKGEsYWEpKSx0aGlzLnYubGVuZ3RoJiYoYT1RKGEsdGhpcy52KSksdGhpcy53JiYoYT10aGlzLncoYSkpLHRoaXMuc3RlbW1lciYmKGE9UShhLHRoaXMuc3RlbW1lcikpKTtyZXR1cm4gYX07dy5wcm90b3R5cGUuYWRkTWF0Y2hlcj1mdW5jdGlvbihhKXtjb25zdCBjPXRoaXMudjtmb3IoY29uc3QgYiBpbiBhKWEuaGFzT3duUHJvcGVydHkoYikmJmMucHVzaChyKGIpLGFbYl0pO3JldHVybiB0aGlzfTt3LnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oYSxjLGIsZCxlKXtpZih0aGlzLmEmJkcoYSkpcmV0dXJuIHRoaXMuQShcImFkZFwiLGEsYyk7aWYoYyYmSihjKSYmKGF8fDA9PT1hKSl7dmFyIGc9XCJAXCIrYTtpZih0aGlzLmNbZ10mJiFkKXJldHVybiB0aGlzLnVwZGF0ZShhLGMpO2lmKHRoaXMuZylyZXR1cm4rK3RoaXMuQz49dGhpcy5tLmxlbmd0aCYmKHRoaXMuQz0wKSx0aGlzLm1bdGhpcy5DXS5wb3N0TWVzc2FnZSh7YWRkOiEwLGlkOmEsXHJcbmNvbnRlbnQ6Y30pLHRoaXMuY1tnXT1cIlwiK3RoaXMuQyxiJiZiKCksdGhpcztpZighZSl7aWYodGhpcy5hc3luYyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGltcG9ydFNjcmlwdHMpe2xldCB0PXRoaXM7Zz1uZXcgUHJvbWlzZShmdW5jdGlvbih2KXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5hZGQoYSxjLG51bGwsZCwhMCk7dD1udWxsO3YoKX0pfSk7aWYoYilnLnRoZW4oYik7ZWxzZSByZXR1cm4gZztyZXR1cm4gdGhpc31pZihiKXJldHVybiB0aGlzLmFkZChhLGMsbnVsbCxkLCEwKSxiKCksdGhpc31jPXRoaXMuZW5jb2RlKGMpO2lmKCFjLmxlbmd0aClyZXR1cm4gdGhpcztiPXRoaXMuZjtlPU8oYik/YihjKTpjLnNwbGl0KHRoaXMuc3BsaXQpO3RoaXMuZmlsdGVyJiYoZT1XKGUsdGhpcy5maWx0ZXIpKTtjb25zdCBwPUIoKTtwLl9jdHg9QigpO2NvbnN0IG09ZS5sZW5ndGgsdT10aGlzLnRocmVzaG9sZCxxPXRoaXMuZGVwdGgsQT10aGlzLmIsej10aGlzLmkseT10aGlzLkQ7Zm9yKGxldCB0PVxyXG4wO3Q8bTt0Kyspe3ZhciBmPWVbdF07aWYoZil7dmFyIGg9Zi5sZW5ndGgsaz0oeT90KzE6bS10KS9tLGw9XCJcIjtzd2l0Y2goYil7Y2FzZSBcInJldmVyc2VcIjpjYXNlIFwiYm90aFwiOmZvcih2YXIgbj1oOy0tbjspbD1mW25dK2wsVih6LHAsbCxhLHk/MTooaC1uKS9oLGssdSxBLTEpO2w9XCJcIjtjYXNlIFwiZm9yd2FyZFwiOmZvcihuPTA7bjxoO24rKylsKz1mW25dLFYoeixwLGwsYSx5PyhuKzEpL2g6MSxrLHUsQS0xKTticmVhaztjYXNlIFwiZnVsbFwiOmZvcihuPTA7bjxoO24rKyl7Y29uc3Qgdj0oeT9uKzE6aC1uKS9oO2ZvcihsZXQgeD1oO3g+bjt4LS0pbD1mLnN1YnN0cmluZyhuLHgpLFYoeixwLGwsYSx2LGssdSxBLTEpfWJyZWFrO2RlZmF1bHQ6aWYoaD1WKHoscCxmLGEsMSxrLHUsQS0xKSxxJiYxPG0mJmg+PXUpZm9yKGg9cC5fY3R4W2ZdfHwocC5fY3R4W2ZdPUIoKSksZj10aGlzLmhbZl18fCh0aGlzLmhbZl09aWEoQS0odXx8MCkpKSxrPXQtcSxsPXQrcSsxLDA+ayYmKGs9MCksbD5cclxubSYmKGw9bSk7azxsO2srKylrIT09dCYmVihmLGgsZVtrXSxhLDAsQS0oazx0P3QtazprLXQpLHUsQS0xKX19fXRoaXMuY1tnXT0xO3RoaXMuQj0hMX1yZXR1cm4gdGhpc307dy5wcm90b3R5cGUuQT1mdW5jdGlvbihhLGMsYil7aWYoRihjKSl7dmFyIGQ9Yy5sZW5ndGg7aWYoZC0tKXtmb3IodmFyIGU9MDtlPGQ7ZSsrKXRoaXMuQShhLGNbZV0pO3JldHVybiB0aGlzLkEoYSxjW2RdLGIpfX1lbHNle3ZhciBnPXRoaXMuYS5pbmRleCxmPXRoaXMuYS5rZXlzLGg9dGhpcy5hLnRhZztlPXRoaXMuYS5zdG9yZTt2YXIgazt2YXIgbD10aGlzLmEuaWQ7ZD1jO2Zvcih2YXIgbj0wO248bC5sZW5ndGg7bisrKWQ9ZFtsW25dXTtpZihcInJlbW92ZVwiPT09YSYmKGRlbGV0ZSB0aGlzLmxbZF0sbD1mLmxlbmd0aCxsLS0pKXtmb3IoYz0wO2M8bDtjKyspZ1tmW2NdXS5yZW1vdmUoZCk7cmV0dXJuIGdbZltsXV0ucmVtb3ZlKGQsYil9aWYoaCl7Zm9yKGs9MDtrPGgubGVuZ3RoO2srKyl7dmFyIHA9aFtrXTtcclxudmFyIG09YztsPXAuc3BsaXQoXCI6XCIpO2ZvcihuPTA7bjxsLmxlbmd0aDtuKyspbT1tW2xbbl1dO209XCJAXCIrbX1rPXRoaXMuR1twXTtrPWtbbV18fChrW21dPVtdKX1sPXRoaXMuYS5maWVsZDtmb3IobGV0IHU9MCxxPWwubGVuZ3RoO3U8cTt1Kyspe3A9bFt1XTtoPWM7Zm9yKG09MDttPHAubGVuZ3RoO20rKyloPWhbcFttXV07cD1nW2ZbdV1dO209XCJhZGRcIj09PWE/cC5hZGQ6cC51cGRhdGU7dT09PXEtMT9tLmNhbGwocCxkLGgsYik6bS5jYWxsKHAsZCxoKX1pZihlKXtiPU9iamVjdC5rZXlzKGUpO2E9QigpO2ZvcihnPTA7ZzxiLmxlbmd0aDtnKyspaWYoZj1iW2ddLGVbZl0pe2Y9Zi5zcGxpdChcIjpcIik7bGV0IHUscTtmb3IobD0wO2w8Zi5sZW5ndGg7bCsrKWg9ZltsXSxxPShxfHxjKVtoXSx1PSh1fHxhKVtoXT1xfWM9YX1rJiYoa1trLmxlbmd0aF09Yyk7dGhpcy5sW2RdPWN9cmV0dXJuIHRoaXN9O3cucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbihhLGMsYil7aWYodGhpcy5hJiZcclxuRyhhKSlyZXR1cm4gdGhpcy5BKFwidXBkYXRlXCIsYSxjKTt0aGlzLmNbXCJAXCIrYV0mJkooYykmJih0aGlzLnJlbW92ZShhKSx0aGlzLmFkZChhLGMsYiwhMCkpO3JldHVybiB0aGlzfTt3LnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oYSxjLGIpe2lmKHRoaXMuYSYmRyhhKSlyZXR1cm4gdGhpcy5BKFwicmVtb3ZlXCIsYSxjKTt2YXIgZD1cIkBcIithO2lmKHRoaXMuY1tkXSl7aWYodGhpcy5nKXJldHVybiB0aGlzLm1bdGhpcy5jW2RdXS5wb3N0TWVzc2FnZSh7cmVtb3ZlOiEwLGlkOmF9KSxkZWxldGUgdGhpcy5jW2RdLGMmJmMoKSx0aGlzO2lmKCFiKXtpZih0aGlzLmFzeW5jJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgaW1wb3J0U2NyaXB0cyl7bGV0IGU9dGhpcztkPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGcpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtlLnJlbW92ZShhLG51bGwsITApO2U9bnVsbDtnKCl9KX0pO2lmKGMpZC50aGVuKGMpO2Vsc2UgcmV0dXJuIGQ7cmV0dXJuIHRoaXN9aWYoYylyZXR1cm4gdGhpcy5yZW1vdmUoYSxcclxubnVsbCwhMCksYygpLHRoaXN9Zm9yKGM9MDtjPHRoaXMuYi0odGhpcy50aHJlc2hvbGR8fDApO2MrKyliYSh0aGlzLmlbY10sYSk7dGhpcy5kZXB0aCYmYmEodGhpcy5oLGEpO2RlbGV0ZSB0aGlzLmNbZF07dGhpcy5CPSExfXJldHVybiB0aGlzfTtsZXQgTTt3LnByb3RvdHlwZS5zZWFyY2g9ZnVuY3Rpb24oYSxjLGIsZCl7aWYoRyhjKSl7aWYoRihjKSlmb3IodmFyIGU9MDtlPGMubGVuZ3RoO2UrKyljW2VdLnF1ZXJ5PWE7ZWxzZSBjLnF1ZXJ5PWE7YT1jO2M9MUUzfWVsc2UgYyYmTyhjKT8oYj1jLGM9MUUzKTpjfHwwPT09Y3x8KGM9MUUzKTtsZXQgZz1bXSxmPWE7bGV0IGgsayxsO2lmKEcoYSkmJiFGKGEpKXtifHwoYj1hLmNhbGxiYWNrKSYmKGYuY2FsbGJhY2s9bnVsbCk7az1hLnNvcnQ7aD1hLnBhZ2U7Yz1hLmxpbWl0O3ZhciBuPWEudGhyZXNob2xkO2w9YS5zdWdnZXN0O2E9YS5xdWVyeX1pZih0aGlzLmEpe249dGhpcy5hLmluZGV4O2NvbnN0IHk9Zi53aGVyZTt2YXIgcD1mLmJvb2x8fFxyXG5cIm9yXCIsbT1mLmZpZWxkO2xldCB0PXA7bGV0IHYseDtpZihtKUYobSl8fChtPVttXSk7ZWxzZSBpZihGKGYpKXt2YXIgdT1mO209W107dD1bXTtmb3IodmFyIHE9MDtxPGYubGVuZ3RoO3ErKylkPWZbcV0sZT1kLmJvb2x8fHAsbVtxXT1kLmZpZWxkLHRbcV09ZSxcIm5vdFwiPT09ZT92PSEwOlwiYW5kXCI9PT1lJiYoeD0hMCl9ZWxzZSBtPXRoaXMuYS5rZXlzO3A9bS5sZW5ndGg7Zm9yKHE9MDtxPHA7cSsrKXUmJihmPXVbcV0pLGgmJiFKKGYpJiYoZi5wYWdlPW51bGwsZi5saW1pdD0wKSxnW3FdPW5bbVtxXV0uc2VhcmNoKGYsMCk7aWYoYilyZXR1cm4gYihQLmNhbGwodGhpcyxhLHQsZyxrLGMsbCx5LGgseCx2KSk7aWYodGhpcy5hc3luYyl7Y29uc3QgST10aGlzO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihEKXtQcm9taXNlLmFsbChnKS50aGVuKGZ1bmN0aW9uKEUpe0QoUC5jYWxsKEksYSx0LEUsayxjLGwseSxoLHgsdikpfSl9KX1yZXR1cm4gUC5jYWxsKHRoaXMsYSx0LGcsayxcclxuYyxsLHksaCx4LHYpfW58fChuPXRoaXMudGhyZXNob2xkfHwwKTtpZih0aGlzLmcpZm9yKHRoaXMuRj1iLHRoaXMudT0wLHRoaXMubz1bXSxuPTA7bjx0aGlzLmc7bisrKXRoaXMubVtuXS5wb3N0TWVzc2FnZSh7c2VhcmNoOiEwLGxpbWl0OmMsY29udGVudDpmfSk7ZWxzZXtpZighZCl7aWYodGhpcy5hc3luYyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGltcG9ydFNjcmlwdHMpe2xldCB5PXRoaXM7bj1uZXcgUHJvbWlzZShmdW5jdGlvbih0KXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dCh5LnNlYXJjaChmLGMsbnVsbCwhMCkpO3k9bnVsbH0pfSk7aWYoYiluLnRoZW4oYik7ZWxzZSByZXR1cm4gbjtyZXR1cm4gdGhpc31pZihiKXJldHVybiBiKHRoaXMuc2VhcmNoKGYsYyxudWxsLCEwKSksdGhpc31pZighYXx8IUooYSkpcmV0dXJuIGc7Zj1hO2lmKHRoaXMuY2FjaGUpaWYodGhpcy5CKXtpZihiPXRoaXMuai5nZXQoYSkpcmV0dXJuIGJ9ZWxzZSB0aGlzLmouY2xlYXIoKSx0aGlzLkI9ITA7XHJcbmY9dGhpcy5lbmNvZGUoZik7aWYoIWYubGVuZ3RoKXJldHVybiBnO2I9dGhpcy5mO2I9TyhiKT9iKGYpOmYuc3BsaXQodGhpcy5zcGxpdCk7dGhpcy5maWx0ZXImJihiPVcoYix0aGlzLmZpbHRlcikpO3U9Yi5sZW5ndGg7ZD0hMDtlPVtdO3ZhciBBPUIoKSx6PTA7MTx1JiYodGhpcy5kZXB0aCYmXCJzdHJpY3RcIj09PXRoaXMuZj9wPSEwOmIuc29ydChxYSkpO2lmKCFwfHwocT10aGlzLmgpKXtjb25zdCB5PXRoaXMuYjtmb3IoO3o8dTt6Kyspe2xldCB0PWJbel07aWYodCl7aWYocCl7aWYoIW0paWYocVt0XSltPXQsQVt0XT0xO2Vsc2UgaWYoIWwpcmV0dXJuIGc7aWYobCYmej09PXUtMSYmIWUubGVuZ3RoKXA9ITEsdD1tfHx0LEFbdF09MDtlbHNlIGlmKCFtKWNvbnRpbnVlfWlmKCFBW3RdKXtjb25zdCB2PVtdO2xldCB4PSExLEk9MDtjb25zdCBEPXA/cVttXTp0aGlzLmk7aWYoRCl7bGV0IEU7Zm9yKGxldCBOPTA7Tjx5LW47TisrKWlmKEU9RFtOXSYmRFtOXVt0XSl2W0krK109RSx4PVxyXG4hMH1pZih4KW09dCxlW2UubGVuZ3RoXT0xPEk/di5jb25jYXQuYXBwbHkoW10sdik6dlswXTtlbHNlIGlmKCFsKXtkPSExO2JyZWFrfUFbdF09MX19fX1lbHNlIGQ9ITE7ZCYmKGc9aGEoZSxjLGgsbCkpO3RoaXMuY2FjaGUmJnRoaXMuai5zZXQoYSxnKTtyZXR1cm4gZ319O3cucHJvdG90eXBlLmZpbmQ9ZnVuY3Rpb24oYSxjKXtyZXR1cm4gdGhpcy53aGVyZShhLGMsMSlbMF18fG51bGx9O3cucHJvdG90eXBlLndoZXJlPWZ1bmN0aW9uKGEsYyxiLGQpe2NvbnN0IGU9dGhpcy5sLGc9W107bGV0IGY9MDtsZXQgaDt2YXIgaztsZXQgbDtpZihHKGEpKXtifHwoYj1jKTt2YXIgbj1PYmplY3Qua2V5cyhhKTt2YXIgcD1uLmxlbmd0aDtoPSExO2lmKDE9PT1wJiZcImlkXCI9PT1uWzBdKXJldHVybltlW2EuaWRdXTtpZigoaz10aGlzLkkpJiYhZClmb3IodmFyIG09MDttPGsubGVuZ3RoO20rKyl7dmFyIHU9a1ttXSxxPWFbdV07aWYoIUMocSkpe2w9dGhpcy5HW3VdW1wiQFwiK3FdO2lmKDA9PT0tLXApcmV0dXJuIGw7XHJcbm4uc3BsaWNlKG4uaW5kZXhPZih1KSwxKTtkZWxldGUgYVt1XTticmVha319az1BcnJheShwKTtmb3IobT0wO208cDttKyspa1ttXT1uW21dLnNwbGl0KFwiOlwiKX1lbHNle2lmKE8oYSkpe2M9ZHx8T2JqZWN0LmtleXMoZSk7Yj1jLmxlbmd0aDtmb3Iobj0wO248YjtuKyspcD1lW2Nbbl1dLGEocCkmJihnW2YrK109cCk7cmV0dXJuIGd9aWYoQyhjKSlyZXR1cm5bZVthXV07aWYoXCJpZFwiPT09YSlyZXR1cm5bZVtjXV07bj1bYV07cD0xO2s9W2Euc3BsaXQoXCI6XCIpXTtoPSEwfWQ9bHx8ZHx8T2JqZWN0LmtleXMoZSk7bT1kLmxlbmd0aDtmb3IodT0wO3U8bTt1Kyspe3E9bD9kW3VdOmVbZFt1XV07bGV0IEE9ITA7Zm9yKGxldCB6PTA7ejxwO3orKyl7aHx8KGM9YVtuW3pdXSk7Y29uc3QgeT1rW3pdLHQ9eS5sZW5ndGg7bGV0IHY9cTtpZigxPHQpZm9yKGxldCB4PTA7eDx0O3grKyl2PXZbeVt4XV07ZWxzZSB2PXZbeVswXV07aWYodiE9PWMpe0E9ITE7YnJlYWt9fWlmKEEmJihnW2YrK109cSxcclxuYiYmZj09PWIpKWJyZWFrfXJldHVybiBnfTt3LnByb3RvdHlwZS5pbmZvPWZ1bmN0aW9uKCl7aWYodGhpcy5nKWZvcihsZXQgYT0wO2E8dGhpcy5nO2ErKyl0aGlzLm1bYV0ucG9zdE1lc3NhZ2Uoe2luZm86ITAsaWQ6dGhpcy5pZH0pO2Vsc2UgcmV0dXJue2lkOnRoaXMuaWQsaXRlbXM6dGhpcy5sZW5ndGgsY2FjaGU6dGhpcy5jYWNoZSYmdGhpcy5jYWNoZS5zP3RoaXMuY2FjaGUucy5sZW5ndGg6ITEsbWF0Y2hlcjphYS5sZW5ndGgrKHRoaXMudj90aGlzLnYubGVuZ3RoOjApLHdvcmtlcjp0aGlzLmcsdGhyZXNob2xkOnRoaXMudGhyZXNob2xkLGRlcHRoOnRoaXMuZGVwdGgscmVzb2x1dGlvbjp0aGlzLmIsY29udGV4dHVhbDp0aGlzLmRlcHRoJiZcInN0cmljdFwiPT09dGhpcy5mfX07dy5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kZXN0cm95KCkuaW5pdCgpfTt3LnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dGhpcy5jYWNoZSYmKHRoaXMuai5jbGVhcigpLFxyXG50aGlzLmo9bnVsbCk7dGhpcy5pPXRoaXMuaD10aGlzLmM9bnVsbDtpZih0aGlzLmEpe2NvbnN0IGE9dGhpcy5hLmtleXM7Zm9yKGxldCBjPTA7YzxhLmxlbmd0aDtjKyspdGhpcy5hLmluZGV4W2FbY11dLmRlc3Ryb3koKTt0aGlzLmE9dGhpcy5sPW51bGx9cmV0dXJuIHRoaXN9O3cucHJvdG90eXBlLmV4cG9ydD1mdW5jdGlvbihhKXtjb25zdCBjPSFhfHxDKGEuc2VyaWFsaXplKXx8YS5zZXJpYWxpemU7aWYodGhpcy5hKXtjb25zdCBkPSFhfHxDKGEuZG9jKXx8YS5kb2M7dmFyIGI9IWF8fEMoYS5pbmRleCl8fGEuaW5kZXg7YT1bXTtsZXQgZT0wO2lmKGIpZm9yKGI9dGhpcy5hLmtleXM7ZTxiLmxlbmd0aDtlKyspe2NvbnN0IGc9dGhpcy5hLmluZGV4W2JbZV1dO2FbZV09W2cuaSxnLmgsT2JqZWN0LmtleXMoZy5jKV19ZCYmKGFbZV09dGhpcy5sKX1lbHNlIGE9W3RoaXMuaSx0aGlzLmgsT2JqZWN0LmtleXModGhpcy5jKV07YyYmKGE9SlNPTi5zdHJpbmdpZnkoYSkpO3JldHVybiBhfTtcclxudy5wcm90b3R5cGUuaW1wb3J0PWZ1bmN0aW9uKGEsYyl7aWYoIWN8fEMoYy5zZXJpYWxpemUpfHxjLnNlcmlhbGl6ZSlhPUpTT04ucGFyc2UoYSk7Y29uc3QgYj1CKCk7aWYodGhpcy5hKXt2YXIgZD0hY3x8QyhjLmRvYyl8fGMuZG9jLGU9MDtpZighY3x8QyhjLmluZGV4KXx8Yy5pbmRleCl7Yz10aGlzLmEua2V5cztjb25zdCBmPWMubGVuZ3RoO2Zvcih2YXIgZz1hWzBdWzJdO2U8Zy5sZW5ndGg7ZSsrKWJbZ1tlXV09MTtmb3IoZT0wO2U8ZjtlKyspe2c9dGhpcy5hLmluZGV4W2NbZV1dO2NvbnN0IGg9YVtlXTtoJiYoZy5pPWhbMF0sZy5oPWhbMV0sZy5jPWIpfX1kJiYodGhpcy5sPUcoZCk/ZDphW2VdKX1lbHNle2Q9YVsyXTtmb3IoZT0wO2U8ZC5sZW5ndGg7ZSsrKWJbZFtlXV09MTt0aGlzLmk9YVswXTt0aGlzLmg9YVsxXTt0aGlzLmM9Yn19O2NvbnN0IHZhPWZ1bmN0aW9uKCl7Y29uc3QgYT1yKFwiXFxcXHMrXCIpLGM9cihcIlteYS16MC05IF1cIiksYj1bcihcIlstL11cIiksXCIgXCIsYyxcIlwiLFxyXG5hLFwiIFwiXTtyZXR1cm4gZnVuY3Rpb24oZCl7cmV0dXJuIGNhKFEoZC50b0xvd2VyQ2FzZSgpLGIpKX19KCksVT17aWNhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEudG9Mb3dlckNhc2UoKX0sc2ltcGxlOmZ1bmN0aW9uKCl7Y29uc3QgYT1yKFwiXFxcXHMrXCIpLGM9cihcIlteYS16MC05IF1cIiksYj1yKFwiWy0vXVwiKSxkPXIoXCJbXFx1MDBlMFxcdTAwZTFcXHUwMGUyXFx1MDBlM1xcdTAwZTRcXHUwMGU1XVwiKSxlPXIoXCJbXFx1MDBlOFxcdTAwZTlcXHUwMGVhXFx1MDBlYl1cIiksZz1yKFwiW1xcdTAwZWNcXHUwMGVkXFx1MDBlZVxcdTAwZWZdXCIpLGY9cihcIltcXHUwMGYyXFx1MDBmM1xcdTAwZjRcXHUwMGY1XFx1MDBmNlxcdTAxNTFdXCIpLGg9cihcIltcXHUwMGY5XFx1MDBmYVxcdTAwZmJcXHUwMGZjXFx1MDE3MV1cIiksaz1yKFwiW1xcdTAwZmRcXHUwMTc3XFx1MDBmZl1cIiksbD1yKFwiXFx1MDBmMVwiKSxuPXIoXCJbXFx1MDBlN2NdXCIpLHA9cihcIlxcdTAwZGZcIiksbT1yKFwiICYgXCIpLHU9W2QsXCJhXCIsZSxcImVcIixnLFwiaVwiLGYsXCJvXCIsaCxcInVcIixrLFwieVwiLGwsXCJuXCIsXHJcbm4sXCJrXCIscCxcInNcIixtLFwiIGFuZCBcIixiLFwiIFwiLGMsXCJcIixhLFwiIFwiXTtyZXR1cm4gZnVuY3Rpb24ocSl7cT1RKHEudG9Mb3dlckNhc2UoKSx1KTtyZXR1cm5cIiBcIj09PXE/XCJcIjpxfX0oKSxhZHZhbmNlZDpmdW5jdGlvbigpe2NvbnN0IGE9cihcImFlXCIpLGM9cihcImFpXCIpLGI9cihcImF5XCIpLGQ9cihcImV5XCIpLGU9cihcIm9lXCIpLGc9cihcInVlXCIpLGY9cihcImllXCIpLGg9cihcInN6XCIpLGs9cihcInpzXCIpLGw9cihcImNrXCIpLG49cihcImNjXCIpLHA9cihcInNoXCIpLG09cihcInRoXCIpLHU9cihcImR0XCIpLHE9cihcInBoXCIpLEE9cihcInBmXCIpLHo9cihcIm91XCIpLHk9cihcInVvXCIpLHQ9W2EsXCJhXCIsYyxcImVpXCIsYixcImVpXCIsZCxcImVpXCIsZSxcIm9cIixnLFwidVwiLGYsXCJpXCIsaCxcInNcIixrLFwic1wiLHAsXCJzXCIsbCxcImtcIixuLFwia1wiLG0sXCJ0XCIsdSxcInRcIixxLFwiZlwiLEEsXCJmXCIseixcIm9cIix5LFwidVwiXTtyZXR1cm4gZnVuY3Rpb24odix4KXtpZighdilyZXR1cm4gdjt2PXRoaXMuc2ltcGxlKHYpOzI8di5sZW5ndGgmJih2PVEodix0KSk7XHJcbnh8fDE8di5sZW5ndGgmJih2PWNhKHYpKTtyZXR1cm4gdn19KCksZXh0cmE6ZnVuY3Rpb24oKXtjb25zdCBhPXIoXCJwXCIpLGM9cihcInpcIiksYj1yKFwiW2NncV1cIiksZD1yKFwiblwiKSxlPXIoXCJkXCIpLGc9cihcIlt2d11cIiksZj1yKFwiW2FlaW91eV1cIiksaD1bYSxcImJcIixjLFwic1wiLGIsXCJrXCIsZCxcIm1cIixlLFwidFwiLGcsXCJmXCIsZixcIlwiXTtyZXR1cm4gZnVuY3Rpb24oayl7aWYoIWspcmV0dXJuIGs7az10aGlzLmFkdmFuY2VkKGssITApO2lmKDE8ay5sZW5ndGgpe2s9ay5zcGxpdChcIiBcIik7Zm9yKGxldCBsPTA7bDxrLmxlbmd0aDtsKyspe2NvbnN0IG49a1tsXTsxPG4ubGVuZ3RoJiYoa1tsXT1uWzBdK1Eobi5zdWJzdHJpbmcoMSksaCkpfWs9ay5qb2luKFwiIFwiKTtrPWNhKGspfXJldHVybiBrfX0oKSxiYWxhbmNlOnZhfSx1YT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoYyl7dGhpcy5jbGVhcigpO3RoaXMuSD0hMCE9PWMmJmN9YS5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmNhY2hlPUIoKTtcclxudGhpcy5jb3VudD1CKCk7dGhpcy5pbmRleD1CKCk7dGhpcy5zPVtdfTthLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oYyxiKXtpZih0aGlzLkgmJkModGhpcy5jYWNoZVtjXSkpe2xldCBkPXRoaXMucy5sZW5ndGg7aWYoZD09PXRoaXMuSCl7ZC0tO2NvbnN0IGU9dGhpcy5zW2RdO2RlbGV0ZSB0aGlzLmNhY2hlW2VdO2RlbGV0ZSB0aGlzLmNvdW50W2VdO2RlbGV0ZSB0aGlzLmluZGV4W2VdfXRoaXMuaW5kZXhbY109ZDt0aGlzLnNbZF09Yzt0aGlzLmNvdW50W2NdPS0xO3RoaXMuY2FjaGVbY109Yjt0aGlzLmdldChjKX1lbHNlIHRoaXMuY2FjaGVbY109Yn07YS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGMpe2NvbnN0IGI9dGhpcy5jYWNoZVtjXTtpZih0aGlzLkgmJmIpe3ZhciBkPSsrdGhpcy5jb3VudFtjXTtjb25zdCBnPXRoaXMuaW5kZXg7bGV0IGY9Z1tjXTtpZigwPGYpe2NvbnN0IGg9dGhpcy5zO2Zvcih2YXIgZT1mO3RoaXMuY291bnRbaFstLWZdXTw9ZCYmLTEhPT1mOyk7ZisrO1xyXG5pZihmIT09ZSl7Zm9yKGQ9ZTtkPmY7ZC0tKWU9aFtkLTFdLGhbZF09ZSxnW2VdPWQ7aFtmXT1jO2dbY109Zn19fXJldHVybiBifTtyZXR1cm4gYX0oKTtyZXR1cm4gd30oZnVuY3Rpb24oKXtjb25zdCBLPXt9LFI9XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBCbG9iJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIFVSTCYmVVJMLmNyZWF0ZU9iamVjdFVSTDtyZXR1cm4gZnVuY3Rpb24odyxMLFMsVyxQKXtTPVI/VVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbXCIoXCIrUy50b1N0cmluZygpK1wiKSgpXCJdLHt0eXBlOlwidGV4dC9qYXZhc2NyaXB0XCJ9KSk6dytcIi5taW4uanNcIjt3Kz1cIi1cIitMO0tbd118fChLW3ddPVtdKTtLW3ddW1BdPW5ldyBXb3JrZXIoUyk7S1t3XVtQXS5vbm1lc3NhZ2U9VztyZXR1cm4gS1t3XVtQXX19KCkpLHRoaXMpO1xyXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=