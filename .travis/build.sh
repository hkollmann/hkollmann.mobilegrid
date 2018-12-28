#!/bin/bash
set -e
set -x

npm install qxcompiler -g 
#git clone --depth=10 https://github.com/qooxdoo/qooxdoo-compiler.git
#cd qooxdoo-compiler
#npm link
#cd ..

qx contrib update 
qx contrib list
qx contrib install qooxdoo/qxl.apiviewer 
qx contrib install qooxdoo/qxl.versionlabel
qx compile --target=build -v
