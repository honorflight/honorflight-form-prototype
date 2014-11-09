var modules = angular.module('GuardianContacts', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('GuardianContactsController', ['$scope', 'GuardianContactsService',
    function ($scope, GuardianContactsService) {
        $scope.submitted = false;

        $scope.contacts = [];
        $scope.contacts.push(new Contact("personalReference"));
        $scope.contacts.push(new Contact("emergencyReference"));
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
        $scope.saveGuardianContacts = function(){
            $scope.submitted = true;
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