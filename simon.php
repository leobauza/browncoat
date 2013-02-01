<?php

//some possible page variables
$title = "simon diagnostic"; //this is backed up by a generic title set in kaylee.php or a browncoat generic title

?>

<?php include('_inc/header.php'); ?> 

<section class="container">
	<div class="row-fluid">
		<article class="span7">
				<h1>Browncoat Config</h1>
				<h3>Open this file for kaylee to run and create your initial template</h3>
				<p><strong></strong> a lightweight front end framework built partially on php and less. Rather than having a huge css file Browncoat will use libraries than can be included or excluded by means of a configuration file (kaylee.php) somehow. Browncoat is in its infancy, or rather even before that, so fucking tear it apart do with it as you wish and suggest anything you want.</p>

			<?php


			/*
			 *
			 * Writing serenity.less import
			 * this writes a master less file with the libraries specified imported so they can then be imported into styles.less
			 * which is probably a horrid idea but we will see
			 * there is the permissions problem with it...say that it needs to be changed?
			 *
			 */

			//create serenity @imports
			$i = 0;
			//pass the lib folder to somehow dynamically generate this array or what? i dunno
			$serenityArr = createLibArrays();
			
			foreach($serenityArr as $key => $val) {
				if($i == 0) {
					$serenity_imports = "//".$key."-lib include";
					$serenity_imports .= "\n".'@import "'.$val. '";';
				} else {
					$serenity_imports .= "\n//".$key."-lib include";
					$serenity_imports .= "\n".'@import "'.$val. '";';
				}
				$i++;
			}
			//create the @imports for wash
			$wash_imports = "//IT WORKS";

			function writeLessFiles($filename, $imports, $name){
				$hasContent = file_get_contents($filename);
				//write only if empty
				if(!$hasContent){
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
						$written = "<p class='warning'><strong> $name has been written.</strong> refresh to see the result</p>";
						$written .= "\n"."<p>You must take care of compiling you styles.less file now. (using less.app or similar.)</p>";
						echo $written;
						//close the file
						fclose($handle);
					} else {
						//if its not writtable tell me
						echo "<p class='warning'><strong>The file $filename is not writable</strong></p>";
					}
				} else {
					//serenity already exists
					$exists = "<p class='warning'><strong>$name is already written</strong></p>";
					$exists .= "<p class='note'>if you are not seeing styles your .less files are not being compiled (using less.app or similar) or turn on \$useless in kaylee</p>";
					echo $exists;
				}
			}
			
			//write serenity
			writeLessFiles($pathToSerenity, $serenity_imports, "serenity");
			//write wash
			writeLessFiles($pathToWash, $wash_imports, "wash");
			
			?>
		</article>
		<aside class="span5">
			<a href="/wiper.php" class="btn-gray small">wipe serenity</a>
			<p class="note unbump">note: this button should call a file like serenity-wipe.php that runs some code to wipe everything in serenity.less. This should be an ajax call.</p>
			<br>
			<a href="/index.php" class="btn-main small">to index</a>
		</aside>
	</div>



</section>


<?php include('_inc/footer.php'); ?>
