var modules = angular.module('GuardianDetails', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('GuardianDetailsController', ['$scope',  'GuardianDetailsService','sharedValues',
    function ($scope,  GuardianDetailsService, sharedValues) {

        $scope.submitted = false;
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
        $scope.saveGuardianDetails = function(){
            $scope.submitted = true;
            if(!$scope.guardianDetailsForm.$invalid){
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