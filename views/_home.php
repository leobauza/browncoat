<section class="row-static">
	<aside class="span-sidebar">
		<nav class="inner">
			<h4>See More:</h4>
			<div class="list-group">
				<a href="/" class="active">browncoat 2.0</a>
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
	<section class="span-main">
		<article class="inner al-c">
			<h2>About the project and docs</h2>
		</article>
		<article class="inner al-c">
			<div class="row-fluid">
				<div class="span4">
					<h4>Starting Point</h4>
					<p><strong>browncoat</strong> is a small front end framework designed to give you a good <strong>starting point.</strong> It comes packaged in a way that allows you to start writing your webpage or app immediately.</p>
				</div>
				<div class="span4">
					<h4>Customizable</h4>
					<p><strong>browncoat</strong> is designed to give you maximum control. It utilizes the css cascade so that you can build on top of a solid css core. Same goes for JS, using Require.js makes this easy.</p>
				</div>
				<div class="span4">
					<h4>Modularized</h4>
					<p><strong>browncoat</strong> has modularized <strong>scss</strong> and <strong>js</strong> this means you can pretty much remove or keep as much as you want simply by deleting folders. <strong>(Just don't delete dependencies)</strong></p>
				</div>
			</div>
		</article>
		<article class="inner">
			<h3>CSS</h3>
			<div class="callout--warning"><strong>CSS</strong> is lacking in two notable categories <em>tables</em> and <em>forms.</em> <strong>browncoat</strong> is still in early development</div>
			<p>The CSS section contains examples of the basic styles that make up the foundation of <strong>browncoat</strong>. There is nothing fancy there. Examples include:</p>
			<ol>
				<li>The grid (12 column based)</li>
				<li>Lists (ul and ol)</li>
				<li>Forms (plain html forms)</li>
				<li>Reset Styles (for tags like h1 - h6, p, a, etc)</li>
			</ol>
		</article>
		<article class="inner">
			<h3>Libraries</h3>
			<div class="callout--warning"><strong>Libraries</strong> are still incomplete, <strong>browncoat</strong> is still in early development</div>
			<p>The Libraries section contains example of non standard html elements. This is anything defined with a css class or set of css classes. These however do not include JS functionality. They are just examples of the styles. Examples include:</p>
			<ol>
				<li>Buttons</li>
				<li>Alerts</li>
				<li>List Groups</li>
				<li>Boxes</li>
				<li>Etc...</li>
			</ol>
		</article>
		<article class="inner">
			<h3>Layouts</h3>
			<p>There are basically two style of layouts that can be used independently or in tandem. There are the <strong>Fluid Rows</strong> and the <strong>Fixed Width Sidebar</strong>. This page is using both right now. The menu to the left is a fixed width sidebar and the three columns at the beginning are made with Fluid Rows. Some things to keep in mind:</p>
			<ol>
				<li>Fluid Rows are based on a twelve column grid <strong>(for now)</strong></li>
				<li>Fluid Rows can be adjusted in the <strong>browncoat/bases/structure</strong> file.</li>
				<li>Fixed Width Sidebar setting can be adjusted in the <strong>browncoat/bases/structure</strong> file.</li>
				<li>Nothing is stopping you from creating new layouts based on these, in fact we are working on a 14 and 16 column grid layout</li>
				<li>When I say <strong>we</strong> I really mean <strong>I</strong>, but saying <strong>we</strong> makes it seem more official</li>
			</ol>
		</article>
		<article class="inner">
			<h3>So, Removing Things</h3>
			<div class="callout--warning"><strong>browncoat</strong> is still in early development so this documentation is incomplete for now.</div>
			<p>As a developer I want to take what I like and ditch everything else. There is a <a href="/removingthings">whole page</a> dedicated to how to <strong>"ditch everything else"</strong> but here are the basics:</p>
			<ol>
				<li>
					The <strong>assets/</strong> directory contains 5 directories:
					<ul>
						<li><strong>build:</strong> Contains your build.js file for r.js to use to optimize your scripts when you are ready for production (more on this in the js section)</li>
						<li><strong>css:</strong> For your compiled CSS. You shouldn't ever edit this file directly. You could move this but why?</li>
						<li><strong>img:</strong> For your images. Move if you like and update the <strong>$imgPath</strong> var in <strong>scss/app/browncoat/bases/helper</strong></li>
						<li><strong>js:</strong> All your javascript/coffeescript</li>
						<li><strong>scss:</strong> All your sassy css to be compiled into css</li>
					</ul>
				</li>
				<li>
					The <strong>scss</strong> directory structure is divided into two main directories: <strong>app</strong> &amp; <strong>browncoat</strong>
					<ul>
						<li><strong>app:</strong> is yours to customize and do whatever you want in. It contains the <strong>libs/</strong> directory which has some starter libs. The devs directory is for developers, the clients directory for clients, and vendors directory for things like the css given by jQuery UI or other libraries.</li>
						<li><strong>browncoat:</strong> contains the bases and normalizers. This is the one directory you should only change slightly since its the core of browncoat. That does <strong>NOT</strong> mean you shouldn't change it at all. In fact you should customize colors, text and other variables there for every project. What it <strong>DOES</strong> mean is don't add something like .my-red-box-class in there...that belongs <strong>nowhere</strong> or in the <strong>clients/</strong> directory.</li>
					</ul>
				</li>
				<li>
					The <strong>js/</strong> directory has a standard Require.js :
					<ul>
						<li>It includes the <strong>coffeescript plugin</strong> for requires.js if you don't plan to use it you can remove the files <strong>cs.js</strong> and <strong>coffee-script.js</strong>. Note: You will have to write your own versions of the <strong>app/</strong> files if you remove coffeescript, as these are written in coffeescript. The entry point (main.js) is written in plain JS though.</li>
						<li><strong>jQuery</strong> is the library of choice here but you can replace it. (all plugins are written as jQuery plugins so you won't have access to those. In the future they will be written in plain JS as well.)</li>
					</ul>
				</li>
			</ol>
		</article>
	</section>
</section>
