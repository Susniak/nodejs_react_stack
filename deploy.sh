git pull origin master;

cd ./api;
npm run build;
cd ..;

cd ./frontend;
npm run build;
cp dist/app.js /var/www/html/;
cp dist/index.html /var/www/html/;
cd ..;

node ./api/dist/main.js;
