var btn = document.querySelector("#btn");
function controlla(){
    var demo = document.querySelector("#demo")
    var txt = document.querySelector("#mioTesto").value;
    demo.innerHTML = "";

    try {
        if(txt == "") throw "campo vuoto";
        if(isNaN(txt)) throw " non è un numero";

        txt = Number(txt);

        if(txt > 10) throw "Numero troppo alto";
        if(txt < 5) throw "Numero troppo basso";

    } catch (error) {
        demo.innerHTML = "Errore: " + error;
    }
    finally{
        document.getElementById("mioTesto") = "";
    }
}

btn.addEventListener("click", controlla, false);