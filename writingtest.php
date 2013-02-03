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

//check for existing title at page level
if(!isset($title)):
  $title = '';
endif;
//check for existing description at page level
if(!isset($description)):
  $description = '';
endif;
//check for existing author at page level
if(!isset($author)):
  $author = '';
endif;
/*
 *
 * find a better way to set these up.
 * I shouldn't have to write out each one but rather pass an array into the function and it spits out a workable array
 * 
 */

$washArr = array(
  "core" => "../libs/core-lib/core-firefly.less";
);
$serenityArr = array(
  "modal" => "../libs/modal-lib/modal-firefly.less";
  "btn" => "../libs/btn-lib/btn-firefly.less";
);

?>