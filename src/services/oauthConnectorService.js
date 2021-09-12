const oauth = require('oauth');

const CONSUMER_KEY = process.env.CONSUMER_KEY;
const CONSUMER_SECRET = process.env.CONSUMER_SECRET;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

const oauthConnector = new oauth.OAuth(
    'https://twitter.com/oauth/request_token',
    'https://twitter.com/oauth/access_token',
    CONSUMER_KEY,
    CONSUMER_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
);

module.exports = {oauthConnector, ACCESS_TOKEN, ACCESS_TOKEN_SECRET };