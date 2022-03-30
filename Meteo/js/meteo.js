const apiKey = '839535395cb7604147768791299d89ce';
$('.btn').click(function (e) {
    let counter = 0;
    let cardCounter = 0;
    let id = 0;
    let LI = '';
    let flag = false;
    // e.preventDefault();
    $(".card").html("")
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
                let days1 = new Date(element.dt * 1000)
                let days = days1.toLocaleDateString("it", {weekday: "long"})
                let day = days.charAt(0).toUpperCase() + days.slice(1)
                console.log(days);
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
                    Umidità: ${humidity} ||
                    Temp. Max: ${tempMax} ||
                    Pressione: ${pressure} ||
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
                    // console.log(`created a new card with counter-> ${counter} id->${id}`);
                    let card =
                        `
                    <h2 class="text-center">${day}</h2>
                    <div class="card">
                    <div class="mini-card" id="${id}">
                    <div class="col-1"></div>
                    </div>
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
                    $('.row').append(card);
                    // $('#'+id).parent().append(`<h2>${day}</h2>`);
                }

                if(counter % 5 == 0 && counter != 0){
                    $('#'+id).append(LI);
                    counter++;
                }
                
                LI = 
                `
                <div class="single-card col-lg-2">
                <p id="orario">${time}</p>
                <p class="desc">${description}</p>
                <span id="tempe">Temp: ${tempMin}°</span>
                <img class="image" src="${iconUrl}">
                </div>
                `;
                $('#'+id).append(LI);
                
                counter++;
                cardCounter++;
            });
            
            COL = 
            `
            <div class="col-lg-1"></div>
            `
            $(".mini-card").append(COL)
            $("#today").attr("class", "oggi")
        }
        
    });
    $('#city').val("");
});