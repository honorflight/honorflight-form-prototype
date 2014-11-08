var modules = require("modules");
var _ = require("underscore");

modules.controllerModule.controller('VeteranServiceHistoryController', ['$scope', 'VeteranServiceHistoryService',
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