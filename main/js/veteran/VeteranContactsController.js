var modules = angular.module('VeteranContacts', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('VeteranContactsController', ['$scope', 'ReferenceDataService', 'VeteranContactsService', 'sharedValues',
    function ($scope, ReferenceDataService, VeteranContactsService, sharedValues) {

        $scope.submitted = false;
        $scope.contacts =[];
        $scope.contacts.push(new Contact("Alternate", "Alternate Contact (son, daughter, caregiver)"));
        $scope.contacts.push(new Contact("Emergency", "Emergency Contact (if different)"));

        function Contact(type, header){
            this.type = type;
            this.header = header;
            this.name = "";
            this.address = "";
            this.city = "";
            this.state = "";
            this.zip = "";
            this.primaryPhone = "";
            this.alternatePhone = "";
            this.relationship = "";
        }

        $scope.duplicateContact = function() {
            var alternate = $scope.contacts[0];
            var emergency = $scope.contacts[1];

            emergency.name = alternate.name;
            emergency.address = alternate.address;
            emergency.city = alternate.city;
            emergency.state = alternate.state;
            emergency.zip = alternate.zip;
            emergency.primaryPhone = alternate.primaryPhone;
            emergency.alternatePhone = alternate.alternatePhone;
            emergency.relationship = alternate.relationship;
        };

        $scope.submitVeteranContacts = function() {
            $scope.submitted = true;

            if(!$scope.veteranContactsForm.$invalid){
                VeteranContactsService.sendForm($scope.contacts).then(processSaveResponse);
            }
        };

        function processSaveResponse(response) {
            if(response.key) {
                //Saved successfully
            } else {
                //Save failed process response.message
            }
        }

        ReferenceDataService.getReferenceData('Veteran').then(processReferenceData);

        function processReferenceData(referenceData) {
            $scope.relationshipTypes = referenceData.RELATIONSHIP_TYPE__c;
        }

        util.setBreadcrumb('#veteranContacts');
    }
]).factory('VeteranContactsService', ['$http', function ($http) {
    return {
        sendForm: function (contacts) {
            return $http.post('url',contacts);
        }
    };
}]);
