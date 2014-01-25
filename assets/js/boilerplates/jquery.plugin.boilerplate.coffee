# A class-based template for jQuery plugins in Coffeescript
#
#			$('.target').myPlugin({ paramA: 'not-foo' });
#			$('.target').myPlugin('myMethod', 'Hello, world');
#
# Check out Alan Hogan's original jQuery plugin template:
# https://github.com/alanhogan/Coffeescript-jQuery-Plugin-Template
#
(($, window) ->
 
	# Define the plugin class
	class MyPlugin

		# REPLACED these with $.fn.myPlugin.defaults
		# defaults:
		# 	paramA: 'foo'
		# 	paramB: 'bar'

		constructor: (el, options) ->
			#@options = $.extend({}, @defaults, options)
			@options = $.extend({}, $.fn.myPlugin.defaults, options)
			@$el = $(el)

		# Additional plugin methods go here
		myMethod: (echo) ->
			@$el.html(@options.paramA + ': ' + echo)

	# Define the plugin
	$.fn.extend myPlugin: (option, args...) ->
		@each ->
			$this = $(this)
			data = $this.data('myPlugin')
			if !data
				$this.data 'myPlugin', (data = new MyPlugin(this, option))
			if typeof option == 'string'
				data[option].apply(data, args)
		
	# Allow to be set from the outside
	$.fn.myPlugin.defaults =
		paramA: "foo"
		paramB: "bar" 



) window.jQuery, window


console.log $.fn.myPlugin.defaults

$.fn.myPlugin.defaults.paramA = "something"

console.log $.fn.myPlugin.defaults


$('h1').myPlugin({
	paramA: 'something elsier'
})
$('h1').myPlugin('myMethod', 'poop')


# (($, window, document) ->
#		Plugin =
#			init: () ->
#				this.prop = 'value'
#			
# 
#		#define plugin
#		$.fn.myPlugin = () ->
#			@each ->
#				plugin = Object.create( Plugin )
#				plugin.init()
#				console.log(Plugin)
#				console.log(plugin)
#		
#		#able to set options outside of plugin
#		$.fn.myPlugin.options =
#			something: "something"
# 
#	 
# ) jQuery, window, document
# 
# $('h1').myPlugin()

# (($, window, document) ->
#		class Plugin
#			constructor: () ->
#				return "my constructor"
#			
#			init: () ->
#				"stuff"
#			
# 
#		#define plugin
#		$.fn.myPlugin = () ->
#			@each ->
#				console.log(Plugin())
#				plugin = new Plugin
#				console.log(plugin)
#		
#		#able to set options outside of plugin
#		$.fn.myPlugin.options =
#			something: "something"
#
# ) jQuery, window, document
