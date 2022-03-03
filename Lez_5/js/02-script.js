var username = document.querySelector("#username");
var feedback = document.querySelector("#feedback");

function suggerisci(){
    feedback.innerHTML = "Ti conviene utilizzare uno Username di almeno 5 carattteri";
    feedback.className = "warning";
}

function controllaUser(){
    var user= username.value;
    if(user.length <= 5){
        feedback.innerHTML = "Non puoi usare uno username cosi corto";
        feedback.className = "danger";
    }else{
        feedback.innerHTML = "";
    }
}

username.addEventListener("focus", suggerisci, false);
username.addEventListener("blur", controllaUser, false);