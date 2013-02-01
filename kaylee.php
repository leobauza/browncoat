<?php
/*
 *
 * Kaylee has all the variables that create the pages, decides what scripts to run, adds the desired libraries
 * also, she sets general meta tags, is a badass engineer, etc
 *
 */

/*
 *
 * variables for title, what scripts to run, etc
 *
 */
$genericTitle = "default title";
$pageDescription = "default description";

/*
 *
 * if you would like to run the less script and have a ie fallback with your own compiled css then uncomment $useless
 *
 */
//$useless = true;


/*
 *
 * sets the meta tag for responsiveness and possibly other shit
 *
 */
$isResponsive = true;


/*
 *
 * Library vars and path to serenity.less 
 * They get passed through to simon to set up configurations
 * 
 */

//sets path to core less files
$pathToSerenity = './assets/less/serenity.reaver.less';
$pathToWash = './assets/less/wash.reaver.less';

//set paths to core css file
$pathToCSS = './assets/css/styles.css';
//basic imports
//what do I pass and how do I determine selected arrays??
function createLibArrays() {

	//the wash lib arr contains, so far as I've thought out, (text-lib, structure-lib, js specific libs, colours-lib)
	
	//the serenity lib arr contains, so far as I've thought out, (btn-lib, callout-lib, form-lib, list-lib)

	$libArr = array(
		//lib name => lib path
		"core" => "../libs/core-lib/core-firefly.less",
		"btn" => "../libs/btn-lib/btn-firefly.less",
		"callout" => "../libs/callouts-lib/callouts-firefly.less",
	);
	return $libArr;
}
//serenity arr pass the lib folder to somehow dynamically generate this array or what? i dunno
$serenityArr = createLibArrays();
//wash arr pass the lib folder to somehow dynamically generate this array or what? i dunno
$washArr = createLibArrays();

?>
