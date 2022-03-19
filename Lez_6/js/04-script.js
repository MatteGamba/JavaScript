$(function(){
    $("#btn").click(function(){
        var $item = $("#item").val();
        $("#demo").append("<li>" + $item + "<span> X </span>" + "</li>");
        $("#item").val("");
    })
    
    $("#item").keyup(function(event){
        if(event.keyCode == 13){
            $("#btn").click();
        }
    })

    $(document).on("click", "span", function(){
        $(this).parent().remove() 
    })

    $(document).on("click", "li", function(){
        $(this).toggleClass("barrato")
    })
})