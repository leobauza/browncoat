define (require) ->
	markers = require('cs!app/markers')
	jform = require('jForm')	
	
	if markers.ieVer == -1
		#console.log "iever: ", markers.ieVer
		$('form').jform()

	"jQuery Plugins Being Called"