<section id="lists" class="bc-doc-box">
	<h2 class="bc-section-header">Lists</h2>
	<p>List nesting is supported down 3 levels. Combining <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code> is supported.</p>
	
	<article class="bc-capsule rel-files">
		<ol>
			<li>List styles: <code>assets/scss/browncoat/normalizers/_list.scss</code></li>
			<li>Text related variables: <code>assets/scss/browncoat/bases/_text.scss</code></li>
			<li>Colours: <code>assets/scss/browncoat/bases/_colours.scss</code></li>
		</ol>
	</article>
	
	<h3>Unordered List</h3>
	<p>List items in no particular order.</p>
	
	<article class="bc-capsule code-companion">
		<ul>
			<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
			<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
			<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
			<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
		</ul>
	</article>
	<script src="https://gist.github.com/leobauza/ec0a2209c5432fad1760.js"></script>
	
	<h3>Ordered List</h3>
	<p>List items in order.</p>

	<article class="bc-capsule code-companion">
		<ol>
			<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
			<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
			<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
			<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
		</ol>
	</article>	
	<script src="https://gist.github.com/leobauza/00fb12637390b430a9b7.js"></script>
	
	<h3>Nesting and Combining</h3>
	<p>Ordered lists can be nested within unordered lists and vice versa.</p>
	<article class="bc-capsule code-companion">
		<h5>Unordered nested inside ordered</h5>
		<ol>
			<li>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
				<ul>
					<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
					<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
					<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
					<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
				</ul>
			</li>
			<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
		</ol>
	</article>
	<script src="https://gist.github.com/leobauza/f1836e906138a7cfcc4e.js"></script>
	
	<article class="bc-capsule code-companion">
		<h5>Ordered nested inside unordered</h5>
		<ul>
			<li>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
				<ol>
					<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
					<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
					<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
					<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
				</ol>
			</li>
			<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
		</ul>
	</article>
	<script src="https://gist.github.com/leobauza/2758569601aff9d8f942.js"></script>

</section>
