"use strict";

var _ = require("underscore");

// init app
require("angular");
require("angular-route");
require("angular-sanitize");

angular.module('app', ['ngRoute', 'ngSanitize']);
var app = angular.module('app');

app.service('Data', ['$q', '$http', '$location', function ($q, $http, $location) {


  this.get = function () {

    var d = $q.defer(),
        path = $location.path().replace(/^\/|\/$/g, '');

    if (path === '') {
      path = 'home';
    }

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

}]);

app.controller('landingCtr', ['$scope', '$timeout', 'data', function ($scope, $timeout, data) {

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

  console.log(codeSamples);
  console.log(data.data);

  $timeout(function () {
    PR.prettyPrint();
  }, 0);

}]);

app.config(["$routeProvider", "$locationProvider",
function ($routeProvider, $locationProvider) {

  $routeProvider
    .when("/:name?", {
      templateUrl: "/ng-templates/landing.html",
      controller: "landingCtr",
      resolve: {
        "data" : ["Data", function (Data) {
          return Data.get().then(function (val) {
            return val;
          });
        }]
      },
    });

  $locationProvider.html5Mode(true).hashPrefix("!");

}]);

// filters
// require('./filters');

// directives
// require('./directives');

// services
// require('./services');

// controllers
// require('./controllers');

// routing
// app.config(require('./config'));

/**
 * @ngdoc interface
 * @name app.constant:BOOTSTRAP
 * @description
 * Bootstrapped data and methods ie a config constatnt.
 */
// app.constant('BOOTSTRAP', {
//   page: bs.page,
//   mainMenu: bs.menus.mainMenu,
//   footerMenu: bs.menus.footerMenu,
//   tpl: function (file) {
//     return bs.tpls + "/assets/tpls/" + file + ".html";
//   }
// });

// app.run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {
//
//   $rootScope.$on('$locationChangeStart', function (e, next, prev) {
//     // console.log(e);
//     next = next.split("?")[0];
//     prev = prev.split("?")[0];
//     // Choose how to handle page changes here...
//
//     if (next !== prev) {
//       $window.scrollTo(0,0);
//     }
//
//   });
//
// }]);

