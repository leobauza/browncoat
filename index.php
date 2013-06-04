<?php

//some possible page variables
$title = "home"; //this is backed up by a generic title set in kaylee.php or a browncoat generic title

?>

<?php include('_inc/header.php'); ?> 
<!-- 

NAVIGATION

-->
<nav class="site-nav nav-horizontal" data-image="true">
	<ul class="menu menu-left">
		<li class="first dropdown">
			<a href="#">item one</a>
			<ul class="dropdown-menu">
				<li><a href="#">sub one</a></li>
				<li><a href="#">sub two</a></li>
				<li><a href="#">sub three</a></li>
			</ul>
		</li>
		<li><a href="#">item two</a></li>
		<li><a href="#">item three</a></li>
		<li class="last"><a href="#">item four</a></li>
	</ul>
	<ul class="menu menu-right">
		<li class="first"><a href="#">something</a></li>
		<li class="last"><a href="#">somewhat</a></li>
	</ul>
</nav>



<!-- 

HERO

-->

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
				<a href="#" class="btn btn-main btn-large">not buttons tho</a>
				<a href="#" class="btn btn-grey btn-large">grey one too</a>
				<a href="#" class="btn btn-secondary btn-large">button</a>
			</div>
			<div class="span6">
				<h1>A Reversed Row</h1>
				<h2>with reversed type</h2>
				<h3>all the types...</h3>
				<h4>heading fo'</h4>
				<h5>heading five</h5>
				<h6>even h6's</h6>
				<p>paragraphs too</p>
				<a href="#" class="btn btn-main btn-small">not buttons tho</a>
				<a href="#" class="btn btn-grey btn-small">grey one too</a>
				<a href="#" class="btn btn-secondary btn-small">small btns</a>
			</div>
		</section>
	</div>
</section>


<!-- 

NEW BUTTONS

