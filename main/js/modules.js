define(function (require) {
    'use strict';
    var angular = require('angular');
    var serviceModule = angular.module('serviceModule', []);
    var controllerModule = angular.module('controllerModule', []);
    var directiveModule = angular.module('directiveModule', []);
    return {
        serviceModule: serviceModule,
        controllerModule: controllerModule,
        directiveModule: directiveModule
    };
});