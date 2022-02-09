//ES 0 -------------------------------------------------------------------
// var testo = prompt("Inserisci il nome");
// var saluto = document.getElementById("saluto").innerHTML = "<h1>Ciao " + testo + "</h1>";

//ES 1 -------------------------------------------------------------------
var num1 = 5;
var num2 = 6;
var num3 = 7;

var peri = num1 + num2 + num3;
var semip = peri / 2;
var area = Math.sqrt(semip * (semip - num1) * (semip - num2) * (semip - num3));
console.log(peri);
console.log(area);

//ES 2 -------------------------------------------------------------------
function calcola(){
    var corrente = document.getElementById("corrente").value;
    var nascita = document.getElementById("nascita").value
    var eta = document.getElementById("eta");
    eta.innerHTML = corrente - nascita + " anni";
}

//ES 3 -------------------------------------------------------------------
function prodotto(){

    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var res = document.getElementById("res");
    res.innerHTML = a * b;

}

//ES 4 -------------------------------------------------------------------
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

//ES 5 ------------------------------------------------------------------- 
var file = "ciaobello.pdf"
var est = file.slice(10);
console.log(est);

//ES 6 -------------------------------------------------------------------

function aggiungi(){
    var par = document.getElementById("par").value;
    var parola = document.getElementById("parola")
    var ini = par.indexOf("Ja")
    if (ini == 0) {
        parola.innerHTML = par;
    }else
        parola.innerHTML = "Ja" + par;
    
}

//ES 7 -------------------------------------------------------------------
function trova(){
    var goal = 100;
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var tro = document.getElementById("trova");
    if(n1 == n2){
        tro.innerHTML = "Numeri uguali: inserisci numeri diversi tra loro"
    }else if(Math.abs(n1 - goal) < Math.abs(n2 - goal)){
        tro.innerHTML = n1 + " è piu vicino a 100";
    } else {
        tro.innerHTML = n2 + " è piu vicino a 100";
    }
    
}

//ES 8 -------------------------------------------------------------------
function inverti(){
    var word = document.getElementById("word").value;
    var wordn = document.getElementById("wordn");
    wordn.innerHTML = word.split("").reverse("").join("");
}

//ES 9 -------------------------------------------------------------------
function frase(){
    var fra = document.getElementById("fra").value;
    var upper = document.getElementById("upper");
    upper.innerHTML = "";
    fra.split(" ").forEach(element => {
        upper.innerHTML += element.charAt(0).toUpperCase() + element.slice(1) + " ";
    });
}

//ES 10 ------------------------------------------------------------------
function genera(){
    var elle = document.getElementById("elle").value;
    var stringa = document.getElementById("stringa");
    var cara = "0123456789QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";
    var array = [];
    array.length = elle;
    stringa.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        var element = Math.floor(Math.random() * cara.length);
        stringa.innerHTML += cara.substring(element, element + 1)
    }
}

//ES 11 ------------------------------------------------------------------
function maggiore(){
    var first = Number(document.getElementById("first").value);
    var second = Number(document.getElementById("second").value);
    var magg = document.getElementById("magg");
    
    if (first > second){
        magg.innerHTML = first
    }else if(second > first){
        magg.innerHTML = second;
    }else {
        magg.innerHTML = "Numeri uguali";      
    }
}

//ES 12 ------------------------------------------------------------------
function inverti2(){
    var matte = document.getElementById("matte").value;
    var gamba = document.getElementById("gamba");
    gamba.innerHTML = "";
    var ehi = matte.split("")
    for (let i = (ehi.length - 1); i >= 0 ; i--) {
       gamba.innerHTML += ehi[i];   
   }    
}

//ES 13 ------------------------------------------------------------------
function stampa(){
    lista = document.getElementById("lista")
    for (let i = 1; i <= 100; i++) {
        if ((i % 5 == 0) && (i % 3 == 0)){
        lista.innerHTML += "<li>" + i + " Ciao Mondo" + "</li>";
        }else if(i % 3 == 0){
        lista.innerHTML += "<li>" + i + " Ciao" + "</li>";
        }else if (i % 5 == 0){
            lista.innerHTML += "<li>" + i + " Mondo" + "</li>";
        }else
        lista.innerHTML += "<li>" + i + "</li>";
    }
}

//ES 14 ------------------------------------------------------------------
var pare = ["c", "i", "a", "o"];
var stringaCompl = document.getElementById("stringaCompl");
var stringaCompl2 = document.getElementById("stringaCompl2");

stringaCompl.innerHTML = pare.join("");

pare.forEach(i => { stringaCompl2.innerHTML += i; });

//ES 15 ------------------------------------------------------------------
var aCaso = ["Grazie", "Della", "Modifica", "Brother", "Homyatol", "Sub", "Amazon"];
var caso = document.getElementById("caso");
function casistica(){
    caso.innerHTML = aCaso[Math.floor(Math.random() * aCaso.length)];
}