!function(e){function t(t){for(var r,c,l=t[0],i=t[1],s=t[2],u=0,p=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(d&&d(t);p.length;)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=i;a.push([5,1]),n()}([,,,,,function(e,t,n){n(6),n(14),n(12),e.exports=n(13)},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(2),c=n.n(a),l=n(3),i=n.n(l);function s(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("input#lunr-search"),t=document.querySelector("button#lunr-clear"),n=document.querySelector("#flex-search-results"),r=new URLSearchParams(window.location.search);c()(o.a.mark(function a(){var c,l,d,u;return o.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return c=function(e){var t=u.search(e);if(console.log(t),0===e.length&&s(n),t.length>0){var r=document.createElement("div");r.classList.add("search-result-container"),t.forEach(function(e){var t,n,o,a=document.querySelector("#".concat(e.id));if(null!==a)r.appendChild(a.cloneNode(!0));else{var c=d.filter(function(t){return t.id===e.id}),l=(o=c[0],'<div class="ref-entry" id="'.concat(o.id,'">\n    <div class="entry-heading"><a class="entry-heading-link" href="').concat(o.href,'">').concat(o.codetitle,'</a></div>\n    <p class="summary">').concat(o.summary,"</p>\n  </div>"));t=l,(n=document.createElement("div")).innerHTML=t.trim(),a=n.firstChild,r.appendChild(a)}}),null!==n&&(s(n),n.appendChild(r))}else s(n)},o.next=3,fetch("/reference/lunrjs.data.json").catch(function(e){return console.log(e)});case 3:return l=o.sent,o.next=6,l.json().catch(function(e){return console.log(e)});case 6:d=o.sent,(u=new i.a({tokenize:"reverse",depth:4,cache:!0,encode:"simple",threshold:8,doc:{id:"id",field:["summary","codetitle","name","description"]}})).add(d),r.has("query")&&c(decodeURI(r.get("query"))),null!==t&&t.addEventListener("click",function(t){e.value="",null!==n&&s(n)}),null!==e&&(e.addEventListener("onfocusout",function(e){s(n)}),e.addEventListener("keyup",function(t){var r=e.value;"Backspace"!==t.key||0!==r.length?c(r):s(n)}));case 12:case"end":return o.stop()}},a)}))()})},,,,,,function(e,t){},function(e,t,n){"use strict";n.r(t),t.default=n.p+"../css/styles.css"},function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r);function a(e){var t=[-78,-72,-69,-65,-64,-63,-61,-61,-61,-61,-60,-60,-60,-59,-56,-54,-51,-48,-44,-42,-39,-35,-33,-31,-27,-23,-19,-16,-13,-11,-9,-6,3,5,6,9,12,14,18,20,22,23,28,31,34,39,40,44,48,51,54,56,59,62,66,68,72,74,76,78,80,81,81,81,80,80,79,79,78,77,76,75,75,74,72,71,70,70,68,67,64,63,62,60,58,58,58,56,54,52,50,47,47,45,43,39,36,33,28,25,24,22,18,14,11,8,6,3,-4,-12,-14,-17,-23,-26,-29,-32,-34,-37,-38,-42,-44,-47,-49,-51,-53,-55,-57,-59,-61,-64,-66,-69,-74,-79],n=[35,34,33,32,31,31,25,20,15,11,7,1,-5,-10,-16,-20,-25,-29,-34,-37,-40,-42,-44,-44,-47,-48,-50,-51,-52,-50,-50,-52,-55,-56,-54,-54,-54,-55,-55,-56,-55,-54,-55,-55,-56,-55,-54,-54,-55,-55,-56,-56,-56,-55,-54,-55,-55,-56,-56,-58,-58,-55,-52,-49,-46,-43,-40,-36,-33,-29,-27,-23,-21,-18,-13,-10,-8,-5,-3,-1,3,6,8,10,13,15,16,18,21,24,25,28,31,33,36,38,41,43,47,49,50,50,53,54,55,56,57,58,59,60,59,59,57,56,56,55,54,53,50,48,46,45,43,41,39,37,36,35,35,36,38,38,38,40],r=[34.73,36.925602,39.121204,40.218998,40.218998,40.218998,40.218998,40.129597,40.46505,42.178234,44.492817,46.29773,48.263775,49.87481,51.09646,51.894337,52.204422,52.232235,51.962,51.36969,50.50196,49.101078,47.433903,45.2101,43.085804,41.298832,39.621998,39.025,37.414375,35.266884,34.73,34.73,34.73,34.73,34.73,34.73,34.73,34.73,34.73,34.73,34.73,34.73,34.73,34.73,43.17,45.201645,46.300346,46.58493,46.54274,46.03485,44.647438,42.457493,40.666344,40.22,40.22,40.22,40.22,41.708122,43.17,64.346,63.425694,61.433,59.536774,57.55473,56.019493,55.048485,55.007504,56.8547,58.809822,60.869217,62.980003,65.23102,67.05482,68.434814,69.35446,69.74758,69.837,69.837,69.837,69.837,69.837,69.837,67.596,65.91525,65.14949,64.43601,62.76375,60.435608,58.397907,56.630394,54.993286,54.083694,53.93827,54.447872,55.764256,57.516342,59.36923,61.64047,63.628033,64.346,61.284,63.536304,64.346,64.346,62.823853,61.096436,59.498234,59.41652,61.284,74.804,76.76117,78.64615,80.76899,81.937,80.3157,78.73352,76.554886,75.04784,73.67342,73.272995,73.69169,74.886406,76.76508,78.69861,80.965614,82.6243,84.9855,86.5523,85.979996,84.748,83.44357,81.493484,79.345955,78.477005,79.951744,82.049995,84.12782,85.5992,86.82153,87.03921,86.561165,85.41458,83.61761,81.72396,79.435,77.438416,75.43108,73.56181,72.647995,73.87999,74.804,89.706,90.607254,92.34741,94.38993,95.904144,95.72229,94.38994,92.34741,90.29656,89.706,90.154,92.34999,94.545975,95.644,95.644,95.644,95.644,95.644,95.644,95.644,95.644,95.644,95.095,92.89902,91.25203,90.154,90.154,90.154,90.154,90.154,90.154,90.154,90.154,90.154,90.154,99.902,102.09719,104.29238,105.39,105.39,105.39,105.39,105.39,105.39,105.39,105.39,105.39,105.39,105.47872,106.669876,107.371,107.707,106.27636,104.39595,102.19113,100.78569,100.064255,99.902,99.902,99.902,99.902,99.902,99.902,99.902,99.902,99.902,99.902,99.902,111.74,113.93599,116.13197,117.229996,117.229996,117.229996,117.229996,117.229996,117.229996,117.229996,117.229996,117.229996,117.22234,116.93256,116.35508,114.80314,113.24318,111.208374,108.70149,107.49237,107.977875,108.341995,110.24903,111.6628,111.74,111.74,111.74,111.74,111.74,111.74,111.74,111.74,111.74,111.74,111.33,112.23074,113.97043,116.41181,117.52358,117.3383,115.996635,113.97044,111.92022,111.33,122.907,124.8646,126.749245,128.87242,130.04,128.4189,126.83724,124.65834,123.150986,121.776436,121.376,121.79469,122.98941,124.86809,126.80161,129.06882,130.72792,133.08922,134.65555,134.08264,132.85016,131.54544,129.59618,127.44726,126.57803,128.05318,130.151,132.22969,133.70164,134.92445,135.14221,134.66403,133.51715,131.71986,129.82603,127.537,125.54042,123.53309,121.66382,120.75012,121.982605,122.907],o=[41.515,41.515,41.515,42.05025,44.191257,46.332264,47.938,49.641396,50.44291,49.374413,48.742218,48.83979,49.53096,50.796993,52.585056,54.84232,56.950455,58.705364,60.96892,62.945198,64.62214,66.27902,67.42582,68.095535,67.95912,67.16196,65.751,67.69301,67.693,67.693,66.68615,64.67245,62.658756,60.64507,58.631382,56.114273,54.100586,52.0869,50.07321,48.059525,46.045837,43.52873,41.51504,41.515,63.66,62.837532,60.802208,58.940083,56.883503,54.842415,53.43418,53.33354,54.426582,56.400997,58.42233,60.44366,62.464993,63.3985,63.66,55.78,53.67234,53.092,53.382114,54.19562,53.866497,52.055492,50.888897,49.958313,49.251816,48.82538,48.7333,49.096245,49.985825,51.412308,53.385983,55.365814,57.593044,59.61323,61.63342,63.653606,66.178856,67.694,67.694,67.694,66.741,66.124825,67.26136,68.062744,68.06118,67.46021,66.0107,63.967957,62.156532,60.10266,58.448914,57.363567,56.67948,56.153385,55.859318,55.78,63.884,63.05069,61.232,59.065998,59.325825,59.841225,60.991894,63.114815,63.884,62.129,63.360867,63.990047,63.928825,62.502,60.824398,60.181618,59.233253,58.213715,56.42844,54.51,52.35013,50.61553,49.395504,48.84999,48.7393,48.979248,49.859158,50.818916,52.30662,53.950115,53.70578,52.900467,52.962147,54.58537,55.811115,56.602,57.517826,58.586384,60.553024,62.581863,64.51652,66.135605,67.33762,67.93074,68.14,67.92749,67.33252,66.41891,65.13374,63.41674,62.129,43.569,41.519627,40.765076,41.02649,42.62873,44.930878,46.14052,46.40886,45.30676,43.569,49.17,49.17,49.17,49.67062,51.673107,53.675594,56.178703,58.18119,60.183678,62.186165,64.18865,66.69174,67.693,67.693,67.693,67.19238,65.18991,62.68681,60.684322,58.681835,56.679348,54.67686,52.17375,50.171265,49.17,41.515,41.515,41.515,42.018707,44.03354,46.04837,48.56691,50.58174,52.596573,54.611404,56.626236,58.641068,61.159607,62.89433,63.688625,65.65849,67.693985,68.059105,68.122665,67.50792,66.10339,64.02092,61.941998,59.899303,57.85661,55.813915,53.77122,51.728527,49.17516,47.132465,45.08977,43.047077,41.515,71.239,71.239,71.239,71.75036,73.7958,75.84124,77.88668,79.93212,82.48892,84.53436,86.5798,88.625244,90.12874,92.40411,94.00667,95.88817,96.69513,97.06485,96.93099,96.05486,94.03835,92.52599,92.75411,91.00604,88.79764,86.790924,84.78421,82.7775,80.77078,78.76407,76.25568,74.24896,72.24225,71.239,65.638,63.589127,62.83505,63.31579,64.69784,66.999886,68.209526,68.47789,67.376205,65.638,84.197,85.42887,86.05806,85.99665,84.57,82.89248,82.25014,81.3024,80.28318,78.49831,76.58,74.4196,72.68471,71.46455,70.91901,70.808304,71.04825,71.928154,72.88791,74.37562,76.01911,75.77478,74.96947,75.03122,76.65562,77.880615,78.672,79.58755,80.65629,82.62276,84.65111,86.58683,88.206726,89.409294,90.00266,90.212,89.99947,89.404366,88.490395,87.20437,85.48586,84.197],a=t.length,c=[],l=[];e.setup=function(){e.createCanvas(180,130).parent("#logo"),e.background(255),e.frameRate(15),e.smooth();for(var t=2;t<a;t++){c.push(t),l.push(t);var n=e.floor(e.map(t,0,a-a/3,0,r.length));n=e.constrain(n,0,r.length),l[t]=n,t>a-a/3&&(n=e.floor(e.map(t,a-a/3,a,r.length-r.length/3,r.length/6)),n=e.constrain(n,0,r.length),l[t]=n)}},e.draw=function(){e.background(255),e.strokeWeight(.75),e.translate(e.width/2,e.height/2),e.stroke(0),e.noFill();for(var a=0;a<c.length-1;a+=1){l[a]+=e.floor(e.random(-1,2));if(l[a]<25?l[a]=25:l[a]>r.length-25&&(l[a]=r.length-25),e.strokeWeight(.5),a>4&&a<c.length-2&&e.line(r[l[a]]-75,o[l[a]]-75,1.08*t[c[a]],1.08*n[c[a]]),e.stroke(0),e.fill(255),e.strokeWeight(.75),a%2==0){e.beginShape(),e.stroke(0);for(var i=parseInt(-12.5);i<parseInt(12.5)-1;i++)e.abs(r[l[a]+i-1]-75-(r[l[a]+i]-75))<3&&e.abs(o[l[a]+i-1]-75-(o[l[a]+i]-75))<3?e.vertex(r[l[a]+i-1]-75,o[l[a]+i-1]-75):(e.endShape(),e.beginShape());e.endShape()}e.stroke(0),e.strokeWeight(.75),e.line(1.08*t[c[a]],1.08*n[c[a]],1.08*t[c[a+1]],1.08*n[c[a+1]])}}}var c=n(0),l=n.n(c);function i(e){"block"===window.getComputedStyle(e).display?e.style.display="none":e.style.display="block"}var s;document.addEventListener("DOMContentLoaded",function(){var e,t,n;(e=new XMLHttpRequest).onreadystatechange=function(){if(e.readyState==XMLHttpRequest.DONE)if(200==e.status){var t=JSON.parse(e.responseText).data[0],n=t.text,r=t.created_at;document.querySelector(".tweettime").innerHTML=r,document.querySelector(".message").innerHTML=n}else 400==e.status?console.log("There was an error 400"):console.log("something else other than 200 was returned")},e.open("GET","https://basiljs-latest-tweets.now.sh/",!0),e.send(),function(){if(l()(document.body.classList).includes("gallery")){var e=document.querySelectorAll(".gallery-overview-item-wrapper");e.length>=0&&Array.from(e).forEach(function(t){t.style.order=Math.floor(Math.random()*e.length)})}}(),function(){var e=document.querySelectorAll("a.textgrow, .textgrow");if(l()(e).forEach(function(e){if(!0!==e.classList.contains("dont-decorate")){var t=e.innerText.split("");e.innerHTML=null,t.forEach(function(t,n){var r=30-2*n,o="border-bottom-width: ".concat(n+1,"px; font-size: ").concat(r,"px; top: -").concat(n+2*n,"px;"),a=document.createElement("span");a.style.cssText=o;var c=document.createTextNode(t);a.appendChild(c),e.appendChild(a)})}}),!1===l()(document.body.classList).includes("reference")){var t=document.querySelectorAll(".textshrink, h1, h2, h3, h4, h5, h6");l()(t).forEach(function(e){if(!0!==e.classList.contains("dont-decorate")){var t=e.innerText.split(""),n=window.getComputedStyle(e,null).getPropertyValue("font-size"),r=parseFloat(n);e.innerHTML=null;var o=(r-16)/t.length;t.forEach(function(t,n){r-=o;var a="border-bottom-width: ".concat(2/n,"px; font-size: ").concat(r,"px; top: -").concat(n,"px;"),c=document.createElement("span");c.className="textshrink-item",c.style.cssText=a;var l=document.createTextNode(t);c.appendChild(l),e.appendChild(c)})}})}}(),function(){var e=document.querySelector(".guidelines"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div");t.className="bottom_lines",n.className="right_lines",r.className="page_lines";for(var o=0;o<5;o++){var a=document.createElement("div");a.classList.add("bottomLine","line_".concat(o+1)),t.appendChild(a)}for(var c=0;c<3;c++){var l=document.createElement("div");l.classList.add("right_line","line_".concat(c+1)),n.appendChild(l)}for(var i=0;i<4;i++){var s=document.createElement("div");s.classList.add("line","line_".concat(i+1)),r.appendChild(s)}e.appendChild(t),e.appendChild(n),e.appendChild(r)}(),t=document.querySelector(".main-menu"),(n=document.querySelector(".nav-o-meter")).addEventListener("click",function(){n.classList.toggle("opened"),i(t);var e=document.querySelectorAll(".menu-link");l()(e).forEach(function(e){e.addEventListener("click",function(){e.classList.contains("opened")&&(n.classList.toggle("opened"),i(t))})})}),s=new o.a(a)}),window.onblur=function(){s.noLoop()},window.onfocus=function(){s.loop()}}]);
//# sourceMappingURL=main.bundle.js.map