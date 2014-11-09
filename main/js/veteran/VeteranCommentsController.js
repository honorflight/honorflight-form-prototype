var modules = angular.module('VeteranComments', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

modules.controller('VeteranCommentsController', ['$scope', 'VeteranCommentsService',
    function ($scope, VeteranCommentsService) {

        $scope.veteran_comments= new Comment();
        function Comment(){
            this.comment="";
        }

        $scope.submitVeteranComments = function(){
            if(!$scope.veteranAdditionalCommentsForm.$invalid){
                VeteranCommentsService.sendForm($scope.veteran_comments).then(processSaveResponse);
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
