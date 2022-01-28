//notazione letterale

var studente = {
    //definisco metodi e proprietà
    nome: "Matteo",
    cognome: "Gamba",
    promosso: true,
    matricola: 123,
    dataNascita: new Date('08/14/1993').getFullYear(),

    superaEsame: function(){
        alert("Hai superato l'esame");
    }
}

var docente = {
    nome: "Pippo",
    cognome: "Baudo",
    dataNascita: new Date('01/01/1945').getFullYear(),
    programmi: "Sanremo",

    conduci: function(){
        alert("Benvenuti cari studenti")
    }
}

var rettore = {
    nome: "Piero",
    cognome: "Angela",
    dataNascita: new Date('01/01/1933').getFullYear(),
    facoltà: "Super Quark"
}

//se voglio recuperare il valore di alcune prop
//console.log(studente.cognome);

var demo = document.getElementById("demo");

function stampaInfo(persona){

    demo.innerHTML = "" 

    // FOR IN (ciclo for per oggetti)
    for (const prop in persona) {
       console.log(persona[prop]);//uso l'annotazione parentesi quadre perche prop è una stringa
       if(typeof persona[prop] != "function"){ 
       demo.innerHTML += prop + ": " + persona[prop] + "<br>";
        }
    }

}

