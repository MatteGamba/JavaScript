$(function(){
    $("#btn1").on("click", function(){
        $(":header").empty(); // spariscono i testi
    });

    $("#btn2").click(function(){
        $("span.c2").css({"color":"blue"});
    });

    $("#btn3").on("mouseenter", function(){
        $("div:first").text("Jquery ONLINE");
    });

    $("#btn3").on("mouseleave", function(){
        $("div:first").text("Lorem Ipsum");
    });

    var pixel = 0;
    $("#demo").on("mousemove", function(){
        $("#demo").text("Stai percorrendo " + pixel++ + "pixel")
    })

})