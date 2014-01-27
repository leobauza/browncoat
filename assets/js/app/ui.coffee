define (require) ->
	markers = require('cs!app/markers')
	jdrop = require('cs!vendor/jdropdown')
	jbtnfx = require('cs!vendor/jbtnfx')
	
	ui = 
		init: ->
			@dropdowns('[data-plugin=dropdown] [data-role=toggle]')
			@btnfx('[data-plugin=btnfx]')
		
		resize: ->
			console.log "resize"
		
		dropdowns: (el) ->
			###
			dev:
			console.log "jdrop defaults: ", $.fn.jdropdown.defaults
			console.log "jdrop proto: ", jdrop.prototype			
			$('[data-plugin=dropdown] [data-role=toggle]').jdropdown("useOutside", "my word")
			$('.btn--error[data-role=toggle]').jdropdown("toggle", null, '.btn--error[data-role=toggle]')
			###
			console.warn "using jdrop"
			$(el).jdropdown()
		
		btnfx: (el) ->
			###
			dev:
			console.log jbtnfx.prototype
			console.log $.fn.jbtnfx.defaults
			$('.collapse-sidebar').on "open.bc.btnfx", -> $('.span-sidebar .list-group').show()
			$('.collapse-sidebar').on "close.bc.btnfx", -> $('.span-sidebar .list-group').hide()
			###
			console.warn "using jbtnfx"
			$(el).jbtnfx({
				tcss: 200
				tdiff: 0
			})
		