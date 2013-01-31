<?php

//some possible page variables
$title = "simon diagnostic"; //this is backed up by a generic title set in kaylee.php or a browncoat generic title

?>

<?php include('_inc/header.php'); ?> 

<section class="container">
	<h1>Browncoat Config</h1>
	<h3>Open this file for kaylee to run and create your initial template</h3>
	<p><strong></strong> a lightweight front end framework built partially on php and less. Rather than having a huge css file Browncoat will use libraries than can be included or excluded by means of a configuration file (kaylee.php) somehow. Browncoat is in its infancy, or rather even before that, so fucking tear it apart do with it as you wish and suggest anything you want.</p>

<?php

//this is the path to your serenity file that is set in kaylee
$filename = $pathToSerenity;

//create the @import
$imports = "//the core include";
$imports .= "\n".$core;
$imports .= "\n"."//the btn library";
$imports .= "\n".$btn_lib;

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
			echo "<strong>Cannot write to file ($filename)</strong>";
			exit;
		}
		echo "<p><strong>serenity.less has been written.</strong> to rewrite it delete its contents and refresh this page</p>";
		fclose($handle);
	} else {
		echo "<strong>The file $filename is not writable</strong>";
	}
} else {
	echo "<strong>serenity.less is already written</strong>";
}

?>

<a href="/index.php" class="btn-main small">to index</a>

</section>


<?php include('_inc/footer.php'); ?>
