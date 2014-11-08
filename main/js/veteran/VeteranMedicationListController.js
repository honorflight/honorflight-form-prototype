define(function (require) {
    var _ = require("underscore");
    var $ = require('jquery');
    var angular = require("angular");
    var modules = require("modules");

    modules.controllerModule.controller('VeteranMedicationListController', ['$scope', 'ReferenceDataService', 'VeteranMedicationListService',
        function ($scope, ReferenceDataService, VeteranMedicationListService) {

        }
    ]);
});