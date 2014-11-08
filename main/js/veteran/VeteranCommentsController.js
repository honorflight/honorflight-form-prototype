var modules = require("modules");

modules.controllerModule.controller('VeteranCommentsController', ['$scope', 'VeteranCommentsService',
    function ($scope, VeteranCommentsService) {

        $scope.veteran_comments= [new Comment()];
        function Comment(){
            this.comment="";
            this.veteranId = "";
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
]).factory('VeteranContactsService', ['$http', function ($http) {
    return {
        sendForm: function (details) {
            return $http.post('api/budget/budgets.do',details);
        }
    };
}]);
