const express = require('express');
const axios = require('axios');
const request =  require('request');
const app = express();
 
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
 next();
});

let city = "Toronto";
url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+ city +"&units=metric&APPID=517985c009ccca68942debb4afe4feb2";
//url = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&APPID=517985c009ccca68942debb4afe4feb2";

app.get('/', (req,res) => {
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
        //    console.log(body);
        var list = JSON.parse(body).list;
        var weather = [];
            for(let i=0;i<list.length;i++){
                weather.push(
                    {"temp":list[i].temp.day,
                    "tempMin":list[i].temp.min,
                    "tempMax":list[i].temp.max,
                    "humidity":list[i].humidity,
                    "date":list[i].dt,
                    "icon":list[i].weather[0].icon,
                    "description":list[i].weather[0].description
                });
            }
            console.log(weather);
            res.json(weather)
        }
 
    })

})



app.listen(8080, () => {
	console.log('Server Started on http://localhost:8011');
	console.log('Press CTRL + C to stop server');
});


//Use this API for getting temp in degree C. Access the temp by city name
//Space is allowed for places like New york etc.
//http://api.openweathermap.org/data/2.5/forecast?q=Toronto&units=metric&APPID=517985c009ccca68942debb4afe4feb2

//http://api.openweathermap.org/data/2.5/forecast/daily?q=Toronto,ca&APPID=517985c009ccca68942debb4afe4feb2
//http://api.openweathermap.org/data/2.5/forecast?q=Toronto,ca&APPID=517985c009ccca68942debb4afe4feb2

//try Accessing sunrise and sunset time 

// {"temp":list[i].main.temp,
//                     "tempMin":list[i].main.temp_min,
//                     "tempMax":list[i].main.temp_max,
//                     "humidity":list[i].main.humidity,
//                     "date":list[i].dt_txt,
//                     "icon":list[i].weather[0].icon,
//                     "description":list[i].weather[0].description
//                 });

