class Tartaruga{
    constructor(nome, armi){
        this.nome = nome;
        this.armi = armi;
    }

    saluta(){
        return "Ciao, io sono " + this.nome;
    }

    attacca(){
        return "Ti gonfio con " + this.armi;
    }

}

var leo = new Tartaruga("Leonardo", "Nunchaku");
console.log(leo);
console.log(leo.saluta());
console.log(leo.attacca());

// PROTOTYPE PER ESPANDERE LE PROP O I METODI DELL'ISTANZA
Tartaruga.prototype.cibo = "Pizza";
Tartaruga.prototype.mangia = function(){
    return "Sto mangiando " + this.cibo;
}



console.log(leo.mangia());

var raf = new Tartaruga("Raffaello", "Sai");
console.log(raf.saluta());
console.log(raf.attacca());

console.log(Tartaruga.prototype);
console.log(raf.constructor.prototype);
console.log(Object.getPrototypeOf(raf));
console.log(Tartaruga.prototype.isPrototypeOf(raf));

function Poligono (w, h) {
    this.larghezza = w;
    this.altezza = h;
}

Poligono.prototype.area = function(){
    return (this.altezza * this.larghezza);
}

function Poligono3D(w,h,d){
    Poligono.call(this,w,h)
    this.dim = d;
    
    Poligono3D.prototype.volume = function(){
        return( this.area() * this.dim);
    }
}

Poligono3D.prototype = new Poligono
Poligono3D.prototype.constructor = Poligono3D;

var rettangolo = new Poligono(5,6);
var rettangolo3D = new Poligono3D(7,8,9);

console.log("Area rettangolo " + rettangolo.area());
console.log(rettangolo3D.area());
console.log("Area parallelepipedo " + rettangolo3D.volume());