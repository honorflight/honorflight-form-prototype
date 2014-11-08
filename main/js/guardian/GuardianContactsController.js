var modules = require("modules");

modules.controllerModule.controller('GuardianContactsController', ['$scope', 'ReferenceDataService', 'GuardianContactsService',
    function ($scope, ReferenceDataService, GuardianContactsService) {
        function contact(type){
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
    }
]);