<?php
//
//Import the schema.
include_once '../library/v/code/schema.php';
//
//Get the database.
$database = new database("kefis");
//
//Query the database.
$sql_status = "select store.quantity from store";
//
//Get the results back from the database.
$result_status = $database->get_sql_data($sql_status);
//
//Check the quantity status