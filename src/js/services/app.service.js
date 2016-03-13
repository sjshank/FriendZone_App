
'use strict';
//factory method to retrieve list of users
angular.module('webApp')
    .factory('appService', ['$q', '$http', 'URL', function($q, $http, url) {
        
        return new function() {
            this.getUserList = function() {
                var deferred = $q.defer();
                $http.get(url).
                    success(function(data, status, headers, config) {
                        deferred.resolve(data);
                    }).
                    error(function(data, status, headers, config) {
                        deferred.reject([data, status, headers, config]);
                    });
                return deferred.promise;
            };
        };
    }]);