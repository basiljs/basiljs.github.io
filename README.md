# Basil.js

[![Build Status](https://travis-ci.org/basiljs/basiljs.github.io.svg?branch=master)](https://travis-ci.org/basiljs/basiljs.github.io)  

Hosted on:  

[![Netlify Badge](https://www.netlify.com/img/global/badges/netlify-color-accent.svg)](https://basiljs2.netlify.com/)

This repo holds the [site/docs for Basil.js](https://basiljs.github.io/). The current state of development (develop branch) can be found here [basiljs2.netlify.com](https://basiljs2.netlify.com/)
## Update Basil API  

If there are changes to the API of Basil.js you can update the data on this repo as follows.  

```bash

git pull git@github.com:basiljs/basiljs.github.io.git
cd basiljs.github.io
# get all branches
git fetch -a
# get into the develop branch
git checkout -b develop origin/develop
# now make your new branch based on develop
git checkout -b chore/update-docs
# build the new data source for the site
# This will:  

# - Pull the Basil.js' branch `develop` with npm from GitHub (eventually this should be the master, not the develop branch).
# - Generate the file `./build-scripts/api/data.json` from `./node_modules/basiljs/basil.js` using [documentation.js](http://documentation.js.org/).
# - Generate the following files for the index.
#    + `./_data/categories.json`
#    + `./_data/cats-and-subcats.json`
# - Also generate all the files for the subpages of `_source/reference`.  
npm run build:api-markup
# After that you can just commit all the changes and push it the repo again. Netlify will take care of the Jekyll build.  
# Only add the files you really want to.
# Adding all with `git add .` is acutally not the right way
# use gits interactive mode or some more specific paths then `.`
git add -i
git commit -m "chore: Update Basil.js api to latest state [Add your favorite emoji here]"
# push current HEAD to remote
git push -u origin HEAD
# Now go to the GitHub UI and create your PR
```

## Development

To build these docs we are using [Webpack](https://webpack.js.org/) and [Jekyll](https://jekyllrb.com/). You need both of these to develop on this.  

- Create a new branch based on branch `develop` (see the code above for a how to 👆).
- Do your thing
- Create a pull request against develop

Netlify will create a branch and deploy preview for you and you can see your changes online. Every push to your branch will trigger a new build and will be linked on the PR page.

To develop locally take a look at the steps below. 👇

### Markup + SCSS

Most of the Jekyll [liquid magic](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) happens in `./_source`.  

To develop in this run:

```bash
# once
bundle install
bundle update
# whenever you want to work on the markup/content
# (the --limit_posts 1 --incremental flags are needed
# because we have lots of pages and need to speedup the build)
bundle exec jekyll serve --livereload --limit_posts 1 --incremental
```

### Javascript

To work on the Javasscript of the site you need to run

```bash
# once
# needs npm v5.7 or higer
npm ci
# when you develop on it
# (starts the webpack dev watch build toolchain)
npm run webpack:dev
```

## Recipes

Resize and crop multiple images using [`mogrify`](https://www.imagemagick.org/script/mogrify.php)  

```bash
mogrify -resize 320x180^ -gravity Center -extent 320x180 -quality 100 -format png ./*/thumbnail.jpg

```

## License

Copyright (c)  2013-2019 Basil.js
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software  without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to  permit persons to whom the Software is furnished to do so, subject to the following conditions:  
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A  PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF  CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  

see also http://www.opensource.org/licenses/mit-license.php

