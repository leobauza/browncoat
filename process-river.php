<?php

//TESTING


$kayleeIntro = "/*
 *
 * Kaylee has all the variables that create the pages, decides what scripts to run, adds the desired libraries
 * also, she sets general meta tags, is a badass engineer, etc
 *
 */
";

$titleVarIntro = "/*
 *
 * variables for title, what scripts to run, etc
 *
 */
";

//adds to the data string and prints it out in case the file is not writtable for copy and paste
function addAndEcho($theString) {
	if(isset($theData)):
		$theData .= $theString."\n";
	else:
		$theData = $theString."\n";
	endif;
	echo "<pre>".$theString."</pre>";
	return $theData;
}


//process submitted river form
if(isset($_POST["submit"])) {

	//introduction comment block to kaylee
	$theData = addAndEcho($kayleeIntro);

	//start lib array
	$theData .= addAndEcho("\$libArr = array(");
	//write out the library array
	foreach ($_POST['library'] as $lib => $theme) {
		//use the info to write out how simon will want these
		$theme = '"'."/libs/$lib-lib/$lib-$theme.less".'"';
		$lib = '"'.$lib.'"';
		//add each row
		$theData .= addAndEcho($lib . " => " . $theme .";");
	}
	//close the lib array
	$theData.= addAndEcho(");");



	//writing to writingtest.php
	$myFile = "./writingtest.php";
	
	// $fh = fopen($myFile, 'r') or die("can't open file");
	// $theData = fread($fh, filesize($myFile));
	// fclose($fh);
	
	$fh = fopen($myFile, 'w') or die("can't open file");
	fwrite($fh, "<?php \n".$theData."\n?>");
	fclose($fh);


	//writing to kayleetest.php
	// $myFile = "./kayleetest.php";
	// 
	// $fh = fopen($myFile, 'r') or die("can't open file");
	// $theData = fread($fh, filesize($myFile));
	// $newData = str_replace("change", "title", $theData); 
	// fclose($fh);
	// 
	// $fh = fopen($myFile, 'w') or die("can't open file");
	// fwrite($fh, $newData . " and some more");
	// fclose($fh);

} else {
	echo "no \$_POST";
}

//$file = preg_replace('', '' $file);



?>