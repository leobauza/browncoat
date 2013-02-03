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
$commentAboutArrays = "/*
 *
 * find a better way to set these up.
 * I shouldn't have to write out each one but rather pass an array into the function and it spits out a workable array
 * 
 */
";

//adds to the data string and prints it out in case the file is not writtable for copy and paste
function superPrint($theString,$comment = false) {

	if(isset($data)):
		$data .= $theString."\n";
	else:
		$data = $theString."\n";
	endif;
		if($comment == true):
			echo "<pre class=\"comment\">".$theString."</pre>";
		else:
			echo "<pre>".$theString."</pre>";
		endif;
	return $data;
}


//process submitted river form
if(isset($_POST["submit"])) {


	//introduction comment block to kaylee
	$theData = superPrint($kayleeIntro, true);

	//introduction to general
	$theData .= superPrint($titleVarIntro, true);

	foreach ($_POST['general'] as $var => $value) {
		//open if statement
		$theData .= superPrint("//check for existing $var at page level", true);
		$theData .= superPrint("if(!isset(\$$var)):");
		//set var
		$theData .= superPrint("  \$$var = '$value';");
		//close var
		$theData .= superPrint("endif;");
	}

	$theData .= superPrint($commentAboutArrays, true);


	//start wash lib array
	$theData .= superPrint("\$washArr = array(");
	//write out the library array
	foreach ($_POST['wash-library'] as $lib => $theme) {
		if($theme != "none") {
			//use the info to write out how simon will want these
			$theme = '"'."../libs/$lib-lib/$lib-$theme.less".'"';
			$lib = '"'.$lib.'"';
			//add each row libraries
			$theData .= superPrint("  ".$lib . " => " . $theme .",");
		} else {
			$theData .= superPrint("&nbsp;//there is no $lib-lib loaded");
		}
	}
	//close the lib array
	$theData.= superPrint(");");



	//start serenity lib array
	$theData .= superPrint("\$serenityArr = array(");
	//write out the library array
	foreach ($_POST['serenity-library'] as $lib => $theme) {
		if($theme != "none") {
			//use the info to write out how simon will want these
			$theme = '"'."../libs/$lib-lib/$lib-$theme.less".'"';
			$lib = '"'.$lib.'"';
			//add each row of libraries
			$theData .= superPrint("  ".$lib . " => " . $theme .",");
		} else {
			$theData .= superPrint("  //there is no $lib-lib loaded", true);
		}
	}
	//close the lib array
	$theData.= superPrint(");");



/*
 *
 * writing to writingtest.php
 * 
 */
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

<style>
	.comment {
		background:#ffdd00;
	}
</style>
