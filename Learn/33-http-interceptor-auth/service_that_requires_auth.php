<?php

// This is available for us in class at: http://angularbootcamp.com/service_that_requires_auth.php

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');    
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); 
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("Access-Control-Allow-Headers: Accept, X-SECRET-HEADER");
    exit;  // and thus return an empty 200 for the OPTIONS request
}

$secret = "";
if (isset($_SERVER['HTTP_X_SECRET_HEADER'])) {
	$secret = $_SERVER['HTTP_X_SECRET_HEADER'];
}

// PHP presents HTTP headers normallized to HTTP_UPPER_CASE_WITH_UNDERSCORES
if ($secret != "g76dg34f764") {
    header('HTTP/1.1 401 Unauthorized');
    die("Needed auth, did not get it, got $secret");
}

header("Cache-Control: no-cache, must-revalidate");
?>

{ "answer": 42 }
