/* 
 * =============================================================
 * NOT HOW THE JS LIBRARIES WILL WORK
 * THIS IS TEMPORARY UNTIL I SORT OUT JS LIBRARIES
 * =============================================================
 */
$(function(){
	
	/* 
	 * =============================================================
	 * Modals (firefly)
	 * =============================================================
	 */
	/*

	options:
	data-plugin = modal
	data-id = unique ID //for overlay closing
	data-type = onclick || onhover || onload
	data-overlay = dark || light (creates .overlay.dark or .overlay.light)
	==========
	roles:
	data-role = parent //parent of the modal
	data-role = trigger


	*/

	//create unique modal id if none exists
	var $modalID = 0;
	$('[data-plugin=modal]').each(function(){
		$modalID = $modalID + 1;
		var
			$modal = $(this),
			$id = $modal.attr('data-id') || $modalID,
			$parent = $modal.closest('[data-role=parent]'), //required
			$overlay = $modal.attr('data-overlay') || "dark",  //light or dark
			$dataType = $modal.attr('data-type') || "onclick",
			$dataTrigger = $parent.find('[data-role=trigger]')
			$height = $modal.height();
		;
		function overlayClick(){
			$("#" + $id + ".overlay").on("click", function(e){
				console.log("click");
				$(this).remove();
				$modal.hide();
				e.preventDefault();
			});
		}
		switch($dataType) {
			case "onclick":
				$dataTrigger.on("click",function(e){
					$(this).closest('[data-role=parent]').find($modal).show().css('margin-top', -($height/2));
					$parent.after('<div id="'+ $id +'" class="overlay ' + $overlay + '"></div>');
					overlayClick();
					e.preventDefault();
				});
			break;
			case "onhover":
				
			break;
			default:
				$modal.show().css('margin-top', -($height/2));
				$parent.after('<div id="'+ $id +'" class="overlay ' + $overlay + '"></div>');
				overlayClick();
			break;
		}
		
	});
	
	
	
});

