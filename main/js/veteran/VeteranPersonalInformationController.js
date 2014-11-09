var modules = angular.module('VeteranPersonalInfo', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('VeteranPersonalInformationController', ['$scope', 'ReferenceDataService', 'VeteranPersonalInformationService',
    function ($scope, ReferenceDataService, VeteranPersonalInformationService) {

        $scope.veteranInfo = new VeteranInfo();

        function VeteranInfo(){
            this.firstName = "";
            this.lastName = "";
            this.middleName = "";
            this.nickname = "";
            this.dateOfBirth = "";
            this.age = "";
            this.tShirtSize = "";
            this.address = "";
            this.city = "";
            this.state = "";
            this.zipCode = "";
            this.county = "";
            this.homePhone = "";
            this.cellPhone = "";
            this.email = "";
        }
        function validateVeteranInfo(){

        }
        $scope.submitForm = function(){
            if(validateVeteranInfo()){

            }
        }
    }
]).factory('VeteranPersonalInformationService', ['$http', function ($http) {
    return {
        sendForm: function (veteranInfo) {
            return $http.post('api/budget/budgets.do',veteranInfo);
        }
    };
}]);
