"use strict"

// SELETTORI
$("#titolo") // == documenti.getElementById o querySelector
console.log($("#titolo"));

$("#titolo").addClass("rosso");

// Recupero piu elementi dello stesso tipo
$(":header").addClass("rosso");

// Seleziono i primi due elmenti li
// $("li:lt(2)").addClass("barrato");

// Effetti
$("li:lt(3)").hide().fadeIn(2500);

$("li").on("click", function(){
    // $(this).remove();
    // $(this).hide();
    $(this).fadeOut(2500);
});

$("ul li").on("click", function(){
    $(this).removeClass("rosso");
});


// READY FUNCTION
// $(document).ready(function(){
//     $("button").click(function(){
//         $("ul").hide().delay(1500).fadeIn(1400);
//     })
// })

// READY FUNCTION ABBREVIATA
$(function(){
    // var $listaHtml = $("ol").html();
    // console.log($listaHtml);
    // $("#demo").append($listaHtml);

    // var $listali = $("li").html(); // .html prende la prima occorrenza
    // console.log($listali);

    // $("li").append(" nuovo li: " + $listali) // qui invece prende tutti gli li

    $("li:contains('Angular')").text("Angular 12, no-JS");
    $("ul").before("<p class='rosso' > Appena aggiornati </p>");
    $("ul li:last").after("<li> Ruby </li>")
    $("ul li:last").attr("id", "sei");
    $("li").css({
        "background-color":"black",
        "padding-left": "66px"
    })

    $("li").each(function(){
        var $idSelezionati = this.id;
        $(this).append("<span class = 'rosso'>" + " " + $idSelezionati + "</span>")
    })
})
