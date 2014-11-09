/**
 * Created by cgshaf on 11/8/14.
 */
(function (angular, exports) {

    angular.module('hfApp',
        [
            'ui.router',
            'ui.bootstrap',
            'GuardianDetails',
            'GuardianContacts',
            'GuardianPersonalInformation',
            'MedicationList',
            'VeteranPersonalInfo',
            'FormGroup',
            'VeteranComments',
            'VeteranContacts',
            'EmergencyRelease',
            'MedicalConditions',
            'MedicationList',
            'ServiceHistory',
            'VeteranTravel',
            'ReferenceData'
        ]
    ).config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('guardianDetails', {
                    url: "/guardianDetails",
                    templateUrl: 'partials/guardian/Guardian_Details.html',
                    controller: 'GuardianDetailsController'
                }).state('guardianContacts', {
                    url: "/guardianContacts",
                    templateUrl: 'partials/guardian/Guardian_Contacts.html',
                    controller: 'GuardianContactsController'
                }).state('guardianPersonalInformation', {
                    url: "/guardianPersonalInformation",
                    templateUrl: 'partials/guardian/Guardian_Personal_Information.html',
                    controller: 'GuardianPersonalInformationController'
                }).state('veteranPersonalInformation', {
                    url: "/veteranPersonalInformation",
                    templateUrl: 'partials/veteran/Veteran_Personal_Information.html',
                    controller: "VeteranPersonalInformationController"
                }).state('veteranTravel', {
                    url: "/veteranTravel",
                    templateUrl: 'partials/veteran/Veteran_Travel.html',
                    controller: "VeteranTravelController"
                }).state('veteranContacts', {
                    url:"/veteranContacts",
                    templateUrl:'partials/veteran/Veteran_Contacts.html',
                    controller:'VeteranContactsController'
                }).state('veteranServiceHistory', {
                    url:"/veteranServiceHistory",
                    templateUrl:'partials/veteran/Veteran_Service_History.html',
                    controller:'VeteranServiceHistoryController'
                }).state('veteranEmergencyRelease',{
                    url:'/veteranEmergencyRelease',
                    templateUrl:'partials/veteran/Veteran_Emergency_Release.html',
                    controller:'VeteranEmergencyReleaseController'
                }).state('veteranMedications', {
                    url:"/veteranMedications",
                    templateUrl: 'partials/veteran/Veteran_Medication_List.html',
                    controller: "VeteranMedicationListController"
                }).state('veteranMedicalConditions', {
                    url:"/veteranMedicalConditions",
                    templateUrl:'partials/veteran/Veteran_Medical_Conditions.html',
                    controller: 'VeteranMedicalConditionsController'
                }).state('veteranComments', {
                    url:'/veteranComments',
                    templateUrl:'partials/veteran/Veteran_Comments.html',
                    controller: 'VeteranCommentsController'
                });
     }]).service('sharedValues', function () {
            this.accountIdentifier = "testalssa";

            this.getAccountIdentifier = function() {
                return this.accountIdentifier;
            };

            this.setAccountIdentifier = function(value) {
                this.accountIdentifier = value;
            };
     });

}(angular, window));
