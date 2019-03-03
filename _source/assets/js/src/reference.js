import FlexSearch from 'flexsearch';

function clearElement(ele) {
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

/**
 * TODO: This should not be a string template. Construct nodes.
 * @param {oobject} opt containes the ID the codetitle, the summary and the href
 */
function entryTemplate(opt) {
  return `<div class="ref-entry" id="${opt.id}">
    <div class="entry-heading"><a class="entry-heading-link" href="${opt.href}">${opt.codetitle}</a></div>
    <p class="summary">${opt.summary}</p>
  </div>`;
}


document.addEventListener('DOMContentLoaded', function() {

  const searchfield = document.querySelector('input#lunr-search');
  const clearbutton = document.querySelector('button#lunr-clear');
  const searchresults = document.querySelector('#flex-search-results');
  const params = new URLSearchParams(window.location.search);

  (async function() {
    const search = txt => {
      const results = idx.search(txt);
      console.log(results);
      if (txt.length === 0) {
        clearElement(searchresults);
      }
      if (results.length > 0) {
        const container = document.createElement('div');
        container.classList.add('search-result-container');
        results.forEach(res => {

          let e = document.querySelector(`#${res.id}`);
          if (e !== null) {
            container.appendChild(e.cloneNode(true));
          } else {
            const matches = json.filter(ele => ele.id === res.id);
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
      }
    };

    const response = await fetch('/reference/lunrjs.data.json').catch(err => console.log(err));
    // console.log(response);
    const json = await response.json().catch(err => console.log(err));
    // console.log(json);
    const idx = new FlexSearch({
      tokenize: 'reverse',
      depth: 4,
      cache: true,
      encode: 'simple',
      threshold: 8,
      doc: {
        id: 'id',
        field: [
          'summary',
          'codetitle',
          'name',
          'description',
        ]
      }
    });
    idx.add(json);

    if (params.has('query')) {
      search(decodeURI(params.get('query')));
    }

    if (clearbutton !== null) {
      clearbutton.addEventListener('click', event => {
        searchfield.value = '';
        if (searchresults !== null) {
          clearElement(searchresults);
        }

      });
    }
    if (searchfield !== null) {
      // console.log(searchfield);
      searchfield.addEventListener('onfocusout', event => {
        clearElement(searchresults);
      });
      searchfield.addEventListener('keyup', event => {
        let txt = searchfield.value;
        if (event.key === 'Backspace' && txt.length === 0) {
          clearElement(searchresults);
          return;
        }
        search(txt);

      });
    }
  })();

});
