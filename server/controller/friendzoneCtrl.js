var jsonfile = require("jsonfile"),
	path = require("path"),
	userFactory = require('../helper/userFactory')(),
	log = require('log4js').getLogger("index"),
	fileName = './client/data/users.json';

exports.saveUser = function (req, res) {
	log.debug("This is in the friendzone controller module");
	if(req.body && Object.keys(req.body).length !== 0 && req.file && Object.keys(req.file).length !== 0){
		var userJson = getUsers();
		if(userJson.data){
			userFactory.setUserObject(req.body, req.file);
			userJson.data.push(userFactory.getUserObject());
			jsonfile.writeFile(fileName, userJson, {spaces: 2}, function(err, result) {
	  			if(err){
	  				console.log("Error while writing json file", err);
	  				res.status(500).json({errMsg : "Service is temporarily unavailable. Please try after sometime."});
	  			}else{
	  				res.status(200).json({result: "success"});
	  			}
			});
		}else{
			res.status(404).json({errMsg : "File not found"});	
		}
	}else{
		res.status(500).json({errMsg : "Request is empty"});
	}
};


exports.retrieveUsers = function (req, res) {
	if(req){
		res.status(200).json({data : getUsers().data});
	}else{
		res.status(500).json({errMsg : "Request is empty"});
	}
};


function getUsers(){
	try{
		var fileData = jsonfile.readFileSync(fileName);
	  			if(!fileData){
	  				return {
	  					errMsg : "Service is temporarily unavailable. Please try after sometime."
	  				};
	  			}else{
	  				return fileData;
	  			}
	}catch(e){
		console.log("Error occurred while reading file", e);
	}
};