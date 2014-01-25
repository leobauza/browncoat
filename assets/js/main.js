require.config({
	paths: {
		'jquery': './libs/jquery/jquery',
		'jqueryM': './libs/jquery/jquery-migrate',
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

require(['cs!app/app'], function(app){ });


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