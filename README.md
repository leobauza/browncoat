Welcome to browncoat 0.0.0 (pre-alpha) testing something
==================


## about this project

### inspiration

I would never have considered creating any of this had I not come across [bootstrap](http://twitter.github.com/bootstrap/index.html) and [foundation](http://foundation.zurb.com/) which are much more complete frameworks as of January 31th 2012 and if you are looking for something like that you should check it out. They are pretty cool. 

### goals

- create front end frameworks that allows for fast project prototyping.
- built using PHP, LESS, HTML5, and jQuery.
- a self destructing outer shell. browncoat is an application that builds a framework from which to start, this means:
	- browncoat itself has no "core" 
	- browncoat has a default library built on the firefly theme (the default theme) but that isn't a core from which to work from. Rather just something to make the application have a look. (this default less and scripts destroy themselves after you've run the reavers file)
	- browncoat's application files (river, kaylee, simon, wiper, reavers) no longer exist in your project after you go through the browncoat workflow to create your framework.
	- browncoat itself isn't a framework, but a maker of frameworks, granted, if you pick the firefly theme and go through the workflow you will end up with the framework used to build the browncoat front end.
- has options to include great js libraries such as [isotope.js](http://isotope.metafizzy.co/) and [history.js]( https://github.com/balupton/History.js/) and has options for ajax content loading, etc.
- comes built it with useful snippets that can be added or deleted when choosing libraries. These snippets are associated with the js libraries they depend on (these are added to malcolm.js) 
- documentation that normal people can understand. Yet to define a "normal person".

### who is working on this
- browncoat will have a host of contributing designers for libraries, icons, etc. for example my bud [Jimmy 'Billy' French](http://billyfrench.com) 
- The fine people at [saforian](http://saforian.com) are constantly QA'ing this, even when they don't know that they are. I work there, and I start all my projects with where ever this is at.

### versioning
numbered as such:

```
<major>.<minor>.<patch>
```

## river (river.php)
River is the GUI for creating a kaylee file. River scans the browncoat project finds all the available libraries (LESS and js) and displays checkboxes. It also has options for whole themes instead of individual library mixings. 

## kaylee (kaylee.php)

kaylee is fuel for browncoat, it contains all the functions and variables that help create your end framework. kaylee is created by river, but if you want you can go into kaylee and write it out yourself or change any variables manually, add your own functions to customize or add functionality.

### available variables

``` PHP
$useless //use the less script or use an already compiled css file
$title //if $title var in page missing, use this title else browncoat default is used
$pageDescription //generic page description overridden at the page level
$isResponsive //add the meta tag for mobi...possibly do other stuff that I haven't decided yet
$pathToSerenity = './assets/less/serenity.reaver.less'; //sets path to serenity so wipers can wipe them and simon can write them
$pathToWash = './assets/less/wash.reaver.less'; //sets path to wash so wipers can wipe them and simon can write them
$pathToCSS = './assets/css/styles.css'; //set paths to core css file so wiper can wipe it and simon can write it
```
### libraries

libraries are placed in an associative array (meaning there is a key associated with a value), where the key is the library name and the value is the library path.

``` PHP
$libArr = array(
	//lib name => lib path
	"core" => "../libs/core-lib/core-firefly.less",
	"btn" => "../libs/btn-lib/btn-firefly.less",
	"callout" => "../libs/callouts-lib/callouts-firefly.less",
	"modal" => "../libs/modal-lib/modal-firefly.less",
	"yourLib" => "../libs/yourLib-lib/yourLib-yourLibThem.less",
);
```
> note: see library section for library naming conventions.

> note: if you look inside kaylee you will see that this is wrapped in a function "createLibArrays()" the plan here is to write something that can dynamically create the array with some information river writes into the creation of all the library arrays. Right now I can't even imagine what that looks like or how to accomplish this.

### more stuff?

> note: kaylee can be transferred from project to project. river will read a kaylee file and prove a gui with the libraries checked and all the other available libraries available.


## simon (simon.php)
simon runs a diagnostic on the installation. He outputs:

- What less libraries are on
- Is serenity.less written
- Is firefly.less written
- What js libraries are on
- other variables in kaylee?

simon has a control panel.

## reavers (reavers.php)
reavers destroy all files you no longer need after setting up your project to start working on it. Files and directories destroyed include:

- simon.php
- river.php
- img/browncoat_img/
- *-lib/
- any unused .js files
- header/footer (how are these handled? is there a final output of these without all the browncoat crap?)

## explain file structure

-

``` html
	<h1>some html</h1>
```
``` less
	.some {
		.nested {
			.less {
				color:@awesome;
			}
		}
	}
```

## explain standardarized markup

## libraries (details)
Libraries are an easy way to determine a starting point for a project & cut down the filler. The library arrays are in kaylee and are looped through by simon to write out your library imports to serenity, wash, or write out the scripts in your footer file. See kaylee section for an example of what it looks like.

> note: Until I write the front end piece to write out and rewrite kaylee, kaylee has to be updated manually (this piece is now called river and is still not available)

> note: libraries use standarized naming conventions. It is encouraged to maintain these when creating custom libraries: libraryType-lib/libraryType-libraryTheme.less/.libraryType-(description) (The actual classes in the less file are just a suggestion, the directory name and file name are mandatory) ie. btn-lib/btn-firefly.less/.btn-main 

### wash libraries

- the wash libraries always consists of 4 specific and mandatory libraries:
	- the text library
	- the colour library
	- the structure library (the grid)
	- and the helper library (css3, ie hacks, other helpers)

> note: You can bypass having these four libraries by just having a single core-library and setting these four to "none" 

### serenity libraries

- Serenity libraries can be as many as you want
- new ones can be created and added to the project
- there is no limit to how many serenity libraries there can be

> note: only libraries built with the correct naming conventions will be picked up by river. 

### How to integrate these?

Trying to find a way to bring these easily into Drupal.

## multiuser browncoat development

A problem I seem to run into a lot with source control when multiple people are working on the front end is conflicts in editing css. I want to create a standard way of multiuser development that limits the conflicts that could possibly occur. (obviously communication on what each person is working on is key.) I don't know what I am thinking here but I want a solution for this.

## get updates

- Beware
	- Updates are coming


