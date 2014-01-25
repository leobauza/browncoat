<section class="container divider">
	<h1>Libraries</h1>
	<p class="short">This section contains example of non standard html elements. This is anything defined with a css class or set of css classes. These however do not include JS functionality. They are just examples of the styles.</p>
</section>

<section class="row-static">
	<aside class="span-sidebar">
		<nav class="inner">
			<h4>Browse Libs:</h4>
			<div class="list-group">
				<a href="#extrabuttons">Extra Buttons</a>
				<a href="#buttons">Buttons</a>
				<a href="#listgroups">List Groups</a>
				<a href="#callouts">Callouts</a>
				<a href="#boxes">Boxes</a>
			</div>
		</nav>
	</aside>
	<section class="span-main">
		<article id="extrabuttons" class="division">
			<?php include './views/libraries/_btnfx.php'; ?>
		</article>
		<article id="buttons" class="division">
			<?php include './views/libraries/_btns.php'; ?>
		</article>
		<article id="listgroups" class="division">
			<?php include './views/libraries/_listgroups.php'; ?>
		</article>
		<article id="callouts" class="division">
			<?php include './views/libraries/_callouts.php'; ?>
		</article>
		<article id="boxes">
			<?php include './views/libraries/_boxes.php'; ?>
		</article>
	</section>
</section>
