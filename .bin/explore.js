// const data = require('../_data/cats-and-subcats.json');
const data = require('../_data/api.json');
// console.log(data);
data.forEach((e)=>{
  console.log(e.members);
});
