
<div>
 some content
</div>

<?php

//TESTING

	//process submitted river form
if(isset($_POST["submit"])) {
	echo "<pre>";
	var_dump($_POST);
	echo "</pre>";
	echo "\n";
	$theData = "start writing \n";
	foreach ($_POST['library'] as $key => $lib) {
		echo "<pre>";
		echo "$key"." => ". "$lib";
		echo "</pre>"."\n";
		$theData .= $key . " => " . $lib . ";\n";

	}



	//writing to writingtest.php
	$myFile = "./writingtest.php";
	
	// $fh = fopen($myFile, 'r') or die("can't open file");
	// $theData = fread($fh, filesize($myFile));
	// fclose($fh);
	
	$fh = fopen($myFile, 'w') or die("can't open file");
	fwrite($fh, "<?php \n".$theData."\n ?>");
	fclose($fh);



	//writing to kayleetest.php
	// $myFile = "./kayleetest.php";
	// 
	// $fh = fopen($myFile, 'r') or die("can't open file");
	// $theData = fread($fh, filesize($myFile));
	// $newData = str_replace("change", "title", $theData); 
	// fclose($fh);
	// 
	// $fh = fopen($myFile, 'w') or die("can't open file");
	// fwrite($fh, $newData . " and some more");
	// fclose($fh);

} else {
	echo "no \$_POST";
}

//$file = preg_replace('', '' $file);



?>