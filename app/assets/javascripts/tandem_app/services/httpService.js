TandemApp.service("httpService", ["$http", function($http) {
  return {
    getApiEndpoint: function (apiEndpoint) {
      var httpRequest = $http({ method: 'GET', url: apiEndpoint} ).
        success(function(data, status, headers, config) {
          console.log("httpService.getApiEndpoint: SUCCESS");
        }).
        error(function(data, status, headers, config) {
          console.log("httpService.getApiEndpoint: ERROR");
        })
      return httpRequest;
    },
    putApiEndpoint: function (apiEndpoint, data) {
      var httpRequest = $http({ method: 'PUT', url: apiEndpoint, data: data} ).
        success(function(data, status, headers, config) {
          console.log("httpService.getApiEndpoint: SUCCESS");
        }).
        error(function(data, status, headers, config) {
          console.log("httpService.getApiEndpoint: ERROR");
        })
      return httpRequest;
    },
  }
}]);