$(function(){

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


$.ajax({
    url: "http://localhost:8000/utenti",
    type: "get",
    dataType: "json",
    success: function (data) {
        for (var i = 0; i < data.length; i++) {
        $("#sezione").append(
            "<div class='card' id = '" + data[i].id + "'>" +
            "<img src='" + data[i].img + "' class='card-img-top'>" +
            "<div class='card-body'>"+
              "<h5 class='card-title'>" + "<span>Nome: </span>" + data[i].name + "</h5>"+
              "<p class='card-text'>" + "<span>Cognome: </span>" + data[i].surname + "</p>"+
              "<p class='card-mail'>" + "<span>Email: </span>" + data[i].email +"</p>"+
                "<button class ='btnDel'> X </button>" +
              "</div>"
        )  
        }
    }
});

$("#btn").on("click", function(){

    $.ajax({
        url: 'http://localhost:8000/utenti',
        type: 'post',
        dataType: 'json',
        data: {
            name: $("#name").val(),
            surname: $("#surname").val(),
            email: $("#mail").val(),
            img: $("#imgUrl").val()
        },
        success: function (response){
            $("#sezione").append(
                "<div class='card' id = '" + response.id + "'>" +
                "<img src='" + response.img + "' class='card-img-top'>" +
                "<div class='card-body'>"+
                  "<h5 class='card-title'>" + "<span>Nome: </span>" + response.name + "</h5>"+
                  "<p class='card-text'>" + "<span>Cognome: </span>" + response.surname + "</p>"+
                  "<p class='card-mail'>" + "<span>Email: </span>"  + response.email +"</p>"+
                  "<button class ='btnDel'> X </button>" +
                  "</div>"
            )          
        }
    })
    $("#name").val("");
    $("#surname").val("");
    $("#mail").val("");
    $("#imgUrl").val("")
})


$(document).on("click", ".btnDel", function(){
    var key = this.parentNode.parentNode.id;
    $.ajax({
        url: 'http://localhost:8000/utenti/' + key,
        type: "delete",
        dataType: "json",
        success: function(response){
           $("#" + key).remove()
        }
    })

})
})