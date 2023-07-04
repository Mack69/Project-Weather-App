const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "ea0df21bb575b6d49d32dd952fcdba9b";

async function weatherCheck(city) {
  const response = await fetch(apiUrl + city + "&appid=${apiKey}");
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed = "km/h";
}

weatherCheck();
