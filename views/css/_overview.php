<section class="bc-doc-box">
	<h2 class="bc-section-header">Overview</h2>
	<p>[overview text goes here...]</p>
	<h3>HTML Boilerplate</h3>
	<p><?php echo $browncoatVersion; ?> uses HTML5 elements thus requiring an HTML5 doctype. It is also responsive requiring the appropriate meta tag. Below is a github gist containing a boilerplate for an <code>index.html</code> page.</p>
	<div class="bc-gist-solo">
		<script src="https://gist.github.com/leobauza/baefedca7fd3ceb3c288.js"></script>
	</div>
	
	<h3>Using CSS</h3>
	<p>In the above boilerplate CSS is included through one entry point <code><?php echo htmlentities('<link rel="stylesheet" href="/assets/css/styles.css" type="text/css" media="screen" charset="utf-8">'); ?></code> which is compiled from the scss directory.</p>
	
	<h3>RequireJS</h3>
	<p>In the above boilerplate we are using <a href="http://requirejs.org/" target="_blank">require.js</a>. In this way we can write modules and have a single entry point to our application/website using this line of code <code><?php echo htmlentities('<script src="/assets/js/libs/require.js" data-main="/assets/js/config"></script>'); ?></code></p>
	
</section>
