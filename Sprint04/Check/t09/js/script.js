let forecast = document.querySelector('.forecast');
fetch('https://api.openweathermap.org/data/2.5/onecall?lat=50.431759&lon=30.517023&units=metric&appid=48880ff58dbedf3d714f6c31654e8a71')
    .then(function(resp){return resp.json()})
    .then(function(data){
        console.log(data);
        forecast.innerHTML += `<div class="city">${data.timezone}</div>
                                <div class="allDays"></div>`
        let allDays = document.querySelector('.allDays');
        for(let i=0; i<7; i++){
            allDays.innerHTML += `<div class="day">
                                        <p class="date">${timeConverter(data.daily[i].dt)}</p>
                                        <img src="assets/images/${data.daily[i].weather[0].icon}.png" alt="weater">
                                        <p class="temper">${data.daily[i].temp.day}&nbsp;&deg;C</p>`
        }
    })

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month;
    return time;
}