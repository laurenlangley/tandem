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
//= require angular-animate
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
//= require tandem_app/controllers/settingsController
//
//  ANGULAR: Core AngularCatalog App Services
//= require tandem_app/services/httpService
//
//= require_tree ./components






$(document).ready(function() {
  $("#tm-top-bar").click(function() {
    console.log("test");
    $("body").toggleClass("tm-nav-expanded");
  });
  $("nav > ul > li > a").click(function() {
    $("body").removeClass("tm-nav-expanded");
  });
});
 
$(window).resize(function() {
  $("body").removeClass("tm-nav-expanded");
});







