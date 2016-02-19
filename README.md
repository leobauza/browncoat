Welcome to browncoat 0.5 (codename: `Reconstruction`)
==================

## about this project
Browncoat is a front end framework. It uses scss as a css preprocessor, browserify and flyweight for modularized javascript, and gulp as a task runner. [todo: add links]

## Visual Regression Testing with Wraith

Visual regression testing has been added as of `version 0.4`. We are using Wraith, a screenshot comparison tool created by BBC news. You will need Wraith installed on your computer if you want to use it, you can find it and instructions on how to set it up on their [github page](https://github.com/BBC-News/wraith).

When you are ready to set a baseline for your project run:

`wraith history config`

What this does is create a baseline of shots based on the settings on the config file. You can learn more about the config file form [this post](http://njimedia.com) on the NJI Media Website. (todo: Write that post...)

After making your changes you may want to see how they have affected your entire project. To set this up you will need to run

`wraith latest config`

That will create a comparison between your history and your latest changes.

To view these you will need to set the shots folder as the root folder of a new virtual host and navigate to `yourhost.loc/gallery.html`

## Organization

The `src` directory compiles into the `web` directory. The `src` directory is broken up into three directories:

#### js

Contains all the javascript. Flyweight, and other libraries go inside the `libs` directory. All flyweight modules go in the `modules` directory. All entry point files are directly under the `js` directory. One entry point is added by default `app.js`. There is a sample flyweight module in the `modules` directory. See gulp `browserify` task. [todo: link to this task on the readme]

#### scss

todo! Now with new atomic structure!

#### icons

Contains images that will be combined into a single svg sprite with a png backup. See gulp `sprite` task. [todo: link to this task on the readme]


#### GULP

Note: We are using an old version of browserify in our gulp tasks so that we can use vinyl-transform instead of vinyl-source-stream in an undefined way. Why? Because I am too lazy right now to change my code to use vinyl-source-stream and glob. (see: https://wehavefaces.net/gulp-browserify-the-gulp-y-way-bb359b3f9623#.wtqf933fv)

#### browserify

See browserify documentation.

### instructions to see a front page

1. clone the repo
2. You will need something like MAMP or WAMP or AAMP to get it up and running. Alternative if you know how to set up your own virtual host using your machines built in apache server and php you may do that. Future versions will run on node.js with express, so more detailed instructions will be available then.
3. Navigate to your localhost.

### templates and views
- There is one template that is basically an html wrapper localated at templates/template.php
- All the pages are set up as views with subviews in the views/ directory. ie. to edit the homepage you would open the file at `views/_home.php` and edit that.


### versioning
numbered as such:

```
<major>.<minor>.<patch>
```

### Code
All the code and conventions will be made available as github gists so that anyone can comment on any individual piece of code. My hope is this will make it easier for me to update different parts of the framework. While having issues on github for browncoat as a whole is useful, something like changing a class name on the forms prettify library might get lost.
Of course, that may end up working horribly, but it also has the side-effect of giving me an easier way to include embedded code for easier copying and pasting in the docs.

### get updates
TODO!!
I am working on an easier go at installing browncoat using a combination of grunt and bower to set up a project. Until then forking the repository is all I've got for you though.


### changelog (highlights)

##### v0.5
- Edits to scss files

##### v0.4
- Added Visual Regression Testing with Wraith (responsive screenshot comparisons)
- Reorganized CSS to follow atomic-like structure
- Added IE compatibility for `gulp sprite`

##### v0.3
- Added gulp*
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

