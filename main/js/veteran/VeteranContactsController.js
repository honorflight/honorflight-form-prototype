define(function (require) {
    var _ = require("underscore");
    var $ = require('jquery');
    var angular = require("angular");
    var modules = require("modules");

    modules.controllerModule.controller('VeteranContactsController', ['$scope', 'ReferenceDataService', 'VeteranContactsService',
        function ($scope, ReferenceDataService, VeteranContactsService) {

        }
    ]);
});