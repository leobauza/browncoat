"use strict";

function privateMethod (value) {
  // do private stuff.
  // No access to object, if shared move to a utility include.
  return value + " private method added this";
}

/**
 * @doc module
 * @name Radio
 * @description
 * Custom event subscription and broadcasting system.
 */
var Radio = function (channelNames) {
  // constructor
  this.events = [];

  if (typeof channelNames === "string") {
    channelNames = [channelNames];
  }
  channelNames.forEach(function (channelName) {
    this.events[channelName] = {
      e: new Event(channelName),
      elements: []
    };
  }, this);

  return this;

};

Radio.prototype.addChannel = function (channelName) {
  this.events[channelName] = {
    e: new Event(channelName),
    elements: []
  };
};

Radio.prototype.broadcast = function (channelName) {
  this.events[channelName].elements.forEach(function (element) {
    element.dispatchEvent(this.events[channelName].e);
  }, this);
};

var privateFunction = function (callback, e, args) {
  console.log(callback);
  e.extra = args;
  callback.apply(e.target,[e]);
};

Radio.prototype.subscribe = function (element, channelName, callback) {
  element.addEventListener(channelName, function (e) {
    privateFunction(callback, e, {hi: "hi"});
  }, false);
  this.events[channelName].elements.push(element);
};

Radio.prototype.unsubscribe = function (element, channelName, callback) {

  var elArr = this.events[channelName].elements,
      index = elArr.indexOf(element);

  // figure out how to find the callback without passing it...
  element.removeEventListener(channelName, privateFunction, false);

  // remove from broadcast array
  elArr.splice(index, 1);

};

//Exports the page module for app.js to use
module.exports = Radio;
