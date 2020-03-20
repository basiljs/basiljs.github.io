import p5 from "p5/lib/p5";
import sketch from "./p5sketch";
import mobileNav from "./mobile-nav";
import tweets from "./tweets";
import { specialChars, createGuideLines } from "./decoration";
import { shuffleGalleryItems } from "./shuffle-gallery-items";
let p5sketch;
document.addEventListener("DOMContentLoaded", () => {
  console.log("hello world");
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
