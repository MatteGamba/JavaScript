console.log("Ciao");

let x = 1;
console.log(x);

let y = x + 2;
console.log(y);

let z = {
    nome: "Matteo",
    anni: 28
}

console.log(z.nome);

let nome: string = "Paola";
let acceso: boolean = false;

let qualcosa: any = 1;
qualcosa = "Amaro del capo";
qualcosa = false;
qualcosa = new Date()

let lista = [];
lista.push("Ciao")
lista.push("come")
lista.push("Stai")

for (let i in lista) {
    console.log(lista[i]);
}

class user{
    nome: string;
    cognome: string;

    constructor(nome: string, cognome: string){
        this.nome = nome;
        this.cognome = cognome;
    }

    presenta(){
        return this.nome + " " + this.cognome;
    }

}

var u = new user("Matteo", "Gamba");
console.log(u.presenta());

class User2{
    constructor(public nome: string, public cognome: string){

    }

    fullname(){
        return this.nome + " " + this.cognome;
    }

    setNome(nome: string): void{
        this.nome = nome;
    }

}

let u2 = new User2("Paola", "Tommasi");
u2.setNome("Anna");
console.log(u2.fullname());

interface Animale{
    nome: string;
    eta: number;
    gioca();
}

class Cane implements Animale{
    nome: string;
    eta: number;
    constructor(private age: number, private name: string){

    }

    gioca(){
        return this.name + " sta correndo"
    }
}

let c = new Cane(2, "Pluto");
console.log(c);
console.log(c.gioca());

