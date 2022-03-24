class Auto {
    constructor(marca){
        this.marca = marca;
    }

    descrivi(){
        return "Sto visionando una " + this.marca;
    }
}

class Modello extends Auto{
    constructor(marca, modello){
        super(marca);
        this.modello = modello;
    }
    show(){
        return this.descrivi() + " modello " + this.modello;
    }
}

var miaAuto = new Modello("Ford", "Focus")
console.log(miaAuto.show());

class Studente{
    constructor(nome, cognome){
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = ++Studente.matricola;
    }

    stampaInfo(){
        return this.nome + " " + this.cognome + " " + this.matricola
    }
}

Studente.matricola = 0;
var studente1 = new Studente("Paolo", "Rossi")
var studente2 = new Studente("Anna", "Bianchi")

console.log(studente1.stampaInfo());
console.log(studente2.stampaInfo());