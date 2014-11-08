var modules = require("modules");

modules.controllerModule.controller('VeteranContactsController', ['$scope', 'ReferenceDataService', 'VeteranContactsService',
    function ($scope, ReferenceDataService, VeteranContactsService) {
        function contact(type){
            this.type = type;
            this.name = "";
            this.address = "";
            this.city = "";
            this.state = "";
            this.zip = "";
            this.phone = "";
            this.altPhone = "";
            this.relationship = "";
            this.name_em = "";
            this.address_em = "";
            this.city_em = "";
            this.state_em = "";
            this.zip_em = "";
            this.phone_em = "";
            this.altPhone_em = "";
            this.relationship_em = "";
        }
        function validateContact(contact){
            //TODO validate contact
        }
    }
]);
