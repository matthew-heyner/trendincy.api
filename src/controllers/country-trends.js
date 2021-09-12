const OAuthConnectorService = require('../services/oauthConnectorService');

function CountryController(url, callback){
    OAuthConnectorService.oauthConnector.get(url, 
        OAuthConnectorService.ACCESS_TOKEN, 
        OAuthConnectorService.ACCESS_TOKEN_SECRET, 
        (error, data) => {
            if (error) console.error(error);
            data = JSON.parse(data);
            callback(JSON.stringify(data[0], ['trends', 'name', 'tweet_volume'], 2));
    });
}

module.exports = CountryController;