var modules = angular.module('EmergencyRelease', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('VeteranEmergencyReleaseController', ['$scope', 'VeteranEmergencyReleaseService', 'sharedValues',
    function ($scope, VeteranEmergencyReleaseService, sharedValues) {

        $scope.emergencyRelease = new EmergencyRelease();
        $scope.submitted = false;

        function EmergencyRelease(){
            this.signature = "";
        }

        $scope.saveEmergencyRelease = function(){
            $scope.submitted = true;

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

        util.setBreadcrumb('#veteranEmergencyRelease');
    }
]).factory('VeteranEmergencyReleaseService', ['$http', function ($http) {
    return {
        sendForm: function (emergencyRelease) {
            return $http.post('url',emergencyRelease);
        }
    };
}]);
