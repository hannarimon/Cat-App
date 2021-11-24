// fetch("https://randomfox.ca/floof/")
// .then((response => {
//     console.log(response);
// }))

let inputField = document.querySelector("#inputField");
let inputFieldBtn = document.querySelector("#inputFieldBtn");
let container = document.querySelector("#container");
let listContainer = document.querySelector("#listContainer");
let countryTitle = document.querySelector("#countryTitle");
let forecastDays = document.querySelector("#forecastDays");
console.log(forecastDays);



// fetch("https://thatcopy.pw/catapi/rest/")
//     .then((response => {
//         return response.json();
//     }))
//     .then((data => {
//         console.log(data);
//     }))


inputFieldBtn.addEventListener("click", function () {
    fetch(`https://goweather.herokuapp.com/weather/${inputField.value}`)
    .then((response => {
        
        return response.json();
    }))
    .then((data => {
        // console.log(data);
        let weatherData = data;
        console.log(weatherData);
        listContainer.innerHTML += `
        <h2>${inputField.value}</h2>
        <h3>Today:</h3>
        <p>Temperature: ${weatherData.temperature}</p>
        <p>Wind: ${weatherData.wind}</p>
        `
        inputField.value = "";
        // if (forecastDays.value == 1) {
        //     
        // }
    }))

})



    
    

    
    // http://shibe.online/api/shibes?count=5&urls=[true/false]&httpsUrls=[true/false]