-->
<section class="container">
	<h2>New Better Btn Mark Up</h2>
	<p>Base class of .btn and all classes following .btn-property and the property is camel cased if more than one word</p>
	<section class="row-fluid">
		<div class="span4">
			<h2>Button Colours</h2>
			<p>(main, secondary, grey, custom)</p>
			<a href="#" class="btn btn-main">main</a>
			<a href="#" class="btn btn-secondary">secondary</a>
			<a href="#" class="btn btn-grey">grey</a>
			<a href="#" class="btn btn-customColour">custom</a>
			<p>Active State (custom is black so you can't see it)</p>
			<a href="#" class="btn active btn-main">main</a>
			<a href="#" class="btn active btn-secondary">secondary</a>
			<a href="#" class="btn active btn-grey">grey</a>
			<a href="#" class="btn active btn-customColour">custom</a>
		</div>
		<div class="span4">
			<h2>Button Sizes</h2>
			<p>(smaller, small, medium, large, larger, custom)</p>
			<a href="#" class="btn btn-main btn-smaller">smaller</a>
			<a href="#" class="btn btn-main btn-small">small</a>
			<a href="#" class="btn btn-main btn-medium">medium</a>
			<a href="#" class="btn btn-main btn-large">large</a>
			<a href="#" class="btn btn-main btn-larger">larger</a>
			<a href="#" class="btn btn-main btn-customSize">custom</a>
		</div>
		<div class="span4">
			<h2>Other Buttons</h2>
			<p>(sets, dropdowns, etc)</p>
			<header>
				<h3>Button Sets</h3>
			</header>
			<div class="btn-set group">
				<a href="#" class="btn-main">1</a>
				<a href="#" class="btn-main">2</a>
				<a href="#" class="btn-main">3</a>
				<a href="#" class="btn-main">4</a>
			</div>
			<div class="btn-set btn-dropdown group">
				<a href="#" class="btn-main">Button w/ Dropdown</a>
				<a href="#" class="btn-main drop"><span class="carat">v</span></a>
				<ul>
					<li><a href="#">the</a></li>
					<li><a href="#">drop</a></li>
					<li><a href="#">down</a></li>
				</ul>
			</div>
			
		</div>
	</section>
</section>


<!-- 

ROWS WITH overflow:hidden 

-->
<section class="container">
	
	<ul class="nav-tabs">
		<li class="active"><a href="#">view</a></li>
		<li><a href="#">edit</a></li>
		<li><a href="#">manage display</a></li>
	</ul>
	
	<div id="breadcrumb">
		<div class="breadcrumb">
			<a href="#">home</a> >> <a href="#">about</a>
		</div>
	</div>
	
	<h2>Row Fluids Using overflow:hidden</h2>
	<h3>Project Goals</h3>
	<p>more libraries, more themes, more plugins. <strong>Libraries are the compartments</strong> of browncoat. There are 4 core libraries (colour, helper, structure, text) that are required for any <strong>theme.</strong> A <strong>theme is the looks</strong> for that browncoat build. Themes can contain any number of other libraries (nav, btn, base, form, modal, etc.) Furthermor themes must make sure to play nice with the <strong>firefly</strong> (my basic theme) plugins or build their own.</p>
	<section class="row-fluid">
		<div class="span4">
			<h3>what is this?</h3>
			<p><strong>browncoat</strong> is a light front end framework utilizing LESS. It is <strong>highly customizable and highly compartmental</strong>. It is designed in small pieces so that any one of them can be <strong>copied, discarded, or altered</strong> for any given project.</p>
		</div>
		<div class="span4">
			<h3>My Promises</h3>
			<p>Constant improvement of libraries. Constant improvement of JS and asset structure. One day actually finishing the backbone of browncoat for theme selection and theme building.</p>
		</div>
		<div class="span4">
			<h3>Documentation</h3>
			<p>There will be sample pages for every library at some point. These will have sample code for markup as well as LESS and javascript.</p>
		</div>
	</section>

</section>
<!-- 

ROWS WITH % 

-->
<section class="container">
	<h2>Row Fluid Alternates using only % and no overflow:hidden</h2>
	<h3>Project Goals</h3>
	<p>more libraries, more themes, more plugins. <strong>Libraries are the compartments</strong> of browncoat. There are 4 core libraries (colour, helper, structure, text) that are required for any <strong>theme.</strong> A <strong>theme is the looks</strong> for that browncoat build. Themes can contain any number of other libraries (nav, btn, base, form, modal, etc.) Furthermor themes must make sure to play nice with the <strong>firefly</strong> (my basic theme) plugins or build their own.</p>
	<section class="row-fluid-alt">
		<div class="span4">
			<h3>what is this?</h3>
			<p><strong>browncoat</strong> is a light front end framework utilizing LESS. It is <strong>highly customizable and highly compartmental</strong>. It is designed in small pieces so that any one of them can be <strong>copied, discarded, or altered</strong> for any given project.</p>
		</div>
		<div class="span4">
			<h3>My Promises</h3>
			<p>Constant improvement of libraries. Constant improvement of JS and asset structure. One day actually finishing the backbone of browncoat for theme selection and theme building.</p>
		</div>
		<div class="span4">
			<h3>Documentation</h3>
			<p>There will be sample pages for every library at some point. These will have sample code for markup as well as LESS and javascript.</p>
		</div>
	</section>

	<section class="row-fluid-alt">
		<div class="span6 box">
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
			<div class="btn-set-dropdown secondary group">
				<a href="#" class="btn-secondary">Button w/ Dropdown</a>
				<a href="#" class="btn-secondary drop"><span class="carat">v</span></a>
				<ul>
					<li><a href="#">the</a></li>
					<li><a href="#">drop</a></li>
					<li><a href="#">down</a></li>
				</ul>
			</div>
		</div>
	</section>


</section>



<!-- 

MESSAGES (status, error, success) ...callouts

-->
<section class="container">
	<h2>Messages</h2>
	<p>Add some form of closing these. They and btns within it that do...stuff</p>
	<section class="row-fluid">
		<div class="span4">
			<div class="messages error"><strong>Warning:</strong> Things have gone terribly wrong</div>
		</div>
		<div class="span4">
			<div class="messages status"><strong>Status:</strong> Things have gone and here is how they went</div>
		</div>
		<div class="span4">
			<div class="messages success"><strong>Success:</strong> Things went fine</div>
		</div>
	</section>
</section>
<!-- 

MODALS 

-->
<section class="container">
	<h2>Modals</h2>
	<a href="/samples/modals.php" class="btn-secondary btn-large">Modal Sample Page</a>
	<p>change This are for whole pages with overlays and come in multiple sizes and stuff. These are obviously not in action..</p>
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
				<section class="modal-main variable" data-plugin="modal" data-overlay="dark" data-event="click" data-id="myPersonalId">
					<header class="modal-header">
						<h2>welcome to browncoat</h2>
					</header>
					<article class="modal-body">
						<p>This is the front page of browncoat. You want to head over to river and write out your <strong>kaylee</strong>. file</p>
						<p>If you have a kaylee file written then head to <strong>simon</strong></p>
					</article>
					<footer class="modal-footer">
						<a href="/simon" class="btn-main">go to simon</a>
						<a href="/river" class="btn-main">go to river</a>
					</footer>
				</section>
				<a href="#" class="btn-secondary btn-small" data-role="trigger">modal on click</a>
			</div>
		</article>
		<article class="span4">
			<div class="modal-parent" data-role="parent">
				<section class="modal-main position-top" data-plugin="modal" data-overlay="light" data-event="hover">
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
				<a href="#" class="btn-secondary btn-small" data-role="trigger">Modal</a>
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
				<a href="#" class="btn-secondary btn-small" data-role="trigger">modal on click</a>
			</div>
		</article>
	</section>

</section>

<!-- 

FORMS 

-->
<section class="container">
	<h2>Forms</h2>
	<a href="/samples/forms.php" class="btn-secondary btn-large">Forms Sample Page</a>
	<p></p>
	<section class="row-fluid">
		<form class="span6" data-radios="true">
			<div class="input-group">
				<label>Form Label</label>
				<input type="text" placeholder="placeholder"></input>
			</div>
			<fieldset class="form-group">
				<div class="input-group">
					<label>Related Fields</label>
					<input type="text" placeholder="placeholder"></input>
				</div>
				<div class="input-group">
					<label>Related Fields</label>
					<input type="text" placeholder="placeholder"></input>
				</div>
			</fieldset>
			<div class="input-group">
				<h3>Radio Buttons</h3>
				<p>prettify these bitches up...</p>
				<div class="radio-group">
					<input type="radio" name="valueOne" value="a" checked="checked"></input>
					<label>value a</label>
				</div>
				<div class="radio-group">
					<input type="radio" name="valueOne" value="b"></input>
					<label>value b</label>
				</div>
			</div>
			<div class="input-group">
				<h3>Radio Buttons (horizontal)</h3>
				<p>prettify these bitches up...</p>
				<div class="radio-group horizontal">
					<input type="radio" name="levelOfAwesome" value="awesome"></input>
					<label>awesome</label>
				</div>
				<div class="radio-group horizontal">
					<input type="radio" name="levelOfAwesome" value="not awesome"></input>
					<label>not awesome</label>
				</div>
			</div>
			<input type="submit" name="submit" value="submit" class="btn-grey"></input>
		</form>
		<form class="span6" data-radiosb="true">
			<div class="input-group">
				<label>Form With other shit</label>
				<input type="text" placeholder="placeholder"></input>
			</div>
			<fieldset class="form-group">
				<div class="input-group">
					<label>Related Fields</label>
					<input type="text" placeholder="placeholder"></input>
				</div>
				<div class="input-group">
					<label>Related Fields</label>
					<input type="text" placeholder="placeholder"></input>
				</div>
			</fieldset>
			<div class="input-group">
				<h3>Radio Buttons</h3>
				<p>prettify these bitches up...</p>
				<div class="radio-group">
					<input type="radio" name="awesomeness" value="awesome"></input>
					<label>We never thought of findin' a place where we belong. Don't have to stand alone, we'll never let you fall. Don't need permission to decide what you believe. You gotta learn something when we meet you after school. I said jump, down on Jump Street. I</label>
				</div>
				<div class="radio-group">
					<input type="radio" name="awesomeness" value="not awesome"></input>
					<label>not awesome</label>
				</div>
			</div>
			<div class="input-group">
				<h3>Radio Buttons (horizontal)</h3>
				<p>prettify these bitches up...</p>
				<div class="radio-group horizontal">
					<input type="radio" name="poop" value="awesome"></input>
					<label>awesome</label>
				</div>
				<div class="radio-group horizontal">
					<input type="radio" name="poop" value="not awesome"></input>
					<label>not awesome</label>
				</div>
			</div>
			<input type="submit" name="submit" value="submit" class="btn-grey"></input>
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

<section class="container">
	<ul>
		<?php include('_inc/getTweet.php'); ?> 
	</ul>
</section>


<?php include('_inc/footer.php'); ?>
