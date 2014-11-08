var modules = require("modules");

modules.controllerModule.controller('VeteranTravelController', ['$scope', 'ReferenceDataService', 'VeteranTravelService',
    function ($scope, ReferenceDataService, VeteranTravelService) {
        function travel(type){
            this.type = type;
            this.visited = "";
            this.whenVisited = "";
            this.isGuardianRequested = "";
            this.guardianRequested = "";
            this.address = "";
            this.city = "";
        }
        function validateTravel(travel){
            //TODO validate travel
        }
    }
]);
