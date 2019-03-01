// import $ from 'jquery';
import p5 from 'p5/lib/p5.min';
import sketch from './p5sketch.js';
import mobileNav from './mobile-nav-nojq.js';
import tweets from './tweets.js';
// import { createGuideLines} from './decoration.js';
import {specialChars, createGuideLines} from './decoration-nojq.js';
let p5sketch;
document.addEventListener('DOMContentLoaded',() =>{
  specialChars();
  createGuideLines();
  mobileNav();
  tweets();
  p5sketch = new p5(sketch);
});


window.onblur = function() {
  p5sketch.noLoop();
};
window.onfocus = function() {
  p5sketch.loop();
};
