var txt = "Oggi ho svolto 8 ore di lezione";
var lung = txt.length;//anche le stringhe sono 0base

console.log(lung);

//metodi per ricerca
var search1 = txt.indexOf("lezione");//restituisce l'indice in cui la parola si trova
console.log(search1);

var search2 = txt.lastIndexOf("e");
console.log(search2);

var search3 = txt.indexOf("e");
console.log(search3);

var search4 = txt.charAt(3);
console.log(search4);

var search5 = txt.indexOf("f");//non c'è
console.log(search5);// ritorna -1

//metodi per il taglio
var testo = "Sono le 5 e tutto va bene";
var sl = testo.slice(4,10);
console.log(sl);

var sl2 = testo.substring(4,10);
console.log(sl2);

//metodi per sostituzione
var stringa = "Il miglior browser al mondo è Internet Explorer";
var sost = stringa.replace("Internet Explorer", "Google Chrome");
console.log(sost);

var upp = stringa.toUpperCase();
console.log(upp);

var low = stringa.toLowerCase();
console.log(low);

//metodi da stringa ad Array
var string1 = "Ciao";
var arr1 = string1.split("");
console.log(arr1);

var string2 = "Ciao-come-stai";
var arr2 = string2.split("-");
console.log(arr2);

var arr3 = ["M", "A", "T", "T", "E", "O"];
var string3 = arr3.join("");
console.log(string3);

var strEs = "Ciao come stai ? ";
var strEs2 = strEs.split("").reverse().join(""); 
console.log(strEs2);

var reg = new RegExp("abc");
var reg2 = /abc/;

var CFReg = /[a-z]{6}\d{2}[abcdefghilmn]\d{2}[a-z]\d{3}[a-z]/i;

var testCF = CFReg.test("GMBMTT93M14L219G")
console.log(testCF);