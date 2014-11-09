var modules = angular.module('MedicationList', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('VeteranMedicationListController', ['$scope', 'VeteranMedicationListService',
    function ($scope, VeteranMedicationListService) {
//modules.controllerModule.controller('VeteranMedicationListController', ['$scope', 'ReferenceDataService', 'VeteranMedicationListService',
//    function ($scope, ReferenceDataService, VeteranMedicationListService) {
//        $scope.veteranMedical= new VeteranMedicationList()
//        function VeteranMedicationList(){
//            this.ifAuthorize = false;
//			this.medications=[{
//				'name':"",
//				'name':"",
//				'time':"",
//				'route':""
//			}];
//        }
//        function validateVeteranMedicationList(){
//        }
//        $scope.submitForm = function(){
//            if(validateVeteranMedicationList()){
//                //GuardianContactsService.sendForm($scope.contacts);
//            }
//        }
//		$scope.addNewMedication = function(){
//			this.medications.push({
//				'name':"",
//				'name':"",
//				'time':"",
//				'route':""
//			})
//		}

        $scope.medicationList = [];
        $scope.medicationList.push(new Medication());

        function Medication(){
            this.medication = "";
            this.dose = "";
            this.time = "";
            this.route = "";
        }
        function validateMedicationList(medicationList){
            //TODO validate medication List
        }
    }
]).factory('VeteranMedicationListService', ['$http', function ($http) {
    return {
        sendForm: function (medicationList) {
            return $http.post('api/budget/budgets.do',medicationList);
        }
    };
}]);