// OPERATORI DI CONFRONTO < > <= >= == ===
// OPERATORI LOGICI &&(AND) ||(OR) !(NOT)

var punti1 = 8; //livello 1
var punti2 = 10; //livello 2

var exit1 = 6; //soglia 1
var exit2 = 7; //soglia 2

//Per finire il gioco devo superare la soglia in entrambi i livelli
// var condizione = (punti1 >= exit1) && (punti2 >= exit2);
//console.log(condizione);

//Per finire il gioco è necessario solo il superamento di una soglia
var condizione = (punti1 >= exit1) || (punti2 >= exit2);

//STATEMENT IF
// if(condizione){
//     console.log("Bravo hai terminato il gioco");
// }else{
//     console.log("Non hai terminato il gioco");
// }

//var parola = prompt("Inserisci la parola d'ordine");

// if(parola == "ciao"){ //verifica il contenuto, senza verificare il tipo
//     console.log("Hai effettuato l'accesso");
// }else {
//     console.log("Credenziali non validi");
// }

// if(parola == 1234){ //sapendo che parola è per forza una stringa, al confronto con un numero perde
//     console.log("Bravo hai effettuato l'acceso");
// }else {
//     console.log("Credenziali non valide");
// }

// var punteggio = 60;
// var skill = 50;
// var msg = "";

// if(punteggio >= 50 && skill >= 40){
//     msg = "Bravo hai superato il livello"
// }else if(punteggio>= 50 && skill < 40){
//     msg = "Devi migliorare le skill"
// }else if(punteggio < 50 && skill >= 40){
//     msg = "Devi migliorare il tuo punteggio"
// }else{
//     msg = "Mi dispiace, datti all'ippica!!"
// }

// console.log(msg);

//STATEMENT SWITCH

// var msg;
// var livello = 1;

// switch (livello) {
//     case 1:
//         msg = "Buona fortuna per il primo livello"
//         break;
//     case 2:
//         msg = "Ci sei riuscito, adesso ti tocca il secondo livello"
//         break;   
//     case 3:
//         msg = "Bravo, adesso ci sarà da sconfiggere il mostro"
//         break; 
//     default:
//         msg = "Benvenuto nel gioco!"       
// }

// console.log(msg);

//OPERATORE TERNARIO

var pioggia = true;
var grandine = true;

// var decisione = pioggia == true ? "Prendi l'ombrello" : "Puoi uscire senza portare l'ombrello";
var decisione = pioggia == true && grandine == true ? "Prendi l'ombrello e giubbotto antiproiettile" : "Puoi uscire senza portare l'ombrello";

console.log(decisione);