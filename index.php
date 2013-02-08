<?php

//some possible page variables
$title = "home"; //this is backed up by a generic title set in kaylee.php or a browncoat generic title

?>

<?php include('_inc/header.php'); ?> 

<section class="reverse">
	<?php include('_inc/intro.php'); ?> 
	<div class="container">
		<section class="row-fluid">
			<div class="span6">
				<h1>A Reversed Row</h1>
				<h2>with reversed type</h2>
				<h3>all the types...</h3>
				<h4>heading fo'</h4>
				<h5>heading five</h5>
				<h6>even h6's</h6>
				<p>paragraphs too</p>
				<a href="#" class="btn-main large">not buttons tho</a>
				<a href="#" class="btn-gray large">gray one too</a>
				<a href="#" class="btn-secondary large">large btns</a>
			</div>
			<div class="span6">
				<h1>A Reversed Row</h1>
				<h2>with reversed type</h2>
				<h3>all the types...</h3>
				<h4>heading fo'</h4>
				<h5>heading five</h5>
				<h6>even h6's</h6>
				<p>paragraphs too</p>
				<a href="#" class="btn-main small">not buttons tho</a>
				<a href="#" class="btn-gray small">gray one too</a>
				<a href="#" class="btn-secondary small">small btns</a>
			</div>
		</section>
	</div>
</section>



<!-- 

ROWS WITH overflow:hidden 

-->
<section class="container">
	<h2>Row Fluids Using overflow:hidden</h2>
	<section class="row-fluid">
		<div class="span3">
			<h3>Browncoat is</h3>
			<p>a lightweight front end framework built partially on php and less. Rather than having a huge css file Browncoat will use libraries than can be included or excluded by means of a configuration file (kaylee.php) somehow. Browncoat is in its infancy, or rather even before that, so fucking tear it apart do with it as you wish and suggest anything you want.</p>
			<a href="#" class="btn-main medium">main button</a>
			<a href="#" class="btn-main active medium">active main button</a>
		</div>
		<div class="span3">
			<h3>Some Goals</h3>
			<p>of Browncoat are to create a good starting point for front end developers working in any area. Whether that is developing for CMS's (like drupal, wordpress, expression engine, etc) or frameworks (such as ruby on rails, grails, codeigniter or laravel) Browncoat should provide a starting point for prototyping or even integrating into those systems (not sure how by the way but that's why we call 'em goals).</p>
			<a href="#" class="btn-gray medium">gray button</a>
			<a href="#" class="btn-gray active medium">gray button</a>
		</div>
		<div class="span3">
			<h3>My Promises</h3>
			<p>none...I am building this because I need it...if someone makes something better that I can use I'll steal that and abandon this project...ok...no I won't but I still make no promises about updates or whatever. For as long as this is relevant all my free time will go towards making this framework as awesome as I can, but I am a human with a job and I like to drink and pass out a lot.</p>
			<a href="#" class="btn-secondary medium">secondary button</a>
			<a href="#" class="btn-secondary active medium">secondary button</a>
		</div>
		<div class="span3">
			<h3>Documentation</h3>
			<p>The way I see documentation for stuff is usually this: "what the fuck are you talking about?" so hopefully I will have better documentation that is readable to human beings even those who have 0 experience with every single part of this. If I ever answer your question and you don't know what the hell I mean say so...I need to be able to convey real answers to people  of all experience levels. Granted, if you are an idiot I'll tell you that too</p>
			<a href="#" class="btn-main medium">main button</a>
		</div>
	</section>
</section>
<!-- 

ROWS WITH % 

