<?php
//
//Include application specific file to support
//extension of outlook with user defined classes 
//e.g include_once '/tracker/v/code/tracker.php'
function add_udf_files(){
    //
    //Get only the root folder and its drive, i.e., F:/mutall_projects.
    //
    //The "TEMP.TXT" file allows us to get the root folder name and
    //remove a forward slash (/) which is after the root folder's name.
    //$root = pathinfo($_SERVER['DOCUMENT_ROOT']."TEMP.TXT", PATHINFO_DIRNAME);
    $root = $_SERVER['DOCUMENT_ROOT'];
    //
    //Get directory name '/schema_tasks/path.php' from 
    //'localhost/schema_tasks/path.php'.
    $uri_path = $_SERVER['REQUEST_URI'];
    //
    //Get only the dir name, using pathinfo, i.e., /schema_tasks.
    $dir = pathinfo($uri_path, PATHINFO_DIRNAME);
    //
    //Concatenate the root folder with the directory and path files (including
    //their extensions).
    $path = $root.$dir."/*.php";
    echo "*****".$path."*****";
    //
    //Get all the files in the path.
    $full_path = glob($path);
    //
    //Loop through all the files and display them.
    foreach ($full_path as $filename) {
        //
        //Display the files.
        include_once $filename;
    }
}
//
//This file supports the link between the server and client sub-systems
//
//Start the buffering as early as possible. All html outputs will be 
//bufferred 
ob_start();
        
//The output strcure has teh format: {ok, result, html} where:-
//ok is true if the returned resut is valid and false not. If not the result 
//  has the error message.
//result is the user specified request
//html is the buffered html output 
//error 
$output = new stdClass();
//
//Catch all errors, including warnings.
set_error_handler(function($errno, $errstr, $errfile, $errline /*, $errcontext*/) {
    throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
});
//
//Catch any error that may arise.
try{
    $path=$_SERVER['DOCUMENT_ROOT'].'/library/v/code/';
    //
    //Include the library libray where the mutall class is defined. (This will
    //throw a warning only which is not trapped. Avoid requre. Its fatal!
    include_once  $path.'schema.php';
    include_once  $path.'sql.php';
    include_once  $path.'capture.php';
    include_once $_SERVER['DOCUMENT_ROOT'].'/outlook/v/code/app.php';
    //
    //INclude application specific file to support
    //extension of outlook with user defined classes 
    include_once $_SERVER['DOCUMENT_ROOT'].'/tracker/v/code/tracker.php';
    add_udf_files();
    //
    //Run the requested method an a requested class
    if(isset($_GET["post_file"])){
        //
        $output->result= mutall::post_file();        
    }
    else {
        //
        $output->result = mutall::fetch($output);
    }
    //
    //The process is successful; register that fact
    $output->ok=true;
}
//
//The user request failed
catch(Exception $ex){
    //
    //Register the failure fact.
    $output->ok=false;
    //
    //Compile the full message, including the trace
     //
    //Replace the hash with a line break in teh terace message
    $trace = str_replace("#", "<br/>", $ex->getTraceAsString());
    //
    //Record the error message in a friendly way
    $output->result = $ex->getMessage() . "<br/>$trace";
}
finally{
     //
     //Empty the output buffer
     $output->html = ob_end_clean();
     //
    $encode = json_encode($output, JSON_THROW_ON_ERROR);
    echo $encode;
}