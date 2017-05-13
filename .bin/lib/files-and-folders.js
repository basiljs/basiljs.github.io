var exports = module.exports = {};

// should take the data.json
// and go through all the categories
// creates
// - a folder per category
// - a file for each function/variable
// only if they don't exist already
// or a overwrite flag is set
const fs = require('fs-extra');
const YAML = require('yamljs');
const data = require('../../_data/categories.json'); // load the cats
const pathExists = require('path-exists');

// console.log(process.cwd());

function write(file, str) {
  fs.outputFile(file, str, (error)=>{
    if(error) {
      console.log(error);
    }
  });
}
function process(ele, folder, ow) {
  ele.entries.forEach((e, i, arr)=>{
    // console.log(e);
    let file = `${folder}${e.name}.md`;
    let yamlstr = YAML.stringify({
      layout: 'entry',
      title: e.name,
      codetitle: e.codetitle,
      description: e.description,
      category: e.category,
      subcategory: e.subcategory,
      returns: e.returns,
      parameters: e.parameters,
      kind: e.kind,
      todo: e.todo,
      examples: e.examples
    }, 2);
    let frontmatter = `---\n${yamlstr}\n---\n`;
    if(ow === true) {
      if(pathExists.sync(file) === true) {
        // console.log(`Overwriting file "${file}"`);
      }else{
        // console.log(`Creating file "${file}"`);
      }
      write(file, frontmatter);
    } else if(ow === false || pathExists.sync(file) === false) {
      // console.log(`Creating file "${file}"`);
      write(file, frontmatter);
    }else if(ow === false || pathExists.sync(file) === true) {
      // console.log(`The file "${file}" already exists`);
    }
  });
}

function generate(overwrite) {
  data.forEach((element, index, array)=>{
    if(element.cat !== 'null') {
      process(element, `./${element.cat.toLowerCase()}/`, overwrite);
    }else{
      process(element, './global/', overwrite);
    }
  });
}

module.exports = generate;
