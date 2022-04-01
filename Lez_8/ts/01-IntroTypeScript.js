console.log("Ciao");
var x = 1;
console.log(x);
var y = x + 2;
console.log(y);
var z = {
    nome: "Matteo",
    anni: 28
};
console.log(z.nome);
var nome = "Paola";
var acceso = false;
var qualcosa = 1;
qualcosa = "Amaro del capo";
qualcosa = false;
qualcosa = new Date();
var lista = [];
lista.push("Ciao");
lista.push("come");
lista.push("Stai");
for (var i in lista) {
    console.log(lista[i]);
}
var user = /** @class */ (function () {
    function user(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    user.prototype.presenta = function () {
        return this.nome + " " + this.cognome;
    };
    return user;
}());
var u = new user("Matteo", "Gamba");
console.log(u.presenta());
var User2 = /** @class */ (function () {
    function User2(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    User2.prototype.fullname = function () {
        return this.nome + " " + this.cognome;
    };
    User2.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    return User2;
}());
var u2 = new User2("Paola", "Tommasi");
u2.setNome("Anna");
console.log(u2.fullname());
var Cane = /** @class */ (function () {
    function Cane(age, name) {
        this.age = age;
        this.name = name;
    }
    Cane.prototype.gioca = function () {
        return this.name + " sta correndo";
    };
    return Cane;
}());
var c = new Cane(2, "Pluto");
console.log(c);
console.log(c.gioca());
