'use strict';

angular.module('webApp')

//Controller for registration purpose
    .controller('SignupCtrl', ['$scope', 'appConstants', 'appService', 'appNodeService', 'localStorageService', '$location',
                         function($scope, constants, appService, appNodeService, localStorageService, $location) {
        $scope.hasError = false;
        $scope.isStatePopulated = false;
        $scope.statusList = ['Single', 'Married', 'Divorce'];
        
        //User object initialize with default values
        $scope.user = {
            picUrl : "images/a.png",
            name : "",
            rStatus : "Single",
            hobby : "",
            age : "",
            gender : "male",
            location : {
                state : "",
                city : ""
            }   
        };

        /*
        * Initially look for local-storage. If it doesn't have userList object then it will call a http GET call to 
        *   retreive dummy userList from data/users.json file
        *
        */

         (function() {
            try{
                if(!localStorageService.get("userList")){
                    appService.getUserList().then( function(response) {
                        if(response){
                            localStorageService.set("userList", response.data);
                        }
                    });
                }
            }catch(e){
                console.log("Exception occurs while setting default userList in local-storage");
            }
        })();

        //watch function for state value to display/hide city text box
        $scope.$watch('user.location.state', function(newValue, oldValue, scope) {
               if(typeof newValue !== 'undefined' && newValue !== "" && newValue !== oldValue)
                    $scope.isStatePopulated = true;
                else
                    $scope.isStatePopulated = false;
        });

        //Signup event handler
        $scope.signup = function(){
            if($scope.user){
                try{
                    // Using nodejs based filestream
                    appNodeService.doSignup($scope.user).then( function(response){
                        if(response){
                            console.log(response);  
                            $location.path("/search"); 
                        }else{
                            $scope.hasError = false;
                            $scope.errorMsg = appConstants.SERVICE_ERROR
                        }
                    });

                    // Using local-storage strategy
                    /*var userList = localStorageService.get("userList");
                    userList.push($scope.user);
                    localStorageService.set("userList", userList);
                    $location.path("/search");*/
                }catch(e){
                    console.log("Exception occurs while pushing user object in userList local-storage");       
                }
            }else{
                $scope.hasError = false;
                $scope.errorMsg = appConstants.SERVICE_ERROR;
            }
        };
        
    }]);