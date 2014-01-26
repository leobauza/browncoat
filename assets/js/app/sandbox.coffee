define (require) ->
	$ = require('jquery')
	#sandbox = require('cs!vendor/sandbox')
	jbtnfx = require('cs!vendor/jbtnfx')
	#sandboxjs = require('vendor/sandboxjs')
	
	sandbox =
		init: ->
			console.warn "using the sandbox"
			@btnfx()
		
		btnfx: () ->
			console.log "btn fx"
			# console.log jbtnfx.prototype
			# console.log $.fn.jbtnfx.defaults
			$('[data-plugin=btnfx]').jbtnfx({
				tcss: 200
				tdiff: 0
			})#.jbtnfx('toEndState')
			$('.collapse-sidebar').on "open.bc.btnfx", -> $('.span-sidebar .list-group').show()
			$('.collapse-sidebar').on "close.bc.btnfx", -> $('.span-sidebar .list-group').hide()
		
	
	#end
	