var pokemons = ["Bulbasaur", "Charmander", "Mew", "Pikachu", "Squirtle"];

var imgs = document.querySelectorAll("img");
var lis = document.querySelectorAll("li");

for(var i = 0; i < pokemons.length; i++){
    imgs[i].setAttribute("src", "img/" + pokemons[i] + ".jpeg")
}

for(var i = 0; i < pokemons.length; i++){
    var aLink = document.createElement("a");
    aLink.innerHTML = pokemons[i];
    aLink.setAttribute("href", "https://wiki.pokemoncentral.it/" + pokemons[i]);
    aLink.setAttribute("target", "_blank");
    lis[i].appendChild(aLink);
}

function scegliPok(){
    var select = document.getElementById("miaSel");
    var nomePok = document.getElementById("miaSel").children;
    console.log(nomePok[select.selectedIndex].text);
}

