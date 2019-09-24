var loc = document.getElementById("loc");
var degr = document.getElementById("degr");
var descr = document.getElementById("descr");
var btnSearch = document.getElementById("btnSearch");
var inpCity = document.getElementById("inpCity");
console.log(inpCity);
// console.log(degr)
// console.log(descr)

const appKey = "a54fee1878380e9147f7f7180644f6c8";
console.log(appKey)

function getCity(e) {
    e.preventDefault();
    let cityS = inpCity.value;
    weatherBallon(cityS);
}
btnSearch.addEventListener("click", getCity)

function weatherBallon(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appKey)
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data) {
            console.log(data);
            drawWeather(data);
        })
        .catch(function(err) {
            console.log(err)
        })
}

function drawWeather(data) {
    var cels = Math.round(parseFloat(data.main.temp) - 273.15);
    var desc = data.weather[0].description;
    degr.innerHTML = cels + "&deg;";
    loc.innerHTML = data.name;
    descr.innerHTML = desc;
}

window.onload = function() {
    weatherBallon("Berlin");

}