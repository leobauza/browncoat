<section class="row division">
	<h1>CSS</h1>
	<p class="short">This section contains examples of the basic styles that make up the foundation of <?php echo $bcV; ?>. Nothing fancy here.</p>
</section>

<section class="row spacer">
	<div class="callout--warning"><strong>browncoat</strong> is still in early development, css is not locked down</div>
</section>

<section class="row">
	<div class="span8">
		<?php
			include './views/css/_overview.php';
			include './views/css/_grid.php';
			include './views/css/_type.php';
			include './views/css/_lists.php';
			include './views/css/_forms.php';
		?>
	</div>
	<nav class="span4">
		<nav>
			<h4>Browse CSS</h4>
			<div class="list-group">
				<a href="#overview" class="active">Overview</a>
				<a href="#grid">Grid</a>
				<a href="#typography">Typography</a>
				<a href="#lists">Lists</a>
				<a href="#">Forms</a>
			</div>
		</nav>
	</nav>
</section>

