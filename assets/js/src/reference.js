// import List from 'list.js';
import lunr from 'lunr';

function clearElement(ele){
  while (ele.hasChildNodes()) {
    ele.removeChild(ele.lastChild);
  }
}
function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild;
}

function entryTemplate (opt){
  return `<div class="ref-entry" id="${opt.id}">
    <div class="entry-heading"><a class="entry-heading-link" href="${opt.href}">${opt.codetitle}</a></div>
    <p class="summary">${opt.summary}</p>
  </div>`;
}

document.addEventListener('DOMContentLoaded',function() {
  // console.log('Vanilla doc ready');

  const searchfield = document.querySelector('input#lunr-search');
  const clearbutton = document.querySelector('button#lunr-clear');
  const searchresults = document.querySelector('#flex-search-results');
  const searchdocsstring = `<p><em>Advanced search: If your terms don't match, try to use some special search terms.<br>
  You can use wildcards: like <code>lerp*</code> or <code>co*lor*</code>. <br>
  Or try using boosts: <code>fill^10 color</code>. This means the weight of fill is 10 times higher then color<br>
  Read more about the search engine <a href="https://lunrjs.com/guides/searching.html">here</a>
</em></p>`;
  const searchdocs = createElementFromHTML(searchdocsstring);
  searchresults.appendChild(searchdocs);
  /**
   * This is the init of the list.js lib
   *
   */
  // var options = {
  //   valueNames: ['entry-heading-link'],
  //   // needs some tweaking
  //   location: 0,
  //   distance: 100,
  //   threshold: 0.4,
  //   multiSearch: true
  // };
  // const listObj = new List('ref', options);

  /**
   * this is the init of the lunr.js lib
   */
  (async function(){

    const response = await fetch('/reference/lunrjs.data.json').catch(err => console.log(err));
    // console.log(response);
    const json = await response.json().catch(err => console.log(err));
    // console.log(json);
    const idx = lunr(function(){
      this.ref('id');
      this.field('summary');
      this.field('codetitle');
      json.forEach(function(doc){
        this.add(doc);
      }, this);
    });


    if (clearbutton !== null){
      // console.log('button');
      clearbutton.addEventListener('click', event => {
        // console.log('click');
        // console.log(event);
        if (searchresults !== null) {
          clearElement(searchresults);
          searchresults.appendChild(searchdocs);
        }
        // if (entries !== null){
        //   [...entries].forEach(ele => ele.classList.remove('hide-entries'));
        // }
      });
    }
    if (searchfield !== null) {
      // console.log(searchfield);
      searchfield.addEventListener('onfocusout', event => {
        clearElement(searchresults);
      });
      searchfield.addEventListener('keyup', event => {
        let txt = searchfield.value;
        // console.log(searchfield.value);
        const results = idx.search(txt);
        // console.log(results);
        // [...entries].forEach(ele => {
        // console.log(event.key);
        if (event.key ==='Backspace' && txt.length === 0){
          clearElement(searchresults);
          searchresults.appendChild(searchdocs);
          return;
        }
        // console.log(txt.length , txt);
        // console.log(event.key);
        if (txt.length === 0){
          clearElement(searchresults);
          searchresults.appendChild(searchdocs);
        }
        if (results.length > 0) {
          const container = document.createElement('div');
          container.classList.add('search-result-container');
          // console.log(results);
          results.forEach(res => {
            // if (res.score === 0){
            //   return;
            // }
            let e = document.querySelector(`#${res.ref}`);
            // console.log(e);
            if (e !== null) {
              container.appendChild(e.cloneNode(true));
            } else {
              const matches = json.filter(ele => ele.id === res.ref);
              const template = entryTemplate(matches[0]);
              e = createElementFromHTML(template);
              container.appendChild(e);
            }
          });
          if (searchresults !== null) {
            clearElement(searchresults);
            searchresults.appendChild(container);
          }
        } else {
          clearElement(searchresults);
          searchresults.appendChild(searchdocs);
        }

      });
    }
  })();
  // const response =  fetch('./lunrjs.data.json');
  // response.then(resp => {
  //   resp.json().then(json => {
  //     console.log(json);
  //   });
  // }).catch(err => console.error(err));
  // // console.log(response);

  // console.log(listObj);
  // if (searchfield !== null) {
  //   searchfield.addEventListener('keyup', (event)=>{
  //     let txt = searchfield.value;
  //     listObj.search(txt);
  //   });
  // }
});
