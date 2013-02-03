<?php 

//change for testing
require("kaylee.php");

//determine whether serenity has content...this checks if simon has run...
//should probably have a key word that simon writes here to check
$hasContent = file_get_contents($pathToSerenity);


//so how about wrapping this entire thing in a function that returns a clean header.
//then create a clean.header.php with just clean html and it does away with all this if else shit during set up


?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title><?php if(isset($title)){print $title; } else { print "page lacks title soldier";} ?></title>
	<?php if(isset($isResponsive)):?>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php endif?>
	<meta name="description" content="<?php if(isset($description)){ print $description; } else { print "page lacks description soldier";} ?>">
	<meta name="author" content="<?php if(isset($author)){ print $author; } else { print "page lacks author";} ?>">

	<!-- styles -->

	<?php if(isset($useless) && $useless == true): ?>
		<!-- use less js compiling and have ie fallback with css -->
		<?php if($hasContent == true && !isset($isWiper)): ?>
			<link rel="stylesheet/less" type="text/css" href="../assets/less/styles.less">
		<?php else: ?>
			<link rel="stylesheet/less" type="text/css" href="../assets/less/default.reaver.less">
		<?php endif; ?>
		<script src="../assets/js/less.js" type="text/javascript"></script>
	<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
	<!--[if lt IE 9]>
		<link rel="stylesheet" href="../assets/css/styles.css" type="text/css" media="screen" charset="utf-8">
	  <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<?php else: //not using less.js to compile?>
		<?php 
		if($hasContent == true && !isset($isWiper)):
		?>
			<!-- use css and never run the less.js script -->
			<link rel="stylesheet" href="../assets/css/styles.css" type="text/css" media="screen" charset="utf-8">
			<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
			<!--[if lt IE 9]>
			  <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
			<![endif]-->
		<?php elseif(isset($isWiper)): ?>
			<!-- delete default after simon runs I guess I could set it to do that but I don't know right now-->
			<link rel="stylesheet" href="../assets/css/default.reaver.css" type="text/css" media="screen" charset="utf-8">
		<?php else: //why is this and the isset wiper the same?? ?>
			<!-- delete default after simon runs I guess I could set it to do that but I don't know right now-->
			<link rel="stylesheet" href="../assets/css/default.reaver.css" type="text/css" media="screen" charset="utf-8">
		<?php endif; ?>
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
		<?php if(isset($isRiver)): ?>
			<h1>river</h1>
			<h3>set up your kaylee configurations file</h3> 
		<?php elseif($hasContent == true && !isset($isWiper)): ?>
			<h1>Some Header</h1>
			<h3>Still coming up with designs for this and stuff</h3> 
		<?php else: ?>
			
			<h1>Using Default</h1>
			<a href="/simon.php" class="btn-main small">Run simon</a>
			 
		<?php endif; ?>
		
		
		<?php 
		//hey if you ever wanted to know ur document root uncoment this for some reason I had it here
		//echo $_SERVER["DOCUMENT_ROOT"];
		?>
	</header>
	<!-- I need to come up with cross browser options for hr's even though hr's are fucking dumb -->
	<hr>
