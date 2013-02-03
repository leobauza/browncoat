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

	<section class="modal-cont">
		<aside data-modal="wiper" class="modal-main ">
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

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script src="../assets/js/touchwipe.min.js"></script>
	<script src="../assets/js/malcolm.js"></script> 


	<script>
		//hide all modals no matter their modal relation or if modal files are wri
		
		/* 
		 * =============================================================
		 * show modal wipers on wiper clicks
		 * =============================================================
		 */
		$('[data-ajax="wiper"]').click(function(e){
			$("[data-modal='wiper']").show();
			$(".modal-cont").show();
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




	</script>


	<!-- end javascript -->
</body>
</html>
