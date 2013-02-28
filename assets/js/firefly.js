;(function ( $, window, document, undefined ) {

	var 
		pluginName = 'myplugin'
	;

	function Plugin( element, options ) {
		//the modal
		this.element = element;
		//used to set defaults and have the option of data from markup
		var
			$plugin = $(this.element),
			data = $plugin.data()
		;
		//default settings :: data comes in plugin overlay event and id
		this.options = $.extend( {
			'myoption' : (data.myoption) ? data.myoption : 'my default',
			'myoption2' : (data.myoptions2) ? data.myoption2 : 'my default 2'
		}, options) ;
		this._name = pluginName;
		this.init(stuff);
	}
	
	Plugin.prototype = {
		init : function (stuff) {
			//my init code
			
			//call my methods from init
			this.myMethod(stuff);
		}
		, myMethod : function(stuff) {
			//my event
		}
	}

	// A really lightweight plugin wrapper around the constructor, 
	// preventing against multiple instantiations
	$.fn[pluginName] = function ( options ) {
		return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, 
				new Plugin( this, options ));
			}
		});
	}

})( jQuery, window, document );


/*
===========================================================
	OPTIONS DEFAULTS:
	
	'myoption' : (data.myoption) ? data.myoption : 'my default', 
	'myoption2' : (data.myoption2) ? data.myoption2 : 'my default 2'
	
 ===========================================================

 */

//data api built into plugin
$('[data-plugin=plugin]').myplugin();
