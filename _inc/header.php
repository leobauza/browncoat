<?php require("kaylee.php");?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title><?php if(isset($title)){print $title; } elseif(isset($genericTitle)) { print "page lacks title soldier";} ?></title>
	<?php if(isset($isResponsive)):?>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php endif?>
	<meta name="description" content="a website description">
	<meta name="author" content="the author">

	<!-- styles -->

	<?php if(isset($useless)): ?>
		<!-- use less js compiling and have ie fallback with css -->
		<link rel="stylesheet/less" type="text/css" href="../assets/less/styles.less">
	<script src="../assets/js/less.js" type="text/javascript"></script>
	<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
	<!--[if lt IE 9]>
		<link rel="stylesheet" href="../assets/css/styles.css" type="text/css" media="screen" charset="utf-8">
	  <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<?php else:?>
		<!-- use css and never run the less.js script -->
		<link rel="stylesheet" href="../assets/css/styles.css" type="text/css" media="screen" charset="utf-8">
		<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
		<!--[if lt IE 9]>
		  <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
	<?php endif; ?>

	<!-- fav and touch icons -->
	<link rel="shortcut icon" href="favicon.ico">
	<!-- 
		I honestly don't know what these do but I will find out...promise
		<link rel="apple-touch-icon" href="images/apple-touch-icon.png">
		<link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png"> 
	-->
</head>

<body>
	<header class="container-alt">
		<h1>Some Header</h1>
		<h3>Still coming up with designs for this and stuff</h3> 
		<?php 
		//hey if you ever wanted to know ur document root uncoment this for some reason I had it here
		//echo $_SERVER["DOCUMENT_ROOT"];
		?>
	</header>
	<!-- I need to come up with cross browser options for hr's even though hr's are fucking dumb -->
	<hr>