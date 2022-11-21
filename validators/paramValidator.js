const Joi = require('joi');

function validateSeriesId(itemID) {
    const schema = Joi.object({
        "seriesID": Joi.number().integer().positive().less(100000).required()
    });
    console.log(schema.validate(itemID))
    return schema.validate(itemID);
}

function validateFilmId(itemID) {
    const schema = Joi.object({
        "filmID": Joi.number().integer().positive().less(100000).required()
    });
    console.log(schema.validate(itemID))
    return schema.validate(itemID);
}

module.exports = { validateSeriesId, validateFilmId }