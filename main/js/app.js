angular.module('honorflightFormPrototype', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('honorflightFormPrototype').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */

    $urlRouterProvider.otherwise('/home');

});

angular.module('honorflightFormPrototype').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