-->
<section class="container">
	<h2>Row Fluid Alternates using only % and no overflow:hidden</h2>
	<section class="row-fluid-alt">
		<div class="span3">
			<h3>Browncoat is</h3>
			<p>a lightweight front end framework built partially on php and less. Rather than having a huge css file Browncoat will use libraries than can be included or excluded by means of a configuration file (kaylee.php) somehow. Browncoat is in its infancy, or rather even before that, so fucking tear it apart do with it as you wish and suggest anything you want.</p>
			<a href="#" class="btn-main medium">main button</a>
			<a href="#" class="btn-main active medium">active main button</a>
		</div>
		<div class="span3">
			<h3>Some Goals</h3>
			<p>of Browncoat are to create a good starting point for front end developers working in any area. Whether that is developing for CMS's (like drupal, wordpress, expression engine, etc) or frameworks (such as ruby on rails, grails, codeigniter or laravel) Browncoat should provide a starting point for prototyping or even integrating into those systems (not sure how by the way but that's why we call 'em goals).</p>
			<a href="#" class="btn-gray medium">gray button</a>
			<a href="#" class="btn-gray active medium">gray button</a>
		</div>
		<div class="span3">
			<h3>My Promises</h3>
			<p>none...I am building this because I need it...if someone makes something better that I can use I'll steal that and abandon this project...ok...no I won't but I still make no promises about updates or whatever. For as long as this is relevant all my free time will go towards making this framework as awesome as I can, but I am a human with a job and I like to drink and pass out a lot.</p>
			<a href="#" class="btn-secondary medium">secondary button</a>
			<a href="#" class="btn-secondary active medium">secondary button</a>
		</div>
		<div class="span3">
			<h3>Documentation</h3>
			<p>The way I see documentation for stuff is usually this: "what the fuck are you talking about?" so hopefully I will have better documentation that is readable to human beings even those who have 0 experience with every single part of this. If I ever answer your question and you don't know what the hell I mean say so...I need to be able to convey real answers to people  of all experience levels. Granted, if you are an idiot I'll tell you that too</p>
			<a href="#" class="btn-main medium">main button</a>
		</div>
	</section>
</section>
<!-- 

WARNING NOTES SUCCESS 

-->
<section class="container">
	<h2>Warnings Notes Success</h2>
	<section class="row-fluid">
		<div class="span4">
			<p class="warning">Holy shit everything has gone to hell!! these should be able to close or turn into a small square or something... basically option to dissappear</p>
		</div>
		<div class="span4">
			<p class="note"><strong>note:</strong> this is a note brah</p>
		</div>
		<div class="span4">
			<p class="success">Yay! you did it right, everything is aces!</p>
		</div>
	</section>
</section>
<!-- 

MODALS 

-->
<section class="container">
	<h2>Modals</h2>
	<p>This are for whole pages with overlays and come in multiple sizes and stuff. These are obviously not in action..</p>
	<section class="row-fluid-alt">
		<div class="span4">
			<section class="modal-main">
				<header class="modal-header">
					<h2>Header</h2>
				</header>
				<article class="modal-body">
					BODY
				</article>
				<footer class="modal-footer">
					footer
				</footer>
			</section>
		</div>
		<div class="span4">
			<section class="modal-warning">
				<header class="modal-header">
					<h2>Header</h2>
				</header>
				<article class="modal-body">
					BODY
				</article>
				<footer class="modal-footer">
					footer
				</footer>
			</section>
		</div>
		<div class="span4">
			<section class="modal-success">
				<header class="modal-header">
					<h2>Header</h2>
				</header>
				<article class="modal-body">
					BODY
				</article>
				<footer class="modal-footer">
					footer
				</footer>
			</section>
		</div>
	</section>

	<section class="row-fluid-alt">
		<article class="span4">
			<div class="modal-parent" data-role="parent">
				<section class="modal-warning variable" data-plugin="modal" data-overlay="light"  data-event="load">
					<header class="modal-header">
						<h2>MODAL CLICK (variable)</h2>
					</header>
					<article class="modal-body">
						<p>this is the variable setting of modal. It creates a modal 50% of the screen width and centers it. Making this a two liner, by adding dummy test. blah blah blah</p>
					</article>
					<footer class="modal-footer">
						Click the overlay to close
					</footer>
				</section>
				<a href="#" class="btn-secondary small" data-role="trigger">modal click</a>
			</div>
		</article>
		<article class="span4">
			<div class="modal-parent" data-role="parent">
				<section class="modal-main" data-plugin="modal" data-overlay="light" data-event="hover">
					<header class="modal-header">
						<h2>Second Modal onload</h2>
					</header>
					<article class="modal-body">
						Click the overlay to close
					</article>
					<footer class="modal-footer">
						footer
					</footer>
				</section>
				<a href="#" class="btn-secondary small" data-role="trigger">Modal</a>
			</div>
		</article>
		<article class="span4">
			<div class="modal-parent" data-role="parent">
				<section class="modal-main" data-plugin="modal" data-overlay="dark" data-event="click" data-id="myPersonalId">
					<header class="modal-header">
						<h2>Third Modal</h2>
					</header>
					<article class="modal-body">
						Click the overlay to close
					</article>
					<footer class="modal-footer">
						footer
					</footer>
				</section>
				<a href="#" class="btn-secondary small" data-role="trigger">modal on click</a>
			</div>
		</article>
	</section>

