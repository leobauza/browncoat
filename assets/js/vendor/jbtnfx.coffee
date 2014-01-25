#wrapper function for AMD usage
((root, factory) ->
	if typeof define is 'function' and define.amd
		define(['jquery'], factory)
	else
		factory(root.jQuery, window)

)(this, ($, window) ->
	
	# set plugin defaults
	defaults = 
		tcss: 200 #time that the css animation takes up OR more
		tdiff: 0 #if MORE then the difference

	# Define the plugin class
	class Plugin

		constructor: (el, options) ->
			self = @
			@options = $.extend({}, defaults, options)
			@el = el
			@$el = $(el)
			@$el.on 'click.bc.btnfx', (e) -> self.toggle(e, @)
			@isAnimating = false
		
		# Additional plugin methods go here
		toggle: (e, that) ->
			e.preventDefault()
			isOn = $(that).hasClass 'stg-one'
			if !isOn
				if !@isAnimating then @toEndState()
			else
				if !@isAnimating then @toStartState()
		
		toEndState: (el) ->
			@$el.trigger "open.bc.btnfx"
			if !el then el = @el
			self = @
			@isAnimating = true
			$(el).addClass "stg-one"			
			callback = -> $(el).addClass 'stg-two'
			
			setTimeout callback, @options.tcss
			setTimeout (() => @.finalize()), @options.tcss * 2 - @options.tdiff
		
		toStartState: (el) ->
			@$el.trigger "close.bc.btnfx"
			if !el then el = @el
			self = @
			@isAnimating = true
			$(el).removeClass "stg-two"
			callback = ->
				$(el).removeClass 'stg-one'
			
			setTimeout callback, @options.tcss
			setTimeout (() => @finalize()), @options.tcss * 2  - @options.tdiff
		
		finalize: () ->
			@isAnimating = false
		
	#private functions
	

	
	# Define the plugin
	$.fn.extend jbtnfx: (option, args...) ->
		@each ->
			$this = $(this)
			data = $this.data('jbtnfx')
			if !data
				$this.data 'jbtnfx', (data = new Plugin(this, option))
			if typeof option is 'string'
				data[option].apply(data, args)
	
	# Allow to be set from the outside
	$.fn.jbtnfx.defaults = defaults
	$.fn.jbtnfx.Plugin = Plugin

)