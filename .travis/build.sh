#!/bin/bash
set -e
set -x

#npm install qxcompiler -g 
git clone --depth=10 https://github.com/qooxdoo/qooxdoo-compiler.git
cd qooxdoo-compiler
npm link
cd ..

qx contrib update 
qx contrib install qooxdoo/qooxdoo-api-viewer -r v0.1.7
qx compile --target=build -v