#!/usr/bin/env bash
set -Eeuo pipefail
pwd

npm install basiljs/basil.js#develop -D
npm run documentationjs -- build ./node_modules/basiljs/basil.js -o ./.bin/api/data.json
node .bin/index.js
