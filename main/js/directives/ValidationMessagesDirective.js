var modules = require('modules');

modules.controllerModule.controller('ValidationMessagesController', ['$scope', function($scope) {
    var scope = $scope;

    scope.isInvalid = function (field) {
        if (scope.formCtrl && scope.formCtrl[field]) {
            return scope.formCtrl[field].$invalid && (scope.formCtrl[field].$dirty || scope.validateWhen);
        } else {
            return false;
        }
    };

    scope.camelToReadable = function (str) {
        var result = str.replace(/\W+/g, ' ')
            .replace(/([a-z\d])([A-Z])/g, '$1 $2');
        result = result.charAt(0).toUpperCase() + result.slice(1);  //  capitalize first letter
        return result;
    };

    scope.hasErrors = function (field, error) {
        if (scope.formCtrl && scope.formCtrl[field] && scope.formCtrl[field].$error[error] !== undefined) {
            var errors = scope.formCtrl[field].$error[error] && (scope.formCtrl[field].$dirty || scope.validateWhen);
            if(errors === undefined) {
                return false;
            }
            return errors;
        } else {
            return false;
        }
    };
}]);

modules.directiveModule.directive('validationMessages',
    function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                formCtrl: '=',
                fieldName: '@',
                validateWhen: '='
            },
            controller: 'ValidationMessagesController',
            templateUrl: '../../html/partials/Validation_Messages.html'
        };
    }
);
