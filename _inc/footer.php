	<footer class="container">
		<a href="/river.php" class="btn-gray">go to river</a>
		<a href="/simon.php" class="btn-gray">run simon</a>
		<a href="/" class="btn-gray">go home</a>
		<a href="/wiper.php" data-ajax="wiper" class="btn-gray">wipe serenity</a>
	</footer>

	<!-- javascript -->

	<!-- why the fuck are these called modals? -->
	<?php
	
	//
	
	
	?>
	
	<section data-modal="river" class="modal-cont">
		<aside class="modal-main ">
			<header>
				<h2>river processed</h2>
			</header>
			<article class="body">
				
			</article>
			<footer>
				<a href="/simon.php" class="btn-main">run simon</a>
			</footer>
		</aside>
	</section>
	<div class="overlay dark" data-modal='river'></div>

	<section data-modal="wiper" class="modal-cont">
		<aside class="modal-main ">
			<header>
				<h2>Wiper Modal</h2>
			</header>
			<article class="body">
				<p>Write something that returns whether or not serenity, washer, and styles.css are cleared...for now just refresh to see the result...Obviously, in simon you can't just refresh because it rewrites</p>
			</article>
			<footer>
				<a href="/river.php" class="btn-main">go to river</a>
				<a href="/simon.php" class="btn-main">run simon</a>
				<a href="/" class="btn-main">go home</a>
				<a href="/wiper.php" data-ajax="wiper" class="btn-main">wipe serenity</a>
			</footer>
		</aside>
	</section>
	<div class="overlay dark" data-modal='wiper'></div>

	<?php include("scripts.php"); ?>


	<script>
		//hide all modals no matter their modal relation or if modal files are wri
		
		/* 
		 * =============================================================
		 * show modal wipers on wiper clicks
		 * =============================================================
		 */

		$('[data-ajax="river"]').click(function(e){
			$("[data-modal='river']").show();
			var url = "/process-river.php";
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

		//set all to theme
		$('[data-theme]').on("click", function(e){
			var $theme = $(this).attr('data-theme');
			$("[value=" + $theme + "]").attr('checked','checked');
			e.preventDefault();
		});
		
		
		//import click
		$('[data-name]').on("click", function(e){
			$name = $(this).attr('data-name');
			$value = $(this).attr('data-value');
			if($name == "all") {
				$("[data-name]").not($(this)).trigger("click");
			} else {
				$("input[type=text][name*="+ $name +"]").attr('value', $value);
				$("input[type=radio][name*="+ $name +"][value=" + $value + "]").attr('checked', 'checked');
			}

			e.preventDefault();
		});



	</script>


	<!-- end javascript -->
</body>
</html>
