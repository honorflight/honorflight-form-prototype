var modules = require("modules");

modules.controllerModule.controller('VeteranCommentsController', ['$scope', 'ReferenceDataService', 'VeteranCommentsService',
    function ($scope, ReferenceDataService, VeteranCommentsService) {


        $scope.contacts = [new Comment("personalReference")];
        function Comment(){
            this.comment="";
        }
        function validateComment(contact){
            //TODO validate contact
        }
        $scope.submitForm = function(){
            if(validateComment()){

            }
        }



    }
]);
