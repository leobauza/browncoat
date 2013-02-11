<?php

$file = 'default.kaylee.php';
$newfile = 'site/example.php';

if (!copy($file, $newfile)) {
	echo "failed to copy $file...\n";
}


?>