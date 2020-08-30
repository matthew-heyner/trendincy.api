import express from 'express'
import { GetTrendPlaces, testing } from './services/TwitterAuthenticator'

const app = express()
var port = process.env.PORT || 8080

app.get('/', (req, res) => {
    console.log('testing GetTrendPlaces')
    console.log(GetTrendPlaces())
    //    var jsonRespons = GetTrendPlaces()
    //    console.log(res.json(jsonRespons))
})
app.listen(port)
