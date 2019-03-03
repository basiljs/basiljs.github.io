/**
 * Generates data from existing one
 *
 */
function generator(data) {
  data.forEach((element)=>{
  //  console.log(element);
    element.codetitle = null;
    if (element.kind === null) {
      element.kind = 'function';
    }
    if (element.kind.toString() === 'function' || element.kind.toString() === 'constructor') {
      let paramsList = [];
      element.parameters.forEach((ele, ndx, arr)=>{
        // check if we have object params
        if (ele.name.indexOf('.') === -1) {
          let name = (ele.optional === true) ? `[${ele.name}]` : ele.name;
          // let sep = (ndx + 1 !== arr.length) ? ', ' : '';
          paramsList.push(name);
        }
      });
      // make it a string
      let params = paramsList.join(', ');
      element.codetitle = `${element.name}(${params})`;
    } else if (element.kind.toString() === 'constant' || element.kind.toString() === 'property') {
      element.codetitle = `${element.name}`;
    } else if (element.kind.toString() === 'class') {
      element.codetitle = `${element.name}`;
    }
  });
  return data;
}

module.exports = generator;
