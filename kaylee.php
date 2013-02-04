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
 * I removed these (leo)
 */

/*
 *
 * if you would like to run the less script and have a ie fallback with your own compiled css then set $useless to true
 *
 */

//check for existing useless at page level
if(!isset($useless)):
  $useless = true;
endif;
/*
 *
 * sets the meta tag for responsiveness and possibly other shit
 *
 */

//check for existing isResponsive at page level
if(!isset($isResponsive)):
  $isResponsive = false;
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
  //there is no colour-lib loaded
  //there is no core-lib loaded
  //there is no helper-lib loaded
  //there is no structure-lib loaded
  //there is no text-lib loaded
);
$serenityArr = array(
  //there is no base-lib loaded
  //there is no btn-lib loaded
  //there is no callout-lib loaded
  //there is no form-lib loaded
  //there is no modal-lib loaded
);
$kaylee = true;
$exportArr = array(
  'useless' => 'true',
  'isResponsive' => 'false',
  'pathToSerenity' => './assets/less/serenity.reaver.less',
  'pathToWash' => './assets/less/wash.reaver.less',
  'pathToCSS' => './assets/css/styles.css',
  'colour' => 'none',
  'core' => 'none',
  'helper' => 'none',
  'structure' => 'none',
  'text' => 'none',
  'base' => 'none',
  'btn' => 'none',
  'callout' => 'none',
  'form' => 'none',
  'modal' => 'none',
);

?>