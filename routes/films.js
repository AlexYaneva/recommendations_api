const express = require("express");
const fetch = require("node-fetch");
const path = require('path');
const { validateFilmId } = require('../validators/paramValidator.js')
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const router = express.Router()
const filmsPath = "https://api.themoviedb.org/3/movie/";
const language = "&language=en-US";
const recommendationsPath = "/recommendations";
const apiKey = `?api_key=${process.env.API_KEY}`;

// custom middleware
router.use((req, res, next) => {
    console.log(`Request was received from ${req.ip}`)
    next()
  })
;

router.get("/", (req, res) => {
    res.json("Film recommendations. Use /film ID to get recommendations for a specific film.")
});

router.get("/:filmID", async (req, res) => {
    const { error } = validateFilmId(req.params);
    if(error) {
        res.status(400).json(error.details[0].message);
        return;
    }
    try {
        const response = await fetch(`${filmsPath}${req.params.filmID}${recommendationsPath}${apiKey}${language}&page=1`);
        const data = await response.json();
        if(data.success = 'false') {
            res.status(404).json(data.status_message);
            return;
        }
        res.json(data);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;