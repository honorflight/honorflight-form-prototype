var modules = angular.module('EmergencyRelease', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('VeteranEmergencyReleaseController', ['$scope', 'ReferenceDataService', 'VeteranEmergencyReleaseService',
    function ($scope, ReferenceDataService, VeteranEmergencyReleaseService) {

        $scope.emergencyRelease = new EmergencyRelease();

        function EmergencyRelease(){
            this.signature = "";
        }

        $scope.submitVeteranEmergencyRelease = function(){
            if(!$scope.veteranEmergencyReleaseForm.$invalid){
                VeteranEmergencyReleaseService.sendForm($scope.emergencyRelease).then(processSaveResponse);
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
]).factory('VeteranEmergencyReleaseService', ['$http', function ($http) {
    return {
        sendForm: function (emergencyRelease) {
            return $http.post('api/budget/budgets.do',emergencyRelease);
        }
    };
}]);
