//
//
async function quantity() {
    //    alert("loaded");
    //
    //Get the data from the database through a server file.
    const resp = await fetch("http://localhost/value8/quantity.php");
    //console.log(resp);
    //
    //Get the data from the server.
    const data = await resp.json();
    //console.log(data);
    //
    //Get all the tds using their like class qty.
    const tds = document.querySelectorAll(".qty");
    //console.log(td1);
    //
    // 
    //Get the statuses of the various tds
    const tds_sts = document.querySelectorAll(".sts");
    //
    //
    for(var i = 0; i<tds.length; i++){
        //
        //Then for one td, append a quantity.
        tds[i].textContent = data[i].quantity;
        //
        //
        tds_sts[i].textContent=
            parseInt(data[i].quantity)< 500? "pending restock":"Enough stock";
    }
}