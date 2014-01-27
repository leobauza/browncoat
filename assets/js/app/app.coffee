define (require) ->
	$ = require('jquery')
	markers = require('cs!app/markers')
	helpers = require('cs!app/helpers')
	ui = require('cs!app/ui')
	sandbox = require('cs!app/sandbox')
	
	###
	
	helpers:
	the helpers module provides useful helper functions to use in your project.
	the init() method calls the ones that don't need to return anything
	you can call individual ones, for example:
	helpers.getIeVer() will return the IE version or -1 for non IE

	###
	helpers.init()
	
	###
	
	ui:
	the ui module provides some jQuery plugins your might want
	the init() method will call all the ones available with the default settings
	Each plugin is asigned a method to which options can be passed for example:
	ui.dropdowns('[data-plugin=dropdown] .btn--info[data-role=toggle]')
	that will set up dropdowns with [data-plugin=dropdown] .btn--info[data-role=toggle] as the toggle
	###
	ui.init()
	
	
	###
	sandbox:
	play around with stuff on the sandbox.
	
	there are these two files commented at the top:
	sandbox = require('cs!vendor/sandbox')
	sandboxjs = require('vendor/sandboxjs')
	
	I will be adding useful snippets and explenations of js concepts in these
	I will also have notes and other possibly useful things in there for anyone to checkout
	and hopefully learn something new
	
	###
	sandbox.init()
	
	
	###
	markers:
	markers are helpful variables you may want to keep track off
	also useful to update them to keep track of them for example:
	markers.win
	that will give you the window width
	and on resize (see at the bottom of file)
	$(window).resize ->
		markers.win = $(window).width()
	
	which will set the window width var to the new window width
	note: notice that markers.ieVer uses the helper getIeVer to get that marker
	###
	console.log "Window width: ", markers.win
	console.log "IE version: ", markers.ieVer
	
	###
	resize function:
	resize function included to illustrate the use of two things:
	1) updating a marker depending on the users actions
	2) calling a ui method not called with the init method
	###
	$(window).resize ->
		markers.win = $(window).width()
		ui.resize()
	