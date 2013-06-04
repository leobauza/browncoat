	<footer class="container">
		<a href="/river.php" class="btn btn-grey">go to river</a>
		<a href="/simon.php" class="btn btn-grey">run simon</a>
		<a href="/" class="btn btn-grey">go home</a>
		<a href="processors/wiper.php" data-ajax="wiper" class="btn btn-grey">wipe serenity</a>
	</footer>

	<!-- javascript -->

	<!-- why are these called modals? -->
	<?php
	
	//
	
	
	?>
	
	<section data-modal="river" class="modal-cont">
		<aside class="modal-inner ">
			<header>
				<h2>river processed</h2>
			</header>
			<article class="body">
				
			</article>
			<footer>
				<a href="/simon.php" class="btn btn-main">run simon</a>
			</footer>
		</aside>
	</section>
	<div class="overlayold dark" data-modal='river'></div>

	<section data-modal="wiper" class="modal-cont">
		<aside class="modal-inner">
			<header>
				<h2>Wiper Modal</h2>
			</header>
			<article class="body">
				<p>Write something that returns whether or not serenity, washer, and styles.css are cleared...for now just refresh to see the result...Obviously, in simon you can't just refresh because it rewrites</p>
			</article>
			<footer>
				<a href="/river.php" class="btn btn-main">go to river</a>
				<a href="/simon.php" class="btn btn-main">run simon</a>
				<a href="/" class="btn btn-main">go home</a>
				<a href="processors/wiper.php" data-ajax="wiper" class="btn btn-main">wipe serenity</a>
			</footer>
		</aside>
	</section>
	<div class="overlayold dark" data-modal='wiper'></div>



	<?php include("scripts.php"); ?>


	<script>
		//hide all modals no matter their modal relation or if modal files are written?
		
		/* 
		 * =============================================================
		 *  MODALS (this is now part of the firefly modals plugin)
		 * =============================================================
		 */
		//river modal 
		$('[data-ajax="river"]').click(function(e){
			$("[data-modal='river']").show();
			var url = "processors/process-river.php";
			$riverRequest = $.ajax({
				type: "POST",
				url: url,
				data: $("form").serialize(), // serializes the form's elements.
				success: function(data){
					//do something when it succeeds
					$("[data-modal='river'] .body").html(data);
					console.log(data);
				}
			});
			$riverRequest.done(function(msg){
				//do something when it is done
				
			});
			return false; // avoid to execute the actual submit of the form.
		});

		//wiper modal
		$("[data-ajax='wiper']").click(function(e){
			$("[data-modal='wiper']").show();
			var url = $(this).attr('href');
			$wipeRequest = $.ajax({
				url:url,
				success: function(data){
					//do something when it succeeds
					
				}
			});
			$wipeRequest.done(function(msg){
				//do something when it is done
			});
			e.preventDefault();
		});

/* 
 * =============================================================
 *  RIVER SPECIFIC CODE
 * =============================================================
 */

if($('#river').length) {
		/* 
		 * =============================================================
		 *  kaylee IMPORTING
		 * =============================================================
		 */
		//set all to theme
		$(document).on("click",'[data-theme]' ,function(e){

			var $theme = $(this).attr('data-theme');

			$("[value=" + $theme + "]").prop('checked','checked');
			$("[data-theme]").removeClass('active');
			$("[data-theme=" + $theme + "]").addClass('active');
			e.preventDefault();
		});

		//import clicks
		$(document).on("click", '[data-name]',function(e){
			
			$name = $(this).attr('data-name');
			$value = $(this).attr('data-value');
			$value = "'" + $value + "'";

			if($name == "all") {
				$("[data-name]").not($(this)).trigger("click");
			} else {
				$("input[type=text][name*="+ $name +"]").attr('value', $value.replace(/'/g, ""));
				$("input[type=radio][name*="+ $name +"][value=" + $value + "]").prop('checked', 'checked');
			}
			$(".radio-group").each(function(){
				$(this).find("a").removeClass('active');
				$(this).find("input:checked").closest(".radio-group").find("a").addClass('active');
			});
			e.preventDefault();
		});

		/* 
		 * =============================================================
		 *  pretty radio btns (this is now part of the firefly forms plugin) BUT THESE HAVE THE THEME ADDING THING
		 * =============================================================
		 */

			$('.radio-group').each(function(){
				var $label = $(this).find('label').html();
				var $checked = $(this).find('input').prop('checked');
				if($label == "true" || $label == "false") {
					$(this).append("<a href=\"#\" data-input=\"radio\" class=\"btn btn-main\">" + $label + "</a>");
				} else {
					$(this).append("<a href=\"#\" data-theme=\""+ $label +"\" data-input=\"radio\" class=\"btn btn-main\">" + $label + "</a>");
				}
				if($checked == "checked") {
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
} // end if river has length


	</script>


	<!-- end javascript -->
</body>
</html>
