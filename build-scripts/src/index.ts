import {createEntry, createExample, createParameter, createReturnValue, createTag } from './entry-types';

// const util = require('util');
import fs from 'fs';
import _ from 'lodash';
import path from 'path';
// import Parameter  from './lib/parameter';
// import Return  from './lib/returns';
// import Tag  from './lib/tag';
// import Example  from './lib/example';
import generateData from './data-generator';
import generateFiles from './files-and-folders';
import {dotNull, nullToGlobal} from './filters';

const api = fs.readFileSync(path.resolve(__dirname, '../api/data.json'));
// process.stdout.write(api);

let data: any[] = [];

function buildEntry(e: any) {
  const entry = createEntry();
  entry.name = e.name;
  if (e.description instanceof Object) {
    const des = e.description.children[0].children[0].value;
    entry.description = des;
  }
  if (e.hasOwnProperty('kind') === true) {
    entry.kind = e.kind;
  }
  // if(Array.isArray(e.params)) {
  //   e.params.forEach((ele, ndx, array)=> {
  //     let param = new Parameter();
  //     param.name = ele.name;
  //     let descr = (ele.description instanceof Object) ? ele.description.children[0].children[0].value : '';
  //     param.description = descr;
  //     entry.parameters.push(param);
  //   });
  // }

  if (Array.isArray(e.returns)) {
    if (e.returns.length > 0) {
      if (e.returns[0].description.children.length > 0) {
        const ret = e.returns[0].description.children[0].children[0].value;
        entry.returns = ret;
      }
    }
  }
  if (Array.isArray(e.tags)) {
    e.tags.forEach((ele: any) => {
      if (ele.title === 'description') {
        entry.description = ele.description;
      }
      if (ele.title === 'summary') {
        entry.summary = ele.description;
      }
      if (ele.title === 'cat') { // get the categories
        entry.category = ele.description;

      } else if (ele.title === 'subcat') { // get the sub categories
        entry.subcategory = ele.description;

      } else if (ele.title === 'param') { // get the parameters
        const param = createParameter();
        param.name = ele.name;
        param.description = ele.description;
        // console.log(ele);
        if (ele.hasOwnProperty('type')) {
          if (ele.type !== null) {
            if (ele.type.hasOwnProperty('type')) {
              if (ele.type.type === 'NameExpression') {
                // argument not otional
                // no multiples
                param.type.push(ele.type.name);
              } else if (ele.type.type === 'OptionalType') {
                param.optional = true;
                if (ele.type.expression.name === 'UnionType') {
                  ele.type.expression.elements.forEach((element: any) => {
                    param.type.push(element.name);
                  });
                } else {
                  param.type.push(ele.type.expression.name);
                }
              } else if (ele.type.type === 'UnionType') {
                ele.type.elements.forEach((element: any) => {
                  param.type.push(element.name);
                });
              }
            }
          }
        }
        entry.parameters.push(param);
      } else if (ele.title === 'method') { // get the method
        entry.kind = 'function';
      } else if (ele.title === 'constant') { // get the constant
        entry.kind = 'constant';
      } else if (ele.title === 'property') { // get the property
        entry.kind = 'property';
      } else if (ele.title === 'constructor') { // get the constructor
        entry.kind = 'constructor';
      } else if (ele.title === 'type') {
        entry.kind = ele.type.name;
      } else if (ele.title === 'example') {
        const example = createExample();
        if (ele.hasOwnProperty('caption')) {
          example.description = ele.caption;
        }
        if (ele.hasOwnProperty('description')) {
          example.code = ele.description;
        }
        entry.examples.push(example);
      } else if (ele.title === 'todo') {
        entry.todo = ele.description;
      } else if (ele.title === 'return' || ele.title === 'returns') { // get the return
        const returnValue = createReturnValue();
        returnValue.description = ele.description;
        if (ele.hasOwnProperty('type')) {
          if (ele.type !== null) {
            if (ele.type.hasOwnProperty('type')) {
              if (ele.type.type === 'NameExpression') {
                returnValue.type.push(ele.type.name);
              } else if (ele.type.type === 'UnionType') {
                ele.type.elements.forEach((element: any) => {
                  returnValue.type.push(element.name);
                });
              }
            }
          }
        }
        entry.returns = returnValue;
      } else {
        const tag = createTag();
        tag.name = ele.name;
        tag.title = ele.title;
        tag.description = ele.description;
        tag.type = ele.type !== null ? ele.type : null;
        entry.tags.push(tag);
      }
    });
  }
  data.push(entry);
  if (e.hasOwnProperty('member')) {
    if (e.members.instance.length > 0) {
      e.members.instance.forEach((el: any) => {
        buildEntry(el);
      });
    }
    if (e.members.static.length > 0) {
      e.members.static.forEach((el: any) => {
        buildEntry(el);
      });
    }
  }
  // if(e.members.events.length > 0) {
  //   e.members.events.forEach((el)=>{
  //     buildEntry(el);
  //   });
  // }
}
api.forEach((el) => {
  buildEntry(el);
});

