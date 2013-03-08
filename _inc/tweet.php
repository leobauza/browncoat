
<?php

$json = file_get_contents("http://api.twitter.com/1/statuses/user_timeline/ConanOBrien.json?count=10", true); //getting the file content
$decode = json_decode($json, true); //getting the file content as array

// echo "<pre>";
//print_r($decode);
// echo "</pre>";
//echo $json;

$count = count($decode); //counting the number of status
for($i=0;$i<$count;$i++){
$tweet = $decode[$i][text]."<br>";

//print $tweet;

$status = preg_replace('@((https?://)?([-\w]+\.[-\w\.]+)+\w(:\d+)?(/([-\w/_\.]*(\?\S+)?)?)*)@', '<a href="$1" target="_blank">$1</a>', $tweet);
echo "<li>".$status;

$time = $decode[$i][created_at];
$id = $decode[$i][id_str];
$username = $decode[$i][user][screen_name];
echo '<a href="http://twitter.com/' . $username . '/statuses/' . $id . '" target="_blank">' . relative_time($time) . "</a></li>";
}



function relative_time($time_value) {

	$values = explode(" ", $time_value);
	$time_value = $values[1] .  " " . $values[2] .  " " . $values[5] .  " " . $values[3];
	
	
	//tweet date
	$parsed_date = date_parse($time_value);
	
	$parsed_date["year"];
	$parsed_date["month"];
	$parsed_date["day"];
	$parsed_date["hour"];
	$parsed_date["minute"];
	$parsed_date["second"];


	//todays date
	$today = gmdate("r");
	$parsed_today = date_parse($today);
	
	$parsed_today["year"];
	$parsed_today["month"];
	$parsed_today["day"];
	$parsed_today["hour"];
	$parsed_today["minute"];
	$parsed_today["second"];
	
	//compare
	if($parsed_today["year"] - $parsed_date["year"] != 0) {
		$time = $parsed_today["year"] - $parsed_date["year"];
		return "way too long ago...years";
	}
	if($parsed_today["month"] - $parsed_date["month"] != 0) {
		$time = $parsed_today["month"] - $parsed_date["month"];
		return "long ago, like months";
	}
	if($parsed_today["day"] - $parsed_date["day"] != 0) {
		$time = $parsed_today["day"] - $parsed_date["day"];
		if($time < 2) {
			return "about a day ago";
		} else {
			return "about ". $time. " days ago";
		}
	}
	if($parsed_today["hour"] - $parsed_date["hour"] != 0) {
		$time = $parsed_today["hour"] - $parsed_date["hour"];
		if($time < 2) {
			return "about an hour ago";
		} else {
			return $time. " hours ago";
		}
	}
	if($parsed_today["minute"] - $parsed_date["minute"] != 0) {
		$time = $parsed_today["minute"] - $parsed_date["minute"];
		if($time < 2) {
			return "about a minute ago";
		} else {
			return $time. " minutes ago";
		}
	}
	if($parsed_today["second"] - $parsed_date["second"] != 0) {
		$time = $parsed_today["second"] - $parsed_date["second"];
		return "Less than a minute ago";
	}
	
	


}




?>
