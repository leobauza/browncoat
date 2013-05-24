
<?php

// $json = file_get_contents("http://api.twitter.com/1/statuses/user_timeline/saforian.json?count=1", true); //getting the file content
// $decode = json_decode($json, true); //getting the file content as array

// echo "<pre>";
//print_r($decode);
// echo "</pre>";
//echo $json;


//initialize a new curl resource
$ch = curl_init();  
curl_setopt($ch, CURLOPT_URL, 'http://api.twitter.com/1/statuses/user_timeline/drupalcon.json?count=1');
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
$content = curl_exec($ch);
curl_close($ch);


if($content === FALSE) {
	//Content couldn't be retrieved... Do something. Possibly end the function prematurely hence no else.
}

$decode = json_decode($content, true); //getting the file content as array

$count = count($decode); //counting the number of status
for($i=0;$i<$count;$i++){
$tweet = $decode[$i]["text"];

	//print $tweet;

	$status = preg_replace('@((https?://)?([-\w]+\.[-\w\.]+)+\w(:\d+)?(/([-\w/_\.]*(\?\S+)?)?)*)@', '<a href="$1" target="_blank">$1</a>', $tweet);
	$status = preg_replace('/(#\w+)/', '<a href="http://twitter.com/$1" target="_blank">$1</a>', $status);
	$status = preg_replace('/(@\w+)/', '<a href="http://twitter.com/$1" target="_blank">$1</a>', $status);
	if(isset($html)){
		$html .= "<li>".$status;
	} else {
		$html = "<li>".$status;
	}

	$time = $decode[$i]["created_at"];
	$id = $decode[$i]["id_str"];
	$username = $decode[$i]["user"]["screen_name"];
	$html .= '<a href="http://twitter.com/' . $username . '/statuses/' . $id . '" target="_blank">' . relative_time($time) . "</a></li>\n";

}

$tweetTime = filemtime('./_inc/tweet.php');
$timeNow = time();
$timeDiff = $timeNow - $tweetTime;

//108000 = 30 mins 216000 = 60 mins
//check if that is true...
if ($timeDiff < 2700)
{
	echo $timeDiff. " that's how long this has been going so if its less that 2700 then it's not gonna update brah";
}
else
{
	file_put_contents('./_inc/tweet.php', $html);
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

include('tweet.php');


?>
