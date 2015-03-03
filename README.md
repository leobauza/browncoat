Welcome to browncoat 0.3 (codename: `gulp magic`)
==================

## about this project
Browncoat is a front end framework. It uses scss as a css preprocessor, browserify and flyweight for modularized javascript, and gulp as a task runner. [todo: add links]

## Organization

The `src` directory compiles into the `web` directory. The `src` directory is broken up into three directories:

#### js

Contains all the javascript. Flyweight, and other libraries go inside the `libs` directory. All flyweight modules go in the `modules` directory. All entry point files are directly under the `js` directory. One entry point is added by default `app.js`. There is a sample flyweight module in the `modules` directory. See gulp `browserify` task. [todo: link to this task on the readme]

#### scss
  


#### icons

Contains images that will be combined into a single svg sprite with a png backup. See gulp `sprite` task. [todo: link to this task on the readme]



using GULP

Using Browserify

SCSS

### instructions to see a front page

1. clone the repo
2. You will need something like MAMP or WAMP or AAMP to get it up and running. Alternative if you know how to set up your own virtual host using your machines built in apache server and php you may do that. Future versions will run on node.js with express, so more detailed instructions will be available then.
3. Navigate to your localhost.

### templates and views
- There is one template that is basically an html wrapper localated at templates/template.php
- All the pages are set up as views with subviews in the views/ directory. ie. to edit the homepage you would open the file at `views/_home.php` and edit that.

### scss

- Found in the assets/scss directory
- There are 3 main files:
  1. `\_app.scss`: this file combines all the files inside the assets/scss/app folder. These files are app specific and make up the libraries included with browncoat.
  2. `\_browncoat.scss`: this file combines all the files inside the assets/scss/browncoat directory. These files are all the bases and variables that form the core of browncoat.
  3. `\_styles.scss`: this file combines the above to files and is the single file that needs to be compiled.

> note: inside the browncoat/ directory there are two folders bases and normalizers. By "browncoat convention" the bases folder are meant for variables, placeholders, and mixins, meaning none of those files should output any real CSS.

### compiling scss
You will need to install [sass](http://sass-lang.com/)  on your machine to compile the files. you can then run:

```
cd path/to/browncoat/root

sass --watch assets/scss/styles.scss:assets/css/styles.css
```

### js (coffeescript)
Found in the assets/js/ directory. Documentation coming soon. For now: It uses require.js and there is a build file for use with r.js in the assets/build/ directory. The assets/vendor/ directory contains some plugins. And the assets/boilerplates/ directory has some boilerplates for jQuery plugins.

> note: All js is written in coffeescript and the coffeescript plugin for require.js takes care of compiling it.


### versioning
numbered as such:

```
<major>.<minor>.<patch>
```

The underlying structure has changed drastically since v0.1.9 and will be changing again. It will change to have an express backend and do some task management with grunt and later move to yeoman.

### Code
All the code and conventions will be made available as github gists so that anyone can comment on any individual piece of code. My hope is this will make it easier for me to update different parts of the framework. While having issues on github for browncoat as a whole is useful, something like changing a class name on the forms prettify library might get lost.
Of course, that may end up working horribly, but it also has the side-effect of giving me an easier way to include embedded code for easier copying and pasting in the docs.

### get updates
I am working on an easier go at installing browncoat using a combination of grunt and bower to set up a project. Until then forking the repository is all I've got for you though.


### changelog (highlights)

##### v0.3
- Removed grunt in favour of gulp*
- Fixed up some scss
- %row uses %group to have all rows properly clearfix automatically

* This is the `gulp-starter`. We will be breaking out gulp-starter into its own repo and using it as a submodule here with a `config.default.js` commited and a `config.js` .gitignored

##### v0.2.3
- Documentation for CSS section
- Documentation patterns defined
- New %row class (scratch that, this should be a @mixin)
- Reorganized all SCSS, revised folder structure, and revised some rules
- Added Gruntfile

##### v0.2.2
- Javascript clean up
- Better definition of how javascript should be structured for prototyping
- Restructure assets/js directory
- Added comments in all js to explain things better
- Add new form styles
- Add code to documentation, revamp all css section documentation.

##### v0.2.1
- Add change log to readme
- Add license

##### v0.2.0
- Slim php framework added (templates and views)
- Moved from less to scss
- Added require.js to structure js
- Added r.js for build

##### v0.1.9
- The first "version"


### Plan

