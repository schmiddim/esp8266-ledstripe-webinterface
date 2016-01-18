#Webinterface for ESP8266 controlled LED stripes

##Requirements
* you need an ESP wired and programmed as seen [here] **@todo finish project and upload it**
* Webspace for the assets
 
 
###Configuration
- enter your domain in index.php L2. 
- create the markup for your esp with **create-c-string.php** copy the generated string and set it in the handleRoot() function
- Enable [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) on your webserver

###BUILD
You need some Hipster tools for the  Frontend and a Web server with PHP support

 * grunt
 * npm
 * bower


####Enable CORS in Apache2

sudo a2enmod headers

sudo service apache2 restart