// Some filtering
data.forEach((element) => {
  element.name = element.name !== undefined ? dotNull(element.name) : '';
  element.category = nullToGlobal(element.category);
});

data = generateData(data);
// taken from here
// http://stackoverflow.com/questions/23600897/using-lodash-groupby-how-to-add-your-own-keys-for-grouped-output
const sortedByCategory = _.chain(data)
  .groupBy('category')
  .map((key, val) => {
    return {
      cat: val,
      entries: key,
    };
  }).value();

const catsAndSubcats: any = [];
sortedByCategory.forEach((ele) => {
  const res = _.chain(ele.entries)
    .groupBy('subcategory')
    .map((key, val) => {
      return {
        cat: ele.cat,
        entries: key,
        subcat: val,
      };
    }).value();
  catsAndSubcats.push(res);
});

catsAndSubcats.forEach((element: any) => {
  element.forEach((ele: any) => {
    // console.log(ele);
    if (ele.subcat === 'null') {
      ele.subcat = '0';
    }
  });

  element.sort((a: any, b: any) => {
    const txt1 = a.subcat.toUpperCase();
    const txt2 = b.subcat.toUpperCase();
    return (txt1 < txt2) ? -1 : (txt1 > txt2) ? 1 : 0;
  });

  element.forEach((ele: any) => {
    // console.log(ele);
    if (ele.subcat === '0') {
      ele.subcat = 'null';
    }
  });
});

// console.log(JSON.stringify(data, null, 2));

const buildGlobalsObject = () => {
  const obj: any = {};
  data.forEach((ele: any) => {
    obj[ele.name.includes('.') ? ele.name.split('.')[0] : ele.name] = true;
  });
  // console.log(JSON.stringify(obj));
  return JSON.stringify(obj);

};
fs.writeFile('./_source/_data/function-list.json', buildGlobalsObject(), (err: Error) => {
  if (err) {
    throw err;
  }
});

// let categoriesData = null;
// tslint:disable-next-line:no-console
console.log((data));
process.exit(0);
fs.writeFile('./_source/_data/categories.json', JSON.stringify(sortedByCategory, null, 2), (err: Error) => {
  if (err) {
    throw err;
  }
});

generateFiles(sortedByCategory, true);

// console.table()
// console.log(util.inspect(catsAndSubcats));
const json = JSON.parse(JSON.stringify(catsAndSubcats));
// console.log(json[0][0].entries);

// sort within categories by name
json.forEach((ele: any) => {
  ele.forEach( (e: any) => e.entries.sort((a: any, b: any) => a.name.localeCompare(b.name)));
});

// sort categories by name
json.sort((a: any, b: any) => a[0].cat.localeCompare(b[0].cat));

fs.writeFile('./_source/_data/cats-and-subcats.json', JSON.stringify(json, null, 2), (err) => {
  if (err) {
    throw err;
  }
});
