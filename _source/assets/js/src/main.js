import p5 from 'p5/lib/p5.min';
import sketch from './p5sketch.js';
import mobileNav from './mobile-nav.js';
import tweets from './tweets.js';
import {specialChars, createGuideLines} from './decoration.js';
import {shuffleGalleryItems} from './shuffle-gallery-items';
let p5sketch;
document.addEventListener('DOMContentLoaded',() =>{
  tweets();
  shuffleGalleryItems();
  specialChars();
  createGuideLines();
  mobileNav();
  p5sketch = new p5(sketch);
});



window.onblur = function() {
  p5sketch.noLoop();
};
window.onfocus = function() {
  p5sketch.loop();
};
