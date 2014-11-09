var modules = angular.module('VeteranPersonalInfo', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('VeteranPersonalInformationController', ['$scope', 'ReferenceDataService', 'VeteranPersonalInformationService', 'sharedValues',
    function ($scope, ReferenceDataService, VeteranPersonalInformationService, sharedValues) {

        $scope.veteranInfo = new VeteranInfo();
        $scope.submitted = false;

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

        $scope.saveVeteranInfo = function() {

            $scope.submitted = true;

            if(!$scope.veteranPersonalInfoForm.$invalid){
                VeteranPersonalInformationService.sendForm($scope.veteranInfo).then(processSaveResponse);
            }
        };

        function validateVeteran() {
            if($scope.veteranInfo.homePhone.length === 0 && $scope.veteranInfo.cellPhone.length === 0 && $scope.veteranInfo.email.length === 0) {
                $scope.veteranPersonalInfoForm.saveVeteranInformation.$error.contactInfo = false;
            }
        }

        function processSaveResponse(response) {
            if(response.key) {
                //Saved successfully
            } else {
                //Save failed process response.message
            }
        }

        ReferenceDataService.getReferenceData('Veteran').then(processReferenceData);

        function processReferenceData(referenceData) {
            $scope.shirtSizes = referenceData.SHIRT_SIZE__c;
        }
    }
]).factory('VeteranPersonalInformationService', ['$http', function ($http) {
    return {
        sendForm: function (veteranInfo) {
            return $http.post('api/budget/budgets.do',veteranInfo);
        }
    };
}]);
