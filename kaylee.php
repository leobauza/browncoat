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

//basic imports
$core = '@import "core";';
$btn_lib = '@import "/btn-lib/btn-firefly.less";';
$callout_lib = '@import "/callouts-lib/callouts-firefly.less";';

?>
