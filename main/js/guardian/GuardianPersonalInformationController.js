var modules = require("../modules");

modules.controllerModule.controller('GuardianPersonalInformationController', ['$scope', 'ReferenceDataService', 'GuardianPersonalInformationService',
    function ($scope, ReferenceDataService, GuardianPersonalInformationService) {
        $scope.personalInfo = new PersonalInfo();
        function PersonalInfo(type){
            this.type = type;
            this.firstName = "";
            this.lastName = "";
            this.middleName = "";
            this.nickName = "";
            this.address = "";
            this.city = "";
            this.state = "";
            this.zip = "";
            this.dayPhone = "";
            this.eveningPhone = "";
            this.cellPhone = "";
            this.email = "";
            this.occupation = "";
            this.age = "";
            this.dateOfBirth = "";
            this.branch = "";
            this.whereServed = "";
            this.whenServed = "";
            this.veteranName = "";
        }
        function validatePersonalInfo(PersonalInfo){
            //TODO validate Personal Info
        }
        $scope.submitForm = function(){
            if(validatePersonalInfo()){
                GuardianPersonalInformationService.sendForm($scope.personalInfo);
            }
        }
    }
]);
