Welcome to browncoat 0.0.0 (pre-alpha)
==================


## about this project

### inspiration

I would never have considered creating any of this had I not come across [bootstrap](http://twitter.github.com/bootstrap/index.html) and [foundation](http://foundation.zurb.com/) which are much more complete frameworks as of January 31th 2012 and if you are looking for something like that you should check it out. They pretty cool. 

### goals

- a front end framework that allows for fast project prototyping.
- built using PHP, LESS, HTML5, and jQuery. 
- uses great existing libraries such as [isotope.js](http://isotope.metafizzy.co/) and [history.js]( https://github.com/balupton/History.js/) and has options for ajax content loading, etc.
- documentation that normal people can understand. I will at times be that asshole that says incomprehensible things. It is up to whoever asks the question to tell me I am being that asshole and I will do my best to explain. That said, at some point I will give up on anyone.
- more to come


``` javascript
//just reminding myself how to add code blocks...
```

### So who cares?
- browncoat will have a host of contributing designers for libraries, icons, etc. for example my bud [Jimmy 'Billy' French](http://billyfrench.com) 
- The fine people at [saforian](http://saforian.com) are constantly QA'ing this, even when they don't know that they are. I work there, and I start all my projects with where ever this is at.
- My mom thinks my project is cool...my dad thinks it's aight too.

### versioning
numbered as such:

```
<major>.<minor>.<patch>
```

## kaylee

### available varibles

``` PHP
$useless //use the less script or use an already compiled css file
$genericTitle //if $title var in page missing, use this title else browncoat default is used
$isResponsive //add the meta tag for mobi...possibly do other stuff that I haven't decided yet
```
### other stuff?

### more stuff?

> Note: you can totally do away with kaylee.php and fall back on defaults or manually enter your own. Perhaps I should have a separate version that doesn't use php at all? keeping it truly front end?




### this is the worst readme file right now

- I apologize


## simon (simon.php)
simon runs a diagnostic on the installation. He outputs:

- What less libraries are on
- Is serenity.less written
- Is firefly.less written
- What js libraries are on
- other variables in kaylee?

simon has a control panel.

## river (river.php)
river prepares the files to take with you to whatever project you are using them in. she outputs:

- a success message or failure message. 
- a link to the reavers

river backs ups all files that will be destroyed by the reavers.

## reavers (reavers.php)
reavers destroy all files you no longer need after setting up your project to start working on it. Files and directories destroyed include:

- simon.php
- river.php
- img/browncoat_img/
- *-lib/
- any unused .js files
- header/footer (how are these handled? is there a final output of these without all the browncoat crap?)

## Explain less structure?


- ??

	- ??

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

## libraries
Libraries are an easy way to determine a starting point for a project & cut down the filler

> Note: libraries use standarized naming conventions. It is encouraged to maintain these when creating custom libraries: libraryType-lib/libraryType-libraryTheme.less/.libraryType-(description) (The actual classes in the less file are just a suggestion, the directory name and file name are mandatory) ie. btn-lib/btn-firefly.less/.btn-main 

### How to integrate these?

Currently I have no clue how to create these libraries or how to integrate them. The idea though is to have a core styles.less file and then folders for different form styles or button styles etc depending on the project. All of these being dependent upon a core.less file that determines colors, font-sizes, etc. This seems crazy but I HATE having extraneous css even when prototyping.

## multiuser browncoat development

A problem I seem to run into a lot with source control when multiple people are working on the front end is conflicts in editing css. I want to create a standard way of multiuser development that limits the conflicts that could possibly occur. (obviously communication on what each person is working on is key.) I don't know what I am thinking here but I want a solution for this.

## get updates

- Beware
	- Updates are coming


