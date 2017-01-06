"use strict";

var Services = {};

/**
 * Data Service
 */
Services.Data = ["$q", "$http", "$location", "$rootScope", function ($q, $http, $location, $rootScope) {

  this.getPage = function () {

    var d = $q.defer(),
        path = $location.path().replace(/^\/|\/$/g, '');

    if (path === "") {
      path = "home";
    }

    // Get code
    var code = $http.get("/data/" + path + ".md", { cache: true });
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
      .then(function success (res) {
        // Current section is the key for secondary navigation.
        var data = res.data
        $rootScope.tplType = "styleguide";
        $rootScope.currentSection = path.split("/")[0];
        d.resolve(data);
      }, function error (err) {
        console.error(err);
      });

    return d.promise;

  };

  this.setSiteInfo = function () {

    var d = $q.defer();

    $http.get("/data/_main.json", {cache: true})
      .then(function success (res) {
        var data = res.data;
        $rootScope.projectTitle = data.projectTitle;
        $rootScope.version = data.version;
        $rootScope.projectNav = data.projectNav;
        $rootScope.sectionNavs = data.sectionNavs;
        $rootScope.styleguideNavs = data.styleguideNavs;
        $rootScope.projectInfo = data.bundles.angular;
        d.resolve(true);
      }, function error (err) {
        console.error(err);
        d.reject(err);
      });

    return d.promise;

  };

}];

module.exports = Services;
