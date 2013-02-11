<?php

//sets some defaults so there's always a default style showing
$isWiper = true;

//some possible page variables
$title = "wiper"; //this is backed up by a generic title set in kaylee.php or a browncoat generic title

?>

<?php 

//change for testing
if(file_exists('../kaylee.php')):
	include("../kaylee.php");
else:
	$warnings = "<div class=\"container\"><p class=\"warning\">no kaylee file exists...you probably just downloaded this and didn't even bother to read the instructions where it tells you to copy default.kaylee.php to kaylee.php (that's actually not in any instructions right this second but it will be.)</p></div>";
endif;

//determine whether serenity has content...this checks if simon has run...
//should probably have a key word that simon writes here to check
if(isset($pathToSerenity)):
	$hasContent = file_get_contents(".".$pathToSerenity);
else:
	$hasContent = false;
endif;
//so how about wrapping this entire thing in a function that returns a clean header.
//then create a clean.header.php with just clean html and it does away with all this if else shit during set up


?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title><?php if(isset($title)){print $title; } else { print "page lacks title soldier";} ?></title>
	<meta name="description" content="<?php if(isset($description)){ print $description; } else { print "page lacks description soldier";} ?>">
	<meta name="author" content="<?php if(isset($author)){ print $author; } else { print "page lacks author";} ?>">
	<!-- delete default after simon runs I guess I could set it to do that but I don't know right now-->
	<link rel="stylesheet" href="../assets/css/default.reaver.css" type="text/css" media="screen" charset="utf-8">
	<link rel="shortcut icon" href="favicon.ico">
</head>
<body>
<?php

echo $warnings;

?>
<section class="container">
	<div class="row-fluid">
		<article class="span7">
				<h1>Serenity Wipe</h1>
				<h3>This file wipes sernity, if you did this by mistake then:</h3>
				<a href="/simon.php" class="btn-main small">Run Simon</a>
				<p>Otherwise you can go about your day:</p>
				<a href="/index.php" class="btn-gray">go home</a>

			<?php
			if(isset($pathToSerenity)):
				echo $pathToSerenity;
			else:
				echo "whoops";
			endif;
			/*
			 *
			 * Writing serenity.less import
			 * this writes a master less file with the libraries specified imported so they can then be imported into styles.less
			 * which is probably a horrid idea but we will see
			 * there is the permissions problem with it...say that it needs to be changed?
			 *
			 */

			//this is the path to your serenity file that is set in kaylee
			//$filename = $pathToSerenity;

			//create the @import
			$imports = "";
			function wipeLessFiles($filename, $imports, $name){
				$hasContent = file_get_contents($filename);
				//write only if empty
				if($hasContent){
					// Let's make sure the file exists and is writable first.
					if (is_writable($filename)) {
						//if it can't open then exit
						if (!$handle = fopen($filename, 'w')) {
							echo "<strong>Cannot open file ($filename)</strong>";
							exit;
						}
						//write it and if it cant say it cant
						if (fwrite($handle, $imports) === FALSE) {
							echo "<p><strong>Cannot write to file ($filename)</strong></p>";
							exit;
						}
						$wiped = "<p class='warning'><strong>$name has been wiped.</strong> to write it using your kaylee file <a href='/simon.php'>run simon</a></p>";
						echo $wiped;
						fclose($handle);
					} else {
						echo "<p><strong>The file $filename is not writable</strong></p>";
					}
				} else {
					$wipedAlready = "<p class='warning'><strong>$name is already wiped</strong></p>";
					echo $wipedAlready;
				}
			}

			

			//wipe serenity
			wipeLessFiles(".".$pathToSerenity, $imports, "serenity");
			//wipe wash
			wipeLessFiles(".".$pathToWash, $imports, "wash");

			wipeLessFiles(".".$pathToCSS, $imports, "css");

			// function kayleeDefault($path){
			// 	//uhh this is dumb but reaplace every space with a space...
			// 	$handle = fopen($path,"r");
			// 	$content = fread($handle,filesize($path));
			// 	$content = str_replace("\$kaylee = true;", "\$kaylee = false;", $content);
			// 	//oppen again to write
			// 	$handle = fopen($path,"w");
			// 	fwrite($handle,$content);
			// 	fclose($handle);
			// }
			// kayleeDefault("./kaylee.php");



			?>
		</article>
		<aside class="span5">
			<a href="/index.php" class="btn-main small">to index</a>
		</aside>
	</div>



</section>


	<footer class="container">
		wiper footer
	</footer>



	<!-- end javascript -->
</body>
</html>
