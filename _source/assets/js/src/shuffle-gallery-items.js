export const shuffleGalleryItems = () => {

  // document.addEventListener('DOMContentLoaded', function () {
  if ([...document.body.classList].includes('gallery')) {

    const elements = document.querySelectorAll('.gallery-overview-item-wrapper');
    if (elements.length >= 0) {
      Array.from(elements).forEach(element => {
        element.style.order = Math.floor(Math.random() * elements.length);
      });

    }
  }
  // });
};
