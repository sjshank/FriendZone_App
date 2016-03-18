'use strict';

angular.module('webApp')

    //Search controller for rendering list of users
    .controller('SearchCtrl', ['$scope', 'appConstants', 'appNodeService', 'localStorageService', function($scope, constants, appNodeService, localStorageService) {
        $scope.hasError = false;
        $scope.userList = [];

        //Function for populating userList from local-storage and rendering on screen
        (function() {
            try{
                appNodeService.retrieveUsers().then( function(response){
                        if(!response.errorMsg){
                            $scope.hasError = false;
                            $scope.userList = response.data;
                        }else{
                            $scope.hasError = false;
                            $scope.errorMsg = response.errorMsg || appConstants.SERVICE_ERROR;
                        }
                    });

                // Using local-storage strategy
                /*if(localStorageService.get('userList')){
                    $scope.hasError = false;
                    $scope.userList = localStorageService.get('userList');
                }else{
                    $scope.hasError = true;
                    $scope.errorMsg = constants.SERVICE_ERROR;
                }*/
            }catch(e){
                console.log("Exception occurs while rendering user list", e);
            }
        })();
        
    }]);