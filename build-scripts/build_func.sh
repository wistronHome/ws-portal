#!/usr/bin/env bash

cd ~/Documents/angular6/ws-portal/

git pull

# yarn
yarn add ws-common@latest

npm run package

cd ./dist

mv ws-portal ./portal

cp -r portal /usr/local/var/www/html/

rm -r ../dist
