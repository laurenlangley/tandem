TandemApp.controller("profileController", ["$scope", "httpService", "$rootScope", "$timeout", "$http", "$route", function($scope, httpService, $rootScope, $timeout, $http, $route) {

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

  var user_id = $route.current.params.user_id; 
  if( user_id )
    var apiEndpoint = '/users/' + user_id + '.json';  
  else
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









