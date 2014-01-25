#wrapper function for AMD usage
((root, factory) ->

	if typeof define is 'function' and define.amd
		define(['jquery'], factory)
	else
		factory(root.jQuery, window)

)(this, ($, window) ->
	
	# set plugin defaults
	defaults = 
		paramA: 'foo'
		paramB: 'bar'

	# Define the plugin class
	class Plugin

		constructor: (el, options) ->
			@options = $.extend({}, defaults, options)
			@$el = $(el)

		# Additional plugin methods go here
		myMethod: (echo) ->
			#console.log @options
			@$el.html(@options.paramA + ': ' + echo)

	# Define the plugin
	$.fn.extend myPlugin: (option, args...) ->
		@each ->
			$this = $(this)
			data = $this.data('myPlugin')
			if !data
				$this.data 'myPlugin', (data = new Plugin(this, option))
			if typeof option is 'string'
				data[option].apply(data, args)
		
	# Allow to be set from the outside
	$.fn.myPlugin.defaults = defaults
	$.fn.myPlugin.Plugin = Plugin

)


# $.fn.myPlugin.defaults.paramB = "not-bar"
# $('h1').myPlugin({
# 	paramA: "not-foo"
# })
# $('h1').myPlugin('myMethod', 'stuff')

