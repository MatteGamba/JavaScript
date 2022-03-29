const apiKey = '839535395cb7604147768791299d89ce';
$('.btn').click(function (e) {
    let counter = 0;
    let cardCounter = 0;
    let id = 0;
    let LI = '';
    let flag = false;
    // e.preventDefault();
    $("#cards").html("")
    $("#meteoAttuale").html("")
    let city = $('#city').val();
    let cityNew = city.charAt(0).toUpperCase() + city.slice(1)
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    // console.log(url);
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function (response) {
            // console.log(response);
            // console.log(response.list[0].main);
            response.list.forEach(element => {
                // console.log(element);
                let time = element.dt_txt.split(" ")[1];
                time = time.substring(0,5);
                // console.log(time);
                let day = element.dt_txt.split(" ")[0];
                let description = element.weather[0].description;
                let icon = element.weather[0].icon;
                let tempMin = Math.round(element.main.temp_min-273);
                let tempMax = Math.round(element.main.temp_max-273);
                const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                
                if (counter == 0 && flag == false){
                    // prints current weather

                    let humidity = element.main.humidity;
                    let pressure = element.main.pressure;
                    let main = element.weather[0].main;
                    let att =
                    `

                    <h2>` + cityNew + `, Oggi</h2>
                    <img src="${iconUrl}">
                    <p>Temp. Min: ${tempMin} ||
                    Umidità: ${humidity}
                    Temp. Max: ${tempMax} ||
                    Pressione: ${pressure} 
                    ${main}
                    </p>
                    `;
                    $('#meteoAttuale').append(att);
                    flag = true;
                }
                // exit when all cards are full
                if (counter > 19)
                    return;
                // skips every odd time
                if(cardCounter % 2 != 0){
                    cardCounter++;
                    return;
                }

                // make sure card start on midnight of next day
                if(time != '00:00' && counter == 0){
                    return;
                }

                // create new card
                if (counter % 5 == 0) {
                    if(counter != 0)
                        id++;
                    console.log(`created a new card with counter-> ${counter} id->${id}`);
                    let card =
                        `
                    <div class="card" class="col-3">
                    <h2 class="text-center">${day}</h2>
                    <ul class="list-group list-group-flush" id="${id}"></ul>
                    </div>
                    `

                    // let card = 
                    // `
                    // <div class="card mb-3" style="max-width: 18rem;">
                    // <div class="row g-0">
                    //     <div class="col-md-4">
                    //     <img src="..." class="img-fluid rounded-start" alt="...">
                    //     </div>
                    //     <div class="col-md-8">
                    //     <div class="card-body">
                    //         <h5 class="card-title">Card title</h5>
                    //         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    //         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    //     </div>
                    //     </div>
                    // </div>
                    // </div>
                    
                    // `
                    $('#cards').append(card);
                    // $('#'+id).parent().append(`<h2>${day}</h2>`);
                }

                if(counter % 5 == 0 && counter != 0){
                    $('#'+id).append(LI);
                    counter++;
                }
                
                LI = 
                `
                <li class="list-group-item">
                <p>${time}<span class="desc">${description}</span></p>
                <p>temp: ${tempMin}°</p><img class="" src="${iconUrl}">
                </li>
                `;
                $('#'+id).append(LI);
                
                counter++;
                cardCounter++;
            });
            
        }
        
    });
    $('#city').val("");
});