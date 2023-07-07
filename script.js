const apiKey = "ea0df21bb575b6d49d32dd952fcdba9b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&appid=ea0df21bb575b6d49d32dd952fcdba9b&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function weatherCheck(city) {
  const response = await fetch(apiUrl + city + "&appid=${apiKey}");
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "Resources/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "Resources/rain.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "Resources/mist.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "Resources/drizzle.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "Resources/clear.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "Resources/snow.png";
    } else if (data.weather[0].main == "Haze") {
      weatherIcon.src = "Resources/mist.png";
    }

    document.querySelector(".error").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  weatherCheck(searchBox.value);
});
