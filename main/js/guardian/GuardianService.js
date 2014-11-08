define(function(require) {
    'use strict';

    var modules = require('modules');

    modules.serviceModule.factory('GuardianService', ['$http', '$q',
        function($http, $q) {
            return {
                createGuardian: function(guardian) {
                    var url = undefined;
                    var defer = $q.defer();

                    $http.post(url, guardian).then(function (result) {
                        defer.resolve(result.data);
                    }, function () {
                        defer.reject('Unable to save guardian!');
                    });

                    return defer.promise;
                }
            };
        }
    ]);
});