//
//
async function soda() {
//    alert("loaded");
    //
    //Get the data from the database through a server file.
    const resp = await fetch("http://localhost/value8/_soda.php");
    //console.log(resp);
    //
    //Get the data from the server.
//    const data = await resp.json();
//    console.log(data);
    //
    //Get the quantity td.
    const td_content = document.getElementById("soda");
    //
    //Minus quantity by 1 upon sale.
    const qq= parseInt(td_content.textContent) - 1;
    td_content.textContent =qq;
    //
    //Get the status td.
    const td_status = document.querySelector("#soda_sts");
    //
    //Condition that sets the status of a product to enough or pending
    //depending on the quantity.
    td_status.textContent=qq< 500? "pending restock":"Enough stock";
}

