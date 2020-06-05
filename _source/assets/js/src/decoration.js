
export function specialChars() {

  let elements = document.querySelectorAll('a.textgrow, .textgrow');
  [...elements].forEach(element => {
    if (element.classList.contains('dont-decorate') !== true) {
      const chars = element.innerText.split('');
      element.innerHTML = null;
      chars.forEach((char, i) => {
        const fontSize = 30 - (1.2 * i);
        let fs = map(i, 0, chars.length, 30, 20).toPrecision(2);
        const style = `border-bottom-width: ${(i + 1)}px; font-size: ${fs}px; top: -${(i + (2 * i))}px; padding:0px ${(i + 1)*.7}px;`;
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
  // if ([...document.body.classList].includes('reference') === false) {
  if ([...document.body.classList].includes('dont-decorate') === false) {

    let elementsShrink = document.querySelectorAll('.textshrink, h1, h2, h3, h4, h5, h6');

    [...elementsShrink].forEach(element => {
      if (element.classList.contains('dont-decorate') !== true) {
        const chars = element.innerText.split('');
        const style = window.getComputedStyle(element, null).getPropertyValue('font-size');
        let maxSize = parseFloat(style);
        element.innerHTML = null;
        chars.forEach((char, i) => {
          let fs = map(i, 0, chars.length, maxSize, maxSize/2).toPrecision(2);
          let ts = map(i, 0, chars.length, 0, 5).toPrecision(2);
          const style = `position:relative;border-bottom-width: ${fs/8}px; font-size: ${fs}px; padding-left:${i/6}px; top: -${ts}px;`;
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

  function map(n, start1, stop1, start2, stop2) {
    return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
  };
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
