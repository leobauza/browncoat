"use strict";

var Sample = require('./modules/sample'),
    sample = new Sample(),
    Radio = require("./experimental/radio"),
    radio = new Radio("myChannel");


var h1 = document.getElementsByTagName("h1")[0];
// var h2 = document.getElementsByTagName("h2")[0];
var h1callback = function (e) {
  console.log(e);
  this.style.color = "blue";
};
radio.subscribe(h1, "myChannel", h1callback);
// radio.subscribe(h2, "myChannel", h1callback);

radio.broadcast("myChannel");

radio.unsubscribe(h1, "myChannel", h1callback);

radio.broadcast("myChannel");



// sample.method();
