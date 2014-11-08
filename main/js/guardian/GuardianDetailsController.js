var modules = angular.module('GuardianDetails', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('GuardianDetailsController', ['$scope', 'ReferenceDataService', 'GuardianDetailsService',
    function ($scope, ReferenceDataService, GuardianDetailsService) {

        $scope.details = new Details();
        function Details(){
            this.howDidYouLearn = "";
            this.volunteerReason = "";
            this.volunteerExperience = "";
            this.ableToPushVeteran = false;
            this.ableToLift100lbs = false;
            this.physicalLimitations = "";
            this.medicalExperience = "";

        }
        function validateDetails(){

        }
        $scope.submitForm = function(){
            if(validateDetails()){
                GuardianDetailsService.sendForm($scope.details).success();
            }
        }
    }
]).factory('GuardianDetailsService', ['$http', function ($http) {
    return {
        sendForm: function (details) {
            return $http.post('api/budget/budgets.do',details);
        }
    };
}]);