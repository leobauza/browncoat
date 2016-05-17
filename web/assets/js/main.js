/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Sample = __webpack_require__(1),
	    sample = new Sample(),
	    Radio = __webpack_require__(2),
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


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);