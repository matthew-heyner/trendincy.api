const OAuthConnectorService = require('../services/oauthConnectorService');

function CountryController(url, callback){
    console.log('CONSUMER_KEY: ' + process.env.CONSUMER_KEY);
    console.log('CONSUMER_SECRET: ' + process.env.CONSUMER_SECRET);
    console.log('ACCESS_TOKEN: ' + process.env.ACCESS_TOKEN);
    console.log('ACCESS_TOKEN_SECRET: ' + process.env.ACCESS_TOKEN_SECRET);
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