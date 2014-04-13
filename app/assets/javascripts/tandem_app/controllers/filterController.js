TandemApp.controller("filterController", ["$scope", "httpService", "$rootScope", "$timeout", "$http", function($scope, httpService, $rootScope, $timeout, $http) {

  // This is the main data model.
  $scope.dataModel = {};





  // Initiate the HTTP request.
  httpService.getApiEndpoint(apiEndpoint).success(getCatalogSuccess);
  localStorage["filters"] = JSON.stringify( $rootScope.filters );

}]);









