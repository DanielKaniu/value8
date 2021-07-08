//
//
async function product() {
    //    alert("loaded");
    //
    //Get the data from the database through a server file.
    const resp = await fetch("http://localhost/value8/product.php");
    //console.log(resp);
    //
    //
    const data = await resp.json();
    console.log(data);
    //
    //
    const tds = document.querySelectorAll(".qty");
    //console.log(td1);
    //
    //
    for(var i = 0; i<tds.length; i++){
        //
        //
        tds[i].textContent = data;
    }
}

