define (require) ->
	$ = require('jquery')
	migrate = require('jqueryM')
	markers = require('cs!app/markers')
	helpers = require('cs!app/helpers')
	ui = require('cs!app/ui')
	plugins = require('cs!app/plugins')
	sandbox = require('cs!app/sandbox')
	
	helpers.init()
	ui.init()
	
	#play around with stuff on the sandbox
	sandbox.init()
	
	
	#log
	# console.log "markers: ", markers
	# console.log "helpers: ", helpers
	# console.log "ui: ", ui
	# console.log "plugins: ", plugins
	
	$(window).resize ->
		markers.win = $(window).width()
		ui.resize()
		