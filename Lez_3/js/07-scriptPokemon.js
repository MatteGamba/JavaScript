// var list = document.getElementsByTagName("li")[0];
// var titolo = document.createElement("a");
// list.insertBefore(titolo, list.firstChild);
// titolo.innerHTML = "Bulbasaur";

// var list = document.getElementsByTagName("li")[1];
// var titolo1 = document.createElement("a");
// list.insertBefore(titolo1, list.firstChild);
// titolo1.innerHTML = "Charmander";

// var list = document.getElementsByTagName("li")[2];
// var titolo2 = document.createElement("a");
// list.insertBefore(titolo2, list.firstChild);
// titolo2.innerHTML = "Mew";

// var list = document.getElementsByTagName("li")[3];
// var titolo3 = document.createElement("a");
// list.insertBefore(titolo3, list.firstChild);
// titolo3.innerHTML = "Pikachu";

// var list = document.getElementsByTagName("li")[4];
// var titolo4 = document.createElement("a");
// list.insertBefore(titolo4, list.firstChild);
// titolo4.innerHTML = "Squirtle";

// titolo.setAttribute("href", "https://wiki.pokemoncentral.it/Bulbasaur");
// titolo1.setAttribute("href", "https://wiki.pokemoncentral.it/Charmander");
// titolo2.setAttribute("href", "https://wiki.pokemoncentral.it/Mew");
// titolo3.setAttribute("href", "https://wiki.pokemoncentral.it/Pikachu");
// titolo4.setAttribute("href", "https://wiki.pokemoncentral.it/Squirtle");

// var img1 = document.getElementById("img1")
// var img2 = document.getElementById("img2")
// var img3 = document.getElementById("img3")
// var img4 = document.getElementById("img4")
// var img5 = document.getElementById("img5")

// img1.setAttribute("src", "img/bulba.jpeg")
// img2.setAttribute("src", "img/char.jpeg")
// img3.setAttribute("src", "img/mew.jpeg")
// img4.setAttribute("src", "img/pika.jpeg")
// img5.setAttribute("src", "img/squirtle.jpeg")

var pokemons = ["Bulbasaur", "Charmander", "Mew", "Pikachu", "Squirtle"];
var lista = document.querySelectorAll("img");
var lista2 = document.querySelectorAll("li");

for (let e = 0; e < [...lista].length; e++) {
   var element = [...lista][e];
   element.setAttribute("src", "img/" + pokemons[e] + ".jpeg")
}


