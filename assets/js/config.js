require.config({
	deps: ['cs!app/app'], //this is the same as require(['cs!app/app'], function(app){ });
	paths: { //these are aliases
		'jquery': './libs/jquery',
		'jqueryM': './libs/jquery-migrate',
		'jForm' : './vendor/jform'
	},
	//Shim for non amd ready stuff and for jquery dependencies
	shim: {
		'jqueryM': {
			deps: ['jquery'],
			exports: 'migrate'
		},
		'jForm': {
			deps: ['jquery'],
			exports: 'jform'
		}
	}
});

//require(['cs!app/app'], function(app){ });


//doesn't work when optimizing???

// define(function(require){
// 	var
// 		$ = require('jquery')
// 		, migrate = require('jqueryM')
// 		,tester = require('cs!app/test')
// 	;
// 	
// 	console.log("main.js");
// 	console.log("returned from test: ", tester());
// });