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
    //
    const td_content = document.getElementById("milk");
    //
    td_content.textContent = parseInt(td_content.textContent) - 1;
}
