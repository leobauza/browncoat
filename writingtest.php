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
  $title = 'a title';
endif;
//check for existing description at page level
if(!isset($description)):
  $description = 'a description';
endif;
//check for existing author at page level
if(!isset($author)):
  $author = 'an author';
endif;
$libArr = array(
  "core" => "/libs/core-lib/core-firefly.less";
  "modal" => "/libs/modal-lib/modal-firefly.less";
  "btn" => "/libs/btn-lib/btn-firefly.less";
);

?>