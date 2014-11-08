'use strict';

var modules = require('modules');

modules.serviceModule.factory('ReferenceDataService', ['$http', '$q',
    function($http, $q) {
        return {
            getReferenceData: function(objectType, fields) {
                var url = "real url?objectType="+objectType+"&fields="+fields;
                var defer = $q.defer();

                $http.get(url).then(function (result) {
                    defer.resolve(result.data);
                }, function () {
                    defer.reject('Unable to get '+ objectType +'!');
                });

                return defer.promise;
            }
        };
    }
]);