<section class="container division">
	<div class="callout--warning"><strong>browncoat</strong> is still in early development, forms are very unfinished.</div>
	<h1>CSS</h1>
	<p class="short">This section contains examples of the basic styles that make up the foundation of <em>browncoat</em>. There is nothing fancy here.</p>
</section>

<section class="row-static">
	<nav class="span-sidebar">
		<nav class="inner">
			<h4>See More:</h4>
			<div class="list-group">
				<a href="/" class="active">browncoat 2.0</a>
				<a href="/css">CSS</a>
				<a href="/libraries">Libraries</a>
				<a href="/layouts">Layouts</a>
			</div>
			<ul class="list-group">
				<li>No link list group item</li>
				<li>Second Item</li>
				<li>Third Item</li>
			</ul>
			<p><strong>note:</strong> sample list-group library items above</p>
		</nav>
	</nav>
	<div class="span-main">
		<?php
			include './views/css/_reset.php';
			include './views/css/_lists.php';
			include './views/css/_forms.php';
		?>
	</div>
</section>

