var ulEl = document.querySelector("ul");

console.log(ulEl.firstElementChild);
console.log(ulEl.firstChild);

var itemDue = document.getElementById("due");
var elText = itemDue.firstChild.nodeValue;
elText = elText.replace("Studiare", "Programmare");
itemDue.firstChild.nodeValue = elText;