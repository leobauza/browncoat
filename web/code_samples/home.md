### start
```bash
# Install dependencies
npm install

# Run Gulp
npm run gulp
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