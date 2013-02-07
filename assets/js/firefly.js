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
 * Modals
 * =============================================================
 */

(function( $ ) {
	$.fn.bcModals = function(options) {
		//default ID declared
		var $modalID = 0;
		return this.each(function() {
			$modalID = $modalID + 1;
			//change this to jquery's way of doing it which is right above
			var
				$modal = $(this),
				$data = $(this).data();
				$parent = $modal.closest('[data-role=parent]'),
				$dataTrigger = $parent.find('[data-role=trigger]')
			;

			//data comes in plugin overlay event and id

			//default settings
			var settings = $.extend( {
				'modalOverlay' : ($data.overlay) ? $data.overlay : 'dark',
				'modalEvent' : ($data.event) ? $data.event : 'onclick',
				'modalID' : ($data.id) ? $data.id : $modalID + 1,
				'modalHeight' : $modal.height()
			}, options);

			function overlayClick(){
				$("#" + settings.modalID + ".overlay").on("click", function(e){
					$(this).remove();
					$modal.hide();
					e.preventDefault();
				});
			}
			
			switch(settings.modalEvent) {
				case "onclick":
					$dataTrigger.on("click",function(e){
						$(this).closest('[data-role=parent]').find($modal).show().css('margin-top', -(settings.modalHeight/2));
						$parent.after('<div id="'+ settings.modalID +'" class="overlay ' + settings.modalOverlay + '"></div>');
						overlayClick();
						e.preventDefault();
					});
				break;
				case "onhover":

				break;
				default:
					$modal.show().css('margin-top', -(settings.modalHeight/2));
					$parent.after('<div id="'+ settings.modalID +'" class="overlay ' + settings.modalOverlay + '"></div>');
					overlayClick();
				break;
			}		
		
		});
		
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
	
	options:
	data-plugin = modal
	data-id = unique ID //for overlay closing
	==========
	roles:
	data-role = parent //parent of the modal
	data-role = trigger
	==========
	these are passed here now...they can still come from data-type and data-overlay
	modalEvent = onclick || onhover || onload
	modalOverlay = dark || light (creates .overlay.dark or .overlay.light)
	modalID = uniqueID
	modalHeight = height of modal for positioning
	*/
	
	$('[data-plugin=modal]').bcModals();
	
	
	
	
});

