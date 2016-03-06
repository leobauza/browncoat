Browncoat 0.5 [codename: `Reconstruction`, status: `unstable`]
---

## About

Browncoat is a front-end/documentation/styleguide framework. Browncoat is self documented and provides examples about itself using [browsersync's](https://www.browsersync.io/) built-in static server to serve the documentation.

## Install

Install node module dependencies and run the documentation.

```bash
# Install dependencies
npm install

# Opens browser to localhost:3000 to view docs
npm run docs

# Opens browser to localhost:3000 to view app
npm run gulp
```

## Visual Regression Testing with Wraith

Visual regression testing has been added as of `version 0.4`. We are using Wraith, a screenshot comparison tool created by BBC news. You will need Wraith installed on your computer if you want to use it, you can find it and instructions on how to set it up on their [github page](https://github.com/BBC-News/wraith).

When you are ready to set a baseline for your project run:

`wraith history config`

What this does is create a baseline of shots based on the settings on the config file. You can learn more about the config file form [this post](http://njimedia.com) on the NJI Media Website. (todo: Write that post...)

After making your changes you may want to see how they have affected your entire project. To set this up you will need to run

`wraith latest config`

That will create a comparison between your history and your latest changes.

To view these you will need to set the shots folder as the root folder of a new virtual host and navigate to `yourhost.loc/gallery.html`

## versioning

```
<major>.<minor>.<patch>
```

## Statuses

**unstable** - Incomplete and untested.

**review** - Complete but untested.

**stable** - Complete and tested. Pending release/Released.

## Todo

- Testing with karma?
- Travis CI
- Separate docs into doc folder not web folder (plus gulp doc)
- Production gulp task
- Doc gulp task

## changelog

##### v0.5
- Major changes to scss structure
- Added webpack
- Added browsersync (no need for virtual host set up anymore)
- `gulp/` directory to `gulpfile.js/` directory
- Angular.js application for documentation
- Abandon PHP
- Rewrite of docs

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