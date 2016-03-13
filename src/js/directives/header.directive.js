'use strict';

angular.module('webApp')

//directive for common header
.directive('appHeader', function() {
    return {
        restrict: 'E',
        scope: {
            selected: '@'
        },
        link: function(scope, element, attrs) {

        },
        templateUrl: 'views/header.tpl.html'
    }
});