	<footer class="container">
		<a href="/simon.php" class="btn-gray">run simon</a>
		<a href="/" class="btn-gray">go home</a>
		<a href="/wiper.php" data-ajax="wiper" class="btn-gray">wipe serenity</a>
	</footer>

	<!-- javascript -->


	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script src="../assets/js/touchwipe.min.js"></script>
	<script src="../assets/js/malcolm.js"></script> 


	<script>
		
		$('[data-ajax="wiper"]').click(function(e){
			
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
