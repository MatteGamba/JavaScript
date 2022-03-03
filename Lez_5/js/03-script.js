var username = document.querySelector("#username");
var feedback = document.querySelector("#feedback");

function suggerisci(){
    var user = username.value;
    if(user.length <= 5){
        feedback.innerHTML = "Stai usando " + user.length + " caratteri";
        feedback.className = "danger";
    }else{
        feedback.innerHTML = "Stai usando " + user.length + " caratteri"
        feedback.className = "warning";
    }
    // console.log(user.length);
}

function controllaUser(){
    feedback.innerHTML = ""
}

username.addEventListener("input", suggerisci, false);
username.addEventListener("blur", controllaUser, false);
