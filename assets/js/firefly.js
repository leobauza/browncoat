;(function ( $, window, document, undefined ) {

		var 
			pluginName = 'bcPlugin',
			modalID = 0
		;

		// The actual plugin constructor
		function Plugin( element, options ) {
			//the modal
			this.element = element;

			var
				$modal = $(this.element);
				data = $modal.data();
				//the required parent
				//$parent = $modal.closest('[data-role=parent]'),
				//the required trigger
				//$trigger = $parent.find('[data-role=trigger]'),
				//modal id
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

		Plugin.prototype.init = function (modal, data) {
			//init stuff
			// this.element, this.option, modal is this.element object, data is the this.element.data()

			//data parent in $object form
			$parent = this.options.modalParent;
			//data trigger in $object form
			$trigger = this.options.modalParent.find('[data-role=trigger]');

			//log all my options
			console.log(this.options);
			//console.log(this.options.modalID);
			//$(this.element).addClass('asdsadsadasdsa');
	
			//pass my init vars through to other events as need be
			//this.click();
		};
		
		Plugin.prototype.click = function(modal, data) {
			// click event here
			// this.element, this.options
			console.log("click initiated");
			
			this.options.modalParent.find('[data-role=trigger]')
			
			.on("click",function(e){
				$(this).closest('[data-role=parent]').find($modal).show().css('margin-top', -(settings.modalHeight/2));
				$parent.after('<div id="'+ this.options.modalID +'" class="overlay ' + this.options.modalOverlay + '"></div>');
				overlayClick($modal, settings.modalID);
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





