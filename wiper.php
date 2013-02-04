<?php

//sets some defaults so there's always a default style showing
$isWiper = true;

//some possible page variables
$title = "wiper"; //this is backed up by a generic title set in kaylee.php or a browncoat generic title

?>

<?php include('_inc/header.php'); ?> 

<section class="container">
	<div class="row-fluid">
		<article class="span7">
				<h1>Serenity Wipe</h1>
				<h3>This file wipes sernity, if you did this by mistake then:</h3>
				<a href="/simon.php" class="btn-main small">Run Simon</a>
				<p>Otherwise you can go about your day:</p>
				<a href="/index.php" class="btn-gray">go home</a>

			<?php


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
			wipeLessFiles($pathToSerenity, $imports, "serenity");
			//wipe wash
			wipeLessFiles($pathToWash, $imports, "wash");

			wipeLessFiles($pathToCSS, $imports, "css");

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


<?php include('_inc/footer.php'); ?>
