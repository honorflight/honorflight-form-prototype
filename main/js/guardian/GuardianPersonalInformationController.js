var modules = angular.module('GuardianPersonalInformation', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('GuardianPersonalInformationController', ['$scope', 'GuardianPersonalInformationService',
    function ($scope, ReferenceDataService, GuardianPersonalInformationService) {

        $scope.personalInfo = new PersonalInfo();
        $scope.submitted = false;

        function PersonalInfo(){
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

        $scope.saveGuardianPersonalInformation = function(){
            $scope.submitted = true;
            if(!$scope.guardianPersonalInformationForm.$invalid){
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
