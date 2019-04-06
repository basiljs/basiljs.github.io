#!/usr/bin/env bash
set -Eeuo pipefail

./node_modules/.bin/blc  --filter-level 2 -r --input http://localhost:4000 > test/report.txt && cat test/report.txt | grep 'BROKEN'