/**
 * Generates data from existing one
 *
 */
export default function generateData(data: any) {
  data.forEach((element: any) => {
  //  console.log(element);
    element.codetitle = null;
    if (element.kind === null) {
      element.kind = 'function';
    }
    if (element.kind.toString() === 'function' || element.kind.toString() === 'constructor') {
      const paramsList: any[] = [];
      element.parameters.forEach((ele: any) => {
        // check if we have object params
        if (ele.name.indexOf('.') === -1) {
          const name = (ele.optional === true) ? `[${ele.name}]` : ele.name;
          // let sep = (ndx + 1 !== arr.length) ? ', ' : '';
          paramsList.push(name);
        }
      });
      // make it a string
      const params = paramsList.join(', ');
      element.codetitle = `${element.name}(${params})`;
    } else if (element.kind.toString() === 'constant' || element.kind.toString() === 'property') {
      element.codetitle = `${element.name}`;
    } else if (element.kind.toString() === 'class') {
      element.codetitle = `${element.name}`;
    }
  });
  return data;
}
