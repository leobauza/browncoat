"use strict";

var _ = require("underscore");

// init app
require("angular");
require("angular-route");
require("angular-sanitize");

function parseCodeSamples(cs) {

  // Split simples by linebreaks.
  var samples = cs.split(/---\n/g),
      out = {};

  // console.log(samples);
  _.each(samples, function (sample, k) {

    var code = sample.match(/```[a-z]*\n[\s\S]*?\n```/g)[0].replace(/```[a-z]*\n*/g, "").trim(),
        key = sample.match(/###[\s\S]*?\n/g)[0].replace(/###\s/, "").trim(),
        lang = sample.match(/```[a-z]*\n/)[0].replace(/```/g, "").trim();

    out[key] = {
      code: code,
      lang: lang === "" ? "lang-bash" : "lang-" + lang
    };

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

    // Get code
    var code = $http.get("/code_samples/" + path + ".md", { cache: true });
    // Get data
    var data = $http.get("/data/" + path + ".json", { cache: true });

    $q.all([code, data]).then(function (results) {
      var resolve = {
        code: results[0].data,
        data: results[1].data
      };
      // Current section is the key for secondary navigation.
      $rootScope.tplType = "doc";
      $rootScope.currentSection = path.split("/")[0];
      d.resolve(resolve);
    }, function (err) {
      console.log(err);
    });

    return d.promise;
  };

  this.getStyleguide = function () {

    var d = $q.defer(),
        path = $location.path().replace(/^\/|\/$/g, '');

    // Get data
    $http.get("/data/" + path + ".json", { cache: true })
    .success(function (data) {
      // Current section is the key for secondary navigation.
      $rootScope.tplType = "styleguide";
      $rootScope.currentSection = path.split("/")[0];
      d.resolve(data);
    })
    .error(function (err) {
      console.error(err);
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
        $rootScope.styleguideNavs = data.styleguideNavs;
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
    } else if (type === "path") {
      var path = $location.path(),
          idParts = id.split("/");

      if (id === "/" && path === "/") {
        return true;
      } else if (idParts.length === 2) {
        if (idParts[1] === "") {
          idParts[1] = "home";
        }
        return idParts[1] === path.split("/")[1];
      } else {
        return id === path;
      }
    }

  };

}])
.controller("landingCtr", ["$scope", "$timeout", "data", "$sce", function ($scope, $timeout, data, $sce) {

  var codeSamples = {},
      page = data.data;

  _.each(page.sections, function (v, k) {
    if (v.description.indexOf("<p>") === -1 && typeof v.description === "string") {
      var dparts = v.description.split("=>");
      page.sections[k].description = _.map(dparts, function (v, k) {
        return "<p>" + v.replace(/`([\s+\S]*?)`/g, "<code>$1</code>") + "</p>";
      }).join("");
    } else if (v.description.indexOf("<p>") === -1) {
      page.sections[k].description = _.map(v.description, function (v, k) {
        return "<p>" + v.replace(/`([\s+\S]*?)`/g, "<code>$1</code>") + "</p>";
      }).join("");
    }
  });

  $scope.title = page.title;
  $scope.description = page.description.replace(/`([\s+\S]*?)`/g, "<code>$1</code>");
  $scope.blocks = page.sections;
  $scope.codeSamples = parseCodeSamples(data.code);

  $scope.reTrustHtml = function (code) {
    return $sce.trustAsHtml(code);
  };

  $timeout(function () {
    PR.prettyPrint();
  }, 0);

}])
.controller("styleguideCtr", ["$scope", "$timeout", "data", function ($scope, $timeout, data) {

  $scope.data = data;

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
