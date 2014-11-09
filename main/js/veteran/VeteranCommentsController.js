var modules = angular.module('VeteranComments', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('VeteranCommentsController', ['$scope', 'VeteranCommentsService', 'sharedValues',
    function ($scope, VeteranCommentsService, sharedValues) {

        $scope.veteranComments= new Comment();
        $scope.submitted = false;

        function Comment(){
            this.comment="";
        }

        $scope.saveVeteranComments = function() {
            $scope.submitted = true;

            if(!$scope.veteranCommentsForm.$invalid){
                VeteranCommentsService.sendForm($scope.veteranComments).then(processSaveResponse);
            }
        };

        function processSaveResponse(response) {
            if(response.key) {
                //Saved successfully
            } else {
                //Save failed process response.message
            }
        }

    }
]).factory('VeteranCommentsService', ['$http', function ($http) {
    return {
        sendForm: function (comments) {
            return $http.post('api/budget/budgets.do',comments);
        }
    };
}]);
