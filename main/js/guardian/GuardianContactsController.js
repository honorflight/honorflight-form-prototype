var modules = require("modules");

modules.controllerModule.controller('GuardianContactsController', ['$scope', 'ReferenceDataService', 'GuardianContactsService',
    function ($scope, ReferenceDataService, GuardianContactsService) {
        $scope.contacts = [new Contact("personalReference"), new Contact("emergencyReference")];
        function Contact(type){
            this.type = type;
            this.name = "";
            this.email = "";
            this.address = "";
            this.city = "";
            this.state = "";
            this.zip = "";
            this.dayPhone = "";
            this.evePhone = "";
        }
        function validateContact(contact){
            //TODO validate contact
        }
        $scope.submitForm = function(){
            if(validateContact()){

            }
        }
    }
]);