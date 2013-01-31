<?php

//some possible page variables
$title = "index"; //this is backed up by a generic title set in kaylee.php or a browncoat generic title

?>

<?php include('_inc/header.php'); ?> 

<section class="container">
	<h1>Browncoat</h1>
	<h3>for now the most rudimentary front end framework ever</h3>
	<p><strong>Browncoat is</strong> a lightweight front end framework built partially on php and less. Rather than having a huge css file Browncoat will use libraries than can be included or excluded by means of a configuration file (kaylee.php) somehow. Browncoat is in its infancy, or rather even before that, so fucking tear it apart do with it as you wish and suggest anything you want.</p>
	<p><strong>Some Goals</strong> of Browncoat are to create a good starting point for front end developers working in any area. Whether that is developing for CMS's (like drupal, wordpress, expression engine, etc) or frameworks (such as ruby on rails, grails, codeigniter or laravel) Browncoat should provide a starting point for prototyping or even integrating into those systems (not sure how by the way but that's why we call 'em goals).</p>
	<p><strong>My Promises</strong> none...I am building this because I need it...if someone makes something better that I can use I'll steal that and abandon this project...ok...no I won't but I still make no promises about updates or whatever. For as long as this is relevant all my free time will go towards making this framework as awesome as I can, but I am a human with a job and I like to drink and pass out a lot.</p>
	<p><strong>Documentation</strong> The way I see documentation for stuff is usually this: "what the fuck are you talking about?" so hopefully I will have better documentation that is readable to human beings even those who have 0 experience with every single part of this. If I ever answer your question and you don't know what the hell I mean say so...I need to be able to convey real answers to people  of all experience levels. Granted, if you are an idiot I'll tell you that too</p>
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
				<a href="#" class="btn-main larger">Larger Button</a>
				<a href="#" class="btn-secondary larger">Secondary Button</a>
				<a href="#" class="btn-main large">Large Button</a>
				<a href="#" class="btn-secondary large">Secondary Button</a>
				<a href="#" class="btn-main medium">Medium Button</a>
				<a href="#" class="btn-secondary medium">Secondary Button</a>
				<a href="#" class="btn-main small">Small Button</a>
				<a href="#" class="btn-secondary small">Secondary Button</a>
				<a href="#" class="btn-main smaller">Smaller Button</a>
				<a href="#" class="btn-secondary smaller">Secondary Button</a>
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
			<a href="#" class="btn-main larger">Larger Button</a>
			<a href="#" class="btn-secondary larger">Secondary Button</a>
			<a href="#" class="btn-main large">Large Button</a>
			<a href="#" class="btn-secondary large">Secondary Button</a>
			<a href="#" class="btn-main medium">Medium Button</a>
			<a href="#" class="btn-secondary medium">Secondary Button</a>
			<a href="#" class="btn-main small">Small Button</a>
			<a href="#" class="btn-secondary small">Secondary Button</a>
			<a href="#" class="btn-main smaller">Smaller Button</a>
			<a href="#" class="btn-secondary smaller">Secondary Button</a>			
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

 <?php include('_inc/footer.php')?>

