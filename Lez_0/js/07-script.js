var utente = prompt("Inserire Nome Utente");
var elUtente = document.getElementById("benvenuto");

var utenteU = utente.toUpperCase();

var items = [];
var prezzi = [];

var elLista = document.getElementById("listaOgg");
var elTotale = document.getElementById("totale");
var elTotaleIva = document.getElementById("totaleIvato");
var elSped = document.getElementById("spedizione");
var elGranTot = document.getElementById("grandTotal");
var elCarr = document.getElementById("carrello");

var listaSpesa = "";
var sped = 35;




function registra(){
    
    var elTotale = 0;
    elLista.innerHTML = "";
    
    var ogg = document.getElementById("ogg").value;
    var pre = document.getElementById("pre").value;
    items.push(ogg);
    prezzi.push(Number(pre));
    for(var i = 0; i < items.length; i++){
        elLista.innerHTML += "<li>" + items[i] + ":" + " " + prezzi[i] + "€ </li>";
        elTotale += prezzi[i];
    }
    
    var iva = (elTotale * 22) / 100;
    var totIva = elTotale + iva;
    var granTot = totIva + sped;
    
    elTotale.innerHTML = "<h4> Totale senza IVA:</h4>" + elTotale + " €";
    elTotaleIva.innerHTML = "<h4> Totale + IVA:</h4>" + totIva + " €";
    elGranTot.innerHTML = "<h4> Totale: </h4>" + "<strong>" + granTot + " €" + "</strong>";
}


elUtente.innerHTML = "BENVENUTO " + utenteU;
elCarr.innerHTML = "I TUOI ACQUISTI";
elSped.innerHTML = "<h4> Spedizione: </h4>" + sped + " €";


