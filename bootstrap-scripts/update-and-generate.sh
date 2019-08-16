#!/usr/bin/env bash
set -Eeuo pipefail
pwd

echo "Installing latest develop version of Basil.js"
npm install basiljs/basil.js#develop -D
echo "Success"
echo "Copying changelog.txt into jekyll source"
cp ./node_modules/basiljs/changelog.txt ./_source/download/
echo "Success"
echo "Building JSDoc data.json using documentationjs"
npm run documentationjs -- build ./node_modules/basiljs/basil.js -o ./build-scripts/api/data.json
echo "Success"
echo "Building markup from data.json"
node build-scripts/index.js
echo "Success"
