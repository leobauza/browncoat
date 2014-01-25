<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title><?php if(isset($title)) echo $title; else echo "title"; ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="a website description">
	<meta name="author" content="the author">

	<!-- styles -->
	<link rel="stylesheet" href="/assets/css/styles.css" type="text/css" media="screen" charset="utf-8">
	
	<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
	<!--[if lt IE 9]>
	  <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<!-- fav and touch icons -->
	<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
</head>
<?php
	if (isset($activeNav)):
		$nav = $activeNav;
	else:
		$nav = '';
	endif;
?>

<body>
<?php if(!isset($page)) :?>
	<header class="site-header">
		<nav class="nav-bar">
			<ul class="menu-left">
				<li class="brand"><a <?php if ($nav == "") echo "class='active'"; ?> href="/">browncoat 2.0</a></li>
				<li><a <?php if ($nav == "css") echo "class='active'"; ?> href="/css">css</a></li>
				<li><a <?php if ($nav == "libraries") echo "class='active'"; ?> href="/libraries">libraries</a></li>
				<li><a <?php if ($nav == "layouts") echo "class='active'"; ?> href="/layouts">layouts</a></li>
			</ul>
			<ul class="menu-right">
				<li><a href="#">right side</a></li>
				<li><a href="#">navigation</a></li>
			</ul>
		</nav>
	</header>
<?php endif; ?>

	<?php
		//print_r($variables);
		include $body;
	?>
	<section class="container">
		<?php if(isset($link)) echo $link; ?>
	</section>


	<section class="divider">	
		<nav class="nav-btns inline-nav">
			<ul>
				<li class="brand"><a <?php if ($nav == "") echo "class='active'"; ?> href="/">browncoat 2.0</a></li>
				<li><a <?php if ($nav == "css") echo "class='active'"; ?> href="/css">css</a></li>
				<li><a <?php if ($nav == "libraries") echo "class='active'"; ?> href="/libraries">libraries</a></li>
				<li><a <?php if ($nav == "layouts") echo "class='active'"; ?> href="/layouts">layouts</a></li>
			</ul>
		</nav>
	</section>	

	
<?php if(!isset($page)) :?>	
	<footer class="site-footer container">
		<p>created by <a href="http://www.leobauza.com" target="_blank">The Fine People of Fairfax</a></p>
	</footer>
<?php endif; ?>
	<script src="/assets/js/require/require.js" data-main="/assets/js/main"></script>
	<!-- <script src="../assets/js/require/require.js" data-main="/assets/js/conc-modules"></script> -->
	<!-- <script src="../assets/js/min/scripts.min.js"></script> -->
	
	
	<!-- TESTING STUFF -->
	<!-- <script src="../assets/js/libs/jquery/jquery.js"></script>
	<script src="../assets/js/compiled/jquery.plugin.boilerplate.js"></script> -->
	
	
</body>
</html>
