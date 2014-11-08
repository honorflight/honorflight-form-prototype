define(function (require) {
    var _ = require("underscore");
    var $ = require('jquery');
    var angular = require("angular");
    var modules = require("modules");

    modules.controllerModule.controller('GuardianDetailsController', ['$scope', 'ReferenceDataService', 'GuardianDetailsService',
        function ($scope, ReferenceDataService, GuardianDetailsService) {

        }
    ]);
});