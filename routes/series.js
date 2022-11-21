const express = require("express");
const fetch = require("node-fetch");
const path = require('path');
const { validatesSeriesId } = require('../validators/paramValidator.js')
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const router = express.Router()
const seriesPath = "https://api.themoviedb.org/3/tv/";
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
    res.json("Series recommendations. Use /seriesID to get recommendations for a specific show.")
});

router.get("/:seriesID", async (req, res) => {
    const { error } = validateSeriesId(req.params);
    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    try {
        const response = await fetch(`${seriesPath}${req.params.seriesID}${recommendationsPath}${apiKey}${language}&page=1`);
        const data = await response.json();
        // console.log(data);
        res.json(data);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;