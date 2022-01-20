// dichiaracione standard Array

var colori = ["Blu", "Verde", "Giallo", "Rosso", "Rosa"];
console.log(colori);

// Seleziono il primo elemento

 var primoEl = colori[0];
 var seconoEl = colori[1];
 var terzoEl = colori[2];
console.log(colori.length);

// metodo per aggiungere un elemento
colori.push("Nero");

// sort metodo per ordinare
colori.sort();

//reverse
colori.reverse();

for(var i = 0; i < colori.length; i++){
    console.log(colori[i]);
}

// CDG Cafonata del giorno
var mioArray = ["Matteo", "Gamba", 29, 1993, true]

console.log(mioArray);

document.write("Nome: " + mioArray[0] + "<br>");
document.write("Cognome: " + mioArray[1] + "<br>");
document.write("Età: " + mioArray[2] + "<br>");
document.write("Anno di nascita: " + mioArray[3] + "<br>");

document.write(colori);