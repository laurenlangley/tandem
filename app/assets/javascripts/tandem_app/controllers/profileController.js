TandemApp.controller("profileController", ["$scope", "httpService", "$rootScope", "$timeout", "$http", function($scope, httpService, $rootScope, $timeout, $http) {

  // This is the main data model.
  $scope.user = null;

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

  // This is the string that defines where the JSON endpoint resides.
  var apiEndpoint = '/users/current.json';

  // This is the callback function that executes if the HTTP requests returns successfully.
  var getUserSuccess = function(payload, status) {
    $scope.user = payload;
  };

  // This is the callback function that executes if the HTTP requests returns unsuccessfully.
  var getUserFailure = function(payload, status) {};

  // Initiate the HTTP request.
  httpService.getApiEndpoint(apiEndpoint).success(getUserSuccess);


}]);









