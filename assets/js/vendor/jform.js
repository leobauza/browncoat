;(function ( $, window, document, undefined ) {

	var 
		pluginName = 'jform'
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
			'radiosb' : (data.radiosb) ? data.radiosb : 'false',
			'selects' : (data.selects) ? data.selects : 'false'
		}, options) ;
		this._name = pluginName;
		this.init();
	}
	
	Plugin.prototype = {
		init : function () {
			if(this.options.radios == true) {
				this.radios();
			}
			if(this.options.radiosb == true) {
				this.radiosb();
			}
			if(this.options.selects == true) {
				this.selects();
			}
		}
		, radios : function() {
			//my event

			$(this.element).find('.radio-group').each(function(){
				var $label = $(this).find('label').html();
				var $checked = $(this).find('input').prop('checked');
				$(this).append("<a href=\"#\" data-input=\"radio\" class=\"btn btn--secondary\">" + $label + "</a>");
				if($checked == true) {
					$(this).find("a").addClass("active");
				}
				$(this).find('input, label').hide();
			});
			
			$('[data-input=radio]').click(function(e){
				$(this).closest('.input-group').find('.active').removeClass('active');
				$(this).addClass('active');
				$(this).closest('.radio-group').find('input').prop('checked','checked');
				e.preventDefault();
			});
		}
		, radiosb : function() {
			$(this.element).find('.radio-group').each(function(){
				var $label = $(this).find('label').html();
				var $checked = $(this).find('input').prop('checked');
				$(this).prepend("<a href=\"#\" data-input=\"radio\" class=\"pretty-radio\"></a>").addClass('radiosb');
				if($checked == "checked") {
					$(this).find("a").addClass("active");
				}
				$(this).append($(this).find('input').hide());
			});
			
			$('[data-input=radio]').click(function(e){
				$(this).closest('.input-group').find('.active').removeClass('active');
				$(this).addClass('active');
				$(this).closest('.radio-group').find('input').prop('checked','checked');
				e.preventDefault();
			});
		}
		, checkboxes : function() {
			// THIS IS FOR CHECKBOXES TO UNCHECK
			//$(this).closest('.check-group').find('input').prop('checked',false);
		}
		, selects : function() {
			// prettify selects
			$(this.element).find('select').each(function(){
				var $firstOption = $(this).find('option').html();
				$(this).after('<div class="pretty-select"><div class="select"><span>' + $firstOption + '</span><a href="#">v</a></div><ul></ul></div>');
				$(this).find('option').each(function(){
					var $val = $(this).val();
					var $text = $(this).html();
					$(this).closest('.select-group').find('.pretty-select ul').append('<li><a href="#" data-input="option" data-val="'+ $val +'">' + $text + '</a></li>')
				});
			});
			//dropdown functionality
			$('.pretty-select a').click(function(e){
				$(this).closest('.pretty-select').find('ul').toggle();
				e.preventDefault();
			})
			
			//assing value to select
			$('[data-input=option]').click(function(e){
				var $data = $(this).data();
				var $html = $(this).html();
				$(this).closest('.select-group').find('select').val($data.val);
				$(this).closest('.select-group').find('span').html($html);
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

