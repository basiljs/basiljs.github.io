!function(e){function n(n){for(var r,a,u=n[0],i=n[1],l=n[2],s=0,f=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(d&&d(n);f.length;)f.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,u=1;u<t.length;u++){var i=t[u];0!==o[i]&&(r=!1)}r&&(c.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={1:0},c=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var d=i;c.push([5,3]),t()}({5:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),c=t(2),a=t.n(c),u=t(3),i=t.n(u);function l(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("input#lunr-search"),n=document.querySelector("button#lunr-clear"),t=document.querySelector("#flex-search-results"),r=new URLSearchParams(window.location.search);a()(o.a.mark(function c(){var a,u,d,s;return o.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=function(e){var n=s.search(e);if(console.log(n),0===e.length&&l(t),n.length>0){var r=document.createElement("div");r.classList.add("search-result-container"),n.forEach(function(e){var n,t,o,c=document.querySelector("#".concat(e.id));if(null!==c)r.appendChild(c.cloneNode(!0));else{var a=d.filter(function(n){return n.id===e.id}),u=(o=a[0],'<div class="ref-entry" id="'.concat(o.id,'">\n    <div class="entry-heading"><a class="entry-heading-link" href="').concat(o.href,'">').concat(o.codetitle,'</a></div>\n    <p class="summary">').concat(o.summary,"</p>\n  </div>"));n=u,(t=document.createElement("div")).innerHTML=n.trim(),c=t.firstChild,r.appendChild(c)}}),null!==t&&(l(t),t.appendChild(r))}else l(t)},o.next=3,fetch("/reference/lunrjs.data.json").catch(function(e){return console.log(e)});case 3:return u=o.sent,o.next=6,u.json().catch(function(e){return console.log(e)});case 6:d=o.sent,(s=new i.a({tokenize:"reverse",depth:4,cache:!0,encode:"simple",threshold:8,doc:{id:"id",field:["summary","codetitle","name","description"]}})).add(d),r.has("query")&&a(decodeURI(r.get("query"))),null!==n&&n.addEventListener("click",function(n){e.value="",null!==t&&l(t)}),null!==e&&(e.addEventListener("onfocusout",function(e){l(t)}),e.addEventListener("keyup",function(n){var r=e.value;"Backspace"!==n.key||0!==r.length?a(r):l(t)}));case 12:case"end":return o.stop()}},c)}))()})}});
//# sourceMappingURL=reference.bundle.js.map