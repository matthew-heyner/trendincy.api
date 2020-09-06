const dotenv = require('dotenv');
const production = process.env.NODE_ENV === 'production';
const express = require('express');
if (!production) dotenv.config();
const trends = require('./authentication');

const PORT = process.env.PORT || 8080;

main().catch((err) => console.error(err.message, err));

async function main() {
    const app = express();

    app.listen(PORT, () => {
        if (!production) console.log(`listening on http://127.0.0.1:${PORT}`);
    });

    app.get('/trends/:woeid', async (req, res) => {
        await trends.getTrends(
            `https://api.twitter.com/1.1/trends/place.json?id=${req.params['woeid']}`,
            (result) => {
                res.send(result);
            }
        );
    });
}
