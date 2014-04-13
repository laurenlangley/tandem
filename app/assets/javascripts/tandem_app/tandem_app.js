// Create Angular module for the main app, TandemApp.
var TandemApp = angular.module("TandemApp", ["ngRoute", "ui.bootstrap", "ngSanitize"]);




// Global Modal Open.
TandemApp.run(["$rootScope", "$route", function($rootScope, $route) {

  console.log( localStorage["filters"] )
  if( localStorage["filters"] )
    $rootScope.filters = JSON.parse( localStorage["filters"] );
  else{
    $rootScope.filters = {
      "minAge":             18,
      "maxAge":             100,
      "gender":             ["Male", "Female", "Other", "Any"],
      "location": {
         "offroad":         true,
         "paved_trail":     true,
         "road":            true
      },
      "scene": {
         "weekend_warrior": true,
         "commuter":        true,
         "mountain":        true,
         "fixies":          true,
         "social":          true,
         "roadie":          true
      },
      "skill":              "beginner",
      "looking_for": {
         "training":        true,
         "fun":             true,
         "commuting":       true,
         "destination":     true
      },
      "availability": {
         "sunday":          "All",
         "monday":          "All",
         "tuesday":         "All",
         "wednesday":       "All",
         "thursday":        "All",
         "friday":          "All",
         "saturday":        "All"
      }
    };
  }

  $rootScope.cycleAvailability = function(day, time) {
    if ( time == "Morning" ) {
      $rootScope.filters['availability'][day] = "Afternoon";
    }
    else if ( time == "Afternoon" ) {
      $rootScope.filters['availability'][day] = "Evening";
    }
    else if ( time == "Evening" ) {
      $rootScope.filters['availability'][day] = "All";
    }
    else if ( time == "All" ) {
      $rootScope.filters['availability'][day] = "None";
    }
    else {
      $rootScope.filters['availability'][day] = "Morning";
    }
  };

  $rootScope.ageFilterMin = function(recordObject) {
    return ( $rootScope.filters["minAge"] <= recordObject.data["age"] );
  };

  $rootScope.ageFilterMax = function(recordObject) {
    return ( $rootScope.filters["maxAge"] >= recordObject.data["age"] );
  };

  $rootScope.locationFilter = function(recordObject) {
    return (  ( $rootScope.filters["location"]["offroad"] && recordObject.data["location"]["offroad"] ) ||
              ( $rootScope.filters["location"]["paved_trail"] && recordObject.data["location"]["paved_trail"] ) ||
              ( $rootScope.filters["location"]["road"] && recordObject.data["location"]["road"] )
            );
  };

  $rootScope.sceneFilter = function(recordObject) {
    return (  ( $rootScope.filters["scene"]["weekend_warrior"] && recordObject.data["scene"]["weekend_warrior"] ) ||
              ( $rootScope.filters["scene"]["commuter"] && recordObject.data["scene"]["commuter"] ) ||
              ( $rootScope.filters["scene"]["mountain"] && recordObject.data["scene"]["mountain"] ) ||
              ( $rootScope.filters["scene"]["fixies"] && recordObject.data["scene"]["fixies"] ) ||
              ( $rootScope.filters["scene"]["social"] && recordObject.data["scene"]["social"] ) ||
              ( $rootScope.filters["scene"]["roadie"] && recordObject.data["scene"]["roadie"] )
            );
  };

  $rootScope.skillFilter = function(recordObject) {
    if( $rootScope.filters["skill"] === "beginner" && recordObject.data["skill"]["beginner"] )
      return true;
    if( $rootScope.filters["skill"] === "intermediate" && recordObject.data["skill"]["intermediate"] )
      return true;
    if( $rootScope.filters["skill"] === "advanced" && recordObject.data["skill"]["advanced"] )
      return true;

    return false;
  };

  $rootScope.lookingForFilter = function(recordObject) {
    return (  ( $rootScope.filters["looking_for"]["training"] && recordObject.data["looking_for"]["training"] ) ||
              ( $rootScope.filters["looking_for"]["fun"] && recordObject.data["looking_for"]["fun"] ) ||
              ( $rootScope.filters["looking_for"]["commuting"] && recordObject.data["looking_for"]["commuting"] ) ||
              ( $rootScope.filters["looking_for"]["destination"] && recordObject.data["looking_for"]["destination"] )
            );
  };


  $rootScope.availabilityFilter = function(recordObject) {
    for( var key in $rootScope.filters["availability"] ){
      if( $rootScope.filters["availability"][key] !== "None" && recordObject.data["availability"][key] !== "None" && recordObject.data["availability"][key] !== "" ){
        if( $rootScope.filters["availability"][key] === "All" || recordObject.data["availability"][key] === "All" ){ 
          return true;
        }else if( $rootScope.filters["availability"][key] == recordObject.data["availability"][key] ){
          return true;
        }
      }
    }

    return false;
  };



}]);





