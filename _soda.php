<?php
//
//Import the schema.
include_once '../library/v/code/schema.php';
//
//Get the current database.
$database = new database("kefis");
//
//Query the database.
$sql_sell = "update store set store.quantity = store.quantity - 1 
            where store.product = 'soda 300ml'";
//
//Execute the query in the database.
$result_sell = $database->query($sql_sell);