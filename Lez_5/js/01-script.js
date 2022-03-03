function saluta(nome){
    // console.log("Ciao" + nome);
    console.log(`Ciao ${nome}`);
}

var btn = document.getElementById("btn");

// Gestore eventi in JS
// btn.onclick = saluta;

// Event istener
// btn.addEventListener("click", saluta("Matteo"), false); // La funzione viene richiamata senza parametri

// Se ho dei parametri wrappo tutto con una funzione anonima
btn.addEventListener("click", function(){
    saluta("Matteo")
}, false);

// Event Listener con Arrow Function
var demo = document.querySelector("#demo");
const primaFunz = () => console.log("Sono una funzione globale");
const secondFunz = () => console.log("Sono anche io una funzione Globale");

demo.addEventListener("mouseenter", () => {
    primaFunz();
    secondFunz();
    demo.classList.add("animate__animated","animate__flip")
},false);

demo.addEventListener("mouseout", () => { 
    console.log("Sono fuori");
    demo.classList.remove("animate__animated","animate__flip");
},false)