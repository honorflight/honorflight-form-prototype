var modules = angular.module('MedicalConditions', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('VeteranMedicalConditionsController', ['$scope', 'ReferenceDataService', 'VeteranMedicalConditionsService',
    function ($scope, ReferenceDataService, VeteranMedicalConditionsService) {

        $scope.veteranMedical= new VeteranMedicalConditions();

        function VeteranMedicalConditions(){
            this.conditionType="";
            this.condition="";
            this.conditionComments="";
        }
        function validateVeteranMedicalConditions(contact){
            //TODO validate contact
        }
        $scope.submitForm = function(){
            if(validateVeteranMedicalConditions()){
                VeteranMedicalConditionsService.sendForm($scope.veteranMedical);
            }
        }

    }
]).factory('VeteranMedicalConditionsService', ['$http', function ($http) {
    return {
        sendForm: function (medicalConditions) {
            return $http.post('api/budget/budgets.do',medicalConditions);
        }
    };
}]);
