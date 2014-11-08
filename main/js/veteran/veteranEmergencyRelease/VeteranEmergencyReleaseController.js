var modules = require("modules");

modules.controllerModule.controller('VeteranEmergencyReleaseController', ['$scope', 'ReferenceDataService', 'VeteranEmergencyReleaseService',
    function ($scope, ReferenceDataService, VeteranEmergencyReleaseService) {
        $scope.emergency_release= [new EmergencyRelease()];
        function EmergencyRelease(){
            this.emergencyRelease="";
        }
    }
]);
