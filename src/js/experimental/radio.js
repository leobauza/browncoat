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

Radio.prototype.subscribe = function (element, channelName) {

  element.addEventListener(channelName, function (e) {
    console.log("parent", element.parentNode);
  }, false);

  this.events[channelName].elements.push(element);
};

//Exports the page module for app.js to use
module.exports = Radio;
