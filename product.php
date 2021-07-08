<?php
//
//Import the schema.
include_once '../library/v/code/schema.php';
//
//Get the database.
$database = new database("kefis");
//
//Query the database to get the products therein.
$sql_product = "select store.product from store";
//
//Get the products from the database.
$result_product = $database->get_sql_data($sql_product);
//var_dump($result_product);
//
//Loop through the array of the products as I echo items on the first index.
//foreach ($result_product as $prdct) {
//    //
//    //Get the values of the array result.
//    $product = array_values($prdct)[0];
//    //
//    //
//    echo $product."<br>";
//}
//
echo json_encode($result_product);