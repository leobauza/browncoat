<?php

/* 
/ 
/ Kaylee Frye is the ships engineer and thus the configuration file is named after her
/
*/

//set some general variables
$genericTitle = "default title";

//if you would like to run the less script and have a ie fallback with your own compiled css then uncomment next line
//$useless = true;

//sets the meta tag for responsiveness and possibly other shit
$isResponsive = true;

//Writing serenity.less import
//this writes a master less file with the libraries specified imported so they can then be imported into styles.less
//which is probably a horrid idea but we will see
//this is extremely dumb right now...sorry...because you have to load the page and then come back and
//save the less file and then turn off this function so it doesn't keep writing a new one every time...
//and then there is the permissions problem with it...

$pathToSerenity = './assets/less/serenity.less';

$core = '@import "core";';
$btn_lib = '@import "/btn-lib/btn-classic.less";';

?>
