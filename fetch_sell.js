
//
//
async function soda() {
//    alert("loaded");
    //
    //Get the data from the database through a server file.
    const resp = await fetch("http://localhost/value8/sell.php");
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
//
//
async function unga() {
//    alert("loaded");
    //
    //Get the data from the database through a server file.
    const resp = await fetch("http://localhost/value8/sell.php");
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
//
//
async function sugar() {
//    alert("loaded");
    //
    //Get the data from the database through a server file.
    const resp = await fetch("http://localhost/value8/sell.php");
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