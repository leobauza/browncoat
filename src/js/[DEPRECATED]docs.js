"use strict";

var _ = require("underscore"),
    Services = require("./docmodules/services"),
    Controllers = require("./docmodules/controllers"),
    Routing = require("./docmodules/routing");

// init app
require("angular");
require("angular-route");
require("angular-sanitize");
require('angular-mocks/ngMock');

angular.module("app", ["ngRoute", "ngSanitize"]);
var app = angular.module("app");

/**
 * Services
 */
app.service("Data", Services.Data);

/**
 * Controllers
 */
app
.controller("mainCtrl", Controllers.Main)
.controller("landingCtr", Controllers.Landing)
.controller("styleguideCtr", Controllers.Styleguide);

/**
 * Routing
 */
app.config(Routing);
