
let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let allCities= document.getElementById("city");

let getWeather = () => {
    let userInput = allCities.value;
    if (userInput.length == 0) {
        result.innerHTML = `<h3 class="msg"> Please enter a city name</h3>`
    } else {
        let url = `https:api.openweathermap.org/data/2.5/weather?q=${userInput}&APPID=d955a60452364facb8c107a5be93ff59&units=metric`;
        allCities.value = "";
        fetch (url)
        .then((res) => res.json())
        .then ((data) => {
            console.log(data);
            console.log(data.weather[0].icon);
            console.log(data.weather[0].description);
            console.log(data.name);
            console.log(data.main.temp_min);
            console.log(data.main.temp_max);
            result.innerHTML = `
            <h2 class="city-name">${data.name}</h2>
            <h4 class="desc">${data.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${data.main.temp} &#176;</h1>
            <div class="temp-container">
                <div>
                    <h4 class="title">min</h4>
                    <h4 class="temp">${data.main.temp_min}&#176;</h4>
                </div>
                <div>
                    <h4 class="title">max</h4>
                    <h4 class="temp">${data.main.temp_max}&#176;</h4>
                </div>
            </div>
            `;
         })
         .catch(() => {
            result.innerHTML = `<h3 class="msg"> City not found</h3>`;
         });
    }
};
searchBtn.addEventListener("click", getWeather);
document.addEventListener("load", getWeather);

