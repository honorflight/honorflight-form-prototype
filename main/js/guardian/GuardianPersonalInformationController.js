var modules = angular.module('GuardianPersonalInformation', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('GuardianPersonalInformationController', ['$scope', 'GuardianPersonalInformationService',
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
            this.homePhone = "";
            this.cellPhone = "";
            this.email = "";
            this.occupation = "";
            this.age = "age";
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
]).factory('GuardianPersonalInformationService', ['$http', function ($http) {
    return {
        sendForm: function (details) {
            return $http.post('api/budget/budgets.do',details);
        }
    };
}]);
