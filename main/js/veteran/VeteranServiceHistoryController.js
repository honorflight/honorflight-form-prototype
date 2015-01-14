var modules = angular.module('ServiceHistory', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);


modules.controller('VeteranServiceHistoryController', ['$scope', 'ReferenceDataService', 'VeteranServiceHistoryService', 'sharedValues',
    function ($scope, ReferenceDataService, VeteranServiceHistoryService, sharedValues) {

        $scope.veteranServiceHistory = new VeteranServiceHistory();
        $scope.submitted = false;

        function VeteranServiceHistory() {
            this.branch = "";
            this.startDate = "";
            this.endDate = "";
            this.rank = "";
            this.theater = "";
            this.war = "";
            this.activity = "";
            this.awards = [new Award()];
        }

        function Award() {
            this.name = "";
            this.quantity = "";
            this.comment = "";
        }

        $scope.addAward = function() {
            $scope.veteranServiceHistory.awards.push(new Award());
        };

        $scope.saveServiceHistory = function(){
            $scope.submitted = true;

            if(!$scope.veteranServiceHistoryForm.$invalid){
                VeteranServiceHistoryService.sendForm($scope.veteranServiceHistory).then(processSaveResponse);
            }
        };

        function processSaveResponse(response) {
            if(response.key) {
                //Saved successfully
            } else {
                //Save failed process response.message
            }
        }

        ReferenceDataService.getReferenceData('Veteran').then(processReferenceData);

        function processReferenceData(referenceData) {
            $scope.branches = referenceData.SERVICE_BRANCH__c;
            $scope.rankTypes = referenceData.SERVICE_RANK_TYPE__c;
            $scope.ranks = referenceData.SERVICE_RANK__c;
            $scope.wars = referenceData.WAR__c;
            $scope.serviceAwards = referenceData.SERVICE_AWARD__c;
        }

        util.setBreadcrumb('#veteranServiceHistory');
    }
]).factory('VeteranServiceHistoryService', ['$http', function ($http) {
    return {
        sendForm: function (serviceHistory) {
            return $http.post('url',serviceHistory);
        }
    };
}]);
