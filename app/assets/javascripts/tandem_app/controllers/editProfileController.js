TandemApp.controller("editProfileController", ["$scope", "httpService", "$rootScope", "$timeout", "$http", function($scope, httpService, $rootScope, $timeout, $http) {

  // This is the main data model.
  $scope.dataModel = {};

  // This is the string that defines where the JSON endpoint resides.
  var apiEndpoint = '/users/current.json';

  // This is the callback function that executes if the HTTP requests returns successfully.
  var getUserSuccess = function(payload, status) {
    $scope.dataModel = payload;
    console.log($scope.dataModel)

    if( $scope.dataModel.data["skill"]["beginner"] )
      $scope.selectedExperience = "beginner"
    else if( $scope.dataModel.data["skill"]["intermediate"] )
      $scope.selectedExperience = "intermediate"
    else if( $scope.dataModel.data["skill"]["advanced"] )
      $scope.selectedExperience = "advanced"


    updateOthers();

    $scope.selectedSchedule = $scope.dataModel.data['availability'];
    $scope.selectedSummary = $scope.dataModel.data['summary']

  };

  var updateOthers = function(){
    console.log( "update others")
    for( var k in $scope.dataModel.data["location"] ){
      if( $scope.dataModel.data["location"][k] ) $scope.otherLocation = false;
    }

    for( var k in $scope.dataModel.data["looking_for"] ){
      if( $scope.dataModel.data["looking_for"][k] ) $scope.otherLooking = false;
    }

    for( var k in $scope.dataModel.data["scene"] ){
      if( $scope.dataModel.data["scene"][k] ) $scope.otherScene = false;
    }
  }

  // This is the callback function that executes if the HTTP requests returns unsuccessfully.
  var getUserFailusre = function(payload, status) {};

  // Initiate the HTTP request.
  httpService.getApiEndpoint(apiEndpoint).success(getUserSuccess);

  $scope.selectedExperience = "";
  $scope.changeExperience = function(exp){
    $scope.dataModel.data["skill"]["beginner"] = ( exp == "beginner");
    $scope.dataModel.data["skill"]["intermediate"] = ( exp == "intermediate");
    $scope.dataModel.data["skill"]["advanced"] = ( exp == "advanced");
    httpService.putApiEndpoint("/users/"+$scope.dataModel.id+".json", {user: $scope.dataModel}).success(function(){updateOthers();console.log("success");});
  };

  $scope.otherLocation = true;
  $scope.changeLocation = function(){
    console.log($scope.dataModel)
    httpService.putApiEndpoint("/users/"+$scope.dataModel.id+".json", {user: $scope.dataModel}).success(function(){updateOthers();console.log("success");});
  };

  $scope.otherLooking = true;
  $scope.changeLooking = function(){
    httpService.putApiEndpoint("/users/"+$scope.dataModel.id+".json", {user: $scope.dataModel}).success(function(){updateOthers();console.log("success");});
  };

  $scope.otherScene = true;
  $scope.changeScene = function(){
    httpService.putApiEndpoint("/users/"+$scope.dataModel.id+".json", {user: $scope.dataModel}).success(function(){updateOthers();console.log("success");});
  };

  $scope.selectedSchedule = {};
  $scope.changeSchedule = function(day, exp){
    $scope.dataModel.data["availability"][day] = exp;
    httpService.putApiEndpoint("/users/"+$scope.dataModel.id+".json", {user: $scope.dataModel}).success(function(){updateOthers();console.log("success");});
  };

  $scope.selectedSummary = {};
  $scope.changeSummary = function(exp){
    console.log(exp)
    $scope.dataModel.data["summary"] = exp;
    httpService.putApiEndpoint("/users/"+$scope.dataModel.id+".json", {user: $scope.dataModel}).success(function(){updateOthers();console.log("success");});
  };


}]);









