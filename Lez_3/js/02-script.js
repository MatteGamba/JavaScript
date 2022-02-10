//QUERY SELECTOR utilizza una sintassi css
var elSingolo = document.querySelector("#one");
elSingolo.innerHTML = "Mele";

var elSingolo2 = document.querySelector("li.blue");//recupera solo il primo
console.log(elSingolo2);

var elSingolo3 = document.querySelector("li");
console.log(elSingolo3);

//QUERY SELECTOR ALL
var els = document.querySelectorAll("li.red");
console.log(els);

if(els.length > 0){
    for (let i = 0; i < els.length; i++) {
        // els[i].className = "fontUp" // sostituisce il nome della classe
        els[i].classList.add("fontUp"); //aggiunge alla classe red la classe fontUp
    }
}