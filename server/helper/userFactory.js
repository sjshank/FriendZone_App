module.exports = function userFactory () {
	var userFactory = {};
	userFactory.getUserObject = getUserObject;
	userFactory.setUserObject = setUserObject;

	return userFactory;

	function getUserObject(){
		return this.userFactory;
	}

	function setUserObject(userObject, fileObject){
		console.log("Inside userFactory : ", userObject);
	  	this.userFactory = {
		  picUrl: fileObject.filename ? 'images/' + fileObject.filename : 'images/a.png',
	      name: userObject.name,
	      rStatus: userObject.rStatus,
	      hobby: userObject.hobby,
	      age: userObject.age,
	      gender: userObject.gender,
	      location: {
	        state: userObject.state,
	        city: userObject.city
	      }
		}
	}
};