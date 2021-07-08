//
//
async function milk() {
//    alert("loaded");
    //
    //Get the data from the database through a server file.
    const resp = await fetch("http://localhost/value8/_milk.php");
    //console.log(resp);
    //
    //Get the data from the server.
//    const data = await resp.json();
//    console.log(data);
    //
    //Get the td quantity.
    const td_content = document.getElementById("milk");
    //
    //
    const qq= parseInt(td_content.textContent) - 1;
    //
    //
    td_content.textContent =qq;
    //
    //
    const td_status = document.querySelector("#milk_sts");
    //
    //
    td_status.textContent=qq< 500? "pending restock":"Enough stock";
}

