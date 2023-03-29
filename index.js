const box = document.getElementById("weatherBox");
const cityEl = document.getElementById("city");
const temperatureEl = document.getElementById("temperature");
const windspeedEl = document.getElementById("windspeed");
//const winddirectionEl = document.getElementById("winddirection");
const weathercodeEl = document.getElementById("weathercode");

function getWeatherByCode(code) {
    switch (code) {
        case 0:
            return "Clear sky";
        case 1:
            return "Mainly clear";
        case 2:
            return "Partly cloudy";
        case 3:
            return "Overcast";
        case 45:
            return "Fog";
        case 48:
            return "Depositing rime fog";
        case 51:
            return "Drizzle: light intensity";
        case 53:
            return "Drizzle: moderate intensity";
        case 55:
            return "Drizzle: dense intensity";
        case 56:
            return "Freezing Drizzle: light intensity";
        case 57:
            return "Freezing Drizzle: dense intensity";
        case 61:
            return "Rain: slight intensity";
        case 63:
            return "Rain: moderate intensity";
        case 65:
            return "Rain: heavy intensity";
        case 66:
            return "Freezing Rain: light intensity";
        case 67:
            return "Freezing Rain: heavy intensity";
        case 71:
            return "Snow fall: slight intensity";
        case 73:
            return "Snow fall: moderate intensity";
        case 75:
            return "Snow fall: heavy intensity";
        case 77:
            return "Snow grains";
        case 80:
            return "Rain showers: slight";
        case 81:
            return "Rain showers: moderate";
        case 82:
            return "Rain showers: violent";
        case 85:
            return "Snow showers: slight";
        case 86:
            return "Snow showers: heavy";
        case 95:
            return "Thunderstorm";
        case 96:
            return "Thunderstorm with slight hail";
        case 99:
            return "Thunderstorm with heavy hail";
    }
}

async function f() {
    const response = await fetch("https://get.geojs.io/v1/ip/geo.json");
    const obj = await response.json();
    //console.log(obj);
    const { city, latitude, longitude } = obj;
    //console.log(city + " " + latitude + " " + longitude);

    const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude
        }&longitude=${longitude
        }&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
    );
    const weather = await weatherResponse.json();
    console.log(weather.current_weather);
    const { temperature, windspeed, winddirection, weathercode } = weather.current_weather;
    console.log(temperature + " " + windspeed + " " + winddirection + " " + weathercode);

    cityEl.innerText = city;
    temperatureEl.innerText = temperature;
    windspeedEl.innerText = windspeed + " km/h";
    //winddirectionEl.innerText = winddirection;
    weathercodeEl.innerText = "Snow fall: slight intensity";//getWeatherByCode(weathercode);
}
f();

