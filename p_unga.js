//
//
async function unga() {
//    alert("loaded");
    //
    //Get the data from the database through a server file.
    const resp = await fetch("http://localhost/value8/_unga.php");
    //console.log(resp);
    //
    //Get the data from the server.
//    const data = await resp.json();
//    console.log(data);
    //
    //
    const td_content = document.getElementById("unga");
    //
    const qq= parseInt(td_content.textContent) - 1;
    //
    //
    td_content.textContent =qq;
    //
    //
    const td_status = document.querySelector("#unga_sts");
    //
    //
    td_status.textContent=qq< 500? "pending restock":"Enough stock";
}

