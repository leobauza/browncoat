"use strict";

var Sample = require('./modules/sample'),
    sample = new Sample();

import { hello } from "./modules/es6";

sample.method();

console.log(hello);

for (let i of hello) {
  console.log(i);
}
