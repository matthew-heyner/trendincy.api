const express = require('express');
const CountryTrendsController = require('../controllers/country-trends')

const CountryTrendRouter = express.Router();

CountryTrendRouter.get('/trends/:woeid', async (req, res) => {
    CountryTrendsController(
        `https://api.twitter.com/1.1/trends/place.json?id=${req.params['woeid']}`,
        (result) => {
            res.send(result);
        }
    );
});

module.exports = CountryTrendRouter;