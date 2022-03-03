// Legge File di testo
var mioFile = document.querySelector("#mioFile");

function leggiFile(event){

    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
        var txt = reader.result;
        document.querySelector("#contenuto").innerHTML = txt;
    }
    reader.readAsText(input.files[0]);

}

mioFile.addEventListener("change", leggiFile, false);

// Salva i file di testo con un blob
document.getElementById("btnSave").onclick = function(){
    if("Blob" in window){
        var fileName = prompt("Inserisci il nome del file", "SenzaTitolo.txt");
        if(fileName){
            var txtToWrite = document.getElementById("contenuto").value;
            var txtFileAsBlob = new Blob([txtToWrite], {type: "text/plain"})
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
}

// Carica immagini

var btnFile = document.querySelector("#btnFile");

function apriFile(event){
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
        var dataURL = reader.result;
        document.getElementById("output").src = dataURL;
    }
    reader.readAsDataURL(input.files[0]);
}

btnFile.addEventListener("change", apriFile, false);

// Drag and Drop

function autorizzaDrop(ev){
    ev.preventDefault();
}

function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("imgDemo");
    ev.target.appendChild(document.getElementById(data));
}

function drag(ev){

    ev.dataTransfer.setData("imgDemo", ev.target.id);

}