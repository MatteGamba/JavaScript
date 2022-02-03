var punteggi = [24,36,40,52];
var msg = "";

// FOR CLASSICO
for( var i = 0; i < punteggi.length; i++){

    msg +=  "<li> Livello: " + Number(i + 1) + " punteggio " + punteggi[i] + "</li>";

    if( punteggi[i] < 30){
        msg += "Qui potevi impegnarti di più"
    }

}

var demo = document.getElementById("demo");
demo.innerHTML = msg;

// FOR OF
for (var iteratore of punteggi) {
    console.log("Punteggi: " + iteratore);
}

// FOR IN
var studente = {
    nome: "Pippo",
    cognome: "Ippo",
    indirizzo: "Via tal dei tali 55",
    zaino:{
        astuccio:["penna", "matita", "evidenziatore"]
    }
}

for( var prop in studente){
    console.log(prop + ":" + studente[prop]);
}

for( var prop2 in studente.zaino){
    console.log(prop2 + ":" + studente.zaino[prop2]);
}

// FOR EACH
[punteggi].forEach(i => {
    console.log(i);
})

var titoli = document.getElementsByTagName("h1");

[...titoli].forEach(i => {
    console.log(i.innerText);
    console.log(i);
})

