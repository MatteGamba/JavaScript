// var auto = {
//     marca: "",
//     modello: "",
//     cilindrata: 0,
//     marcia : 0,
//     velocità: 0,
//     num_giri: 0,
//     acceso: false,

//     presentaMotore: function(marca, modello){
//         this.marca = marca;
//         this.modello = modello;
//         console.log("Stai testando " + this.marca + " - " + this.modello);
//     },

//     modificaGiri: function(num_giri){
//         this.num_giri = num_giri;
//         console.log(this.num_giri + " giri");
//     },

//     cambiaMarcia: function(marcia){
//         this.marcia = marcia;
//         console.log("Hai cambiato marcia!!");
//         console.log("Sei alla marcia: " + this.marcia);
//     },

//     calcolaVel : function(marca, modello, giri, marcia){
//         this.presentaMotore(marca, modello);
//         this.modificaGiri(giri);
//         this.cambiaMarcia(marcia);
//         this.velocità = (this.num_giri / (this.marcia * 100));
//         console.log("La tua velocità è di: " + this.velocità);
//     }

// }

// function valutaMotore(marca, modello, num_giri, marcia) {
//     var marca = document.getElementById("marca").value;
//     var modello = document.getElementById("modello").value;
//     var num_giri = document.getElementById("giri").value;
//     var marcia = document.getElementById("marcia").value;
//     auto.calcolaVel(marca,modello,num_giri,marcia);
// }

var ris = document.getElementById("ris");

function valutaMotore(){
    var obj = new Object();
    obj.marca = document.getElementById("marca").value;
    obj.modello = document.getElementById("modello").value;
    obj.giri = document.getElementById("giri").value;
    obj.marcia = document.getElementById("marcia").value;
    obj.velocità = (obj.giri / (obj.marcia * 100));
    ris.innerHTML += "Stai testando una " + obj.marca + " " + obj.modello + "<br>";
    ris.innerHTML += "Il numero di giri è di " + obj.giri + "<br>";
    ris.innerHTML += "Sei alla marcia " + obj.marcia + "<br>";
    ris.innerHTML += "La tua veloità è di " + obj.velocità + " m/s";
}
