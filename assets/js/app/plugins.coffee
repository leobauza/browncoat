define (require) ->
	markers = require('cs!app/markers')
	jform = require('jForm')
	jbtnfx = require('cs!vendor/jbtnfx')
	
	if markers.ieVer == -1
		#console.log "iever: ", markers.ieVer
		$('form').jform()
	
	# console.log jbtnfx.prototype
	# console.log $.fn.jbtnfx.defaults
	$('[data-plugin=btnfx]').jbtnfx({
		tcss: 200
		tdiff: 0
	});
	$('.collapse-sidebar').on "open.bc.btnfx", -> $('.span-sidebar .list-group').show()
	$('.collapse-sidebar').on "close.bc.btnfx", -> $('.span-sidebar .list-group').hide()

	
	"jQuery Plugins Being Called"