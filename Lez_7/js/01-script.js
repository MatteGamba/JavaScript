// var mioObj = {
//     nome: "Matteo",
//     cognome: "Gamba",
//     eta: 25
// };

// var mioObj2 = function(nome = "Pippo"){
//     this.nome = nome;
//     this.parla = function(){
//         return "Mi chiamo " + this.nome
//     }
// }

class Dado{
    
    constructor(lati = 6){
        this.lati = lati;
    }

    lancia(){
        return(Math.ceil(this.lati * Math.random()));
    }

    static descriviti(){
        return "Il dado non ha un colore definito"
    }

}

const dadoBlu = new Dado()
console.log(dadoBlu.lancia());
console.log(Dado.descriviti());

const dadoRosso = new Dado(12);
console.log(dadoRosso.lancia());

// CREO UNA COPIA DI UN DADO GIA' ESISTENTE ATTRAVERSO LA PROPRIETA' CONSTRUCTOR
const dadoVerde = new dadoBlu.constructor(20);
console.log(dadoVerde.lancia());