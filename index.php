<?php
//
//Import the schema.
include_once '../library/v/code/schema.php';
//
//Get the database.
$database = new database("kefis");
//
//Connect to the database.
$sql_quantity = "select store.quantity from store";
//
//Query the database to stay in check.
$result_quanity = $database->get_sql_data($sql_quantity);
//var_dump($result_quanity);
//
//
foreach ($result_quanity as $qty) {
    //
    //Get the values 
    $quantity = array_values($qty)[0];
    //
    //Return all the values of an array.
    echo $quantity."<br>";
}