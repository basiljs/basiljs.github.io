const fs = require('fs');
const api = require('../_data/api.json');
const Entry = require('./lib/entry');
const Parameter = require('./lib/parameter');
const Return = require('./lib/returns');
const Tag = require('./lib/tag');
const Category = require('./lib/category');
const _ = require('lodash');
const generator = require('./lib/generator');
const Filters = require('./lib/filters');


let data = [];
api.forEach((e, i, arr)=> {
  let entry = new Entry();
  entry.name = e.name;
  if(e.description instanceof Object) {
    let des = e.description.children[0].children[0].value;
    entry.description = des;
  }
  if(e.hasOwnProperty('kind') === true) {
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
  if(Array.isArray(e.returns)) {
    if(e.returns[0].description.children.length > 0) {
      let ret = e.returns[0].description.children[0].children[0].value;
      entry.returns = ret;
    }
  }
  if(Array.isArray(e.tags)) {
    e.tags.forEach((ele, ndx, array)=>{
      if(ele.title === 'cat') {
        entry.category = ele.description;
      } else if(ele.title === 'subcat') {
        entry.subcategory = ele.description;
      } else if (ele.title === 'param') {
        var param = new Parameter();
        param.name = ele.name;
        param.description = ele.description;
        // console.log(ele);
        if (ele.hasOwnProperty('type')) {
          if (ele.type !== null) {
            if (ele.type.hasOwnProperty('type')) {
              if(ele.type.type === 'NameExpression') {
                // argument not otional
                // no multiples
                param.type.push(ele.type.name);
              }else if(ele.type.type === 'OptionalType') {
                param.optional = true;
                if(ele.type.expression.name === 'UnionType') {
                  ele.type.expression.elements.forEach((element, index)=>{
                    param.type.push(element.name);
                  });
                }else{
                  param.type.push(ele.type.expression.name);

                }
              }else if (ele.type.type === 'UnionType') {
                ele.type.elements.forEach((element, index)=>{
                  param.type.push(element.name);

                });
              }
            }
          }
        }
        entry.parameters.push(param);
      } else if (ele.title === 'method') {
        entry.kind = 'function';
      }else if (ele.title === 'constant' || ele.title === 'property') {
        entry.kind = 'constant';

      } else if (ele.title === 'return' || ele.title === 'returns') {
        let returnValue = new Return();
        returnValue.description = ele.description;
        if(ele.hasOwnProperty('type')) {
          if (ele.type !== null) {
            if (ele.type.hasOwnProperty('type')) {
              if(ele.type.type === 'NameExpression') {
                returnValue.type.push(ele.type.name);
              }else if(ele.type.type === 'UnionType') {
                ele.type.elements.forEach((element)=>{
                  returnValue.type.push(element.name);
                });
              }
            }
          }
        }
        entry.returns = returnValue;
      }else {
        var tag = new Tag();
        tag.name = ele.name;
        tag.title = ele.title;
        tag.description = ele.description;
        tag.type = ele.type !== null ? ele.type : null;
        entry.tags.push(tag);
      }
    });
  }
  data.push(entry);
});

// Some filtering
let filter = new Filters();
data.forEach((element)=>{

  console.log(element);
  element.name = filter.dotNull(element.name);
});

data = generator(data);
// taken from here
// http://stackoverflow.com/questions/23600897/using-lodash-groupby-how-to-add-your-own-keys-for-grouped-output
let sortedByCategory = _.chain(data)
 .groupBy('category')
 .map((key, val)=>{
   return {
     entries: key,
     cat: val
   };
 }).value();

let sortedBySubCategory = _.chain(data)
 .groupBy('subcategory')
 .map((key, val)=>{
   return {
     entries: key,
     subcat: val
   };
 }).value();


fs.writeFile('./_data/categories.json', JSON.stringify(sortedByCategory, null, 2), (err)=>{
  if(err) {
    throw err;
  }
});

fs.writeFile('./_data/sub-categories.json', JSON.stringify(sortedBySubCategory, null, 2), (err)=>{
  if(err) {
    throw err;
  }
});
