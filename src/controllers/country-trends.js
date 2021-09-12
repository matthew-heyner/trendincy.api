import { oauthConnectorService, ACCESS_TOKEN, ACCESS_TOKEN_SECRET } from './services/oauthConnectorService';

async function getTrendsByCountryId(url, callback) {
    oauthConnectorService.get(url, ACCESS_TOKEN, ACCESS_TOKEN_SECRET, (error, data) => {
        if (error) console.error(error);
        data = JSON.parse(data);
        callback(JSON.stringify(data[0], ['trends', 'name', 'tweet_volume'], 2));
    });
}

export default getTrendsByCountryId;