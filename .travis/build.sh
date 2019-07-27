#!/bin/bash
set -e
set -x

npm install @qooxdoo/compiler -g 
qx compile --target=build -v
