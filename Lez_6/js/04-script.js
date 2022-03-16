$(function(){

    $("#btn").click(function(){

        var $item = $("#item").val();
        var $demo = $("#demo");
        $demo.append("<li>" + $item + "<span> X </span>" + "</li>");
        $("#item").val("");
        $("span").on("click", function(){
            $(this).parent().remove()
            
        })
    })
    
})