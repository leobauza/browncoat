<?php 
/*
 * RIVER WROTE TO KAYLEE!
 * Kaylee has all the variables that create the pages, decides what scripts to run, adds the desired libraries
 * also, she sets general meta tags, is a badass engineer, etc
 *
 */

/*
 *
 * variables for title, what scripts to run, etc
 *
 */

//check for existing title at page level
if(!isset($title)):
  $title = 'My title';
endif;
//check for existing description at page level
if(!isset($description)):
  $description = 'description';
endif;
//check for existing author at page level
if(!isset($author)):
  $author = 'leonardo';
endif;
/*
 *
 * if you would like to run the less script and have a ie fallback with your own compiled css then set $useless to true
 *
 */

//check for existing useless at page level
if(!isset($useless)):
  $useless = false;
endif;
/*
 *
 * sets the meta tag for responsiveness and possibly other shit
 *
 */

//check for existing isResponsive at page level
if(!isset($isResponsive)):
  $isResponsive = true;
endif;
/*
 *
 * Path vars get passed through to simon to set up configurations
 * 
 */

//sets path to serenity
$pathToSerenity = './assets/less/serenity.reaver.less';
//sets path to wash
$pathToWash = './assets/less/wash.reaver.less';
//sets path to css
$pathToCSS = './assets/css/styles.css';

/*
 *
 * find a better way to set these up.
 * I shouldn't have to write out each one but rather pass an array into the function and it spits out a workable array
 * 
 */

$washArr = array(
  "core" => "../libs/core-lib/core-firefly.less",
);
$serenityArr = array(
  "btn" => "../libs/btn-lib/btn-firefly.less",
  "callouts" => "../libs/callouts-lib/callouts-firefly.less",
  "modal" => "../libs/modal-lib/modal-firefly.less",
);

?>