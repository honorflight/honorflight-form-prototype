var modules = require("modules");

modules.controllerModule.controller('VeteranMedicalConditionsController', ['$scope', 'ReferenceDataService', 'VeteranMedicalConditionsService',
    function ($scope, ReferenceDataService, VeteranMedicalConditionsService) {

        $scope.veteranMedical= new VeteranMedicalConditions()
        function VeteranMedicalConditions(){
            this.ifSeizures = false;
            this.ifGrandMal = false;
            this.ifPetitMal = false;
            this.lastSeizure = "";
            this.breathProblems = "";
            this.nebulizer = "";
            this.oxygen = "";

        }
        function validateVeteranMedicalConditions(contact){
            //TODO validate contact
        }
        $scope.submitForm = function(){
            if(validateVeteranMedicalConditions()){
                GuardianContactsService.sendForm($scope.contacts);
            }
        }

    }
]);