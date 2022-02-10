//GET ELEMENT BY ID
var uno = document.getElementById("uno");
console.log(typeof uno);
console.log(uno.innerHTML);
console.log(uno.innerText);
console.log(uno.textContent);

uno.className = "red";
uno.textContent = "Ciao questa è la tua spesa";

//GET ELEMENTS BY TAG NAME
var elsLi = document.getElementsByTagName("li");
console.log(elsLi);

for(var i = 0; i < elsLi.length; i++){
    elsLi[i].className = "red";
}

//GET ELEMENT BY CLASS NAME
// var elsLi = document.getElementsByClassName("blue");
// console.log(elsLi);

// for( var i = 0; i < elsLi.length; i++){
//     elsLi[i].className = "red";
// }