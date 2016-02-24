### boilerplate
```
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
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="/assets/js/main.js"></script>
</body>
</html>
```
---
### folders
```
/scss
  styles.scss // aggregates all scripts
  00_bits // variables and utilities
  01_elements // basic html elements and resets
  02_items // extended basic elements
  03_collections // groups that may contain items and/or elements
  04_sections // logical page sections
  05_layouts // control overall structure of the page
```
---
### commonjs
```js
// modules/mymodule.js
module.exports = "Hello World!";

// app.js
var myModule = require("./modules/mymodule");
console.log(myModule); // outputs "Hellow World!" to console
```
---
### gulp
```
# install dependencies and devDependencies
npm install
# run gulp
npm run gulp
```