// Notazione con new Object

var moto = new Object;

// utilizzo la notazione punto oer assegnare il valore della pro

moto.marca = "Kawasaki";
moto.modello = "Z750";
moto.cilindrata = 750;
moto.marcia = 6;

moto.cambiaMarcia = function(marcia){
    this.marcia = marcia;
}

// notazione col costruttore

function Studente(nome, cognome, matricola, anno){
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.anno = anno;

    this.presentati = function(){
        var stu = "Lo studente: " + this.nome + " " + this.cognome;
            stu += " è nato nel " + this.anno;
            stu += ". La sua matricola è : " + this.matricola;    
            return stu;          
    }
}

var studenti = [
    new Studente("Fabio", "Amoruso", 2, 1996),
    new Studente("Christian", "De La Fuente", 3, 1999),
    new Studente("Aurora", "Esposito", 4, 1998),
    new Studente("Matteo", "Gamba", 5, 1993),
    new Studente("Giuseppe", "Garone", 6, 1995)
];

for(var s in studenti){
    console.log(studenti[s].presentati());
}

// for (let index = 0; index < studenti.length; index++) {
//     console.log(studenti[index].presentati());
// }

// var studA = {
//     nome: "Aurora",
//     cognome: "Esposito",
//     anno: 1998,
//     matricola: 4
// }

var studAJSON = '{"nome":"Aurora", "cognome":"Esposito", "anno":"1998", "matricola":"4"}';

console.log(studAJSON);
// console.log(studA);

var studAObj = JSON.parse(studAJSON);

console.log(studAObj.nome);

var studAJSON2 = JSON.stringify(studAObj);

console.log(studAJSON2);