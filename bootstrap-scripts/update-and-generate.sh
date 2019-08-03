#!/usr/bin/env bash
set -Eeuo pipefail
pwd

npm install basiljs/basil.js#develop -D
cp ./node_modules/basiljs/changelog.txt ./_source/download/
npm run documentationjs -- build ./node_modules/basiljs/basil.js -o ./build-scripts/api/data.json
node build-scripts/src/index.js
