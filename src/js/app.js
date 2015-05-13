"use strict";

var Flyweight, Sample;

if (typeof require === 'function') {
  Flyweight = require('./libs/flyweight');
  Sample = require('./modules/sample');
}

console.log(Flyweight);