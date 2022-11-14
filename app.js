const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;

let tmdbBaseUrl = "https://api.themoviedb.org/3";
let seriesPath = "/tv/";
let filmsPath = "/movie/";
let language = "&language=en-US";
let recommendationsPath = "/recommendations";

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/films/:filmid', (req, res) => {
  res.send([`Suggestions based on filmID ${req.params.seriesid} : [1,2,3]`])
})

app.get('/api/series/:seriesid', (req, res) => {
  res.send([`Suggestions based on seriesID ${req.params.seriesid} : [1,2,3]`])
})

app.listen(port, () => {
  console.log(`Recommendations API listening on port ${port}`)
})

