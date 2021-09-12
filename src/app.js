require('dotenv').config();
const createError = require('http-errors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const express = require('express');
const CountryTrendRouter = require('./routers/country-trends');
const errorHandler = require('./middleware/errorHandler');

const PORT = process.env.PORT || 8080;
const URI = process.env.URI || 'http://127.0.0.1';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Health ping')
});
app.get('/trends/:woeid', CountryTrendRouter);

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`listening on ${URI}:${PORT}`);
});

module.exports = app;