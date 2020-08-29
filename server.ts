import express from 'express'
import { GetTrendPlaces } from './services/TwitterAuthenticator'

const app = express()
var port = process.env.PORT || 8080
app.get('/', (req, res) => res.send(GetTrendPlaces))
app.listen(port)
