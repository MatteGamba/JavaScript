// == contenuto
// === contenuto + tipo

var demo = document.getElementById("demo")

function saluta(){
    var user = document.getElementById("user").value; //prendo ciò che l'utente scrive

    if(user == ""){
        demo.innerHTML = "<br>" + "Non hai compilato il campo";
        demo.style = "color : red";
    }else{

    demo.innerHTML = "<br>" + "Ciao " + user;
    document.getElementById("user").value = "";
    demo.style = "color : black";
    }
}