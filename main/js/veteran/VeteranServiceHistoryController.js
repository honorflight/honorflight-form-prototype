var modules = angular.module('ServiceHistory', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);
var _ = require("underscore");

modules.controller('VeteranServiceHistoryController', ['$scope', 'VeteranServiceHistoryService',
    function ($scope, VeteranServiceHistoryService) {

        $scope.veteranServiceHistory = new VeteranServiceHistory();

        function VeteranServiceHistory(){
            this.branch = "";
            this.startDate = "";
            this.endDate = ""
            this.rank = "";
            this.theater = "";
            this.war = "";
            this.activity = "";
            this.awards = "";
        }
        function validateVeteranInfo(){

        }

        $scope.submitForm = function(){
            if(validateVeteranInfo()){

            }
        };
    }
]).factory('VeteranServiceHistoryService', ['$http', function ($http) {
    return {
        sendForm: function (serviceHistory) {
            return $http.post('api/budget/budgets.do',serviceHistory);
        }
    };
}]);
