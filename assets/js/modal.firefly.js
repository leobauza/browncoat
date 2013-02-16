;(function ( $, window, document, undefined ) {

	var 
		pluginName = 'fireflyModal',
		modalID = 0
	;

	function Plugin( element, options ) {
		//the modal
		this.element = element;
		//used to set defaults and have the option of data from markup
		var
			$modal = $(this.element),
			data = $modal.data(),
			modalID = modalID + 1
		;
		//default settings :: data comes in plugin overlay event and id
		this.options = $.extend( {
			'modalOverlay' : (data.overlay) ? data.overlay : 'dark',
			'modalEvent' : (data.event) ? data.event : 'click',
			'modalID' : (data.id) ? data.id : modalID,
			'modalHeight' : $modal.height(),
			'modalParent' : $modal.closest('[data-role=parent]')
		}, options) ;
		this._name = pluginName;
		this.init($modal, data);
	}
	
	Plugin.prototype = {
		init : function (modal, data) {
			// this.element, this.option, modal is this.element object, data is the this.element.data()
			var
				//thePlugin = this,
				$modal = $(this.element),
				$parent = this.options.modalParent,
				$trigger = this.options.modalParent.find('[data-role=trigger]'),
				theEvent = this.options.modalEvent
			;
			
			//pass my init vars through to other events as need be
			if(!theEvent || theEvent == "click") {
				this.modalClick($modal, $parent, $trigger);
			} else if(theEvent == "hover") {
				this.modalHover($modal, $parent, $trigger);
			} else {
				this.modalLoad($modal, $parent);
			}
		}
		, modalClick : function(modal, parent, trigger) {
			var
				that = this;
			;
			
			trigger.on("click",function(e){
				$(this).closest('[data-role=parent]').find(modal).show().css('margin-top', -(that.options.modalHeight/2) + "px");
				parent.append('<div id="'+ that.options.modalID +'" class="overlay ' + that.options.modalOverlay + '"></div>');
				that.modalClose(modal, that.options.modalID);
				e.preventDefault();
			});
		}
		, modalHover : function(modal, parent, trigger){
			//write options for hover...
			parent.hover(
			function(){
				$(this).find(modal).show();
			},
			function() {
				$(this).find(modal).hide();
			});
		}
		, modalLoad : function(modal, parent) {
				modal.show();
				modal.css('margin-top', -(modal.height()/2) + "px");
				parent.after('<div id="'+ this.options.modalID +'" class="overlay ' + this.options.modalOverlay + '"></div>');
				this.modalClose(modal, this.options.modalID);

		}
		, modalClose : function(modal, modalID) {
			$("#" + modalID + ".overlay").on("click", function(e){
				$(this).remove();
				modal.hide();
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
	
	'modalOverlay' : (data.overlay) ? data.overlay : 'dark', //dark or light
	'modalEvent' : (data.event) ? data.event : 'click', // click, hover, load
	'modalID' : (data.id) ? data.id : modalID,
	'modalHeight' : $modal.height(),
	'modalParent' : $modal.closest('[data-role=parent]'),
	
 ===========================================================

 */

//data api built into plugin
$('[data-plugin=modal]').fireflyModal({
	//modalOverlay : "light",
	//modalEvent : "click",
	//modalID : "platy",
	//modalHeight: "100px"
	//modalParent: $(this).closest('body')
});
