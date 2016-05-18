### start
```bash
# You will nede node/npm to use browncoat
# Download and install from the nodejs website
# https://nodejs.org/en/

# Install dependencies
npm install
# This will take a few momenets while npm gets all the packages

# Run Gulp to view docs
npm run docs
# This will take a few moments while gulp gets started
# The javascript for the docs is compiled from /src/js/docs.js
# The CSS for the app is compiled from /src/scss/styles.scss (matches the app)

# Run Gulp to view app
npm run gulp
# This will take a few moments while gulp gets started
# By default there app will have "Hello World" in an h1 tag
# The javascript for the app is compiled from /src/js/app.js
# The CSS for the app is compiled from /src/scss/styles.scss (matches the docs)
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
# /web/assets/css
# /web/assets/js

# Default gulp task
npm run docs
## Watches:
# /src/scss
# /src/js
# *.html in /docs
# *.md in /docs
# *.json in /docs
## Compiles to:
# /docs/assets/css
# /docs/assets/js

```
---
### structure
```bash
# Contains all gulp tasks
/gulpfile.js

# Dependencies for gulp (devDependencies in package.json)
# Dependencies for application/website (dependencies in package.json)
# Folder git ignored and created by running npm install
/node_modules

# All css and js development MUST be done inside this folder.
# Folders inside the src directory are compiled into /web and /docs
/src

# Root of the application
# Contains /assets with compiled css and js code
/web

# Root of the documentation
# Contains /assets with compiled css and js code
# Contains /code_samples with .md files used to generate docs
# Contains /data with .json files used to generate docs
# Contains /ng-templates with docs templates used by docs.js
/docs

# Contains files related to visual regression testing
/wraith

# Generic git ignore file
.gitignore

# MIT License (MIT)
LICENSE

# See NPM package.json specifications
package.json

# Readme file for github project
README.md
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
  <h1>Hello World</h1>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="/assets/js/main.js"></script>
</body>
</html>
```
