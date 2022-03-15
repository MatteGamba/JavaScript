$(function(){

    $("#btn").click(function(){

        var $item = $("#item").val();
        var $demo = $("#demo");
        $demo.append("<li>" + $item + "<span> X </span>" + "</li>");

        
        $("#item").val("");
    })
    
    $("span").each( function(){
        console.log("ciao");
        // $(this).parent().remove()
    })
})