//
//
async function sugar() {
//    alert("loaded");
    //
    //Get the data from the database through a server file.
    const resp = await fetch("http://localhost/value8/_sugar.php");
    //console.log(resp);
    //
    //Get the data from the server.
//    const data = await resp.json();
//    console.log(data);
    //
    //
    const td_content = document.getElementById("sugar");
    //
    //
    const qq= parseInt(td_content.textContent) - 1;
    //
    //
    td_content.textContent =qq;
    //
    //
    const td_status = document.querySelector("#sugar_sts");
    //
    //
    td_status.textContent=qq< 500? "pending restock":"Enough stock";
}

