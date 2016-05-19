"use strict";

var _ = require("underscore"),
    Services = require("./docmodules/services"),
    Controllers = require("./docmodules/controllers");

// init app
require("angular");
require("angular-route");
require("angular-sanitize");
require('angular-mocks/ngMock');

angular.module("app", ["ngRoute", "ngSanitize"]);
var app = angular.module("app");

/**
 * Services
 */
app.service("Data", Services.Data);

/**
 * Controllers
 */
app
.controller("mainCtrl", Controllers.Main)
.controller("landingCtr", Controllers.Landing)
.controller("styleguideCtr", Controllers.Styleguide);

/**
 * Routing
 */
app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

  $routeProvider
    .when("/", {
      templateUrl: "/ng-templates/landing.html",
      controller: "landingCtr",
      resolve: {
        "data" : ["Data", function (Data) {
          return Data.getPage().then(function (val) {
            return val;
          });
        }]
      }
    })
    .when("/scss/:name?", {
      templateUrl: "/ng-templates/landing.html",
      controller: "landingCtr",
      resolve: {
        "data" : ["Data", function (Data) {
          return Data.getPage().then(function (val) {
            return val;
          });
        }]
      },
      reloadOnSearch: false
    })
    .when("/js/:name?", {
      templateUrl: "/ng-templates/landing.html",
      controller: "landingCtr",
      resolve: {
        "data" : ["Data", function (Data) {
          return Data.getPage().then(function (val) {
            return val;
          });
        }]
      }
    })
    .when("/docs/:name?", {
      templateUrl: "/ng-templates/landing.html",
      controller: "landingCtr",
      resolve: {
        "data" : ["Data", function (Data) {
          return Data.getPage().then(function (val) {
            return val;
          });
        }]
      }
    })
    .when("/gulp", {
      templateUrl: "/ng-templates/landing.html",
      controller: "landingCtr",
      resolve: {
        "data" : ["Data", function (Data) {
          return Data.getPage().then(function (val) {
            return val;
          });
        }]
      }
    })
    .when("/home/:name?", {
      templateUrl: "/ng-templates/landing.html",
      controller: "landingCtr",
      resolve: {
        "data" : ["Data", function (Data) {
          return Data.getPage().then(function (val) {
            return val;
          });
        }]
      }
    })
    .when("/styleguide/:section?", {
      templateUrl: "/ng-templates/styleguide.html",
      controller: "styleguideCtr",
      resolve: {
        "data" : ["Data", function (Data) {
          return Data.getStyleguide().then(function (val) {
            return val;
          });
        }]
      }
    });


  $locationProvider.html5Mode(true).hashPrefix("!");

}]);
