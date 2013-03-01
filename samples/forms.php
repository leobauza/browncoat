<?php

//some possible page variables
$title = "forms samples"; //this is backed up by a generic title set in kaylee.php or a browncoat generic title

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
			<input type="submit" name="submit" value="submit" class="btn-gray"></input>
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

<h5>HTML structure (input groups)</h5>
<pre class="prettyprint linenums">
&lt;form&gt;
	&lt;div class="input-group"&gt;
		&lt;label&gt;Related Fields&lt;/label&gt;
		&lt;input type="text" placeholder="placeholder"&gt;&lt;/input&gt;
	&lt;/div&gt;
&lt;/form&gt;
</pre>


<h5>HTML structure (form groups)</h5>
<pre class="prettyprint linenums">
&lt;form&gt;
	&lt;fieldset class="form-group"&gt;
		&lt;div class="input-group"&gt;
			&lt;label&gt;Related Fields&lt;/label&gt;
			&lt;input type="text" placeholder="placeholder"&gt;&lt;/input&gt;
		&lt;/div&gt;
		&lt;div class="input-group"&gt;
			&lt;label&gt;Related Fields&lt;/label&gt;
			&lt;input type="text" placeholder="placeholder"&gt;&lt;/input&gt;
		&lt;/div&gt;
	&lt;/fieldset&gt;
&lt;/form&gt;
</pre>


<h5>Javascript</h5>
<pre class="prettyprint linenums">
$('form').fireflyForm();
</pre>
</section>



<?php include('sample_inc/footer.php'); ?>
