define (require) ->
	$ = require('jquery')
	sandbox = require('cs!vendor/sandbox')
	jbtnfx = require('cs!vendor/jbtnfx')
	sandboxjs = require('vendor/sandboxjs')
	#boilerplate = require('cs!boilerplates/amd.jquery.plugin.boilerplate')
	
	sandbox =
		init: ->
			console.warn "using the sandbox"
			@boilerplate()
			@btnfx()
		
		boilerplate: ->
			#console.warn "boilerplate use example in sandbox"
			# console.log $.fn.myPlugin.defaults
			# console.log $.fn.myPlugin.Plugin.prototype
			# console.log "shortcut to proto: ", boilerplate.prototype
			# $('h1').myPlugin {
			# 	paramA: "Param A"
			# }
			# $('h1').myPlugin('myMethod', 'This is in my h1')

			#console.log jdrop
			#jdrop.useOutside("my word")
		
		closeCallout: () ->
			
		
		modals: () ->
			
		btnfx: () ->
			# console.log jbtnfx.prototype
			# console.log $.fn.jbtnfx.defaults
			$('[data-plugin=btnfx]').jbtnfx({
				tcss: 200
				tdiff: 0
			})#.jbtnfx('toEndState')
			$('.collapse-sidebar').on "open.bc.btnfx", -> $('.span-sidebar .list-group').show()
			$('.collapse-sidebar').on "close.bc.btnfx", -> $('.span-sidebar .list-group').hide()
			
			
			#setTimeout (-> $('.open-and-close').jbtnfx('toStartState')), 2000
		
	#end
	