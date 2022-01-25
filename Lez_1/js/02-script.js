function calcolaArea(altezza, larghezza){
    var area = altezza * larghezza;

    return area;
}

var superficie = calcolaArea(5,4);

console.log("L'area vale: " + superficie);

function calcolaVolume(altezza, larghezza, profondità){
    //return altezza * larghezza * profondità;
    var area = calcolaArea(altezza, larghezza);
    return area * profondità;
}

console.log("Il volume vale: " + calcolaVolume(4,5,6));

//ricavare i parametri da HTML