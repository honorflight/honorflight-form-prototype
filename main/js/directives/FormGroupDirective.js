var modules = angular.module('FormGroup', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.directive('formGroup',
    function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                formCtrl: '=',
                fieldName: '@',
                validateWhen: '='
            },
            controller: ['$scope', function ($scope) {
                $scope.isInvalid = function (field) {
                    if ($scope.formCtrl && $scope.formCtrl[field]) {
                        return $scope.formCtrl[field].$invalid && ($scope.formCtrl[field].$dirty || $scope.validateWhen);
                    } else {
                        return false;
                    }
                };
                $scope.camelToReadable = function (str) {
                    var result = str.replace(/\W+/g, ' ')
                        .replace(/([a-z\d])([A-Z])/g, '$1 $2');
                    result = result.charAt(0).toUpperCase() + result.slice(1);  //  capitalize first letter
                    //  result = result.replace('Gbs', 'GBS');  //  make sure GBS isn't Gbs
                    return result;
                };
                $scope.hasErrors = function (field, error) {
                    if ($scope.formCtrl && $scope.formCtrl[field]) {
                        return $scope.formCtrl[field].$error[error] && ($scope.formCtrl[field].$dirty || $scope.validateWhen);
                    } else {
                        return false;
                    }
                };
            }],
            templateUrl: 'partials/form-group.html'
        };
    }
);
