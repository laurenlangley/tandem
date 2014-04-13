TandemApp.controller("matchesController", ["$scope", "httpService", "$rootScope", "$timeout", "$http", function($scope, httpService, $rootScope, $timeout, $http) {

  // This is the main data model.
  $scope.matches = null;

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

  // This is the string that defines where the JSON endpoint resides.
  var apiEndpoint = '/users.json';

  // This is the callback function that executes if the HTTP requests returns successfully.
  var getMatchesSuccess = function(payload, status) {
    $scope.matches = payload;
  };

  // This is the callback function that executes if the HTTP requests returns unsuccessfully.
  var getMatchesFailure = function(payload, status) {};

  // Initiate the HTTP request.
  httpService.getApiEndpoint(apiEndpoint).success(getMatchesSuccess);

}]);









