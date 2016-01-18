"use strict";

function privateMethod (value) {
  // do private stuff.
  // No access to object, if shared move to a utility include.
  return value + " private method added this";
}

/**
 * @doc module
 * @name Sample
 * @description
 * A sample fw module that uses Utils
 */
var Sample = function () {
  // constructor
  this.prop = "a property";
};

Sample.prototype.method = function () {
  // Do stuff;
  var usePrivateMethod = privateMethod(this.prop);
  console.log(usePrivateMethod);
};

//Exports the page module for app.js to use
module.exports = Sample;
