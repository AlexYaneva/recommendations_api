const express = require('express'); 
const films = require("./routes/films");
const series = require("./routes/series");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/films', films);

app.use("/series",  series);

app.listen(port, () => {
  console.log(`Recommendations API listening on port ${port}`)
})

