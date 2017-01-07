"use strict";

var utils = require("./utils"),
    _ = require("underscore"),
    Controllers = {};

/**
 * Main Controller
 */
Controllers.Main = ["$scope", "$location", "Data", function ($scope, $location, Data) {

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

}];

/**
 * Landing Controller
 */
Controllers.Landing = ["$scope", "$timeout", "data", "$sce", function ($scope, $timeout, data, $sce) {

  var codeSamples = {},
      page = data.data,
      pageDescription = "";

  _.each(page.sections, function (v, k) {
    if (v.description.indexOf("<p>") === -1 && typeof v.description === "string") {
      var dparts = v.description.split("=>");
      page.sections[k].description = _.map(dparts, function (v, k) {
        return "<p class='box__text'>" + v.replace(/`([\s+\S]*?)`/g, "<code>$1</code>") + "</p>";
      }).join("");
    } else if (v.description.indexOf("<p>") === -1) {
      page.sections[k].description = _.map(v.description, function (v, k) {
        return "<p class='box__text'>" + v.replace(/`([\s+\S]*?)`/g, "<code>$1</code>") + "</p>";
      }).join("");
    }
  });

  if (typeof page.description === "string") {
    pageDescription = "<p>" + page.description.replace(/`([\s+\S]*?)`/g, "<code>$1</code>") + "</p>";
  } else if (typeof page.description === "object") {
    pageDescription = _.map(page.description, function (v, k) {
      return "<p>" + v.replace(/`([\s+\S]*?)`/g, "<code>$1</code>") + "</p>";
    }).join("");
  } else {
    pageDescription = false;
  }

  $scope.title = page.title || false;
  $scope.description = pageDescription ? pageDescription : false;
  $scope.blocks = page.sections || false;
  $scope.codeSamples = utils.parseCodeSamples(data.code);
  $scope.reTrustHtml = function (code) {
    return $sce.trustAsHtml(code);
  };

  $timeout(function () {
    PR.prettyPrint();
  }, 0);

}];

/**
 * Styleguide Controller
 */
Controllers.Styleguide = ["$scope", "$timeout", "data", function ($scope, $timeout, data) {
  $scope.data = data;
}];

module.exports = Controllers;
