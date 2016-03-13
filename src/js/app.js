/*
*	app.js for initializing angular module container.
*   Defining routes, value and rootscope.
*/

'use strict';

angular.module('webApp', ['ngRoute', 'ui.bootstrap', 'LocalStorageModule'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl:'views/home.html'
            })
            .when('/signup', {
                controller:'SignupCtrl',
                templateUrl:'views/signup.html'
            })
            .when('/search', {
                controller:'SearchCtrl',
                templateUrl:'views/search.html'
            })
            .otherwise({
                redirectTo:'/'
            });
    }])

//initializing localstorage service provider at module level
.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('webApp')
    .setStorageType('localStorage')
    .setNotify(true, true)
})
.value('URL', 'data/users.json')
.constant('appConstants', {
        SERVICE_ERROR : "Service is temporarily unavailable. Please try after sometime."
})
.run(['$rootScope', function(rootScope){
    rootScope.subHeading = "An AngularJS framework based web application to find people and add yourself in a location wise friend region.";
    rootScope.NAME_ERR = "Please enter a valid name. It should not be numeric nor alphanumeric.";
    rootScope.HOBBY_ERR = "Please enter a valid hobby. It should not be numeric nor alphanumeric.";
    rootScope.TITLE_ERR = "Please enter a valid title. It should not be numeric nor alphanumeric.";
    rootScope.AGE_ERR = "Age should be numeric. It should between 0 to 99.";
    rootScope.STATE_ERR = "Please enter a valid state. It should not be numeric nor alphanumeric.";
    rootScope.CITY_ERR = "Please enter a valid city. It should not be numeric nor alphanumeric.";
}]);

