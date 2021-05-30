import {MY_API_KEY} from './config.js';

var input = document.getElementById('inputBox');
var button = document.getElementById('btn');
var latitude = document.getElementById('latitude');
var longitude = document.getElementById('longitude');
var main = document.getElementById('main');
var description = document.getElementById('description');
var temperature = document.getElementById('temperature');
var minTemperature = document.getElementById('minTemperature');
var maxTemperature = document.getElementById('maxTemperature');
var city = document.getElementById('city');
var pressure = document.getElementById('pressure');
var humidity = document.getElementById('humidity');
var country = document.getElementById('country');
var wind = document.getElementById('wind');
var cloud = document.getElementById('cloud');

button.addEventListener('click',function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid='+MY_API_KEY)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var latitudeVal = data['coord']['lat'];
        var longitudeVal = data['coord']['lon'];
        var mainVal = data['weather'][0]['main'];
        var descriptionVal = data['weather'][0]['description'];
        var temperatureVal = data['main']['feels_like'];
        var minTemperatureVal = data['main']['temp_min'];
        var maxTemperatureVal = data['main']['temp_max'];
        var cityVal = data['name'];
        var pressureVal = data['main']['pressure'];
        var humidityVal = data['main']['humidity'];
        var countryVal = data['sys']['country'];
        var windVal = data['wind']['speed'];
        var cloudVal = data['clouds']['all'];
        input.value ="";


        latitude.innerHTML = "[ " + latitudeVal;
        longitude.innerHTML = longitudeVal + " ]";
        main.innerHTML = "Climate : " + mainVal;
        description.innerHTML = "Description : " + descriptionVal;
        temperature.innerHTML = temperatureVal + ' &#8451;' ;
        minTemperature.innerHTML = "Min Temp : " + minTemperatureVal + ' &#8451;';
        city.innerHTML = cityVal;
        maxTemperature.innerHTML = "Max Temp : " + maxTemperatureVal + ' &#8451;';
        pressure.innerHTML = "Pressure : " + pressureVal + " pcals";
        humidity.innerHTML = "Humidity : " + humidityVal + " hpa";
        country.innerHTML = countryVal;
        wind.innerHTML = "Wind : " + windVal + " m/s";
        cloud.innerHTML = "Cloud : " + cloudVal + " %";

        
    })
    .catch(err => alert("Wrong city name!"));
});






// https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=48e55032ddd7bb8e27a7a16f3964b724