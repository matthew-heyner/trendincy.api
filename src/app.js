import { config } from 'dotenv';
import express from 'express';
import countryTrendRouter from './src/routers/country-trends';
import errorHandler from './src/middleware/errorHandler';


config();
const PORT = process.env.PORT || 8080;
const URI = process.env.URI || 'http://127.0.0.1';

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`listening on ${URI}:${PORT}`);
});

app.use('/trends/:woeid', countryTrendRouter);

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use(errorHandler);

export default app;