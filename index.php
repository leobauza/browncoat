<?php

function render_template($filename, $variables) {
	//$variables['new'] = 'new value!';
	extract($variables);
	ob_start();
	require("./templates/" . $filename . ".php");
	$contents = ob_get_contents(); 
	ob_end_clean();
	return $contents;
}

require_once 'Slim/Slim.php';

$app = new Slim();

//Landing pages
$app -> get('/', 'homepage');
$app -> get('/libraries(/)', 'libraries');
$app -> get('/css(/)', 'css');
$app -> get('/layouts(/)', 'layouts');
$app -> get('/removingthings(/)', 'removingthings');

//Layout subpages
$app -> get('/layouts/:id(/)', 'layout');

//Tests
$app -> get('/test(/)', 'test');

//Pages
$app -> get('/pages/:id(/)', 'page');

//functions
function homepage() {
	echo render_template("template", array(
		'body' => './views/_home.php',
		'title' => 'home'
	));
}

function libraries() {
	echo render_template("template", array(
		'body' => './views/_libraries.php'
		,'title' => 'libraries'
		,'activeNav' => 'libraries'
	));
}

function css() {
	echo render_template("template", array(
		'body' => './views/_css.php'
		,'title' => 'css'
		,'activeNav' => 'css'
	));
}

function layouts() {
	echo render_template("template", array(
		'body' => './views/_layouts.php'
		,'title' => 'layouts'
		,'activeNav' => 'layouts'
	));
}

function removingthings() {
	echo render_template("template", array(
		'body' => './views/_removingthings.php',
		'title' => 'Removing Things'
	));
}

function layout($id) {
	if($id == 'fluidrows') {
		echo render_template("template", array(
			'body' => './views/layouts/_fluidRows.php'
			,'link' => '<p><a href="/layouts">Back to layouts</a></p>'
			,'title' => 'Fluid Rows'
			,'activeNav' => 'layouts'
		));
	}
	if($id == 'staticsidebar') {
		echo render_template("template", array(
			'body' => './views/layouts/_staticSidebar.php'
			,'link' => '<p><a href="/layouts">Back to layouts</a></p>'
			,'title' => 'Static Sidebar'
			,'activeNav' => 'layouts'
		));
	}
}
function test() {
	echo render_template("template", array(
		'body' => './views/etc/_layoutTest.php',
		'title' => 'test'
	));
}
function page($id) {
	echo render_template("template", array(
		'body' => './views/pages/_' . $id . '.php'
		//,'link' => '<p><a href="/layouts">Back to layouts</a></p>'
		,'title' => $id
		,'page' => true
	));
}

$app->run();


?>


