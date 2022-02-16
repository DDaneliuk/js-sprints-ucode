fetch(
  "https://api.openweathermap.org/data/2.5/onecall?lat=50.45&lon=30.52&exclude=current,minutely,hourly,alerts&appid=6b64e0be2d9dc2e9d1022705f06c3f21"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    ShowWeather(data);
  });

function ShowWeather(data) {
  console.log(data.daily);
  weather = data.daily;
  let weatherBlock = document.querySelector(".weather");
  weather.forEach((item) => {
    let deg =
      (weather[weather.indexOf(item)].temp.day - 273).toFixed() + "&deg;";
    const newWeather = document.createElement("div");
    newWeather.innerHTML = `<div class="day">
    <p>${item.weather[0].main}</p>
    <img src="https://openweathermap.org/img/wn/${item.weather[0]["icon"]}@2x.png">
    <p>${deg}</p>
  </div>`;
    weatherBlock.appendChild(newWeather);
  });
}
