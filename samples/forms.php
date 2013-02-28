<?php

//some possible page variables
$title = "modal samples"; //this is backed up by a generic title set in kaylee.php or a browncoat generic title

?>

<?php include('sample_inc/header.php'); ?> 

<section class="reverse">
	<?php include('sample_inc/intro.php'); ?> 
</section>

<!-- 

FORMS 

-->
<section class="container">
	<h2>FORMS</h2>
	<p>some mother-f-ing-forms. And code that prettifies them, because forms are so damn ugly</p>

	<section class="row-fluid">
		<form class="span6" data-radios="true">
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

CODE

--> 
<section id="code" class="container">
<h5>HTML structure</h5>
<pre class="prettyprint linenums">
&lt;form&gt;
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
	&lt;a href="#" class="btn-secondary small" data-role="trigger"&gt;modal on click&lt;/a&gt;
&lt;/form&gt;
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



<?php include('sample_inc/footer.php'); ?>
