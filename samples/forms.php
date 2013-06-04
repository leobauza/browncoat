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

<!-- 

FORMS WITH RADIOS

-->
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
			<input type="submit" name="submit" value="submit" class="btn btn-grey"></input>
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
			<input type="submit" name="submit" value="submit" class="btn btn-grey"></input>
		</form>
	</section>
<!-- 

FORMS WITH UN-Prettified

-->
	<hr>
	<h2>Form Not Prettified</h2>
	<form>
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
		<fieldset class="input-group">
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
		</fieldset>
		<fieldset class="input-group">
			<div class="select-group">
				<label for="select-choice">Select Dropdown Choice:</label>
				<select name="select-choice">
					<option value="Choice 1">Choice 1</option>
					<option value="Choice 2">Choice 2</option>
					<option value="Choice 3">Choice 3</option>
				</select>
			</div>
			<div class="select-group">
				<label for="select-choice-multiple">Select Dropdown Choice:</label>
				<select name="select-choice-multiple" multiple="multiple">
					<option value="Choice 1">Choice 1</option>
					<option value="Choice 2">Choice 2</option>
					<option value="Choice 3">Choice 3</option>
				</select>
			</div>
		</fieldset>
		<input type="submit" name="submit" value="submit" class="btn btn-grey"></input>
	</form>

</section>


<!-- 

CODE

--> 
<section id="code" class="container">
<hr>
<h5>HTML structure (input groups)</h5>
<form>
	<div class="input-group">
		<label>Input One</label>
		<input type="text" name="input one" placeholder="input one value"></input>
	</div>
</form>
<pre class="prettyprint linenums">
&lt;form&gt;
 &lt;div class="input-group"&gt;
  &lt;label&gt;a damn label&lt;/label&gt;
  &lt;input type="text" placeholder="your damn placeholder"&gt;&lt;/input&gt;
 &lt;/div&gt;
&lt;/form&gt;
</pre>


<h5>HTML structure (form groups)</h5>
<form>
	<fieldset class="form-group">
		<div class="input-group">
			<label>Input One</label>
			<input type="text" name="input one" placeholder="input one value"></input>
		</div>
		<div class="input-group">
			<label>Input Two</label>
			<input type="text" name="input two" placeholder="input two value"></input>
		</div>
	</fieldset>
</form>

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


<h5>HTML (radio buttons, like actual buttons)</h5>
<form data-radios="true">
	<fieldset class="input-group">
		<div class="radio-group">
			<input type="radio" name="valueOne" value="a" checked="checked"></input>
			<label>value a</label>
		</div>
		<div class="radio-group">
			<input type="radio" name="valueOne" value="b"></input>
			<label>value b</label>
		</div>
	</fieldset>
</form>
<pre class="prettyprint linenums">
&lt;form data-radios="true"&gt;
 &lt;fieldset class="input-group"&gt;
  &lt;div class="radio-group"&gt;
   &lt;input type="radio" name="valueOne" value="a" checked="checked"&gt;&lt;/input&gt;
   &lt;label&gt;value a&lt;/label&gt;
  &lt;/div&gt;
  &lt;div class="radio-group"&gt;
   &lt;input type="radio" name="valueOne" value="b"&gt;&lt;/input&gt;
   &lt;label&gt;value b&lt;/label&gt;
  &lt;/div&gt;
 &lt;/fieldset&gt;
&lt;/form&gt;
</pre>


<h5>HTML (radio buttons, not full buttons)</h5>
<form data-radiosb="true">
	<fieldset class="input-group">
		<div class="radio-group">
			<input type="radio" name="valueOne" value="a" checked="checked"></input>
			<label>value a</label>
		</div>
		<div class="radio-group">
			<input type="radio" name="valueOne" value="b"></input>
			<label>value b</label>
		</div>
	</fieldset>
</form>
<pre class="prettyprint linenums">
&lt;form data-radiosb="true"&gt;
 &lt;fieldset class="input-group"&gt;
  &lt;div class="radio-group"&gt;
   &lt;input type="radio" name="valueOne" value="a" checked="checked"&gt;&lt;/input&gt;
   &lt;label&gt;value a&lt;/label&gt;
  &lt;/div&gt;
  &lt;div class="radio-group"&gt;
   &lt;input type="radio" name="valueOne" value="b"&gt;&lt;/input&gt;
   &lt;label&gt;value b&lt;/label&gt;
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
