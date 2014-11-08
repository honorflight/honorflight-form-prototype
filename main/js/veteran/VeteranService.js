'use strict';

var modules = require('modules');

modules.serviceModule.factory('VeteranService', ['$http', '$q',
    function($http, $q) {
        return {
            createVeteran: function(veteran) {
                var url = undefined;
                var defer = $q.defer();

                $http.post(url, veteran).then(function (result) {
                    defer.resolve(result.data);
                }, function () {
                    defer.reject('Unable to save veteran!');
                });

                return defer.promise;
            }
        };
    }
]);