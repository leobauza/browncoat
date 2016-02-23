"use strict";

var _ = require("underscore");

// init app
require("angular");
require("angular-route");
require("angular-sanitize");

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
    var code = $http.get("/code_samples/" + path + ".html", { cache: true });
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

  Data.setSiteInfo().then(function (data) {
    console.log(data);
  });

  console.warn("handle navigation and basic stuffs in main controller");

  // directive instead?
  $scope.isActive = function (id, type) {

    if (type === "hash") {
      var hash = $location.hash();
      return id === hash;
    }

  };

}])
.controller("landingCtr", ["$scope", "$timeout", "data", function ($scope, $timeout, data) {

  var rawCodeSamples = data.code.split("|||"),
      codeSamples = {},
      page = data.data;

  _.each(rawCodeSamples, function (v, k) {
    var codeSample = v.split(":::");
    codeSamples[codeSample[0].trim()] = codeSample[1].trim();
  });

  $scope.title = page.title;
  $scope.description = page.description;
  $scope.blocks = page.sections;
  $scope.codeSamples = codeSamples;

  $timeout(function () {
    PR.prettyPrint();
  }, 0);

}]);

/**
 * Routing
 */
app.config(["$routeProvider", "$locationProvider",
function ($routeProvider, $locationProvider) {

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
