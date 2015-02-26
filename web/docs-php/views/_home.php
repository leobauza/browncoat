<section class="row">
  <section class="span8">
    <h2 class="bc-section-header">About <?php print $bcV; ?></h2>

    <p>The goal of browncoat is to provide a front-end <strong>start template</strong> for any website, web app, or prototype. It does this by providing some key things:</p>
    <ol>
      <li>Foundational CSS <strong>every single project</strong> will need</li>
      <li>Libraries of common elements some projects <strong>might</strong> need</li>
      <li>A scss pattern to follow when including new files and directories</li>
      <li>A javascript skeleton (in coffeescript or javascript) complete with boilerplates for jQuery plugins and optionally using require.js</li>
      <li>A way to take any of these things and get rid of them or optionally use just the ones you need</li>
      <li class="bc-soon"><strong>coming soon:</strong> A gruntfile set up to automate all browncoat tasks with one simple command on your terminal: <code>grunt bc</code></li>
      <li class="bc-soon"><strong>coming soon:</strong> Multiple ways of installing browncoat, from simply cloning, to bower, to a yeoman generator</li>
    </ol>

    <h3>HTML Boilerplate</h3>
    <p><?php echo $bcV; ?> uses HTML5 elements thus requiring an HTML5 doctype. It is also responsive requiring the appropriate meta tag. Below is a github gist containing a boilerplate for an <code>index.html</code> page.</p>
    <div class="bc-gist-solo">
      <script src="https://gist.github.com/leobauza/baefedca7fd3ceb3c288.js"></script>
    </div>


    <p>In contrast to other frameworks, browncoat encourages modifying and changing of browncoat scss. It assumes the user knows what they are doing and that browncoat won't be "updated," but rather if new libraries become available they will be added separately following the browncoat pattern. browncoat sets up a pattern for organizing scss. </p>

  </section>
  <aside class="span4 l">
    <nav>
      <h4>See More:</h4>
      <div class="list-group">
        <a href="/" class="active"><?php print $bcV; ?></a>
        <a href="/css">CSS</a>
        <a href="/libraries">Libraries</a>
        <a href="/layouts">Layouts</a>
      </div>
      <ul class="list-group">
        <li>No link list group item</li>
        <li>Second Item</li>
        <li>Third Item</li>
      </ul>
      <p><strong>note:</strong> sample list-group library items above</p>
    </nav>
  </aside>
</section>
