TandemApp.controller("matchesController", ["$scope", "httpService", "$rootScope", "$timeout", "$http", function($scope, httpService, $rootScope, $timeout, $http) {

  // This is the main data model.
  $scope.matches = null;

  // This is the string that defines where the JSON endpoint resides.
  var apiEndpoint = '/users.json';

  // This is the callback function that executes if the HTTP requests returns successfully.
  var getCatalogSuccess = function(payload, status) {
    $scope.matches = payload;
  };

  // This is the callback function that executes if the HTTP requests returns unsuccessfully.
  var getCatalogFailure = function(payload, status) {};

  // Initiate the HTTP request.
  httpService.getApiEndpoint(apiEndpoint).success(getCatalogSuccess);

}]);









