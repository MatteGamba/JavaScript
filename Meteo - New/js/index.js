$(function(){

    
    $("#addon-wrapping").on("click", function(){
        
        var URL = "https://api.openweathermap.org/data/2.5/forecast?q=" + $("#nomeCit").val() + "&appid=369c8c1b096665399a3cbf6ecfbcae0b"
        var input = $("#nomeCit").val()      

        $.ajax({
            url: URL,
            type: "get",
            dataType: "json",
            success: function(data){
                var ele = []  
                data.list.forEach(element => {
                    var gg = new Date(element.dt * 1000).toLocaleString("it", {
                        weekday: "long"
                    })
                    ele.push(gg)
                });
                var eleNew = [...new Set(ele)]
                data.list.forEach(element => {
                    console.log(element.main.temp);
                });
                for (let i = 0; i < eleNew.length; i++) {
                    
                    
                    $(".group-card").append(
                        '<div class="card" style="width: 18rem;">'+
                            '<img src="..." class="card-img-top" alt="...">'+
                            '<div class="card-body">'+
                                '<h5 class="card-title">' + eleNew[i] + '</h5>'+
                                '<h6 class="card-name">' + input + '</h6>'+
                                '<p class="card-text">.</p>'+
                                '<a href="#" class="btn btn-primary">Go somewhere</a>'+
                            '</div>'+
                        '</div>'
                    )
                    
                }
            }
        })

       




        $("#nomeCit").val("")
    })






})