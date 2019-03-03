// var exports = module.exports = {};

// should take the data.json
// and go through all the categories
// creates
// - a folder per category
// - a file for each function/variable
// only if they don't exist already
// or a overwrite flag is set
import fs from 'fs-extra';
import pathExists from 'path-exists';
import YAML from 'yamljs';

// console.log(process.cwd());

function write(file: string, str: string) {
  fs.outputFile(file, str, (error) => {
    if (error) {
      process.stdout.write(JSON.stringify(error));
    }
  });
}
function processElement(ele: {entries: any}, folder: string, overwrite: boolean) {
  ele.entries.forEach((e: any) => {
    // console.log(e);
    const file = `${folder}${e.name}.md`;
    const yamlstr = YAML.stringify({
      category: e.category,
      codetitle: e.codetitle,
      description: e.description,
      examples: e.examples,
      kind: e.kind,
      layout: 'entry',
      parameters: e.parameters,
      returns: e.returns,
      subcategory: e.subcategory,
      title: e.name,
      todo: e.todo,
    }, 2);
    const frontmatter = `---\n${yamlstr}\n---\n`;
    if (overwrite === true) {
      if (pathExists.sync(file) === true) {
        // console.log(`Overwriting file "${file}"`);
      } else {
        // console.log(`Creating file "${file}"`);
      }
      write(file, frontmatter);
    } else if (overwrite === false || pathExists.sync(file) === false) {
      // console.log(`Creating file "${file}"`);
      write(file, frontmatter);
    } else if (overwrite === false || pathExists.sync(file) === true) {
      // console.log(`The file "${file}" already exists`);
    }
  });
}

export default function generateFiles(data: any, overwrite: boolean) {

  data.forEach((element: any) => {
    if (element.cat !== 'null') {
      processElement(element, `./_source/reference/${element.cat.toLowerCase()}/`, overwrite);
    } else {
      processElement(element, './_source/reference/global/', overwrite);
    }
  });
}
