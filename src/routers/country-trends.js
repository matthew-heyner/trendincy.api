  
import { Router } from 'express';
import { TrendController } from 'trends'

const countryTrendRouter = Router();

countryTrendRouter.get('/trends/:woeid', async (req, res) => {
    await getTrendsByCountryId(
        `https://api.twitter.com/1.1/trends/place.json?id=${req.params['woeid']}`,
        (result) => {
            res.send(result);
        }
    );
});

export default countryTrendRouter;