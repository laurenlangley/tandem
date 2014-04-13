TandemApp.controller("filterController", ["$scope", "httpService", "$rootScope", "$timeout", "$http", function($scope, httpService, $rootScope, $timeout, $http) {

  // This is the main data model.
  $scope.dataModel = {};


  $scope.evaluateDay = function(time) {
    if ( time == "Morning" ) {
      return "tm-match-day-morning"
    }
    else if ( time == "Afternoon" ) {
      return "tm-match-day-afternoon";
    }
    else if ( time == "Evening" ) {
      return "tm-match-day-evening";
    }
    else if ( time == "All" ) {
      return "tm-match-day-all";
    }
    else {
      return "tm-match-day-none";
    }
  };


  // Initiate the HTTP request.
  httpService.getApiEndpoint(apiEndpoint).success(getCatalogSuccess);
  localStorage["filters"] = JSON.stringify( $rootScope.filters );

}]);









