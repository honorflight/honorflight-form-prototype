/**
 * Created by cgshaf on 11/8/14.
 */
(function (angular, exports) {

    angular.module('hfApp',
        [
            'ui.router',
            'ui.bootstrap',
            'GuardianDetails',
            'GuardianContacts'
        ]
    ).config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('guardianDetails', {
                    url:"/guardianDetails",
                    templateUrl: 'partials/guardian/Guardian_Details.html',
                    controller: 'GuardianDetailsController'
                }).state('guardianContacts', {
                    templateUrl: 'partials/guardian/Guardian_Contacts.html',
                    controller: 'GuardianContactsController'
                });
     }]);

}(angular, window));