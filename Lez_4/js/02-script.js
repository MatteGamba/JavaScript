var demo = document.querySelector("#demo");

// Recupero dati da API esterna
// Metodo fetch

// const url = "https://jsonplaceholder.typicode.com/posts"

// var dati = [];

// fetch(url)
//     .then(data => {return data.json()
//     })

//     .then(response =>{
//         // console.log(response);
//         for(var i = 0; i < response.length; i++){

//             this.dati.push(response[i]);
//             demo.innerHTML += "<li> testo: " + response[i].body + "</li>";
//         }
//     })

// console.log(dati);

// const url = "https://jsonplaceholder.typicode.com/photos";

// var dati = [];

// fetch(url)
//     .then(data => {return data.json()
//     })

//     .then(response =>{
//         // console.log(response);
//         for(var i = 0; i < 20; i++){

//             this.dati.push(response[i]);
//             demo.innerHTML += "<li><img src= " + response[i].thumbnailUrl + "></li>";
//         }
//     })

// console.log(dati);

const url = "https://jsonplaceholder.typicode.com/photos";

var dati = [];

fetch(url)
    .then(data => {return data.json()
    })

    .then(response =>{
        // console.log(response);
        for(var i = 0; i < 20; i++){

            this.dati.push(response[i]);
            demo.innerHTML += "<li><img src= " + response[i].thumbnailUrl + "></li>";
        }
    })


console.log(dati);