var modules = angular.module('GuardianPersonalInformation', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('GuardianPersonalInformationController', ['$scope', 'GuardianPersonalInformationService','sharedValues',
    function ($scope, ReferenceDataService, GuardianPersonalInformationService, sharedValues) {

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

        $scope.saveGuardianPersonalInformation = function(){
            $scope.submitted = true;
            if(!$scope.guardianPersonalInformationForm.$invalid){
                GuardianPersonalInformationService.sendForm($scope.personalInfo)
                .success(function(data, status, headers, config) {
                    if(data.identifier){
                        $scope.accountIdentifier = data.identifier;
                    }
                }).error(function(data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                });
            }
        }
    }
]).factory('GuardianPersonalInformationService', ['$http', function ($scope,$http) {
    return {
        sendForm: function (details) {
            return $http.post('url',details);
        }
    };
}]);
