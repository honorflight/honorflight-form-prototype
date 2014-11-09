var modules = angular.module('VeteranContacts', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('VeteranContactsController', ['$scope', 'VeteranContactsService',
    function ($scope, VeteranContactsService) {

        $scope.type = undefined;
        $scope.contact = new Contact($scope.type);

        function Contact(type){
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

        $scope.submitVeteranContacts = function(){
            if(!$scope.veteranContactsForm.$invalid){
                VeteranContactsService.sendForm($scope.contact).then(processSaveResponse);
            }
        };

        function processSaveResponse(response) {
            if(response.key) {
                //Saved successfully
            } else {
                //Save failed process response.message
            }
        }
    }
]).factory('VeteranContactsService', ['$http', function ($http) {
    return {
        sendForm: function (contacts) {
            return $http.post('api/budget/budgets.do',contacts);
        }
    };
}]);
