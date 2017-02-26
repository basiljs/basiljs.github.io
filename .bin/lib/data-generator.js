/**
 * Generates data from existing one
 *
 */
var exports = module.exports = {};
function generator(data) {
  data.forEach((element)=>{
    element.codetitle = null;
    if(element.kind.toString() === 'function' || element.kind.toString() === 'constructor') {
      let params = '';
      element.parameters.forEach((ele, ndx, arr)=>{
        let name = (ele.optional === true) ? `[${ele.name}]` : ele.name;
        let sep = (ndx + 1 !== arr.length) ? ', ' : '';
        params += name + sep;
      });
      element.codetitle = `b.${element.name}(${params})`;
    }else if (element.kind.toString() === 'constant' || element.kind.toString() === 'property') {
      element.codetitle = `b.${element.name}`;
    } else if(element.kind.toString() === 'class') {
      element.codetitle = `${element.name}`;
    }
  });
  return data;
}

module.exports = generator;
