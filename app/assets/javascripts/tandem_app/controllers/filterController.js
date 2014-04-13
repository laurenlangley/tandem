TandemApp.controller("filterController", ["$scope", "httpService", "$rootScope", "$timeout", "$http", function($scope, httpService, $rootScope, $timeout, $http) {

  console.log("test");

  // Initiate the HTTP request.
  localStorage["filters"] = JSON.stringify( $rootScope.filters );

  $scope.evaluateDay = function(time) {
    if ( time == "Morning" ) {
      return "tm-match-day-morning";
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

}]);









