var modules = require("modules");

modules.controllerModule.controller('GuardianDetailsController', ['$scope', 'ReferenceDataService', 'GuardianDetailsService',
    function ($scope, ReferenceDataService, GuardianDetailsService) {

        $scope.details = new Details();
        function Details(){
            this.howDidYouLearn = "";
            this.volunteerReason = "";
            this.volunteerExperience = "";
            this.ableToPushVeteran = false;
            this.ableToLift100lbs = false;
            this.physicalLimitations = "";
            this.medicalExperience = "";

        }
        function validateDetails(){

        }
        $scope.submitForm = function(){
            if(validateDetails()){

            }
        }
    }
]);