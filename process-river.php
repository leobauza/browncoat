<?php

//TESTING


$kayleeIntro = "/*
 * RIVER WROTE TO KAYLEE!
 * Kaylee has all the variables that create the pages, decides what scripts to run, adds the desired libraries
 * also, she sets general meta tags, is a badass engineer, etc
 * 
 */
";

$titleVarIntro = "/*
 *
 * variables for title, what scripts to run, etc
 * I removed these (leo)
 */
";
$commentAboutArrays = "
/*
 *
 * find a better way to set these up.
 * I shouldn't have to write out each one but rather pass an array into the function and it spits out a workable array
 * 
 */
";
$uselessComment = "/*
 *
 * if you would like to run the less script and have a ie fallback with your own compiled css then set \$useless to true
 *
 */
";
$isResponsiveComment = "/*
 *
 * sets the meta tag for responsiveness and possibly other shit
 *
 */
";
$pathsComment = "/*
 *
 * Path vars get passed through to simon to set up configurations
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
			echo "<pre class=\"comment\">".$theString."</pre>\n";
		else:
			echo "<pre>".$theString."</pre>\n";
		endif;
	return $data;
}


//process submitted river form
if(isset($_POST)) {


	//introduction comment block to kaylee
	$theData = superPrint($kayleeIntro, true);

	//introduction to general
	$theData .= superPrint($titleVarIntro, true);
	//set general vars
	foreach ($_POST['general'] as $var => $value) {
		switch($var){
			case "useless":
			$theData .= superPrint($uselessComment,true);
			break;
			case "isResponsive":
			$theData .= superPrint($isResponsiveComment,true);
			break;
			default:
		}
		$theData .= superPrint("//check for existing $var at page level", true);
		//open if statement
		$theData .= superPrint("if(!isset(\$$var)):");
		//set var
		if($var == "useless" || $var == "isResponsive"):
			$theData .= superPrint("  \$$var = $value;");
		else:
			$addSlashVal = addslashes($value);
			$theData .= superPrint("  \$$var = '$addSlashVal';");
		endif;
		//close var
		$theData .= superPrint("endif;");
	}

	//comment about paths
	$theData .= superPrint($pathsComment, true);

	//set path vars
	foreach ($_POST['path'] as $var => $value) {
		//open if statement
		switch($var){
			case "pathToCSS":
			$theData .= superPrint("//sets path to css",true);
			break;
			case "pathToSerenity":
			$theData .= superPrint("//sets path to serenity",true);
			break;
			case "pathToWash":
			$theData .= superPrint("//sets path to wash",true);
			break;
			default:
		}
		//set var
		$theData .= superPrint("\$$var = '$value';");
	}


	$theData .= superPrint($commentAboutArrays, true);


	//start wash lib array
	$theData .= superPrint("\$washArr = array(");
	//write out the library array
	foreach ($_POST['wash-library'] as $lib => $theme) {
		if($theme != "none") {
			//use the info to write out how simon will want these
			$theme = '"'."../core-libs/$lib-lib/$lib-$theme.less".'"';
			$lib = '"'.$lib.'"';
			//add each row libraries
			$theData .= superPrint("  ".$lib . " => " . $theme .",");
		} else {
			$theData .= superPrint("  //there is no $lib-lib loaded");
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

	//add a kaylee is written var and an export array
	$theData.= superPrint("\$kaylee = true;");

	//declare array
	$theData.= superPrint("\$exportArr = array(");
	foreach($_POST["general"] as $key => $val){
		$addSlashVal = addslashes($val);
		$theData .= superPrint("  '$key' => '$addSlashVal',");
	}
	foreach($_POST["path"] as $key => $val){
		$theData .= superPrint("  '$key' => '$val',");
	}
	foreach($_POST["wash-library"] as $key => $val){
		$theData .= superPrint("  '$key' => '$val',");
	}
	foreach($_POST["serenity-library"] as $key => $val){
		$theData .= superPrint("  '$key' => '$val',");
	}

	//close array
	$theData .= superPrint(");");



/*
 *
 * writing to writingtest.php
 * 
 */
	$myFile = "./kaylee.php";
	
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