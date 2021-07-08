//
//
async function product() {
    //    alert("loaded");
    //
    //Get the data from the database through a server file.
    const resp = await fetch("http://localhost/value8/product.php");
    //console.log(resp);
    //
    //Get the data from the server.
    const data = await resp.json();
    console.log(data);
    //
    //Get all the tds using their like class qty.
    const tds = document.querySelectorAll(".prdct");
    //console.log(td1);
    //
    //
    for(var i = 0; i<tds.length; i++){
        //
        //Then for one td, append a quantity.
        tds[i].textContent = data[i].product;
    }
}

