<?php

//some possible page variables
$title = "river"; //this is backed up by a generic title set in kaylee.php or a browncoat generic title
$isRiver = true;
?>

<?php include('_inc/header.php'); ?> 

<section class="container">
	<section class="row-fluid">
		<article class="span8">
			<form action="/process-river.php" method="post">
				<div class="input-group">
					<h3>Title</h3>
					<input type="text" name="general[title]" value=""></input>
				</div>

				<div class="input-group">
					<h3>Description</h3>
					<input type="text" name="general[description]" value=""></input>
				</div>

				<div class="input-group">
					<h3>Author</h3>
					<input type="text" name="general[author]" value=""></input>
				</div>

				<div class="input-group">
					<h3>Use LESS.js</h3>
					<div class="radio-group">
						<input type="radio" name="general[useless]" value="true"></input>
						<label>true</label>
					</div>
					<div class="radio-group">
						<input type="radio" name="general[useless]" value="false" checked="checked"></input>
						<label>false</label>
					</div>
				</div>

				<div class="input-group">
					<h3>Add Responsive Meta Tag</h3>
					<div class="radio-group">
						<input type="radio" name="general[isResponsive]" value="true" checked="checked"></input>
						<label>true</label>
					</div>
					<div class="radio-group">
						<input type="radio" name="general[isResponsive]" value="false"></input>
						<label>false</label>
					</div>
				</div>

				<div class="input-group">
					<h3>serenity path</h3>
					<input type="text" name="path[pathToSerenity]" value="./assets/less/serenity.reaver.less"></input>
				</div>

				<div class="input-group">
					<h3>wash path</h3>
					<input type="text" name="path[pathToWash]" value="./assets/less/wash.reaver.less"></input>
				</div>

				<div class="input-group">
					<h3>css path</h3>
					<input type="text" name="path[pathToCSS]" value="./assets/css/styles.css"></input>
				</div>


				<?php
				//loop through the libs director to extract all the less libraries
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
										echo "<div class='radio-group'>";
										if($lib == "text" || $lib == "colour" || $lib == "structure" || $lib == "helper" || $lib == "core"):
											//the four libraries that belong to wash that make up the core of less and color in both spellings just couse
											echo '<input type="radio" name="wash-library['.$lib.']" value="'.$theme.'" />';
										else:
											//otherwise add to serenity arr
											echo '<input type="radio" name="serenity-library['.$lib.']" value="'.$theme.'" />';
										endif;
										echo "<label>$theme</label>";
										echo "</div>"; //close the radio group
									}
								}
								closedir($dirSubRoot);
							}
							if($libDirSplit[0] == "text" || $libDirSplit[0] == "colour" || $libDirSplit[0] == "structure" || $libDirSplit[0] == "helper" || $libDirSplit[0] == "core"):
								echo '<div class="radio-group"><input type="radio" name="wash-library['.$libDirSplit[0].']" value="none" checked="checked"/><label>none</label></div>';
							else:
								echo '<div class="radio-group"><input type="radio" name="serenity-library['.$libDirSplit[0].']" value="none" checked="checked"/><label>none</label></div>';
							endif;

							echo "</div>";//close input group
						}
					}

					closedir($dirRoot);
				}
				?>

				<button id="river-submit" class="btn-gray large" type="submit" name="submit" value="submit">Submit</button>
			</form>
		</article>
		<aside class="span4">
		</aside>
	</section>
</section>


<?php include('_inc/footer.php'); ?>

