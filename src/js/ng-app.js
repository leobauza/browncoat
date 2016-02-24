"use strict";

var _ = require("underscore");

// init app
require("angular");
require("angular-route");
require("angular-sanitize");

function processCodeSamples(cs) {

  // Split simples by linebreaks.
  var samples = cs.split(/---\n/g),
      out = {};

  // console.log(samples);
  _.each(samples, function (sample, k) {

    var code = sample.match(/```\n[\s\S]*?\n```/g)[0].replace(/```/g, "").trim(),
        key = sample.match(/###[\s\S]*?\n/g)[0].replace(/###\s/, "").trim();

    out[key] = code;

  });

  return out;

}

angular.module("app", ["ngRoute", "ngSanitize"]);
var app = angular.module("app");

/**
 * Data Service
 */
app.service("Data", ["$q", "$http", "$location", "$rootScope", function ($q, $http, $location, $rootScope) {

  this.getPage = function () {

    var d = $q.defer(),
        path = $location.path().replace(/^\/|\/$/g, '');

    if (path === "") {
      path = "home";
    }

    // Current section is the key for secondary navigation.
    $rootScope.currentSection = path.split("/")[0];

    // Get code
    var code = $http.get("/code_samples/" + path + ".md", { cache: true });
    // Get data
    var data = $http.get("/data/" + path + ".json", { cache: true });

    $q.all([code, data]).then(function (results) {
      var resolve = {
        code: results[0].data,
        data: results[1].data
      };
      d.resolve(resolve);
    });

    return d.promise;
  };

  this.setSiteInfo = function () {

    var d = $q.defer();

    $http.get("/data/main.json", {cache: true})
      .success(function (data) {

        $rootScope.projectTitle = data.projectTitle;
        $rootScope.version = data.version;
        $rootScope.projectNav = data.projectNav;
        $rootScope.sectionNavs = data.sectionNavs;
        $rootScope.projectInfo = data.bundles.angular;
        d.resolve(true);

      })
      .error(function (err) {
        console.error(err);
        d.resolve(false);
      });

    return d.promise;

  };

}]);


/**
 * Controllers
 * - mainCtrl
 * - landingCtr
 */
app
.controller("mainCtrl", ["$scope", "$location", "Data", function ($scope, $location, Data) {

  Data.setSiteInfo().then(function (data) {});

  // directive instead?
  $scope.isActive = function (id, type) {

    if (type === "hash") {
      var hash = $location.hash();
      return id === hash;
    }

  };

}])
.controller("landingCtr", ["$scope", "$timeout", "data", function ($scope, $timeout, data) {

  var codeSamples = {},
      page = data.data;

  $scope.title = page.title;
  $scope.description = page.description;
  $scope.blocks = page.sections;
  $scope.codeSamples = processCodeSamples(data.code);

  $timeout(function () {
    PR.prettyPrint();
  }, 0);

}]);

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
    });


  $locationProvider.html5Mode(true).hashPrefix("!");

}]);
