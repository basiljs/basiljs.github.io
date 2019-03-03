# Basil.js

[![Build Status](https://travis-ci.org/basiljs/basiljs.github.io.svg?branch=master)](https://travis-ci.org/basiljs/basiljs.github.io)

This repo holds the [site/docs for Basil.js](https://basiljs.github.io/)  

## Deploy  

If there are some changed to the API of Basil.js you can update the data on this repo as follows.  

    npm run build

This will:  

- Pull the branch develop with npm from GitHub.
- Generate the file `./.bin/api/data.json` from `./node_modules/basiljs/basil.js` using [documentation.js](http://documentation.js.org/).
- Generate the following files for the index.
    + `./_data/categories.json`
    + `./_data/cats-and-subcats.json`
- Also generate all the files for the subpages.  

After that you can just commit all the changes and push it the repo again. GitHub pages will take care of the jekyll build.  


## Development

To build these docs we are using [Node.js](https://nodejs.org/en/) and [Jekyll](https://jekyllrb.com/). You need both of them installed to develop on this.  

In the `.bin/` folder you have the scripts to generate the files for the reference. The entry point is `index.js`.  

Most of the jekyll [liquid magic](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) happens in `./index.html`, `_includes/entry-card.html`.  

To develop in this run:

    bundle install
    bundle update
    bundle exec jekyll serve --livereload

## License

Copyright (c)  2013-2019 Basil.js
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software  without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to  permit persons to whom the Software is furnished to do so, subject to the following conditions:  
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A  PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF  CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  

see also http://www.opensource.org/licenses/mit-license.php

