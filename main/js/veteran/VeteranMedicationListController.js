var modules = angular.module('MedicationList', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('VeteranMedicationListController', ['$scope', 'VeteranMedicationListService', 'sharedValues',
    function ($scope, VeteranMedicationListService, sharedValues) {

        $scope.medications = [];
        $scope.medications.push(new Medication());
        $scope.submitted = false;

        function Medication(){
            this.name = "";
            this.dose = "";
            this.frequency = "";
            this.route = "";
        }

        $scope.addMedication = function() {
            $scope.medications.push(new Medication());
        };

        $scope.saveMedicationList = function() {
            $scope.submitted = true;

            if(!$scope.veteranMedicationListForm.$invalid) {
                VeteranMedicationListService.sendForm($scope.medications).then(processSaveResponse);
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
]).factory('VeteranMedicationListService', ['$http', function ($http) {
    return {
        sendForm: function (medications) {
            return $http.post('api/budget/budgets.do',medications);
        }
    };
}]);