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
$pathToSerenity = './assets/less/serenity.less';
//sets path to wash
$pathToWash = './assets/less/wash.less';
//sets path to css
$pathToCSS = './assets/css/styles.css';

/*
 *
 * find a better way to set these up.
 * I shouldn't have to write out each one but rather pass an array into the function and it spits out a workable array
 * 
 */

$washArr = array(
  "colour" => "../libs/colour-lib/colour-firefly.less",
  "core" => "../libs/core-lib/core-firefly.less",
  "helper" => "../libs/helper-lib/helper-firefly.less",
  "structure" => "../libs/structure-lib/structure-firefly.less",
  "text" => "../libs/text-lib/text-firefly.less",
);
$serenityArr = array(
  "base" => "../libs/base-lib/base-firefly.less",
  "btn" => "../libs/btn-lib/btn-firefly.less",
  "callout" => "../libs/callout-lib/callout-firefly.less",
  "form" => "../libs/form-lib/form-firefly.less",
  "modal" => "../libs/modal-lib/modal-firefly.less",
);
$kaylee = false;
$exportArr = array(
  'useless' => 'false',
  'isResponsive' => 'true',
  'pathToSerenity' => './assets/less/serenity.reaver.less',
  'pathToWash' => './assets/less/wash.less',
  'pathToCSS' => './assets/css/styles.css',
  'colour' => 'firefly',
  'core' => 'firefly',
  'helper' => 'firefly',
  'structure' => 'firefly',
  'text' => 'firefly',
  'base' => 'firefly',
  'btn' => 'firefly',
  'callout' => 'firefly',
  'form' => 'firefly',
  'modal' => 'firefly',
);

?>