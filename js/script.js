function httpGetAsync(city) {
	var url = 'https://api.openweathermap.org/data/2.5/weather?id=' + city + '&appid=yourapikey';
	var request = new XMLHttpRequest();

	request.onreadystatechange = function () {
		if (request.readyState === 4) {
			if (request.status === 200) {
				document.body.className = 'ok';
				console.log('fetching weather ...');

				var icon = JSON.parse(this.responseText);
				stateIcon = icon.weather[0].icon;
				document.getElementById('icon').innerHTML = '<img src="https://openweathermap.org/img/w/' + stateIcon + '.png" id="icon"/>';

				var city = JSON.parse(this.responseText);
				document.getElementById("city").innerHTML = city.name;

				var myObjTemp = JSON.parse(this.responseText);
				var kelvin = myObjTemp.main.temp;
				var celcius = kelvinToCelcius(kelvin);
				document.getElementById("temp").innerHTML = celcius;

				var weather = JSON.parse(this.responseText);
				document.getElementById("weather").innerHTML = weather.weather[0].description;

				var wind = JSON.parse(this.responseText);
				document.getElementById("wind").innerHTML = wind.wind.speed;

				var visibility = JSON.parse(this.responseText);
				document.getElementById("visibility").innerHTML = visibility.visibility;

				var sunrise = JSON.parse(this.responseText);
				document.getElementById("sunrise").innerHTML = sunrise.sys.sunrise;

				var myObjPress = JSON.parse(this.responseText);
				document.getElementById("pressure").innerHTML = myObjPress.main.pressure;

				var myObjHum = JSON.parse(this.responseText);
				document.getElementById("humidity").innerHTML = myObjHum.main.humidity;

				var sunrise = JSON.parse(this.responseText);
				var sunriseTimestamp = sunrise.sys.sunrise
				var sunriseTime = timestampToTime(sunriseTimestamp);
				document.getElementById("sunrise").innerHTML = sunriseTime;

				var sunset = JSON.parse(this.responseText);
				var sunsetTimestamp = sunset.sys.sunset
				var sunsetTime = timestampToTime(sunsetTimestamp);
				document.getElementById("sunset").innerHTML = sunsetTime;
			}
		}
	};

	request.open("GET", url, true);
	request.send(null);
}

function kelvinToCelcius(temp) {
	temp = parseFloat(temp);
	celciusValue = temp - 273.15;
	var celcius = parseFloat(celciusValue).toFixed();

	return celcius;
}

function timestampToTime(timestamp) {
	var date = new Date(timestamp * 1000);
	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();
	var seconds = "0" + date.getSeconds();
	var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

	return formattedTime;
}