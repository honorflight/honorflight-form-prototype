var modules = angular.module('VeteranPersonalInfo', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('VeteranPersonalInformationController', ['$scope', 'VeteranPersonalInformationService',
    function ($scope, VeteranPersonalInformationService) {

        $scope.veteranInfo = new VeteranInfo();
        $scope.submitted = false;

        $scope.shirtSizes = [];

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

        $scope.saveVeteranInfo = function(){

            $scope.submitted = true;

            if(!$scope.veteranPersonalInfoForm.$invalid){
                VeteranPersonalInformationService.sendForm($scope.veteranInfo).then(processSaveResponse);
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
]).factory('VeteranPersonalInformationService', ['$http', function ($http) {
    return {
        sendForm: function (veteranInfo) {
            return $http.post('api/budget/budgets.do',veteranInfo);
        }
    };
}]);
