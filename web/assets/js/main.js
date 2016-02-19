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
	    sample = new Sample();

	sample.method();

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


/***/ }
/******/ ]);