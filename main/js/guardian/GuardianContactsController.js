var modules = angular.module('GuardianContacts', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('GuardianContactsController', ['$scope', 'ReferenceDataService', 'GuardianContactsService',
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
                GuardianContactsService.sendForm($scope.contacts);
            }
        }
    }
]).factory('GuardianContactsService', ['$http', function ($http) {
    return {
        sendForm: function (details) {
            return $http.post('api/budget/budgets.do',details);
        }
    };
}]);