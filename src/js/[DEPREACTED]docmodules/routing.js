"use strict";

var Routing = ["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

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

}];

module.exports = Routing;
