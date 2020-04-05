document.addEventListener("DOMContentLoaded", function() {
  // console.log("gallery");
  if ([...Array.from(document.body.classList)].includes("gallery")) {
    const elements = document.querySelectorAll<HTMLDivElement>(
      ".gallery-overview-item-wrapper"
    );
    if (elements.length >= 0) {
      Array.from(elements).forEach(element => {
        element.style.order = `${Math.floor(Math.random() * elements.length)}`;
      });
    }
  }
});
