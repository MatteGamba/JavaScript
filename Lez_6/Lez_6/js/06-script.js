var utenti = [];


$("form").submit("click", function (event){
    var $user = $("#user").val();
    var $pass = $("#password").val();
    if($user != "Dani" && $pass != "1234"){
        event.preventDefault();
    }
})