const apiKey = "ea0df21bb575b6d49d32dd952fcdba9b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&appid=ea0df21bb575b6d49d32dd952fcdba9b&units=metric&q=";

async function weatherCheck(city) {
  const response = await fetch(apiUrl + city + "&appid=${apiKey}");
  var data = await response.json();

  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search input");

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

searchBtn.addEventListener("click", () => {
  weatherCheck(searchBox.value);
});
