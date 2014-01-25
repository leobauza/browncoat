Welcome to browncoat 0.2.0
==================


## about this project
browncoat (lower case "b") is a light front end library. It is built using scss and uses require.js for scripts. It is meant for fast prototyping of small projects, or to be used as a sandbox to test out new technologies. It runs on the PHP micro-framework SLIM to create a very basic template structure.


### instructions to see a front page

1. clone the repo
2. You will need something like MAMP or WAMP or AAMP to get it up and running. Alternative if you know how to set up your own virtual host using your machines built in apache server and php you may do that. Future versions will run on node.js with express, so more detailed instructions will be available then.
3. Navigate to your localhost.

#### templates and views
- There is one template that is basically an html wrapper localated at templates/template.php
- All the pages are set up as views with subviews in the views/ directory. ie. to edit the homepage you would open the file at views/_home.php and edit that.

### scss

- Found in the assets/scss directory
- There are 3 main files:
	1. _app.scss: this file combines all the files inside the assets/scss/app folder. These files are app specific and make up the libraries included with browncoat.
	2. _browncoat.scss: this file combines all the files inside the assets/scss/browncoat directory. These files are all the bases and variables that form the core of browncoat.
	3. _styles.scss: this file combines the above to files and is the single file that needs to be compiled.

> note: inside the browncoat/ directory there are two folders bases and normalizers. By "browncoat convention" the bases folder are meant for variables, placeholders, and mixins, meaning none of those files should output any real CSS. 

### scss
You will need to install [sass](http://sass-lang.com/)  on your machine to compile the files. you can then run:

```
cd path/to/browncoat/root

sass --watch assets/scss/styles.scss:assets/css/styles.css
```

### versioning
numbered as such:

```
<major>.<minor>.<patch>
```
The first minor release of [browncoat](https://github.com/leobauza/browncoat) and isn't included on this repo as a tag because this second release is a total departure from that first release. The underlying structure will be changing drastically. Thinking of changing it to have an express backend and do some task management with grunt and later move to yeoman as well. 


## get updates

I am working on an easier go at installing browncoat using a combination of grunt and bower to set up a project. Until then forking the repository is all I've got for you though. 






