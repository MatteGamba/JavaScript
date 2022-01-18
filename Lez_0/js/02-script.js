var nomeUtente = prompt("Come ti chiami?");

var annoCorrente = 2022;
var annoNascita = 1993;
var annoMorte = 2056;

var eta = annoCorrente - annoNascita;
var morte = annoMorte - annoNascita;
var mex1 = "<h2>Ciao " + nomeUtente + "</h2>";
var mex2 = "<p>Hai " + eta + " anni, morirai nel " + annoMorte + " all'età di " + morte + " anni." + "</p>";

document.write(mex1);
document.write(mex2);

