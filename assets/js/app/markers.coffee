define (require) ->
	helpers = require('cs!app/helpers')
	
	markers =
		win: $(window).width()
		ieVer: helpers.getIeVer()
		