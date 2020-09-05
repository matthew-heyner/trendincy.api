const dotenv = require('dotenv');
const production = process.env.NODE_ENV === 'production';
const express = require('express');
const path = require('path');
const fs = require('fs');
var INDEX;
if (!production) {
    dotenv.config();
    INDEX = fs.readFileSync(path.resolve(__dirname, '.', 'index.html'), {
        encoding: 'utf8',
    });
}
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
                if (!production) res.send(devTest(result));
                else res.send(result);
            }
        );
    });
}

function devTest(result) {
    return INDEX.replace(
        'CONTENT',
        `<h1>Trends</h1>
        <br>
        <p>${result}</p>`
    );
}
