require.config({
	deps: ['cs!app/app'], //this is the same as require(['cs!app/app'], function(app){ }); the config code
	paths: { //these are aliases
		// 'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
		'jquery': 'libs/jquery', //need a local one because of jForm having a dependency
		'jqueryM': 'libs/jquery-migrate',
		'jForm' : 'vendor/jform'
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