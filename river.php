<?php
//some possible page variables
$isRiver = true;
$title = "river"
?>

<?php include('_inc/header.php'); ?> 

<section class="container">
	<section class="row-fluid">
		<article class="span8">
			<form id="river" action="processors/process-river.php" method="post">
				<!-- <div class="input-group">
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
				</div> -->

				<section class="form-group">
					<h2>Master Setting</h2>

					<h3>Dev Settings</h3>
					<div class="input-group">
						<h5>Use LESS.js</h5>
						<div class="radio-group horizontal">
							<input type="radio" name="general[useless]" value="true"></input>
							<label>true</label>
						</div>
						<div class="radio-group horizontal">
							<input type="radio" name="general[useless]" value="false" checked="checked"></input>
							<label>false</label>
						</div>
					</div>

					<h3>Other <code>&lt;head&gt;</code> settings</h3>
					<div class="input-group">
						<h5>Add Responsive Meta Tag</h5>
						<div class="radio-group horizontal">
							<input type="radio" name="general[isResponsive]" value="true" checked="checked"></input>
							<label>true</label>
						</div>
						<div class="radio-group horizontal">
							<input type="radio" name="general[isResponsive]" value="false"></input>
							<label>false</label>
						</div>
					</div>

					<h3>Master Theme Btns</h3>
					<a href="#" data-theme="firefly" class="btn-main">check all firefly</a>
					<a href="#" data-theme="test" class="btn-main">check all test</a>

				</section>

				<section class="form-group">
					<h2>Advanced Settings?</h2>
					<div class="input-group">
						<h3>serenity path</h3>
						<input type="text" name="path[pathToSerenity]" value="./assets/less/serenity.less"></input>
					</div>
					<div class="input-group">
						<h3>wash path</h3>
						<input type="text" name="path[pathToWash]" value="./assets/less/wash.less"></input>
					</div>
					<div class="input-group">
						<h3>css path</h3>
						<input type="text" name="path[pathToCSS]" value="./assets/css/styles.css"></input>
					</div>
				</section>
				<?php
					//create wash library btns
				?>
				<section class="form-group">
					<h2>Core Libraries (wash)</h2>
					<?php
					//loop through the core-libs directory to extract all the less libraries
					if ($dirRoot = opendir('./assets/core-libs/')) {
						//echo "Directory handle: $handle\n";
						//echo "Entries:\n";

						//looop and add all the files in the libs directory
						while (false !== ($libDir = readdir($dirRoot))) {
							if ($libDir != "." && $libDir != ".." && $libDir != ".DS_Store") {
								//echo "<h2>$entry contains:</h2>\n";
								$libDirSplit = explode("-",$libDir); 
								echo "<div class='input-group'>";//open input group
								echo "<h3>$libDirSplit[0] library</h3>";
									if ($dirSubRoot = opendir('./assets/core-libs/'.$libDir)) {
									while (false !== ($libSubDir = readdir($dirSubRoot))) {
										if($libSubDir != "." && $libSubDir != ".."){
											$splitLibSubDir = explode(".", $libSubDir);
											$lib_theme = explode("-", $splitLibSubDir[0]);
											$lib = $lib_theme[0];
											$theme = $lib_theme[1];
											echo "<div class='radio-group horizontal'>";
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
									echo '<div class="radio-group horizontal"><input type="radio" name="wash-library['.$libDirSplit[0].']" value="none" checked="checked"/><label>none</label></div>';
								else:
									echo '<div class="radio-group horizontal"><input type="radio" name="serenity-library['.$libDirSplit[0].']" value="none" checked="checked"/><label>none</label></div>';
								endif;

								echo "</div>";//close input group
							}
						}

						closedir($dirRoot);
					}
					?>
				</section>

				<?php
					//create serenity library btns
				?>
				<section class="form-group">
					<h2>Display Libraries (serenity)</h2>
					<?php
					//loop through the libs directory to extract all the less libraries
					if ($dirRoot = opendir('./assets/libs/')) {
						//echo "Directory handle: $handle\n";
						//echo "Entries:\n";

						//looop and add all the files in the libs directory
						while (false !== ($libDir = readdir($dirRoot))) {
							if ($libDir != "." && $libDir != ".." && $libDir != ".DS_Store") {
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
											echo "<div class='radio-group horizontal'>";
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
									echo '<div class="radio-group horizontal"><input type="radio" name="wash-library['.$libDirSplit[0].']" value="none" checked="checked"/><label>none</label></div>';
								else:
									echo '<div class="radio-group horizontal"><input type="radio" name="serenity-library['.$libDirSplit[0].']" value="none" checked="checked"/><label>none</label></div>';
								endif;

								echo "</div>";//close input group
							}
						}

						closedir($dirRoot);
					}
					?>
				</section>

				<?php
					//create jQuery library btns
				?>
				<section class="form-group">
					<h2>jQuery Libraries</h2>
					<?php
					//loop through the libs directory to extract all the less libraries
					if ($dirRoot = opendir('./assets/js-libs/')) {
						//echo "Directory handle: $handle\n";
						//echo "Entries:\n";

						//looop and add all the files in the libs directory
						while (false !== ($libDir = readdir($dirRoot))) {
							if ($libDir != "." && $libDir != ".." && $libDir != ".DS_Store") {
								//echo "<h2>$entry contains:</h2>\n";
								$libDirSplit = explode("-",$libDir); 
								echo "<div class='input-group'>";//open input group
								echo "<h3>$libDirSplit[0] library</h3>";
									if ($dirSubRoot = opendir('./assets/js-libs/'.$libDir)) {
									while (false !== ($libSubDir = readdir($dirSubRoot))) {
										if($libSubDir != "." && $libSubDir != ".."){
											$splitLibSubDir = explode(".", $libSubDir);
											$lib = $splitLibSubDir[0];
											$theme = $splitLibSubDir[1];
											echo "<div class='radio-group horizontal'>";
												echo '<input type="radio" name="js-library['.$lib.']" value="'.$theme.'" />';
												echo "<label>$theme</label>";
											echo "</div>"; //close the radio group
										}
									}
									closedir($dirSubRoot);
								}
									echo '<div class="radio-group horizontal"><input type="radio" name="js-library['.$libDirSplit[0].']" value="none" checked="checked"/><label>none</label></div>';
									
								echo "</div>";//close input group
							}
						}

						closedir($dirRoot);
					}
					?>
				</section>







				<button id="river-submit" data-ajax="river" class="btn-gray large" type="submit" name="submit" value="submit">Submit</button>
			</form>
		</article>
		<aside class="span4">
			<?php 
			if(isset($kaylee) && $kaylee == true):
			?>
			<h5>looks like kaylee is already written</h5>
			<a href="#" data-name="all" class="btn-main large">import all</a>
			<?php
			//find a way to import
			foreach($exportArr as $key => $value){
				if(!empty($value)):
					$addSlashValue = addslashes($value);
					$stripSlashValue = stripslashes($value);
					
					echo "<a href='#' class=\"btn-gray large\" data-name=\"$key\" data-value=\"$addSlashValue\">set $key to $stripSlashValue</a>";
				endif;
			}
			
			else:
			?>
			<h5>kaylee is set to the default or doesn't exist</h5>
			<?php
			endif;
			?>
		</aside>
	</section>
</section>


<?php include('_inc/footer.php'); ?>

