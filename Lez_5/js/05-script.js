var res = document.querySelector("#caratteriResidui");
var messaggio = document.querySelector("#messaggio");
var btn = document.querySelector("#btn");
var tweet = document.querySelector("#tweet");
var feed = document.querySelector("#feed");
var map = document.querySelector("#map")
const tot = 280;

res.setAttribute("class", "cara");
messaggio.setAttribute("class", "area");
btn.setAttribute("class", "botto");
tweet.setAttribute("class", "tuo");
feed.setAttribute("class", "back");
var primoP = document.querySelector("p");
primoP.setAttribute("class", "scrivi");
// messaggio.setAttribute("maxlength", 280);

function cancella(){
    var mex = messaggio.value.length;
    if(mex > tot){
        messaggio.value = messaggio.value.substring(0, tot);
        mex = tot;
    }
    res.innerHTML = "Hai a disposizione: " + (tot - mex) + " caratteri";
}

messaggio.addEventListener("keyup", cancella, false);



function salva(){
    // tweet.innerHTML = "Il tuo tweet";
    var msg = "";
    var mex = messaggio.value;
    feed.innerHTML = "";
    var nuovo = document.createElement("span");
    feed.appendChild(nuovo);
    nuovo.setAttribute("id", "pi");
    secondoP = document.querySelector("#pi");
    secondoP.setAttribute("class", "secondo");
    if(messaggio.value.length > 0){
        nuovo.innerHTML = messaggio.value;

        var salvaFile = function (){
        if("Blob" in window){
            var fileName = prompt("Inserisci il nome del file", "SenzaTitolo.txt");
            if(fileName){
                var txtFileAsBlob = new Blob([mex], {type: "text/plain"})
                if("msSaveOrOpenBlob" in navigator){
                    navigator.msSaveOrOpenBlob(txtFileAsBlob, fileName);
                }else{
                    var downloadLink = document.createElement("a");
                    downloadLink.download = fileName;
                    downloadLink.innerHTML = "Scarica File";
                    if("webkitURL" in window){
                        downloadLink.href = window.webkitURL.createObjectURL(txtFileAsBlob);
                    }else{
                        downloadLink.href = window.URL.createObjectURL(txtFileAsBlob);
                        downloadLink.onclick = distruggiElemento;
                        downloadLink.style.display = "none";
                        document.body.appendChild(downloadLink);
                    }
                        downloadLink.click();
                    }
                }
        }else{
            alert("Il tuo browser non supporta il formato Blob");
        }   
        };
        function distruggiElemento(event){
            document.body.removeChild(event.target);
        };
        salvaFile();

        navigator.geolocation.getCurrentPosition(success, fail);

        var longitudine = 0;
        var latitudine = 0;

        function success(posizione){

            msg += '<h4> Longitudine: ' +  posizione.coords.longitude + '</h4> <br>'
            msg += '<h4> Latidudine: ' +  posizione.coords.latitude  + '</h4> <br>'
            map.innerHTML = msg;
            latitudine = posizione.coords.latitude;
            longitudine = posizione.coords.longitude;
        }
        
        function fail(){
        msg = "non siamo stati in grado di geolocalizzarti"
        map.innerHTML = msg;
    }

    }else{
        nuovo.innerHTML = "&#128549 NON VUOI CONDIVIDERE NIENTE??! &#128549";
    }
    messaggio.value = "";
    res.innerHTML = "Hai a disposizione: " + tot + " caratteri";
}

btn.addEventListener("click", salva, false);
messaggio.addEventListener("keyup", premi, false)