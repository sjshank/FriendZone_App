'use strict';

angular.module('webApp')

    //Search controller for rendering list of users
    .controller('SearchCtrl', ['$scope', 'appConstants', 'localStorageService', function($scope, constants, localStorageService) {
        $scope.hasError = false;
        $scope.userList = [];

        //Function for populating userList from local-storage and rendering on screen
        (function() {
            try{
                if(localStorageService.get('userList')){
                    $scope.hasError = false;
                    $scope.userList = localStorageService.get('userList');
                }else{
                    $scope.hasError = true;
                    $scope.errorMsg = constants.SERVICE_ERROR;
                }
            }catch(e){
                console.log("Exception occurs while rendering user list");
            }
        })();
        
    }]);