const request = require("request");

const forecast = ([ latitude, longitude ], callback) => {
  const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+ encodeURIComponent(latitude) +'&lon=' + encodeURIComponent(longitude) + '&appid=88b94f835d656049a4f6dcbbaffa7afe&units=metric';

    request({url : url ,json : true} , (error , response) =>{
        if(error){
            callback(`Couldn't Connect To the Network` ,undefined);
        }
        else if(response.body.main === undefined){
            callback(`Couldn't Find the Location` , undefined);
        }
        else {
            callback(undefined,{
                temperature : response.body.main.temp,
                name : response.body.name,
                temp_min : response.body.main.temp_min,
                temp_max : response.body.main.temp_max,
                message : response.body.weather[0].description
            })
        }
    })
};

module.exports = forecast;
