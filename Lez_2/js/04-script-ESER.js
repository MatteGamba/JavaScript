//ES 0
// var testo = prompt("Inserisci il nome");
// var saluto = document.getElementById("saluto").innerHTML = "<h1>Ciao " + testo + "</h1>";

//ES 1
var num1 = 5;
var num2 = 6;
var num3 = 7;

var peri = num1 + num2 + num3;
var semip = peri / 2;
var area = Math.sqrt(semip * (semip - num1) * (semip - num2) * (semip - num3));
console.log(peri);
console.log(area);

//ES 2
function calcola(){
    var corrente = document.getElementById("corrente").value;
    var nascita = document.getElementById("nascita").value
    var eta = document.getElementById("eta");
    eta.innerHTML = corrente - nascita + " anni";
}

//ES 3
function prodotto(){

    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var res = document.getElementById("res");
    res.innerHTML = a * b;

}

//ES 4
function prodotto2(){
    var primo = document.getElementById("primo").value;
    var secondo = document.getElementById("secondo").value;
    var risultato = document.getElementById("risultato")
    risultato.innerHTML = primo * secondo;
}

function dividi(){
    var primo = document.getElementById("primo").value;
    var secondo = document.getElementById("secondo").value;
    var risultato = document.getElementById("risultato")
    risultato.innerHTML = primo / secondo;
}

//ES 5
var file = "ciaobello.pdf"
var est = file.slice(10);
console.log(est);

//ES 6

function aggiungi(){
    var par = document.getElementById("par").value;
    var parola = document.getElementById("parola")
    var ini = par.indexOf("Ja")
    if (ini == 0) {
        parola.innerHTML = par;
    }else
        parola.innerHTML = "Ja" + par;
    
}
