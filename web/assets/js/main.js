(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Sample = require('./modules/sample'),
    sample = new Sample();

sample.method();
},{"./modules/sample":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
