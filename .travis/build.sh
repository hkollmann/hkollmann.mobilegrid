#!/bin/bash
set -e
set -x

npm install qxcompiler -g 
qx contrib update 
qx contrib list
qx contrib install qooxdoo/qxl.apiviewer 
qx compile --target=build -v
