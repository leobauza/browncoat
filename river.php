<?php

//some possible page variables
$title = "river"; //this is backed up by a generic title set in kaylee.php or a browncoat generic title
$isRiver = true;
?>

<?php include('_inc/header.php'); ?> 

<section class="container">
	<h1>River</h1>
	<h2>river writes your kaylee file for you</h2>
	<section class="row-fluid">
		<article class="span8">
			<form action="/process-river.php" method="post">
				<div class="input-group">
					<label>Title</label>
					<input type="text" name="general[title]" value=""></input>
				</div>

				<div class="input-group">
					<label>Description</label>
					<input type="text" name="general[description]" value=""></input>
				</div>

				<div class="input-group">
					<label>Author</label>
					<input type="text" name="general[author]" value=""></input>
				</div>

				<div class="input-group">
					<label>Core Library</label>
					<input type="radio" name="library[core]" value="firefly" checked="checked"/>
					<input type="radio" name="library[core]" value="none"/>
				</div>

				<div class="input-group">
					<label>Modal Library</label>
					<input type="radio" name="library[modal]" value="firefly"  checked="checked"/>
					<input type="radio" name="library[modal]" value="none"/>

				</div>
				<div class="input-group">
					<label>Btn Library</label>
					<input type="radio" name="library[btn]" value="firefly"  checked="checked"/>
					<input type="radio" name="library[btn]" value="none"/>
				</div>
				<button id="river-submit" type="submit" name="submit" value="submit">Submit</button>
			</form>
		</article>
		<aside class="span4">
			
		</aside>
	</section>
</section>


<?php include('_inc/footer.php'); ?>

