var modules = angular.module('VeteranTravel', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('VeteranTravelController', ['$scope', 'VeteranTravelService', 'sharedValues',
    function ($scope, VeteranTravelService, sharedValues) {

        $scope.travel = new Travel();
        $scope.submitted = false;

        function Travel(){
            this.visited = "";
            this.whenVisited = "";
            this.withWhom = "";
            this.companionRequested = "";
            this.guardianRequest = "";
            this.veteranRequests = "";
        }

        $scope.saveVeteranTravel = function(){

            $scope.submitted = true;

            if(!$scope.veteranTravelForm.$invalid){
                VeteranTravelService.sendForm($scope.travel).then(processSaveResponse);
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
]).factory('VeteranTravelService', ['$http', function ($http) {
    return {
        sendForm: function (travel) {
            return $http.post('url', travel);
        }
    };
}]);
