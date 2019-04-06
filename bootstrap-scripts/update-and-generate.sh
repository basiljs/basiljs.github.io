#!/usr/bin/env bash
set -Eeuo pipefail
pwd

npm install basiljs/basil.js#develop -D
npm run documentationjs -- build ./node_modules/basiljs/basil.js -o ./build-scripts/api/data.json
node build-scripts/index.js
