document.addEventListener("DOMContentLoaded", function() {
  if ([...Array.from(document.body.classList)].includes("basiljs")) {
    const elements = document.querySelectorAll<HTMLLIElement>(
      ".featured-project"
    );
    if (elements.length !== 0) {
      let idx = 0;
      elements[0].style.display = "inline";

      setInterval(() => {
        elements[idx % elements.length].style.display = "inline";
        elements.forEach((ele, i) => {
          if (i !== idx % elements.length) {
            ele.style.display = "none";
          }
        });
        idx++;
      }, 2000);
    }
  }
});
