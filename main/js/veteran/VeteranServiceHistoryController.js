var modules = require("modules");

modules.controllerModule.controller('VeteranServiceHistoryController', ['$scope', 'ReferenceDataService', 'VeteranServiceHistoryService',
    function ($scope, ReferenceDataService, VeteranServiceHistoryService) {

        $scope.veteranServiceHistory = new VeteranServiceHistory();
        $scope.branches = {};

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
        }
    }
]);