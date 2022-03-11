//Fetch
const url = "https://reqres.in/api/users?page=2";
var lista = document.querySelector("#lista");
var card = document.querySelector(".card");

var dati = [];

fetch(url)
.then(data => {return data.json()})
.then(response => {
    this.dati.push(response);
    console.log(response);
    prendiDati(response.data);
})

function prendiDati(dati){
    console.log(dati);
    dati.forEach(element => {
        
        var li = document.createElement("li"); 
        var txtNote = document.createTextNode(element.first_name + " " + element.last_name);
        li.appendChild(txtNote);
        lista.appendChild(li);

        li.addEventListener("click", function(event){
        
            if(event.target.tagName === "LI"){
                var carta = document.getElementById("carta");
                carta.classList.toggle("block");
                // carta.classList.add("block");
                var img = document.querySelector("#img");
                img.setAttribute("src", element.avatar);
                var title = document.querySelector("#title");
                title.innerHTML = "I'm " + element.first_name + " " + element.last_name;
                var mail = document.querySelector("#mail");
                mail.innerHTML = "Email : " + element.email;
            }
            
        });
    }, false);
}



