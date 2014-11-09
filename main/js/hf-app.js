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
            'MedicationList'
        ]
    ).config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('guardianDetails', {
                    url:"/guardianDetails",
                    templateUrl: 'partials/guardian/Guardian_Details.html',
                    controller: 'GuardianDetailsController'
                }).state('guardianContacts', {
                    url:"/guardianContacts",
                    templateUrl: 'partials/guardian/Guardian_Contacts.html',
                    controller: 'GuardianContactsController'
                }).state('guardianPersonalInformation',{
                    url:"/guardianPersonalInformation",
                    templateUrl: 'partials/guardian/Guardian_Personal_Information.html',
                    controller: 'GuardianPersonalInformationController'
                }).state('veteranMedication', {
                    url:"/veteranMedication",
                    templateUrl: 'partials/veteran/Veteran_Medication_List.html',
                    controller: "VeteranMedicationListController"
                });
     }]);

}(angular, window));
