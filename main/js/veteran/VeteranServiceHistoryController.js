var modules = angular.module('ServiceHistory', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);
var _ = require("underscore");

modules.controller('VeteranServiceHistoryController', ['$scope', 'VeteranServiceHistoryService',
    function ($scope, VeteranServiceHistoryService) {

        $scope.veteranServiceHistory = new VeteranServiceHistory();

        function VeteranServiceHistory(){
            this.branch = "";
            this.startMonth = "";
            this.startYear = "";
            this.endMonth = "";
            this.endYear = "";
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
]);
