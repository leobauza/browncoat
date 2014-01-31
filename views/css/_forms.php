<section class="bc-doc-box">
	<h2 class="bc-section-header">Forms</h2>
	<div class="note--warning">
		<h5>Good to know</h5>
		<p>All form elements are using <code>box-sizing: border-box</code> so you will need to deal with IE7 compatibility issues with forms. <?php echo $bcV; ?> doesn't use border-box on all elements, just unwieldy form elements.</p>
	</div>
	<p>Forms can be optimally divided into <code>.form__collection</code> and further divided into <code>.form__group</code>. A group of inputs is encapsulated by a <code>.form__collection</code> while <code>.form__group</code> encapsulates a label and input field.</p>
	<p>Validation and special UI elements will be included in a library called <code>jForms</code>. It will be a form prettifier, the validation will be left to up to the user but styles will be provided there.</p>
	
	<article class="bc-capsule rel-files">
		<ol>
			<li>List styles: <code>assets/scss/browncoat/normalizers/_form.scss</code></li>
			<li>Text related variables: <code>assets/scss/browncoat/bases/_text.scss</code></li>
			<li>Buttons/Submit input: <code>assets/scss/app/libs/_btn.scss</code></li>
			<li>Colours: <code>assets/scss/browncoat/bases/_colours.scss</code></li>
		</ol>
	</article>
	
	
	
	<!-- basic -->
	<h3>Basic</h3>
	<p>All <code><?php print htmlentities("<input>");?></code>, <code><?php print htmlentities("<select>");?></code>, <code><?php print htmlentities("<textarea>");?></code>, etc don't require any classes to be styled. You are encouraged to go into the <code>assets/scss/browncoat/normalizers</code> directory and change the defaults for your project.</p>
		
	<section class="bc-capsule code-companion">
		<form>
			<div class="form__group">
				<label>text</label>
				<input type="text" placeholder="placeholder"></input>
			</div>
			<div class="form__group">
				<label>email</label>
				<input type="email" placeholder="placeholder"></input>
			</div>
			<div class="form__group">
				<label>password</label>
				<input type="password"></input>
			</div>
			<div class="form__group">
				<label>file</label>
				<input type="file">
			</div>
			<button type="submit" class="btn--default">Submit</button>
		</form>
	</section>
	
	<script src="https://gist.github.com/leobauza/b2f411544f9f2e6c6bfd.js"></script>
	
	<!-- Textarea -->
	<h3>Textarea and help text</h3>
	<p>You may use any of the buttons classes inside of forms for example this one uses <code>.btn--success</code></p>
	<section class="bc-capsule code-companion">
		<form>
			<div class="form__group">
				<label>text</label>
				<input type="text" placeholder="placeholder"></input>
				<p class="form__text">Helper text for the form. Use the class <code>.form__text</code></p>
			</div>
			<div class="form__group">
				<label>textarea</label>
				<textarea rows="3"></textarea>
			</div>
			<button type="submit" class="btn--success">Submit</button>
		</form>
	</section>
	<script src="https://gist.github.com/leobauza/6b03b610bfb6b56e8f09.js"></script>
	
	
	
	
	<!-- Radios and checkboxes -->
	<h3>Radios and checkboxes</h3>
	<p>Checkboxes for single or multiple selection, and radios for selecting between options.</p>
	<section class="bc-capsule code-companion">
		<form>
			<label>Checkbox</label>
			<div class="form__checkbox">
				<label>
					<input type="checkbox" value="">
					A single checkbox, this uses the wrapper class <code>.form__checkbox</code> for spacing. More text to wrap to a second line. 
				</label>
			</div>
			<label>Radios</label>
			<div class="form__radios">
				<label>
					<input type="radio" name="a" value="1" checked>
					A single radio, this uses the wrapper class <code>.form__radios</code> around all related radios. This radio and the next radio are both wrapped by that class.
				</label>
				<label>
					<input type="radio" name="a" value="2" >
					A second option radio, this uses the wrapper class <code>.form__radios</code> around all related radios. This radio and the previous radio are both wrapped by that class.
				</label>
			</div>
			<button type="submit" class="btn--error">Submit</button>
		</form>
	</section>
	<script src="https://gist.github.com/leobauza/3d908e08e03c698734ad.js"></script>

	
	
	
	<!-- Inline forms -->
	<h3>Inline form</h3>
	<p>Typically used for compact login forms.</p>
	<div class="note--error">
		<p>The code for making these inline is <strong>thoroughly</strong> untested (will get to that soon.)</p>
	</div>
	<section class="bc-capsule code-companion">
		<form class="form--inline">
			<div class="form__group">
				<label>email</label>
				<input type="email" placeholder="placeholder"></input>
			</div>			
			<div class="form__group">
				<label>password</label>
				<input type="password"></input>
			</div>
			<div class="form__checkbox">
				<label>
					<input type="checkbox" value="">
					Remember me.
				</label>
			</div>
			<button type="submit" class="btn--info">submit</button>
		</form>
	</section>
	<script src="https://gist.github.com/leobauza/b49d99fe254669768115.js"></script>
	
	
	<!-- Horizontal Labels -->
	<h3>Horizontal labels</h3>
	<p>Horizontal labels utilize the grid code but is set specifically for forms so no need to add a <code>.row-fluid-&lt;modifier&gt;</code> class. To adjust it, it can be found in <code>assets/scss/normalizers/_forms.scss</code> under the class <code>.form--horizontal</code>. The <code>.row-fluid</code> is replaced by <code>.form--horizontal</code>. There is <strong>no</strong> nesting of grids in forms.</p>
	<section class="bc-capsule code-companion">
		<form class="form--horizontal">
			<div class="form__group">
				<label class="span2">Text</label>
				<div class="span10 l">
					<input type="text" placeholder="placeholder"></input>
				</div>
			</div>
			<div class="form__group">
				<label class="span2">more</label>
				<div class="span10 l">
					<input type="text" placeholder="placeholder"></input>
				</div>
			</div>
			<div class="form__checkbox">
				<span class="span2">&nbsp;</span> <!-- temporary hack -->
				<label class="span10 l">
					<input type="checkbox" value="">
					Remember me. (working on those offsets for rows...)
				</label>
			</div>
			<div class="group"> <!-- temporary hack -->
				<div class="span2">&nbsp;</div>
				<div class="span10 l">
					<button type="submit" class="btn--info">submit</button>
				</div>
			</div>
		</form>
	</section>
	<script src="https://gist.github.com/leobauza/40131b080555c3176dcf.js"></script>

	<!-- Selects -->
	<h3>Selects</h3>
	<section class="bc-capsule code-companion">
		<form>
			<div class="form__group">
				<label>select</label>
				<select>
					<option>one</option>
					<option>two</option>
				</select>
			</div>
			<div class="form__group">
				<label>select multiple</label>
				<select multiple>
					<option>one</option>
					<option>two</option>
				</select>
			</div>
		</form>
	</section>
	<script src="https://gist.github.com/leobauza/68905c1a973754bb698b.js"></script>
	




</section>

