var demo = document.querySelector("#demo");

// Recupero il file di testo

var xmlhttp = new XMLHttpRequest(); // l'oggetto che elabora la risposta del server
const url = "./assets/studente.txt";

xmlhttp.open("GET", url, true);

xmlhttp.send();

xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var response = JSON.parse(this.responseText);
        console.log(response);

        demo.innerHTML += response[0].nome + "<br>";
        demo.innerHTML += response[1].nome + "<br>";

        for(var i = 0; i < response[0].compagniClasse.length; i++){
            demo.innerHTML += response[0].compagniClasse[i] + "<br>";
        }

    }
}

// Recuperiamo la struttura HTML

var xmlhttp2 = new XMLHttpRequest();
const url2 = "./assets/struttura.html";

xmlhttp2.open("GET", url2, true);

xmlhttp2.send();

xmlhttp2.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
        demo.innerHTML += this.response;
    }
}