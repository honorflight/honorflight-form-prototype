var modules = require("modules");

modules.controllerModule.controller('VeteranMedicationListController', ['$scope', 'ReferenceDataService', 'VeteranMedicationListService',
    function ($scope, ReferenceDataService, VeteranMedicationListService) {
        $scope.veteranMedical= new VeteranMedicationList()
        function VeteranMedicationList(){
            this.ifAuthorize = false;
			this.medications=[{
				'name':"",
				'name':"",
				'time':"",
				'route':""
			}];
        }
        function validateVeteranMedicationList(){
        }
        $scope.submitForm = function(){
            if(validateVeteranMedicationList()){
                //GuardianContactsService.sendForm($scope.contacts);
            }
        }
		$scope.addNewMedication = function(){
			this.medications.push({
				'name':"",
				'name':"",
				'time':"",
				'route':""
			})
		}

    }
]);
