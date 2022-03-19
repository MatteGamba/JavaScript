// $("#btn").click(function(){
//     $.ajax({
//         url: "https://randomuser.me/api/?results=5",
//         type: "get",
//         dataType: "json",
//         success: function (data) {
//             miaFunzione(data);
//         },
//         error: function(){
//             console.log("Qualcosa è andato storto");
//         }
//     });
// })

// function miaFunzione (data){
//     this.dati = data;
//     console.log(this.dati);
// }

$(function(){
    // $.ajax({
    //     url: "http://dummy.restapiexample.com/api/v1/employees",
    //     type: "get",
    //     dataType: "json",
    //     success: function (data) {
    //         var dipendenti = [];
    //         $.each(data.data, function(key, value){
    //             dipendenti.push("<li id='" + key + "'>" + value.employee_name + "</li>");
    //         });
    //         console.log(dipendenti);
    //         dipendenti.forEach(element => {
    //             $("#demo").append(element);
    //         });
    //     },
    //     error: function(){
    //         console.log("Qualcosa non va");
    //     }
    // })

    // SHORTHAND
    // $.getJSON("http://dummy.restapiexample.com/api/v1/employees", function (data) {
    //         console.log(data);
    // });

//     $.get("http://dummy.restapiexample.com/api/v1/employees", function(data){
        
//         console.log(data);
//     }
//     );

//     $.put();
//     $.post();
//     $.delete();

    $.ajax({
        url : "http://dummy.restapiexample.com/api/v1/create",
        type : "post",
        data: {
            name:"Matteo",
            surname:"Gamba",
            salary: 300000,
            città: "Torino"
        },
        success: function(response){
            console.log(response);
        }
    });

    $.ajax({
        url: "http://dummy.restapiexample.com/api/v1/delete/2",
        type: "delete",
        dataType: "json",
        success: function(response){
            console.log(response);
        }
    })


})