<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	
	<title><?php echo (!isset($title) ? 'no title' : $title); ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="">
	<meta name="author" content="">

	<!-- styles -->
		<?php $lessOrCss = "using default.reaver.less" ?>
		<link rel="stylesheet/less" type="text/css" href="../assets/less/default.reaver.less">
		<script>
		less = {
			env: "development", // or "production"
			async: false,				// load imports async
			fileAsync: false,		// load imports async when in a page under 
													// a file protocol
			poll: 1000,					// when in watch mode, time in ms between polls
			functions: {},			// user functions, keyed by name
			dumpLineNumbers: "comments", // or "mediaQuery" or "all"
			relativeUrls: false,// whether to adjust url's to be relative
													// if false, url's are already relative to the
													// entry less file
			//rootpath: ":/a.com/"// a path to add on to the start of every url 
													//resource
		};
		</script>
		<script src="../assets/js/less.js" type="text/javascript"></script>
		
		<!-- pretty code -->
		<script src="/samples/sample_assets/prettify.js" type="text/javascript" charset="utf-8"></script>
		
		
	<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
	<!--[if lt IE 9]>
		<link rel="stylesheet" href="../assets/css/styles.css" type="text/css" media="screen" charset="utf-8">
		<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<!-- fav and touch icons -->
	<link rel="shortcut icon" href="favicon.ico">
	<!-- 
		I honestly don't know what these do but I will find out...promise
		<link rel="apple-touch-icon" href="images/apple-touch-icon.png">
		<link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png"> 
	-->
</head>

<body onload="prettyPrint()">
	<p class="warning"><?php echo $lessOrCss; ?></p>
	<header class="container-alt">
		<h4>Using Default Reavers Less...You can sort showing your own libraries until I find an easy way</h4>
	</header>
