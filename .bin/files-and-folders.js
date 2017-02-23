// should take the data.json
// and go through all the categories
// creates
// - a folder per category
// - a file for each function/variable
// only if they don't exist already
// or a overwrite flag is set
const fs = require('fs-extra');
const YAML = require('yamljs');
const data = require('../_data/categories.json'); // load the cats
const OVERWRITE = true; // if we want to recreate everyting
// console.log(process.cwd());

function process(ele, folder) {
  ele.entries.forEach((e, i, arr)=>{
    // console.log(e);
    let file = `${folder}${e.name}.md`;
    let frontmatter = YAML.stringify({
      layout: 'entry',
      title: e.name,
      codetitle: e.codetitle,
      description: e.description,
      category: e.category,
      subcategory: e.subcategory,
      returns: e.returns,
      parameters: e.parameters,
      kind: e.kind
    }, 2);
    fs.outputFile(file, `---\n${frontmatter}\n---\n`, (error)=>{
      if(error) {
        console.log(error);
      }
    });
  });
}

data.forEach((element, index, array)=>{
  if(element.cat !== 'null') {
    process(element, `./${element.cat.toLowerCase()}/`);
    // element.entries.forEach((e, i, arr)=>{
    //   console.log(e);
    //   let file = `./${element.cat.toLowerCase()}/${e.name}.md`;
    //   let frontmatter = YAML.stringify({
    //     layout: 'entry',
    //     title: e.name,
    //     codetitle: e.codetitle,
    //     description: e.description,
    //     category: e.category,
    //     subcategory: e.subcategory,
    //     returns: e.returns,
    //     parameters: e.parameters,
    //     kind: e.kind
    //   }, 2);
    //   fs.outputFile(file, `---\n${frontmatter}\n---\n`, (error)=>{
    //     if(error) {
    //       console.log(error);
    //     }
    //   });
    // });
  }else{
    process(element, './global/');
  }

});
