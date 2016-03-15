var jsonfile = require("jsonfile"),
	path = require("path"),
	fileName = './client/data/users.json';

exports.saveUser = function (req, res) {
	if(req.body && Object.keys(req.body).length !== 0){
		var userJson = getUsers();
		if(userJson.data){
			userJson.data.push(req.body);
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
		res.status(500).json({errMsg : "Request body is empty"});
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
	var fileData = jsonfile.readFileSync(fileName);
  			if(!fileData){
  				return {
  					errMsg : "Service is temporarily unavailable. Please try after sometime."
  				};
  			}else{
  				return fileData;
  			}
};