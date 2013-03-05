Welcome to browncoat 0.1.1
==================


## about this project
This is the first semi workable update. This version is totally unstable.

### instructions for 0.1.1 release

1. clone the repo
2. browncoat needs to be able to write to a couple files so when running locally be mindful of that. Some other good to knows:
	- the browncoat folder needs to be the root folder for browncoat (I think...) I set it up on a virtual host and on MAMP and haven't tried running it any other way
	- there's a lot of I don't know what I am doing going on, so that's good to know.
3. add a kaylee.php file...it can be empty or it can be the default.kaylee.php copy
4. point to yourlocalserver/river.php 
5. pick your settings
6. submit
7. hit run simon on the pop-up
8. you now have 75% of what browncoat will one day do...
	- The libraries you selected are written to your wash and serenity files.
	- your header is kinda written
	- your footer is sorta written
9. feel like this doesn't do a heck of a lot right now!

#### what is new
- sample page
- modal plugin

### inspiration

I would never have considered creating any of this had I not come across [bootstrap](http://twitter.github.com/bootstrap/index.html) and [foundation](http://foundation.zurb.com/) which are much more complete frameworks as of January 31th 2012 and if you are looking for something like that you should check it out. They are pretty cool. 

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
$pathToSerenity = './assets/less/serenity.less'; //sets path to serenity so wipers can wipe them and simon can write them
$pathToWash = './assets/less/wash.less'; //sets path to wash so wipers can wipe them and simon can write them
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

Reavers creates a folder containing your site that you can take away with you. This left behind:

- simon.php
- river.php
- img/browncoat_img/
- *-lib/
- any unused .js files
- header/footer (how are these handled? is there a final output of these without all the browncoat crap?)

## explain file structure

soon...

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


