// Create Angular module for the main app, TandemApp.
var TandemApp = angular.module("TandemApp", ["ngRoute", "ui.bootstrap", "ngSanitize"]);




// Global Modal Open.
TandemApp.run(["$rootScope", "$route", function($rootScope, $route) {

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
       "saturday":        "All",
       // "saturday":    ["Morning", "Afternoon", "Evening", "All", "None"]
    }
  };

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

}]);





