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
				<section class="modal-success variable" data-plugin="modal" data-overlay="dark"  data-event="hover">
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
				<span href="#" class="btn-secondary small" data-role="trigger">happened on load</span>
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
				<span class="btn-secondary small" data-role="trigger">hover over me</span>
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

<?php include('sample_inc/footer.php'); ?>