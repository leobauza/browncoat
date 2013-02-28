;(function ( $, window, document, undefined ) {

	var 
		pluginName = 'fireflyForm'
	;

	function Plugin( element, options ) {
		//the modal
		this.element = element;
		//used to set defaults and have the option of data from markup
		var
			$form = $(this.element),
			data = $form.data()
		;
		//default settings :: data comes in plugin overlay event and id
		this.options = $.extend( {
			'radios' : (data.radios) ? data.radios : 'false',
			'myoption2' : (data.myoptions2) ? data.myoption2 : 'my default 2'
		}, options) ;
		this._name = pluginName;
		this.init();
	}
	
	Plugin.prototype = {
		init : function () {
			if(this.options.radios == true) {
				this.radios();
			}
		}
		, radios : function() {
			//my event

			$(this.element).find('.radio-group').each(function(){
				var $label = $(this).find('label').html();
				var $checked = $(this).find('input').attr('checked');
				if($label == "true" || $label == "false") {
					$(this).append("<a href=\"#\" data-input=\"radio\" class=\"btn-main\">" + $label + "</a>");
				} else {
					$(this).append("<a href=\"#\" data-theme=\""+ $label +"\" data-input=\"radio\" class=\"btn-main\">" + $label + "</a>");
				}
				if($checked == "checked") {
					$(this).find("a").addClass("active");
				}
				$(this).find('input, label').hide();
			});
			
			$('[data-input=radio]').click(function(e){
				$(this).closest('.input-group').find('.active').removeClass('active');
				$(this).addClass('active');
				$(this).closest('.radio-group').find('input').attr('checked','checked');
				e.preventDefault();
			});
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
$('form').fireflyForm();
