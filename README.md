# Web weather version 0.1

## Description
simple web application for checking weather for selecting cities
* current weather


## Configuration steps
### for following steps user needs to have Openweather api key

* to define city you need to insert city id, in index.html

###### for example

```sh
<option value="3083829">Szczecin</option>
```

* to send requests you need to have api key, please insert api key to script.js

###### for example

```sh
var url = 'https://api.openweathermap.org/data/2.5/weather?id=' + city + '&appid=apiKey';
```