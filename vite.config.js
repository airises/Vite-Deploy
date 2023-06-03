import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Vite-Deploy/",
});

// 1. для начала откроем  repositories на GitHub
// 2. зайдем в defineConfig и после   plugins добавляем  base , и внутри base:/repositories-name/ -пишем имя ваешего repository
// 3.после, давялем  "deploy": "gh-pages -d dist" в script которая находится в package.json
// 4.скачиваем touch deploy.sh через  gitBash
// 5. после того как 4 пункт закончили появится папка deploy.sh и после пишем то, что будет в шестом  пункте 

/* 
6.

#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:`user-name`/`repositories-name`.git main:gh-pages

cd -

*/

// 7. после того как написали 6 пункт  в терминал пишем  npm run build 
// 8. скачиваем npm install gh-pages --save-dev дейбиз
// 9. после 8 пункта  выполняем следующие пункты 
// 10. git add .
// 11. git commit -m 'first commit'
// 12. git push origin `пишем имя вашей ветки`


// 13. после как выполнили все пункты  пишем  npm run deploy  в терминал 



// 14 поздравляю вы успешно выполнили все пункты !!!!
