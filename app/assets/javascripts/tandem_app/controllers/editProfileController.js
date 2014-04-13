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


    if( $scope.dataModel.data["location"]["offroad"] )
      $scope.selectedLocation = "offroad"
    else if( $scope.dataModel.data["location"]["paved_trail"] )
      $scope.selectedLocation = "paved_trail"
    else if( $scope.dataModel.data["location"]["road"] )
      $scope.selectedLocation = "road"


    if( $scope.dataModel.data["looking_for"]["training"] )
      $scope.selectedLooking = "training"
    else if( $scope.dataModel.data["looking_for"]["fun"] )
      $scope.selectedLooking = "fun"
    else if( $scope.dataModel.data["looking_for"]["commuting"] )
      $scope.selectedLooking = "commuting"
    else if( $scope.dataModel.data["looking_for"]["destination"] )
      $scope.selectedLooking = "destination"


    if( $scope.dataModel.data["scene"]["weekend_warrior"] )
      $scope.selectedScene = "weekend_warrior"
    else if( $scope.dataModel.data["scene"]["commuter"] )
      $scope.selectedScene = "commuter"
    else if( $scope.dataModel.data["scene"]["mountain"] )
      $scope.selectedScene = "mountain"
    else if( $scope.dataModel.data["scene"]["fixies"] )
      $scope.selectedScene = "fixies"
    else if( $scope.dataModel.data["scene"]["social"] )
      $scope.selectedScene = "social"
    else if( $scope.dataModel.data["scene"]["roadie"] )
      $scope.selectedScene = "roadie"

    $scope.selectedSchedule = $scope.dataModel.data['availability'];
    $scope.selectedSummary = $scope.dataModel.data['summary']

  };

  // This is the callback function that executes if the HTTP requests returns unsuccessfully.
  var getUserFailusre = function(payload, status) {};

  // Initiate the HTTP request.
  httpService.getApiEndpoint(apiEndpoint).success(getUserSuccess);

  $scope.selectedExperience = "";
  $scope.changeExperience = function(exp){
    $scope.dataModel.data["skill"]["beginner"] = ( exp == "beginner");
    $scope.dataModel.data["skill"]["intermediate"] = ( exp == "intermediate");
    $scope.dataModel.data["skill"]["advanced"] = ( exp == "advanced");
    httpService.putApiEndpoint("/users/"+$scope.dataModel.id+".json", {user: $scope.dataModel}).success(function(){console.log("success");});
  };

  $scope.selectedLocation = "";
  $scope.changeLocation = function(exp){
    $scope.dataModel.data["location"]["offroad"] = ( exp == "offroad");
    $scope.dataModel.data["location"]["paved_trail"] = ( exp == "paved_trail");
    $scope.dataModel.data["location"]["road"] = ( exp == "road");
    httpService.putApiEndpoint("/users/"+$scope.dataModel.id+".json", {user: $scope.dataModel}).success(function(){console.log("success");});
  };

  $scope.selectedLooking = "";
  $scope.changeLooking = function(exp){
    $scope.dataModel.data["looking_for"]["training"] = ( exp == "training");
    $scope.dataModel.data["looking_for"]["fun"] = ( exp == "fun");
    $scope.dataModel.data["looking_for"]["commuting"] = ( exp == "commuting");
    $scope.dataModel.data["looking_for"]["destination"] = ( exp == "destination");
    httpService.putApiEndpoint("/users/"+$scope.dataModel.id+".json", {user: $scope.dataModel}).success(function(){console.log("success");});
  };

  $scope.selectedScene = "";
  $scope.changeScene = function(exp){
    $scope.dataModel.data["scene"]["weekend_warrior"] = ( exp == "weekend_warrior");
    $scope.dataModel.data["scene"]["commuter"] = ( exp == "commuter");
    $scope.dataModel.data["scene"]["mountain"] = ( exp == "mountain");
    $scope.dataModel.data["scene"]["fixies"] = ( exp == "fixies");
    $scope.dataModel.data["scene"]["social"] = ( exp == "social");
    $scope.dataModel.data["scene"]["roadie"] = ( exp == "roadie");
    httpService.putApiEndpoint("/users/"+$scope.dataModel.id+".json", {user: $scope.dataModel}).success(function(){console.log("success");});
  };

  $scope.selectedSchedule = {};
  $scope.changeSchedule = function(day, exp){
    $scope.dataModel.data["availability"][day] = exp;
    httpService.putApiEndpoint("/users/"+$scope.dataModel.id+".json", {user: $scope.dataModel}).success(function(){console.log("success");});
  };

  $scope.selectedSummary = {};
  $scope.changeSummary = function(exp){
    console.log(exp)
    $scope.dataModel.data["summary"] = exp;
    httpService.putApiEndpoint("/users/"+$scope.dataModel.id+".json", {user: $scope.dataModel}).success(function(){console.log("success");});
  };


}]);