</section>

<!-- 

FORMS 

-->
<section class="container">
	<h2>Forms</h2>
	<p></p>
	<section class="row-fluid">
		<form class="span6">
			<div class="input-group">
				<label>Form Label</label>
				<input type="text" placeholder="placeholder"></input>
			</div>
			<section class="form-group">
				<div class="input-group">
					<label>Related Fields</label>
					<input type="text" placeholder="placeholder"></input>
				</div>
				<div class="input-group">
					<label>Related Fields</label>
					<input type="text" placeholder="placeholder"></input>
				</div>
			</section>
			<div class="input-group">
				<h3>Radio Buttons</h3>
				<p>prettify these bitches up...</p>
				<div class="radio-group">
					<input type="radio" name="awesome" value="awesome"></input>
					<label>awesome</label>
				</div>
				<div class="radio-group">
					<input type="radio" name="not awesome" value="not awesome"></input>
					<label>not awesome</label>
				</div>
			</div>
			<div class="input-group">
				<h3>Radio Buttons (horizontal)</h3>
				<p>prettify these bitches up...</p>
				<div class="radio-group horizontal">
					<input type="radio" name="awesome" value="awesome"></input>
					<label>awesome</label>
				</div>
				<div class="radio-group horizontal">
					<input type="radio" name="not awesome" value="not awesome"></input>
					<label>not awesome</label>
				</div>
			</div>
			<input type="submit" name="submit" value="submit" class="btn-gray"></input>
		</form>
		<form class="span6">
			<div class="input-group">
				<label>Form With other shit</label>
				<input type="text" placeholder="placeholder"></input>
			</div>
			<section class="form-group">
				<div class="input-group">
					<label>Related Fields</label>
					<input type="text" placeholder="placeholder"></input>
				</div>
				<div class="input-group">
					<label>Related Fields</label>
					<input type="text" placeholder="placeholder"></input>
				</div>
			</section>
			<div class="input-group">
				<h3>Radio Buttons</h3>
				<p>prettify these bitches up...</p>
				<div class="radio-group">
					<input type="radio" name="awesome" value="awesome"></input>
					<label>awesome</label>
				</div>
				<div class="radio-group">
					<input type="radio" name="not awesome" value="not awesome"></input>
					<label>not awesome</label>
				</div>
			</div>
			<div class="input-group">
				<h3>Radio Buttons (horizontal)</h3>
				<p>prettify these bitches up...</p>
				<div class="radio-group horizontal">
					<input type="radio" name="awesome" value="awesome"></input>
					<label>awesome</label>
				</div>
				<div class="radio-group horizontal">
					<input type="radio" name="not awesome" value="not awesome"></input>
					<label>not awesome</label>
				</div>
			</div>
			<input type="submit" name="submit" value="submit" class="btn-gray"></input>
		</form>
	</section>
</section>

<!-- 

LISTS 

