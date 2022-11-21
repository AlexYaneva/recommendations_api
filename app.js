const express = require('express'); 
const Joi = require("joi"); // returns a class
const films = require("./routes/films");
const series = require("./routes/series");
require('dotenv').config();

// add validation for the client input (filmID etc.)
// add error handling for all scenarios (i.e. send 404 back to the client if filmID is not min 4 chars etc.)
// this api is only for get req's - do i need to do something to disable post/put/delete?
// jwt for authentication

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.use('/films', films);

app.use("/series",  series);

app.listen(port, () => {
  console.log(`Recommendations API listening on port ${port}`)
})

