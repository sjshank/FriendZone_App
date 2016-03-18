var jsonfile = require("jsonfile"),
	path = require("path"),
	userFactory = require('../helper/userFactory')(),
	log = require('log4js').getLogger("firendzoneCtrl"),
	fileName = './client/data/users.json';

exports.saveUser = function (req, res) {
	log.debug("Inside saveUser method");
	if(req.body && Object.keys(req.body).length !== 0 && req.file && Object.keys(req.file).length !== 0){
		var userJson = getUsers();
		if(userJson.data){
			userFactory.setUserObject(req.body, req.file);
			userJson.data.push(userFactory.getUserObject());
			jsonfile.writeFile(fileName, userJson, {spaces: 2}, function(err, result) {
				log.debug("Inside callback function of file write");
	  			if(err){
	  				log.error("Error while writing json file", err);
	  				res.status(500).json({errMsg : "Service is temporarily unavailable. Please try after sometime."});
	  			}else{
	  				log.debug("File written successfully");
	  				res.status(200).json({result: "success"});
	  			}
			});
		}else{
			log.debug("File not found");
			res.status(404).json({errMsg : "File not found"});	
		}
	}else{
		log.debug("Request for save user is empty");
		res.status(500).json({errMsg : "Request is empty"});
	}
};


exports.retrieveUsers = function (req, res) {
	if(req){
		log.debug("User list retrieved");
		res.status(200).json({data : getUsers().data});
	}else{
		log.debug("Request for retrieving user list is empty");
		res.status(500).json({errMsg : "Request is empty"});
	}
};


function getUsers(){
	try{
		var fileData = jsonfile.readFileSync(fileName);
	  			if(!fileData){
	  				log.debug('file contains empty data');
	  				return {
	  					errMsg : "Service is temporarily unavailable. Please try after sometime."
	  				};
	  			}else{
	  				return fileData;
	  			}
	}catch(e){
		log.error("Error occurred while reading file", e);
		console.log("Error occurred while reading file", e);
	}
};