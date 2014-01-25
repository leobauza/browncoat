define (require) ->
	$ = require('jquery')
	helpers =
		init: ->
			@fixConsole()
			@setup()
	
		fixConsole: ->
			that = window
			if typeof console is "undefined" then that.console = log: ->
	
		getIeVer: ->
			rv = -1;
			if navigator.appName is 'Microsoft Internet Explorer'
				ua = navigator.userAgent;
				re = new RegExp "MSIE ([0-9]{1,}[\.0-9]{0,})"
				if re.exec(ua) isnt null
					rv = parseFloat(RegExp.$1)
			rv
	
		setup: ->
			#add l class for ie
			$('[class*=row-fluid]').each ->
				$(this).find("[class*=\"span\"]:last-child").addClass 'l'
	
