// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//
//  BEGIN NIGHTSPROUT STACK:
//
//= ANGULAR: Core Angular Files
//= require angular
//= require angular-route
//= require angular-sanitize
//
//  ANGULAR: Gem Plugins
//= require jquery.ui.all
//= require angular-ui-bootstrap
//= require angular-ui-bootstrap-tpls
//
//  ANGULAR: Core AngularCatalog App
//= require tandem_app/tandem_app
//= require tandem_app/routes
//
//  ANGULAR: Core AngularCatalog App Controllers
//= require tandem_app/controllers/filterController
//= require tandem_app/controllers/editProfileController
//= require tandem_app/controllers/matchesController
//= require tandem_app/controllers/profileController
//= require tandem_app/controllers/messagesController
//
//  ANGULAR: Core AngularCatalog App Services
//= require tandem_app/services/httpService
//
//= require_tree ./components






$(document).ready(function() {

  // This code controls the nav when it is a mobile view.
  $("a#tm-nav-expander").click(function() {
    $("#tandem").toggleClass("tm-nav-expanded-state");
  });
  $("nav ul#tm-menu > li > a").click(function() {
    $("#tandem").toggleClass("tm-nav-expanded-state");
  });

  $( ".modal" ).dialog({ modal: true, autoOpen: false });
  $(".modal-open").click(function(e){
    var id = $(this).attr("href").replace("#", "")
    $("#" + id).dialog("open");
    e.preventDefault();
    return false;
  });

  $(window).scroll(function() {

    // Show or hide the top bar background.
    if ( $(window).scrollTop() > 0 ) {
      $("nav").addClass("tm-nav-shadow-state");
    }
    else if ( $(window).scrollTop() <= 0 ) {
      $("nav").removeClass("tm-nav-shadow-state");
    }

  });

});




