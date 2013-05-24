<?php

//some possible page variables
$title = "modal samples"; //this is backed up by a generic title set in kaylee.php or a browncoat generic title

?>

<?php include('sample_inc/header.php'); ?> 

<section class="reverse">
	<?php include('sample_inc/intro.php'); ?> 
</section>



<!-- 

MODALS 

-->
<section class="container">
	<h2>Modals</h2>
	<p>This are for whole pages with overlays and come in multiple sizes and stuff. These are obviously not in action..</p>
	<section class="row-fluid-alt">
		<article class="span4">
			<div class="modal-parent" data-role="parent">
				<section class="modal-success large position-top" data-plugin="modal" data-overlay="dark" data-event="hover">
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
				<span href="#" class="btn-secondary btn-small" data-role="trigger">Hover Trigger</span>
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
				<span class="btn-secondary btn-small" data-role="trigger">hover over me</span>
			</div>
		</article>
		<article class="span4">
			<div class="modal-parent" data-role="parent">
				<section class="modal-main" data-plugin="modal" data-overlay="dark" data-event="click" data-id="myPersonalId">
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
	</section>
</section>
<!-- 

CODE

--> 
<section id="code" class="container">
	<h5>HTML structure</h5>
	<pre class="prettyprint linenums">
	&lt;div class="modal-parent" data-role="parent"&gt;
	 &lt;section class="modal-main" data-plugin="modal" data-overlay="dark" data-event="click" data-id="myPersonalId"&gt;
		&lt;header class="modal-header"&gt;
		 &lt;h2&gt;Modal Header Area&lt;/h2&gt;
		&lt;/header&gt;
		&lt;article class="modal-body"&gt;
		 Your modals body code
		&lt;/article&gt;
		&lt;footer class="modal-footer"&gt;
		 Your modal's footer code
		&lt;/footer&gt;
	 &lt;/section&gt;
	 &lt;a href="#" class="btn-secondary btn-small" data-role="trigger"&gt;modal on click&lt;/a&gt;
	&lt;/div&gt;
	</pre>

	<h5>LESS</h5>
	<pre class="prettyprint linenums">
	.modal {
		width: 100px;
		.nested {
			width:300px;
		}
	}
	</pre>

	<h5>Javascript</h5>
	<pre class="prettyprint linenums">
	$('[data-plugin=modal]').fireflyModal({
	 modalOverlay : "light",
	 modalEvent : "click",
	 modalID : "platy",
	 modalHeight: "100px"
	 //modalParent...need to figure out a way to specify this
	 //modalParent: $(this).closest('body')
	});
	</pre>
</section>

<section class="container">
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
</section>

<section class="container">
	<!-- this modal is container by it's container -->
	<div class="modal-parent limit" data-role="parent">
		<h2>This Modal is contained by its parent</h2>
		<p>What ever happened to predictability? The milkman, the paperboy, evening TV. Everywhere you look, everywhere you go, there's a heart, a hand to hold onto. Everywhere you look, everywhere you go. There's a face of somebody who needs you.
		Everywhere you look, when you're lost out there and you're all alone, a light is waiting to carry you home, Everywhere you look. Everywhere you look.</p>
		<p>There once was a story about a man who could turn invisible. I thought it was only a story... until it happened to me. Ok, so here's how it works: there's this stuff called Quicksilver that can bend light. Some scientist made it into a synthetic gland, and that's where I came in. See, I was facing life in prison and they were looking for a human experiment. So, we made a deal. They put the gland in my brain; I walk free. The operation was a success... but that's where everything started to go wrong.</p>
		
		<section class="modal-main" data-plugin="modal" data-overlay="dark" data-event="click" data-id="lowerModal">
			<header class="modal-header">
				<h2>Modal Header Area</h2>
			</header>
			<article class="modal-body">
				Your modals body code
			</article>
			<footer class="modal-footer">
				Your modal's footer code
			</footer>
		</section>
	<a href="#" class="btn-secondary btn-small" data-role="trigger">modal on click</a>
	</div>
</section>

<?php include('sample_inc/footer.php'); ?>
