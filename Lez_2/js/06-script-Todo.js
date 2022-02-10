var btn1 = document.getElementById("btn1");
var voce = "";
var items = [];

function stampa(listaArr){
    var output = "";
    output += "<ul>";
    for (var i  = 0; i < listaArr.length; i++) {
        output += '<input type="checkbox"><label>' + listaArr[i] + "</label><br>";
    }
    output += "</ul>";
    document.getElementById("output").innerHTML = output;
}

btn1.onclick = function(){
    voce = document.getElementById("listItem").value;
    if(voce.length > 0 && items.indexOf(voce) == -1)
    items.push(voce);
    document.getElementById("listItem").value = "";
    stampa(items);
}

