<section id="typography" class="bc-doc-box">
	<h2 class="bc-section-header">Typography</h2>
	<article class="bc-capsule rel-files">
		<ol>
			<li>Typography styles: <code>assets/scss/browncoat/normalizers/_reset.scss</code></li>
			<li>Text related variables: <code>assets/scss/browncoat/bases/_text.scss</code></li>
			<li>Colours: <code>assets/scss/browncoat/bases/_colours.scss</code></li>
		</ol>
	</article>
	
	<!-- Headings -->
	<h3>Headings</h3>
	<p>Header <code>font-size</code>, <code>line-height</code>, and <code>margin</code> are set in <code>ems</code>. The <code>&lt;small&gt;</code> tag can be used to create a header companion 70% the size of the parent header tag.</p>
	<article class="bc-capsule code-companion">
		<h1>Heading One <small>Heading companion</small></h1>
		<h1><a href="#">Heading One Link</a></h1>
		<h2>Heading Two <small>Heading companion</small></h2>
		<h2><a href="#">Heading Two Link</a></h2>
		<h3>Heading Three <small>Heading companion</small></h3>
		<h3><a href="#">Heading Three Link</a></h3>
		<h4>Heading Four <small>Heading companion</small></h4>
		<h4><a href="#">Heading Four Link</a></h4>
		<h5>Heading Five <small>Heading companion</small></h5>
		<h5><a href="#">Heading Five Link</a></h5>
		<h6>Heading Six <small>Heading companion</small></h6>
		<h6><a href="#">Heading Six Link</a></h6>
	</article>
	<script src="https://gist.github.com/leobauza/d0e475b25d5be3ace02b.js"></script>
	<!-- reversed text -->
	<h3>Reversing</h3>
	<p>By default reversing turns a box black and text white (except for links.) Apply the <code>.reverse</code> class to a box to reverse it.</p>
	<article class="bc-capsule code-companion reverse">
		<h1>Reversed Box</h1>
		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. <a href="#">Link Item</a></p>
	</article>	
	<script src="https://gist.github.com/leobauza/08125df269d793227747.js"></script>
	
	<!-- paragraphs -->
	<h3>Paragraphs</h3>
	<p>The default <code>font-size</code> for <?php echo $bcV; ?> is <b>16px</b> expressed in <code>ems</code> it is <b>1.6em</b>.</p>
	
	<h5>Intro Paragraphs</h5>
	<p>Add the <code>.intro</code> class to make intro paragraphs. The default size for these is <code>2em</code>. By default intro paragraphs have a bottom margin of <code>40px</code> this can be removed by instead using the <code>.soft-into</code> class.</p>
	
	<h5>Bold and italic</h5>
	<p>Add emphasis to words or sections in a paragraph with <code>&lt;strong&gt;</code> or <code>&lt;em&gt;</code> tags for bolding and italicizing respectively. Use the <code>&lt;small&gt;</code> tag for fine print text.</p>
	
	<article class="bc-capsule code-companion">
		<p class="intro">Intro: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
		<hr>
		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
		<hr>
		<p>The end of this paragraph <strong>should be bold</strong></p>
		<p>The end of this paragraph <em>should be in italicized</em></p>
		<p><small>this is the fine print using small tags</small></p>
	</article>
	<script src="https://gist.github.com/leobauza/72030e71280c44c32ddf.js"></script>

	<div class="note--info">
		<h5>Alternate Elements</h5>
		<p>Use <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code> instead of <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> when wanting the visual effects without wanting to convey emphasis.</p>
	</div>
	
	
	<!-- address -->
	
	<!-- blockquotes -->
	
</section>
