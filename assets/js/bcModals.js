/* 
 * =============================================================
 * NOT HOW THE JS LIBRARIES WILL WORK
 * THIS IS TEMPORARY UNTIL I SORT OUT JS LIBRARIES
 * note 1 : write in plugin form then attach only the needed plugin bundles...
 * =============================================================
 */

/* 
 * =============================================================
 * NAMING CONVENTIONS:
 * bcPlugin (browncoat plugin)
 * =============================================================
 */


/* 
 * =============================================================
 * Modals (god this sucks right now)
 * =============================================================
 */

(function( $ ) {


	//closing modals with overlay click
	function overlayClick(modal, modalID){
		$("#" + modalID + ".overlay").on("click", function(e){
			$(this).remove();
			modal.hide();
			e.preventDefault();
		});
	}
	//default ID declared
	var $modalID = 0;
	//methods
	var methods = {
		click : function( options ) { 
			return this.each(function() {
				$modalID = $modalID + 1;
				var
					//the modal
					$modal = $(this),
					//if there are data attributes grab em'
					$data = $(this).data();
					//the required parent
					$parent = $modal.closest('[data-role=parent]'),
					//the required trigger
					$dataTrigger = $parent.find('[data-role=trigger]')
					//default settings :: data comes in plugin overlay event and id
				;
				var settings = $.extend( {
						'modalOverlay' : ($data.overlay) ? $data.overlay : 'dark',
						'modalEvent' : ($data.event) ? $data.event : 'onclick',
						'modalID' : ($data.id) ? $data.id : $modalID + 1,
						'modalHeight' : $modal.height()
					}, options);
					
				//attach the clicks to each
				$dataTrigger.on("click",function(e){
					$(this).closest('[data-role=parent]').find($modal).show().css('margin-top', -(settings.modalHeight/2));
					$parent.after('<div id="'+ settings.modalID +'" class="overlay ' + settings.modalOverlay + '"></div>');
					overlayClick($modal, settings.modalID);
					e.preventDefault();
				});
			});
		},
		load : function( options ) {
			return this.each(function() {
				$modalID = $modalID + 1;
				var
					//the modal
					$modal = $(this),
					//if there are data attributes grab em'
					$data = $(this).data();
					//the required parent
					$parent = $modal.closest('[data-role=parent]'),
					//the required trigger
					$dataTrigger = $parent.find('[data-role=trigger]')
					//default settings :: data comes in plugin overlay event and id
				;
				var settings = $.extend( {
						'modalOverlay' : ($data.overlay) ? $data.overlay : 'dark',
						'modalEvent' : ($data.event) ? $data.event : 'onclick',
						'modalID' : ($data.id) ? $data.id : $modalID + 1,
						'modalHeight' : $modal.height()
					}, options);
				//attach the clicks to each
				
				$modal.show().css('margin-top', -(settings.modalHeight/2));
				$parent.after('<div id="'+ settings.modalID +'" class="overlay ' + settings.modalOverlay + '"></div>');
				overlayClick($modal, settings.modalID);
				
			});
		},
		hover : function( ) { 
			console.log("write hover code");
		}
	};
	
	
	$.fn.bcModals = function( method ) {
		// Method calling logic
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			//click is default
			return methods.click.apply( this, arguments );
		} else {
			$.error( 'Method ' +	method + ' does not exist on jQuery.tooltip' );
		}
	};
})( jQuery );


$(function(){
	
	/* 
	 * =============================================================
	 * Modals (firefly)
	 * =============================================================
	 */
	
	/*
	- these maintain chainability
	- they can take data-attr to set the options 
	- options can be set here
	
	options in mark up:
	data-plugin = modal 
	data-id = unique ID
	data-overlay = light or dark overlay
	data-event = onclick onhover onload
	
	==========
	related roles:
	data-role = parent //parent of the modal
	data-role = trigger
	==========
	these are passed here now...they can still come from data-type and data-overlay
	modalEvent = onclick || onhover || onload
	modalOverlay = dark || light (creates .overlay.dark or .overlay.light)
	modalID = uniqueID
	modalHeight = height of modal for positioning
	*/
	
	$('[data-plugin="modal"]').each(function(){
		var data = $(this).data();
		$(this).bcModals(data.event);//.css('border-color','yellow');
	});
	
	
	
	
});

