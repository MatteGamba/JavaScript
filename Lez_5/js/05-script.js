var res = document.querySelector("#caratteriResidui");
var messaggio = document.querySelector("#messaggio");
const tot = 280;
var btn = document.querySelector("#btn");


function cancella(){
    
    var mex = messaggio.value.length;
    
    res.innerHTML = "Hai a disposizione: " + (tot - mex) + " caratteri";
}

messaggio.addEventListener("keyup", cancella, false)