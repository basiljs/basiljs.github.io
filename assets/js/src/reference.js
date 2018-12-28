import List from 'list.js';


document.addEventListener('DOMContentLoaded',function() {
  const searchfield = document.querySelector('input.search');
  console.log(List);
  console.log('Vanilla doc ready');
  var options = {
    valueNames: ['heading-category']
  };
  const listObj = new List('reference', options);
  console.log(listObj);
  if (searchfield!==null) {
    searchfield.addEventListener('keyup', (event)=>{
      let txt = searchfield.value;
      listObj.search(txt);
    });
  }
});
