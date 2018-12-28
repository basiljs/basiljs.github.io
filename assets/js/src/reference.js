import List from 'list.js';


document.addEventListener('DOMContentLoaded',function() {
  // const searchfield = document.querySelector('input.search');
  // console.log(List);
  console.log('Vanilla doc ready');
  var options = {
    valueNames: ['entry-heading-link'],
    // needs some tweaking
    location: 0,
    distance: 100,
    threshold: 0.4,
    multiSearch: true
  };
  const listObj = new List('ref', options);

  // console.log(listObj);
  // if (searchfield !== null) {
  //   searchfield.addEventListener('keyup', (event)=>{
  //     let txt = searchfield.value;
  //     listObj.search(txt);
  //   });
  // }
});
