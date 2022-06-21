const request = require("request");

const geocode = (address, callback) => {
  const geourl =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoicmFodWw4NTMyMDg4NzQ1IiwiYSI6ImNsNG1kMWJtczAzMzczY24zNXFjcGZrY3UifQ.tHCT971auG3AuxtIHf5y4g&limit=1';

    request({url : geourl ,json : true} ,(error,response) => {
        if(error){
            callback(`Couldn't Connect To the Network` ,undefined);
        }
        else if(response.body.features.length === 0){
            callback(`Couldn't Found the Location . Try Another Search` ,undefined);

        }
        else{
            callback(undefined , {
                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                location : response.body.features[0].place_name,
            });
        }
    })
};

module.exports = geocode;
