# FriendZone_App

An AngularJS framework based web application to find people and add yourself in your location.
	
	Server side is built using ExpressJS and NodeJS.
	service is mainly used for loading/writing data in .json file using 'FS' module.
	User can upload a profile picture via signup page. 
	This picture upload is handle at client side in Angularjs using 'multipart/form-data'
	request which contains file and fields object.
	At service side, I have used 'MULTER' module for storing images inside 'images' folder.
	
	It also contains commented out code for HTML5 local-storage for 
	storing/retrieving user details from localStorage.
	
	
Programming Language :

    1.JavaScript

Web/Application Server :

    1.Nodejs

Frameworks :

    1. Expressjs - server side framework
    2. Angularjs - client side framework
    
Libraries : 

    1. fs - to read/write data in .json file
    2. multer - file upload at server side
    
Tools :

    1.SublimeText2
    
Steps to follow for running app :

    1. install Nodejs from here https://nodejs.org/en/ and make node env up. 
    This will automatically install NPM package in your system.
    2. Install Python 2.7+ version from here https://www.python.org/download/releases/2.7/
    3. Run 'npm install' on 'package.json'. This will create new folder 'node_modules' 
    inside same directory where you can see all the mentioned dependencies inside
    'package.json' will gets installed.
    4. Run either 'grunt' or 'node app.js' over root directory.
    'grunt' command will execute all the task mentioned inside 'gruntfile.js'.
    
    Hit "localhost:4000" to see running application
