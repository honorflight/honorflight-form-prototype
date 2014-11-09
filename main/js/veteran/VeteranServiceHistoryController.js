var modules = angular.module('ServiceHistory', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);


modules.controller('VeteranServiceHistoryController', ['$scope', 'VeteranServiceHistoryService',
    function ($scope, VeteranServiceHistoryService) {

        $scope.veteranServiceHistory = new VeteranServiceHistory();
        $scope.branches = [];
        $scope.ranks = [];
        $scope.wars =[];
        $scope.serviceAwards = [];
        $scope.submitted = false;

        function VeteranServiceHistory() {
            this.branch = "";
            this.startDate = "";
            this.endDate = "";
            this.rank = "";
            this.theater = "";
            this.war = "";
            this.activity = "";
            this.awards = [new Award()];
        }

        function Award() {
            this.name = "";
            this.quantity = "";
            this.comment = "";
        }

        $scope.addAward = function() {
            $scope.veteranServiceHistory.awards.push(new Award());
        };

        $scope.saveServiceHistory = function(){
            $scope.submitted = true;

            if(!$scope.veteranServiceHistoryForm.$invalid){
                VeteranServiceHistoryService.sendForm($scope.veteranServiceHistory).then(processSaveResponse);
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
]).factory('VeteranServiceHistoryService', ['$http', function ($http) {
    return {
        sendForm: function (serviceHistory) {
            return $http.post('api/budget/budgets.do',serviceHistory);
        }
    };
}]);
