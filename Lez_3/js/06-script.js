//aggiungo un elemento all'inizio e uno alla fine
var list = document.getElementsByTagName("ul")[0];

// primo e ultimo elemento
var primo = document.createElement("li");
primo.innerHTML = "Comprare frutta";
// list.insertBefore(primo, list.firstElementChild)

// per inserirlo al secondo
list.insertBefore(primo, list.children[1]);

var ultimo = document.createElement("li");
ultimo.innerHTML = "Andare al cinema";

list.appendChild(ultimo);

// aggiungo una classe a tutti
var lis = document.querySelectorAll("li");

// ... trasforma da non iterable a iterable
[...lis].forEach(element => {
    element.setAttribute("class", "red");
});

for(var i = 0; i < lis.length; i++){
    if(lis[i].hasAttribute("class"))
    lis[i].classList.add("fontUp");
}

// scrivo il conto di quante cose ho da fare
var titolo = document.querySelector("h3"); // prende la prima occorrenza di h3
// titolo.innerHTML = "Devi fare " + lis.length + " cose"
var txtH3 = titolo.firstChild.nodeValue;
titolo.innerHTML = txtH3.replace("tot", lis.length);
