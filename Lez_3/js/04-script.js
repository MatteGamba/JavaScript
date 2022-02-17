// Creo elemento
var nuovoEl = document.createElement("li");

//Creo un nodo
var nuovoTxt = document.createTextNode("Compilare CV");

// Aggancio il testo a un genitore
nuovoEl.appendChild(nuovoTxt)

//seleziono il genitore del nuovo li
var genitoreUL = document.getElementsByTagName("ul")[0];

genitoreUL.appendChild(nuovoEl);

// Elimino un elemento
var elDaRim = document.getElementsByTagName("li")[1];
var contenitoreEl = document.getElementsByTagName("ul")[0];

contenitoreEl.removeChild(elDaRim);