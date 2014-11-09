var modules = angular.module('VeteranTravel', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('VeteranTravelController', ['$scope', 'VeteranTravelService',
    function ($scope, VeteranTravelService) {

        $scope.travel = new Travel();

        function Travel(){
            this.visited = "";
            this.whenVisited = "";
            this.isGuardianRequested = "";
            this.guardianRequested = "";
            this.address = "";
            this.city = "";
        }
        function validateTravel(travel){
            //TODO validate travel
        }
    }
]).factory('VeteranTravelService', ['$http', function ($http) {
    return {
        sendForm: function (travel) {
            return $http.post('api/budget/budgets.do',travel);
        }
    };
}]);
