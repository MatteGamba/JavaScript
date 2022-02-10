var foto = document.getElementById("foto");
var time = document.getElementById("time");
var infoTime = document.getElementById("infoTime")

var immagini = [
    'img/1.jpeg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpeg',
    'img/5.jpg',
];

var contatore = 0;

var tagImg = "<img id = 'imgMarch' width = '500px' height = '350px' src='" + immagini[contatore] + "'/>";

foto.innerHTML = tagImg;

setInterval(() => {
    ruotaFoto();
}, 1000);

function ruotaFoto(){
    if(contatore == immagini.length)
    contatore = 0;
    document.getElementById("imgMarch").src = "" + immagini[contatore];
    contatore++;
}

setInterval(() => {
    
    var oraEsatta = new Date();
    var ora = (oraEsatta.getHours()< 10?"0":"") + oraEsatta.getHours();
    var minuti = (oraEsatta.getMinutes() < 10 ? "0" : "") + oraEsatta.getMinutes();
    var sec = (oraEsatta.getSeconds() < 10 ? "0" : "") + oraEsatta.getSeconds();

    time.innerHTML = ora + ":" + minuti + ":" + sec;

    infoTime.value = ora + ":" + minuti;
    
}, 1000);