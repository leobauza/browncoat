"use strict";

var sample = require("../modules/sample.js");

describe('True Returner', function() {
  it('returns true', function() {
    var code = new Sample();
    expect(code.prop).toEqual("a property");
  });
});