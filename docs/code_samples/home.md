### start
```bash
# You will nede node/npm to use browncoat
# Download and install from the nodejs website
# https://nodejs.org/en/

# Install dependencies
npm install
# This will take a few momenets while npm gets all the packages

# Run Gulp
npm run gulp
# This will take a few moments while gulp gets started
```
---
### boilerplate
```html
<!DOCTYPE html>
<!--[if lt IE 9]><html class="lt-ie9" lang="en"><![endif]-->
<!--[if IE 9]><html class="ie9" lang="en"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html lang="en"><!--<![endif]-->
<head>
  <meta charset="utf-8">
  <title>Your Title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="a website description">
  <meta name="author" content="the author">

  <!-- styles -->
  <link rel="stylesheet" href="/assets/css/styles.css" type="text/css" media="screen" charset="utf-8">

  <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
  <!--[if lt IE 9]>
    <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->

  <!-- fav and touch icons -->
  <link rel="shortcut icon" href="/assets/img/favicon.ico" type="image/x-icon">
</head>
<body>
  ...
  <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="/assets/js/main.js"></script> -->
  <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>
  <script src="/assets/js/ng-main.js"></script>
</body>
</html>
```
---
### gulp
```bash
# Default gulp task
npm run gulp
## Watches:
# /src/scss
# /src/js
# *.html in /web
## Compiles to:
# /assets/css
# /assets/js
```
---
### structure
```bash
# Contains all gulp taks
/gulpfile.js

# Dependencies are broken up in two parts:
# - Dependencies for gulp (devDependencies on package.json)
# - Dependencies for application or website (dependencies on package.json)
# This folder is gitignored and is created by running npm install.
/node_modules

# Where all css/js work is done. Folders inside the src directory are
# compiled into the web/assets/ directory.
# Also contains the icons folder that is used to create sprites.
/src

# The root of the application. Contains the assets compiled for src files,
# code samples files, data files, templates, and the index.
/web

# Contains files related to visual regression testing.
/wraith

# For use with git version control.
.gitignore

# The MIT License (MIT)
LICENSE

# File that specifies what modules will be downloaded into node_modules.
package.json

# Readme file for github project.
README.md
```