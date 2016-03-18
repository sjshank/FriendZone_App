
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
                        deferred.resolve(data);
                    });
                return deferred.promise;
            };
        };
    }])

    .factory('appNodeService', ['$q', '$http', 'SERVICEURL', function($q, $http, url) {
        
        return new function() {
            this.doSignup = function(formData) {
                var headerConfig = {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                },
                                transformRequest: function (data, headersGetter) {
                                    var formData = new FormData();
                                    angular.forEach(data, function (value, key) {
                                        formData.append(key, value);
                                    });

                                    var headers = headersGetter();
                                    delete headers['Content-Type'];

                                    return formData;
                                }
                        };

                var deferred = $q.defer();
                    $http.post(url, formData, headerConfig).
                        success(function (data, status, headers, config) {
                            deferred.resolve(data);
                        }).
                        error(function(data, status, headers, config) {
                            deferred.resolve(data);
                    });
                        return deferred.promise;
                };            
            this.retrieveUsers = function() {
                var deferred = $q.defer();
                $http.get(url).
                    success(function(data, status, headers, config) {
                        deferred.resolve(data);
                    }).
                    error(function(data, status, headers, config) {
                        deferred.resolve(data);
                    });
                return deferred.promise;
            };
        };
    }]);