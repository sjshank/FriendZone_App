'use strict';

angular.module('webApp')

//directive for rendering list of users using two way data binding
.directive("ngrenderUsers", function() {
            
                return  {
                    restrict : 'A',
                    templateUrl : 'views/userDetail.tpl.html',
                    scope : {
                        users : "="
                    },
                    link : function(scope, element, attrs, controller) {
                        
                    }
                };
})

//directive for file upload
/*.directive('ngfileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.ngfileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);*/

.directive('file', function () {
    return {
        scope: {
            file: '='
        },
        link: function (scope, el, attrs) {
            el.bind('change', function (event) {
                var file = event.target.files[0];
                scope.file = file ? file : undefined;
                scope.$apply();
            });
        }
    };
});