-->
<section class="container">
	<h2></h2>
	<section class="row-fluid">
		<!-- unordered lists -->
		<div class="span6">
			<!-- ONE LEVEL -->
			<h3>Unordered List (Basic)</h3>
			<ul>
				<li>item one</li>
				<li>item two</li>
				<li>item three</li>
				<li>item four</li>
			</ul>
			<!-- TWO LEVELS -->
			<h3>Unordered List (Expert)</h3>
			<ul>
				<li>item one</li>
				<li>item two</li>
				<li>item three
						<!-- level two -->
						<ul>
							<li>nested item one</li>
							<li>nested item two</li>
							<li>nested item three</li>
							<li>nested item four</li>
						</ul>
				</li>
				<li>item four</li>
			</ul>
			<!-- THREE LEVELS -->
			<h3>Unordered List (Madness)</h3>
			<ul>
				<li>item one</li>
				<li>item two</li>
				<li>item three
						<!-- level two -->
						<ul>
							<li>nested item one</li>
							<li>nested item two</li>
							<li>nested item three
								<!-- level three -->
								<ul>
									<li>nested nested item one</li>
									<li>nested nested item two</li>
									<li>nested nested item three</li>
								</ul>
							</li>
							<li>nested item four</li>
						</ul>
				</li>
				<li>item four</li>
			</ul>
			<!-- INCEPTION -->
			<h3>Unordered List (INCEPTION BRAMMMMMMM)</h3>
			<ul>
				<li>item one</li>
				<li>item two</li>
				<li>item three
						<!-- level two -->
						<ul>
							<li>nested item one</li>
							<li>nested item two</li>
							<li>nested item three
								<!-- level three -->
								<ul>
									<li>nested nested item one</li>
									<li>nested nested item two
										<!-- level inception -->
										<ul>
											<li>inception nested nested item one</li>
											<li>inception nested nested item two</li>
											<li>inception nested nested item three</li>
										</ul>
									</li>
									<li>nested nested item three</li>
								</ul>
							</li>
							<li>nested item four</li>
						</ul>
				</li>
				<li>item four</li>
			</ul>
			<!-- out of the dream -->
		</div>
		<!-- ordered lists -->
		<div class="span6">
			<!-- ONE LEVEL -->
			<h3>ordered List (Basic)</h3>
			<ol>
				<li>item one</li>
				<li>item two</li>
				<li>item three</li>
				<li>item four</li>
			</ol>
			<!-- TWO LEVELS -->
			<h3>ordered List (Expert)</h3>
			<ol>
				<li>item one</li>
				<li>item two</li>
				<li>item three
						<!-- level two -->
						<ol>
							<li>nested item one</li>
							<li>nested item two</li>
							<li>nested item three</li>
							<li>nested item four</li>
						</ol>
				</li>
				<li>item four</li>
			</ol>
			<!-- THREE LEVELS -->
			<h3>ordered List (Madness)</h3>
			<ol>
				<li>item one</li>
				<li>item two</li>
				<li>item three
						<!-- level two -->
						<ol>
							<li>nested item one</li>
							<li>nested item two</li>
							<li>nested item three
								<!-- level three -->
								<ol>
									<li>nested nested item one</li>
									<li>nested nested item two</li>
									<li>nested nested item three</li>
								</ol>
							</li>
							<li>nested item four</li>
						</ol>
				</li>
				<li>item four</li>
			</ol>
			<!-- INCEPTION -->
			<h3>ordered List (INCEPTION BRAMMMMMMM)</h3>
			<ol>
				<li>item one</li>
				<li>item two</li>
				<li>item three
						<!-- level two -->
						<ol>
							<li>nested item one</li>
							<li>nested item two</li>
							<li>nested item three
								<!-- level three -->
								<ol>
									<li>nested nested item one</li>
									<li>nested nested item two
										<!-- level inception -->
										<ol>
											<li>inception nested nested item one</li>
											<li>inception nested nested item two</li>
											<li>inception nested nested item three</li>
										</ol>
									</li>
									<li>nested nested item three</li>
								</ol>
							</li>
							<li>nested item four</li>
						</ol>
				</li>
				<li>item four</li>
			</ol>
		</div>
	</section>
</section>

<?php include('_inc/footer.php'); ?>
