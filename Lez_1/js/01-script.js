// // Dichiaro la funzione
// function saluta(){
//     alert("Ciao Mondo");
// }
// // Chiamo la funzione
// saluta();

function getNome(){
    prompt("Come ti chiami?");
}

//getNome();

// function scriviQualcosa(){
//     document.write("Ciao dalla funzione")
// }

// //scriviQualcosa();

// function eseguiTutto(){
//     saluta();
//     scriviQualcosa();
//     getNome();
// }



// eseguiTutto();

function benvenuto(){
    var username = prompt("Come ti chiami?");
    var mess = "Ciao " + username + " benvenuto sulla pagina";
    var elDemo = document.getElementById("demo");
    elDemo.innerHTML = mess;
}

//benvenuto();
//richiameremo la funzione nell'HTML

function scriviFeed(){
    var elFeed = document.getElementById("feedback");
    elFeed.innerHTML = "<p>Qui sotto ptrai scrivere la tua recensione</p>";
    elFeed.innerHTML += "<textarea rows=10>";
    elFeed.innerHTML += '<button onclick = "salva()"> Invia Feed </button>';
}

function salva(){
    alert("Grazie per aver inviato il tuo feedback");
}

function eseguiTutto(){
    benvenuto();
    scriviFeed();
}
