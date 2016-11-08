const express = require('express');
const axios = require('axios');
const request =  require('request');
const app = express();

url = 'http://api.openweathermap.org/data/2.5/forecast/city?id=6167863&APPID=517985c009ccca68942debb4afe4feb2';

// app.get('/', (req,res) => {
//     request(url, (error,response,body)=>{})
// })

request(url, function (error, response, body) {
 if (!error && response.statusCode == 200) {
//    console.log(body);
   var list = JSON.parse(body).list;
   var weather = [];
    for(let i=0;i<list.length;i++){
        weather.push(
            {"temp":list[i].main.temp,
            "tempMin":list[i].main.temp_min,
            "tempMax":list[i].main.temp_max,
            "humidity":list[i].main.humidity,
            "date":list[i].dt_txt,
            "icon":list[i].weather[0].icon,
            "description":list[i].weather[0].description
        });
    }
    console.log(weather);
 }
 
})

app.listen(8080, () => {
	console.log('Server Started on http://localhost:8011');
	console.log('Press CTRL + C to stop server');
});