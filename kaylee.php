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

//sets path to serenity
$pathToSerenity = './assets/less/serenity.less';
$pathToWash = './assets/less/wash.less';

//basic imports
//what do I pass and how do I determine selected arrays??
function createLibArrays() {
	$libArr = array(
		//lib name => lib path
		"core" => "../libs/core-lib/core-firefly.less",
		"btn" => "../libs/btn-lib/btn-firefly.less",
		"callout" => "../libs/callouts-lib/callouts-firefly.less",
	);
	return $libArr;
}

?>
