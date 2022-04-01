// STRING
var nome = "Matteo";
var msg = "Mi chiamo ".concat(nome);
// NUMBER
var eta = 30;
var PI = 3.14;
var IVA = 0.22;
// BOOLEAN
var unoMaggZero = true;
// ARRAY
var materie = ["Java", "JS", "html", "Css", "MySql"];
var numeri = [1, 5, 6, 3, 4, 55];
// ANY
var distanzaPercorsa;
distanzaPercorsa = 1200;
distanzaPercorsa = 2000;
distanzaPercorsa = "Mille metri";
var mioAnimale = "Scimmia";
var mioAnimale2 = "Cane";
var miaAuto = "Porsche";
// NELLE FUNZIONI VA SEMPRE ANNOTATO IL TIPO DI RITORNO
function test() {
    var a = 0;
    var b = 1;
    if (a > b) {
        console.log("Il maggiore è " + a);
    }
}
function saluta() {
    var nome = "Matteo";
    return "Ciao " + nome;
}
// FUNZIONI CON PARAMETRI
function salutami(nome) {
    return "Ciao " + nome;
}
// ESPRESSIONI FUNZIONALE
var saluta2 = function (nome) {
    return "Ciao ".concat(nome);
};
var demo = document.getElementById("demo");
demo.innerHTML = saluta2("Matteo");
// FUNZIONI CON PARAMETRI OPZIONALI
function salutamiA(nome, cognome) {
    if (!cognome) {
        return "Salutami a ".concat(nome);
    }
    else {
        return "Salutami a ".concat(nome, " ").concat(cognome);
    }
}
console.log(salutamiA("Mario"));
console.log(salutamiA("Mario", "Rossi"));
// FUNZIONI PARAMETRI DI DEFAULT
function saluta3(nome, saluto) {
    if (saluto === void 0) { saluto = "Ciao"; }
    return "".concat(saluto, " ").concat(nome);
}
console.log(saluta3("Matteo"));
function somma(a, b) {
    return a + b;
}
console.log(somma("Hello", "World"));
console.log(somma(3, 4));
// ARROW FUNCTION
var doppio = function (x) { return x * 2; };
var numeroRad = doppio(4);
console.log(numeroRad);
var moltiplica = function (x, y) { return (x * y); };
var molt = moltiplica(5, 4);
console.log(molt);
var sommaNum = function (x, y) {
    var somma = x + y;
    return somma;
};
console.log(sommaNum(7, 5));
//
function ritardaSaluto(nome) {
    this.nome = nome;
    this.saluta = function () {
        setTimeout(function () {
            console.log("Ciaooooo " + this.nome);
        }, 5000);
    };
}
var salutaDopo = new ritardaSaluto("Pippo");
salutaDopo.saluta();
function ritardaSaluto2(nome) {
    this.nome = nome;
    this.saluta = function () {
        var _this = this;
        setTimeout(function () {
            return console.log("Ciao " + _this.nome);
        }, 1500);
    };
}
var salutaDopo2 = new ritardaSaluto2("Uagliò");
salutaDopo2.saluta();
