var primoItem = document.getElementsByTagName("li")[0];
if(primoItem.hasAttribute("class")){
    var attr = primoItem.getAttribute("class"); // recupero il calore di una classe
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "Il nome della classe è: " + attr;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(newDiv);
}

// SET ATTRIBUTE
primoItem.className = "blue";

var terzoItem = document.getElementById("tre");
terzoItem.setAttribute("class", "blue")

// REMOVE ATTRIBUTE
var quartoItem = document.getElementById("quat");
if(quartoItem.hasAttribute("class")){
    quartoItem.removeAttribute("class");
}

// AGGIUNGERE UNA CLASSE IN PIU
primoItem.classList.add("fontUp")