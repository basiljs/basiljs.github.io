
export function specialChars() {

  let elements = document.querySelectorAll('a.textgrow, .textgrow');
  [...elements].forEach(element => {
    if (element.classList.contains('dont-decorate') !== true) {
      const chars = element.innerText.split('');
      element.innerHTML = null;
      chars.forEach((char, i) => {
        const fontSize = 30 - (2 * i);
        const style = `border-bottom-width: ${(i + 1)}px; font-size: ${fontSize}px; top: -${(i + (2 * i))}px;`;
        const node = document.createElement('span');
        node.style.cssText = style;
        const content = document.createTextNode(char);
        node.appendChild(content);
        element.appendChild(node);
      });
    }
  });

  /**
   * not in the reference
   */
  if ([...document.body.classList].includes('reference') === false) {

    let elementsShrink = document.querySelectorAll('.textshrink, h1, h2, h3, h4, h5, h6');

    [...elementsShrink].forEach(element => {
      if (element.classList.contains('dont-decorate') !== true) {
        const chars = element.innerText.split('');
        const style = window.getComputedStyle(element, null).getPropertyValue('font-size');
        let fs = parseFloat(style);
        element.innerHTML = null;
        const minfs = 16;
        const decr = (fs - minfs) / chars.length;
        chars.forEach((char, i) => {
          fs -= decr;
          const style = `border-bottom-width: ${(2 / i)}px; font-size: ${fs}px; top: -${i}px;`;
          const node = document.createElement('span');
          node.className = 'textshrink-item';
          node.style.cssText = style;
          const content = document.createTextNode(char);
          node.appendChild(content);
          element.appendChild(node);
        });
      }
    });
  }
}



export function createGuideLines() {
  const element = document.querySelector('.guidelines');
  const bottomlines = document.createElement('div');
  const rightlines = document.createElement('div');
  const pagelines = document.createElement('div');
  bottomlines.className = 'bottom_lines';
  rightlines.className = 'right_lines';
  pagelines.className = 'page_lines';

  for (let i = 0; i < 5; i++) {
    const line = document.createElement('div');
    line.classList.add('bottomLine', `line_${i + 1}`);
    bottomlines.appendChild(line);
  }
  for (let i = 0; i < 3; i++) {
    const line = document.createElement('div');
    line.classList.add('right_line', `line_${i + 1}`);
    rightlines.appendChild(line);
  }
  for (let i = 0; i < 4; i++) {
    const line = document.createElement('div');
    line.classList.add('line', `line_${i + 1}`);
    pagelines.appendChild(line);
  }
  element.appendChild(bottomlines);
  element.appendChild(rightlines);
  element.appendChild(pagelines);
}