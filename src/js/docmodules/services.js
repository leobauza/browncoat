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

    $http.get("/data/_main.json", {cache: true})
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

}];

module.exports = Services;
