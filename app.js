const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/films/:filmid', (req, res) => {
  res.send(['Some Film'])
})

app.get('/api/series/:seriesid', (req, res) => {
  res.send(['Some Series'])
})

app.listen(port, () => {
  console.log(`Recommendations API listening on port ${port}`)
})

