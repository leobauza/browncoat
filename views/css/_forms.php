<section class="divider division">
	<h3>Forms</h3>
	<p>Forms can be optimally divided into form groups <code>.form-group</code> and further divided into input groups <code>.input-group</code>. A <code>.form-group</code> encapsulates groups of inputs while <code>.input-group</code> encapsulates a label and input field.</p>
	
	<section class="bc-capsule code-companion">
		<form>
			<legend><strong>Basic Example:</strong> This is a legend</legend>

			<div class="input-group">
				<label>text</label>
				<input type="text" placeholder="placeholder"></input>
			</div>

			<div class="input-group">
				<label>email</label>
				<input type="email" placeholder="placeholder"></input>
			</div>

			<div class="input-group">
				<label>password</label>
				<input type="password"></input>
			</div>

			<div class="input-group">
				<label>file</label>
				<input type="file">
			</div>

			<button type="submit" class="btn--default">Submit</button>

		</form>
	</section>
	
	<script src="https://gist.github.com/leobauza/b2f411544f9f2e6c6bfd.js"></script>
	

	<form>
		<label>textarea</label>
		<textarea rows="3"></textarea>

		<label>select</label>
		<select>
			<option>one</option>
			<option>two</option>
		</select>

		<label>select multiple</label>
		<select multiple>
			<option>one</option>
			<option>two</option>
		</select>

		<label>
			<input type="checkbox" value="">
			checkbox
		</label>

		<label>
			<input type="radio" name="a" value="1" checked>
			radio
		</label>
		<label>
			<input type="radio" name="a" value="2" >
			radio 2
		</label>
	</form>




</section>

