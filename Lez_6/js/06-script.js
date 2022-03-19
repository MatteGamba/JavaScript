$(function(){
    var utenti = [];

    $("form").submit("click", function (event){
        var $user = $("#user").val();
        var $pass = $("#password").val();
        if($user != "Dani"){
            event.preventDefault();
            $("#mex").html("User errato")
        }else if($pass != "1234"){
            event.preventDefault();
            $("#mex").html("Password errata")
        }
    })
})

// var URL = "https://reqres.in/api/users?page=1";

$.ajax({
    url: "https://reqres.in/api/users?page=1",
    type: "get",
    dataType: "json",
    success: function (data) {
        var utenti = [];
        data.data.forEach(element => {
            utenti.push(element)
        })
        for (var i = 0; i < utenti.length; i++) {
        $("#sezione").append(
            "<div class='card' style='width: 18rem;'>" +
            "<img src='" + utenti[i].avatar + "' class='card-img-top'>" +
            "<div class='card-body'>"+
              "<h5 class='card-title'>" + utenti[i].first_name + "</h5>"+
              "<p class='card-text'>" + utenti[i].last_name + "</p>"+
              "<p class='card-mail'>" + utenti[i].email +"</p>"+
            "</div>"
        )  
        }
    }
});

var nuovi = [];
$("#btn").on("click", function(){
    nuovi.push(
        {
            "nome" : $('#name').val(),
            "cognome" : $('#surname').val(),
            "email" : $('#mail').val()
        }
    )
    console.log(nuovi);
    $("#sezione").append(
        "<div class='card' style='width: 18rem;'>" +
        "<img src='' class='card-img-top'>" +
        "<div class='card-body'>"+
          "<h5 class='card-title'>" + $("#name").val() + "</h5>"+
          "<p class='card-text'>" + $("#surname").val() + "</p>"+
          "<p class='card-mail'>" + $("#mail").val() +"</p>"+
        "</div>"
    )
})