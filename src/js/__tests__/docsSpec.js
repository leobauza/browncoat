"use strict";

describe("Controllers", function () {
  beforeEach(module("app"));

  var $controller;

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  describe("landingCtr", function () {

    var $scope, controller, data;

    beforeEach(function () {
      $scope = {};
      data = {
        code: "### heading\n```html\n<p>Hello</p>\n```",
        data: {
          title: "My Title",
          description: "My description"
        }
      };
      $controller = $controller("landingCtr", {
        $scope: $scope,
        data: data
      });
    });

    describe("$scope.codeSamples", function () {
      it("Should turn markdown into an object with a code and lang property", function () {
        expect($scope.codeSamples).toEqual(jasmine.objectContaining({
          heading: {
            code: "<p>Hello</p>",
            lang: "lang-html"
          }
        }));
      });
    });

    describe("$scope.title", function () {
      it("Should equal the value of data.data.title", function () {
        expect($scope.title).toEqual(data.data.title);
      });
    });

    describe("$scope.description", function () {
      it("Should equal the value of data.data.description", function () {
        expect($scope.description).toEqual(data.data.description);
      });
    });


  });

});