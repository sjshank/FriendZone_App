'use strict';

angular.module('webApp')

//directive for validating text boxes
.directive("alphatextbox", function () {
    return {
        restrict: "A",
        require: "?ngModel",
        link: function (scope, element, attributes, ngModel) {
            var ALPHA_REGEXP = /^[a-zA-Z_ ]*$/;
            ngModel.$validators.alphatextbox = function (val) {
                if (typeof val === 'undefined' || val === "" || (!ALPHA_REGEXP.test(val))) {
                    return false;
                }
                else{
                     return true;
                }
            };
        }
    };
})

//directive for validating age
.directive("agetextbox", function () {
    return {
        restrict: "A",
        require: "?ngModel",
        link: function (scope, element, attributes, ngModel) {
            var AGE_REGEXP = /^[0-9]{1,2}/;
            ngModel.$validators.agetextbox = function (val) {
                if (typeof val === 'undefined' || val === "" || (!AGE_REGEXP.test(val))) {
                    return false;
                }
                else{
                     return true;
                }
            };
        }
    };
});