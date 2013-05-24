<?php

//some possible page variables
$title = "reference file"; //this is backed up by a generic title set in kaylee.php or a browncoat generic title

?>

<?php include('sample_inc/header.php'); ?> 

<section class="container">
	<h1>Twelve Column Grid</h1>
	<!-- 
	
	grid system 
	
	-->
	<section class="row-fluid">
		<div class="span1 box">hi</div>
		<div class="span1 box">hi</div>
		<div class="span1 box">hi</div>
		<div class="span1 box">hi</div>
		<div class="span1 box">hi</div>
		<div class="span1 box">hi</div>
		<div class="span1 box">hi</div>
		<div class="span1 box">hi</div>
		<div class="span1 box">hi</div>
		<div class="span1 box">hi</div>
		<div class="span1 box">hi</div>
		<div class="span1 box">hi</div>
	</section>
	<section class="row-fluid">
		<div class="span2 box">hi</div>
		<div class="span2 box">hi</div>
		<div class="span2 box">hi</div>
		<div class="span2 box">hi</div>
		<div class="span2 box">hi</div>
		<div class="span2 box">hi</div>
	</section>
	<section class="row-fluid">
		<div class="span3 box">hi</div>
		<div class="span3 box">hi</div>
		<div class="span3 box">hi</div>
		<div class="span3 box">hi</div>
	</section>
	<section class="row-fluid">
		<div class="span4 box">hi</div>
		<div class="span4 box">hi</div>
		<div class="span4 box">hi</div>
	</section>
	<section class="row-fluid">
		<div class="span5 box">hi</div>
		<div class="span5 box">hi</div>
		<div class="span2 box">hi</div>
	</section>
	<section class="row-fluid">
		<div class="span6 box">hi</div>
		<div class="span4 box">hi</div>
		<div class="span2 box">hi</div>
	</section>
	<section class="row-fluid">
		<div class="span6 box">hi</div>
		<div class="span6 box">hi</div>
	</section>
	<section class="row-fluid">
		<div class="span8 box">hi</div>
		<div class="span4 box">hi</div>
	</section>
	<section class="row-fluid">
		<div class="span6 box">
			<header>
				<h3>Button Sets</h3>
			</header>
			<div class="btn-set group">
				<a href="#" class="btn-main">1</a>
				<a href="#" class="btn-main">2</a>
				<a href="#" class="btn-main">3</a>
				<a href="#" class="btn-main">4</a>
			</div>
			<div class="btn-set-dropdown group">
				<a href="#" class="btn-main">Button w/ Dropdown</a>
				<a href="#" class="btn-main drop"><span class="carat">v</span></a>
				<ul>
					<li><a href="#">the</a></li>
					<li><a href="#">drop</a></li>
					<li><a href="#">down</a></li>
				</ul>
			</div>
			<footer class="spacer">
				
			</footer>
		</div>
		<div class="span6 box">
			<header>
				<h3>Button Sets Secondary</h3>
			</header>
			<div class="btn-set group">
				<a href="#" class="btn-secondary">1</a>
				<a href="#" class="btn-secondary">2</a>
				<a href="#" class="btn-secondary">3</a>
				<a href="#" class="btn-secondary">4</a>
			</div>
			<div class="btn-set-dropdown group">
				<a href="#" class="btn-secondary">Button w/ Dropdown</a>
				<a href="#" class="btn-secondary drop"><span class="carat">v</span></a>
				<ul>
					<li><a href="#">the</a></li>
					<li><a href="#">drop</a></li>
					<li><a href="#">down</a></li>
				</ul>
			</div>
			<footer class="spacer">
				
			</footer>
		</div>
	</section>
	<section class="row-fluid">
		<div class="span10 box">
			<header>
				<h3>Centered Buttons</h3>
			</header>
			<a href="#" class="btn-main">Plain Button</a>
			<a href="#" class="btn-secondary">Secondary Button</a>
			<div class="ctr-btn">
				<a href="#" class="btn-main btn-larger">Larger Button</a>
				<a href="#" class="btn-secondary btn-larger">Secondary Button</a>
				<a href="#" class="btn-main btn-large">Large Button</a>
				<a href="#" class="btn-secondary btn-large">Secondary Button</a>
				<a href="#" class="btn-main btn-medium">Medium Button</a>
				<a href="#" class="btn-secondary btn-medium">Secondary Button</a>
				<a href="#" class="btn-main btn-small">Small Button</a>
				<a href="#" class="btn-secondary btn-small">Secondary Button</a>
				<a href="#" class="btn-main btn-smaller">Smaller Button</a>
				<a href="#" class="btn-secondary btn-smaller">Secondary Button</a>
			</div>
		</div>
		<div class="span2 box">hi</div>
	</section>
	<section class="row-fluid">
		<div class="span11 box">
			<header>
				<h3>Buttons</h3>
			</header>
			<a href="#" class="btn-main">Plain Button</a>
			<a href="#" class="btn-secondary">Secondary Button</a>
			<a href="#" class="btn-main btn-larger">Larger Button</a>
			<a href="#" class="btn-secondary btn-larger">Secondary Button</a>
			<a href="#" class="btn-main btn-large">Large Button</a>
			<a href="#" class="btn-secondary btn-large">Secondary Button</a>
			<a href="#" class="btn-main btn-medium">Medium Button</a>
			<a href="#" class="btn-secondary btn-medium">Secondary Button</a>
			<a href="#" class="btn-main btn-small">Small Button</a>
			<a href="#" class="btn-secondary btn-small">Secondary Button</a>
			<a href="#" class="btn-main btn-smaller">Smaller Button</a>
			<a href="#" class="btn-secondary btn-smaller">Secondary Button</a>
		</div>
		<div class="span1 box">hi</div>
	</section>
	<section class="row-fluid">
		<div class="span12 box">hi</div>
	</section>	
	<div class="row-fluid">
		<section class="span8 box">
			<h1>Heading 1</h1>
			<h2>Heading 2</h2>
			<h3>Heading 3</h3>
			<h4>Heading 4</h4>
			<h5>Heading 5</h5>
			<h6>Heading 6</h6>
		</section>
		<aside class="span4 box">
			<h1><a href="#">Heading 1</a></h1>
			<h2><a href="#">Heading 2</a></h2>
			<h3><a href="#">Heading 3</a></h3>
			<h4><a href="#">Heading 4</a></h4>
			<h5><a href="#">Heading 5</a></h5>
			<h6><a href="#">Heading 6</a></h6>
		</aside>
	</div>
</section>


	<!-- forms -->
<section class="container">
	<form>
		<div class="form-group">
			<label>Label</label>
			<input type="text" placeholder="placeholder"></input>
			<input type="text"></input>
		</div>
		<textarea></textarea>
		<div class="input-group">
			<button type="submit" value="submit" class="btn-gray">Submit</button>
		</div>
	</form>
</section>

 <?php include('sample_inc/footer.php'); ?>

