var btn = document.querySelector("#btn");
var lista = document.querySelector("#lista");
var inputItem = document.querySelector("#item");
var feedback = document.querySelector("#feedback")

lista.addEventListener("click", function(event){

    if(event.target.tagName === "LI"){
        event.target.classList.toggle("barrato");
    }

}, false);

function inserisci(){
    var li = document.createElement("li");
    var item = inputItem.value;
    var txtNode = document.createTextNode(item);
    li.appendChild(txtNode); 

    lista.appendChild(li);

    var icon = document.createElement("span");
    var X = document.createTextNode("X");
    icon.appendChild(X);
    li.appendChild(icon);

    icon.onclick = function(){
        this.parentElement.remove();
    }

    document.getElementById("item").value = "";
}


btn.addEventListener("click", inserisci, false);




// function inserisci(){
//         var item = inputItem.value;
    
//         lista.innerHTML += "<li>" + item + "</li>";
    
//         var elLi = document.querySelectorAll("li");
    
//         for(var i = 0; i < elLi.length; i++){
//             elLi[i].onclick = function(event){
//                 event.target.setAttribute("class", "danger");
//                 // this.setAttribute("class", "rosso")
//             }
//         }
    
//         document.querySelector("#item").value = "";
    
//     }