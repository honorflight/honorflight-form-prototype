var modules = angular.module('EmergencyRelease', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('VeteranEmergencyReleaseController', ['$scope', 'ReferenceDataService', 'VeteranEmergencyReleaseService',
    function ($scope, ReferenceDataService, VeteranEmergencyReleaseService) {

        $scope.emergencyRelease = new EmergencyRelease();

        function EmergencyRelease(){
            this.veteranId = "";
            this.signature = "";
        }

        $scope.submitVeteranEmergencyRelease = function(){
            if(!$scope.veteranEmergencyReleaseForm.$invalid){
                VeteranEmergencyReleaseService.saveVeteranEmergencyRelease($scope.emergencyRelease).then(processSaveResponse);
            }
        };

        function processSaveResponse(response) {
            if(response.key) {
                //Saved successfully
            } else {
                //Save failed process response.message
            }
        }
    }
]);
