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
function superPrint($theString) {
	if(isset($data)):
		$data .= $theString."\n";
	else:
		$data = $theString."\n";
	endif;
	echo "<pre>".$theString."</pre>";
	return $data;
}


//process submitted river form
if(isset($_POST["submit"])) {


	//introduction comment block to kaylee
	$theData = superPrint($kayleeIntro);

	//introduction to
	$theData .= superPrint($titleVarIntro);

	foreach ($_POST['general'] as $var => $value) {
		//open if statement
		$theData .= superPrint("//check for existing $var at page level");
		$theData .= superPrint("if(!isset(\$$var)):");
		//set var
		$theData .= superPrint("  \$$var = '$value';");
		//close var
		$theData .= superPrint("endif;");
	}




	//start lib array
	$theData .= superPrint("\$libArr = array(");
	//write out the library array
	foreach ($_POST['library'] as $lib => $theme) {
		if($theme != "none") {
			//use the info to write out how simon will want these
			$theme = '"'."/libs/$lib-lib/$lib-$theme.less".'"';
			$lib = '"'.$lib.'"';
			//add each row
			$theData .= superPrint("  ".$lib . " => " . $theme .";");
		} else {
			$theData .= superPrint("&nbsp;//there is no $lib-lib loaded");
		}
	}
	//close the lib array
	$theData.= superPrint(");");



	//writing to writingtest.php
	$myFile = "./writingtest.php";
	
	// $fh = fopen($myFile, 'r') or die("can't open file");
	// $theData = fread($fh, filesize($myFile));
	// fclose($fh);
	
	$fh = fopen($myFile, 'w') or die("can't open file");
	fwrite($fh, "<?php \n".$theData."\n?>");
	fclose($fh);



} else {
	echo "no \$_POST";
}

//in a function so i can collapse it
function oldStuff() {
	//$file = preg_replace('', '' $file);

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
}



?>