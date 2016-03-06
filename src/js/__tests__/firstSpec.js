"use strict";

describe('styleguideCtr', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.test', function() {
    it('Is set to equal "test"', function() {
      var $scope = {};
      var controller = $controller('styleguideCtr', { $scope: $scope, data: {} });
      expect($scope.test).toEqual('test');
    });
  });
});

describe("landingCtr", function () {
  beforeEach(module("app"));

  var $controller;

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  describe("$scope.codeSamples", function () {
    it("Should return parsed code", function () {
      var $scope = {};
      var data = {
        code: "### heading\n```html\n<p>Hello</p>\n```",
        data: {}
      };
      var controller = $controller("landingCtr", {
        $scope: $scope,
        data: data
      });
      expect($scope.codeSamples).toEqual({
        heading: {
          code: "<p>Hello</p>",
          lang: "lang-html"
        }
      });
    });
  });

});