var modules = angular.module('MedicationList', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('VeteranMedicationListController', ['$scope', 'VeteranMedicationListService',
    function ($scope, VeteranMedicationListService) {

        $scope.medicationList = [];
        $scope.medicationList.push(new Medication());

        function Medication(){
            this.name = "";
            this.dose = "";
            this.time = "";
            this.route = "";
        }
        function validateMedicationList(medicationList){
            //TODO validate medication List
        }

        $scope.addNewMedication = function() {
            $scope.medicationList.push(new Medication());
        }
    }
]).factory('VeteranMedicationListService', ['$http', function ($http) {
    return {
        sendForm: function (medicationList) {
            return $http.post('api/budget/budgets.do',medicationList);
        }
    };
}]);