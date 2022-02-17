function aggiungi(){
    var input = document.getElementById("input").value;
    var elLi = document.createElement("li");
    var item = document.createTextNode(input);
    elLi.appendChild(item);

    document.getElementById("demo").appendChild(elLi);

    // creo pulsante elimina
    var elElim = document.createElement('span');
    var icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-trash-can")
    elElim.appendChild(icon)

    elElim.onclick = function(){
        elLi.parentNode.removeChild(elLi);
    }

    elLi.appendChild(elElim);
    document.getElementById("input").value = "";
}

// Inserire tutti gli item in un array di oggetti aggiungendo la data e l'ora
// Creare il pulsante modifica
// Creare il pulsante per la trasformazione JSON
// Inviare tutto ad una API