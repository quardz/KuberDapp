ng build --optimization=false --prod
cp ./.htaccess ./dist/kuber/.htaccess
php ./php/api.php > ./dist/kuber/api.json

