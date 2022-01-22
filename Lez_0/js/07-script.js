var elUtente = document.getElementById("benvenuto");
var utente = prompt("Inserire Nome Utente");

var utenteU = utente.toUpperCase();

var items = ["Iphone", "Macbook", "Carica Batteria", "PlayStation", "PC Gaming", "Sedia Gaming"];
var prezzi = [1239, 1570, 45, 499, 1650, 89];

var elLista = document.getElementById("listaOgg");
var elTotale = document.getElementById("totale");
var elTotaleIva = document.getElementById("totaleIvato");
var elSped = document.getElementById("spedizione");
var elGranTot = document.getElementById("grandTotal");
var elCarr = document.getElementById("carrello");

var listaSpesa = "";
var totale = 0;
var iva = 0;
var sped = 35;
var granTot = 0;


for(var i = 0; i < items.length; i++){
    listaSpesa += "<li>" + items[i] + ":" + " " + prezzi[i] + "€ </li>";
    totale += prezzi[i];
}

var iva = (totale * 22) / 100;
var totIva = totale + iva;
var granTot = totIva + sped;

elUtente.innerHTML = "BENVENUTO " + utenteU;
elCarr.innerHTML = "I TUOI ACQUISTI";
elLista.innerHTML = listaSpesa;
elTotale.innerHTML = "<h4> Totale senza IVA:</h4>" + totale + " €";
elTotaleIva.innerHTML = "<h4> Totale + IVA:</h4>" + totIva + " €";
elSped.innerHTML = "<h4> Spedizione: </h4>" + sped + " €";
elGranTot.innerHTML = "<h4> Totale: </h4>" + "<strong>" + granTot + " €" + "</strong>";