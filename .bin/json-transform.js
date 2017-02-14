const fs = require('fs');
const api = require('../_data/api.json');
const Entry = require('./lib/entry');
const Parameter = require('./lib/parameter');

let data = [];

api.forEach((e, i, arr)=> {
  let entry = new Entry();
  // console.log(`\n# Title:\n${e.name}`);
  entry.name = e.name;
  // //console.log(`# ${JSON.stringify(e.description)}`);
  if(e.description instanceof Object) {
    let des = e.description.children[0].children[0].value;
    // console.log(`## Description:\n${des}`);
    entry.description = des;
  }

  if(Array.isArray(e.params)) {
    // console.log('\n### Parameters:');
    e.params.forEach((ele, ndx, array)=> {
      let param = new Parameter();
      param.name = ele.name;
      let descr = (ele.description instanceof Object) ? ele.description.children[0].children[0].value : '';
      param.description = descr;
      entry.parameters.push(param);
      // console.log(`Argument ${ndx + 1}\nName: ${ele.name}\nDescription:\n ${descr}`);
    });
  }
  if(Array.isArray(e.returns)) {
    // console.log('### Returns');
    if(e.returns[0].description.children.length > 0) {
      let ret = e.returns[0].description.children[0].children[0].value;
      entry.returns = ret;
      // console.log(ret);

    }
  }
  if(Array.isArray(e.tags)) {
    e.tags.forEach((ele, ndx, array)=>{
      if(ele.title === 'cat') {
        // //console.log(ele.title);
        // console.log(`\n### Category:\n${ele.description}`);
        entry.category = ele.description;
      }
      if(ele.title === 'subcat') {
        // //console.log(ele.title);
        // console.log(`\n### Sub Category:\n${ele.description}`);
        entry.subcategory = ele.description;
      }
      // let tag = _.find(ele, 'title');
      // //console.log(tag);
      // let tag = _.find(ele, (o)=>{
      //   return o.title === 'cat';
      // });
      // //console.log(tag.description);
    });
  }
  // for(let k in e) {
  //   if(e.hasOwnProperty(k)) {
  //     //console.log(`\t${k}`);
  //   }
  // }
  data.push(entry);
  // console.log('-----------------\n');
});

// console.log(JSON.stringify(data, null, 2));

fs.writeFile('./_data/data.json', JSON.stringify(data), (err)=>{
  if(err) {
    throw err;
  }
  // //console.log('saved');
});
