<?php

//some possible page variables
$title = "river"; //this is backed up by a generic title set in kaylee.php or a browncoat generic title
$isRiver = true;
?>

<?php include('_inc/header.php'); ?> 

<section class="container">
	<h1>River</h1>
	<h2>river writes your kaylee file for you</h2>
	<section class="row-fluid">
		<article class="span8">
			<form action="/process-river.php" method="post">
				<div class="input-group">
					<label>Title</label>
					<input type="text" name="general[title]" value=""></input>
				</div>

				<div class="input-group">
					<label>Description</label>
					<input type="text" name="general[description]" value=""></input>
				</div>

				<div class="input-group">
					<label>Author</label>
					<input type="text" name="general[author]" value=""></input>
				</div>

				<?php

				if ($dirRoot = opendir('./assets/libs/')) {
					//echo "Directory handle: $handle\n";
					//echo "Entries:\n";

					/* This is the correct way to loop over the directory. */
					while (false !== ($libDir = readdir($dirRoot))) {
						if ($libDir != "." && $libDir != "..") {
							//echo "<h2>$entry contains:</h2>\n";
							$libDirSplit = explode("-",$libDir); 
							echo "<div class='input-group'>";//open input group
							echo "<h3>$libDirSplit[0] library</h3>";
								if ($dirSubRoot = opendir('./assets/libs/'.$libDir)) {
								while (false !== ($libSubDir = readdir($dirSubRoot))) {
									if($libSubDir != "." && $libSubDir != ".."){
										$splitLibSubDir = explode(".", $libSubDir);
										$lib_theme = explode("-", $splitLibSubDir[0]);
										$lib = $lib_theme[0];
										$theme = $lib_theme[1];
										echo "<label>$theme</label>";
										if($lib == "text" || $lib == "colour" || $lib == "structure" || $lib == "helper" || $lib == "core"):
											//the four libraries that belong to wash that make up the core of less and color in both spellings just couse
											echo '<input type="radio" name="wash-library['.$lib.']" value="'.$theme.'" />';
										else:
											//otherwise add to serenity arr
											echo '<input type="radio" name="serenity-library['.$lib.']" value="'.$theme.'" />';
										endif;
										// echo "<div>$lib is the lib</div>\n";
										// echo "<div>$theme is the theme</div>\n";

									}
								}
								closedir($dirSubRoot);
							}
							if($libDirSplit[0] == "text" || $libDirSplit[0] == "colour" || $libDirSplit[0] == "structure" || $libDirSplit[0] == "helper" || $libDirSplit[0] == "core"):
								echo '<label>none</label><input type="radio" name="wash-library['.$libDirSplit[0].']" value="none" checked="checked"/>';
							else:
								echo '<label>none</label><input type="radio" name="serenity-library['.$libDirSplit[0].']" value="none" checked="checked"/>';
							endif;

							echo "</div>";//close input group
						}
					}

					closedir($dirRoot);
				}


				?>

				<button id="river-submit" type="submit" name="submit" value="submit">Submit</button>
			</form>
		</article>
		<aside class="span4">
		</aside>
	</section>
</section>


<?php include('_inc/footer.php'); ?>

