var modules = angular.module('MedicalConditions', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('VeteranMedicalConditionsController', ['$scope', 'VeteranMedicalConditionsService', 'sharedValues',
    function ($scope, VeteranMedicalConditionsService, sharedValues) {

        $scope.veteranMedicalConditions = [new VeteranMedicalCondition()];
        $scope.submitted = false;
        $scope.conditionTypes = [];
        $scope.medicalConditions = [];

        function VeteranMedicalCondition(){
            this.conditionType = "";
            this.conditionName = "";
            this.conditionDate = "";
            this.comment = "";
        }

//        $scope.$watch('veteranMedicalConditions.experimentTypeId', function () {
//            setExperimentStages();
//        });TODO:How do we watch each properly

        $scope.addCondition = function() {
            $scope.veteranMedicalConditions.push(new VeteranMedicalCondition());
        };

        $scope.saveMedicalConditions = function(){
            $scope.submitted = true;

            if(!$scope.veteranMedicalConditionForm.$invalid){
                VeteranMedicalConditionsService.sendForm($scope.veteranMedicalConditions).then(processSaveResponse);
            }
        };

        function processSaveResponse(response) {
            if(response.key) {
                //Saved successfully
            } else {
                //Save failed process response.message
            }
        }

        util.setBreadcrumb('#veteranMedicalConditions');
    }
]).factory('VeteranMedicalConditionsService', ['$http', function ($http) {
    return {
        sendForm: function (medicalConditions) {
            return $http.post('url',medicalConditions);
        }
    };
}]);
