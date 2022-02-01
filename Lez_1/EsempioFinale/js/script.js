
function scadenza(oggi){
    var settDaOggi, day, date, month, year, nomeGiorni, nomeMesi;

    settDaOggi = new Date(oggi.getTime() + (7 * 24 * 60 * 60 * 1000));

    nomeGiorni = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
    nomeMesi = ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"];

    day = nomeGiorni[settDaOggi.getDay()];
    date = settDaOggi.getDate();
    month = nomeMesi[settDaOggi.getMonth()];
    year = settDaOggi.getFullYear();

    var msg = "Le offerte scadranno il: ";
    msg += day + " ( " + date + " " + month + " " + year + " ) ";
    return msg;
}

var oggi = new Date();

var offertaFine = document.getElementById("offertaFine");
offertaFine.innerHTML = scadenza(msg);