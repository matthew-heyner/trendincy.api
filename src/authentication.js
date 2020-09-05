const oauth = require('oauth');

const CONSUMER_KEY = process.env.CONSUMER_KEY;
const CONSUMER_SECRET = process.env.CONSUMER_SECRET;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

const oauthConsumer = new oauth.OAuth(
    'https://twitter.com/oauth/request_token',
    'https://twitter.com/oauth/access_token',
    CONSUMER_KEY,
    CONSUMER_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
);

module.exports = {
    getTrends,
};

async function getTrends(url, callback) {
    oauthConsumer.get(url, ACCESS_TOKEN, ACCESS_TOKEN_SECRET, (error, data) => {
        if (error) console.error(error);
        data = JSON.parse(data);
        callback(JSON.stringify(data, 0, 2));
    });
}