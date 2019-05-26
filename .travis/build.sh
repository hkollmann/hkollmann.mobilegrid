#!/bin/bash
set -e
set -x

npm install qxcompiler -g 
qx contrib install
qx compile --target=build -v
