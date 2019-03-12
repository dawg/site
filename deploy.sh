#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd .vuepress/dist

# for the custom domain
echo dawg.dev > CNAME
git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:dawg/dawg.github.io.git master

cd -
rm -rf .vuepress/dist
