;(function ( $, window, document, undefined ) {

	//some vars I need
	var 
		pluginName = 'bcPlugin',
		modalID = 0
	;

	//PLUGIN CONSTRUCTOR
	function Plugin( element, options ) {
		//the modal
		this.element = element;
		//used to set defaults and have the option of data from markup
		var
			$modal = $(this.element);
			data = $modal.data();
			modalID = modalID + 1
		;
		//default settings :: data comes in plugin overlay event and id
		this.options = $.extend( {
			'modalOverlay' : (data.overlay) ? data.overlay : 'dark',
			'modalEvent' : (data.event) ? data.event : 'click',
			'modalID' : (data.id) ? data.id : modalID,
			'modalHeight' : $modal.height(),
			'modalParent' : $modal.closest('[data-role=parent]'),
		}, options) ;
		this._name = pluginName;
		this.init($modal, data);
	}

	//INIT SETS UP ALL MY BASIC VARS AND CALLS THE RIGHT EVENT
	Plugin.prototype.init = function (modal, data) {
		//init stuff
		// this.element, this.option, modal is this.element object, data is the this.element.data()
		$modal = $(this.element);
		//data parent in $object form
		$parent = this.options.modalParent;
		//data trigger in $object form
		$trigger = this.options.modalParent.find('[data-role=trigger]');
		//the event
		
		
		//log all my options
		//console.log(this.options);

		//pass my init vars through to other events as need be

		this.click($modal, $parent, $trigger);
	};
	
	//CLICK FUNCTION
	Plugin.prototype.click = function(modal, parent, trigger) {
		// click event here
		// this.element, this.options
		var
			height = this.options.modalHeight,
			modalID = this.options.modalID,
			modalOverlay = this.options.modalOverlay
			$thisPlugin = this;
		;
		trigger.on("click",function(e){
			$(this).closest('[data-role=parent]').find(modal).show().css('margin-top', -(height/2));
			parent.after('<div id="'+ modalID +'" class="overlay ' + modalOverlay + '"></div>');
			//overlayClick(modal, modalID);
			$thisPlugin.close(modal, modalID);
			e.preventDefault();
		});
		
	}
	Plugin.prototype.close = function(modal, modalID) {
		console.log("close")
		//closing modals with overlay click move this?
		$("#" + modalID + ".overlay").on("click", function(e){
			$(this).remove();
			modal.hide();
			e.preventDefault();
		});
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
	
	'modalOverlay' : (data.overlay) ? data.overlay : 'dark', //dark or light
	'modalEvent' : (data.event) ? data.event : 'click', // click, hover, load
	'modalID' : (data.id) ? data.id : modalID,
	'modalHeight' : $modal.height(),
	'modalParent' : $modal.closest('[data-role=parent]'),
 ===========================================================

 */

$('[data-plugin=modal]').bcPlugin();





